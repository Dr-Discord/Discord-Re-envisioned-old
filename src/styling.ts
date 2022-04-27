import { internal } from "./storage"

const DrHead = document.createElement("dr-styles")
document.head.appendChild(DrHead)

interface eles { [x:string]:Element }

const Dr_ele:eles = {
  internal: document.createElement("dr-internal"),
  plugin: document.createElement("dr-plugin"),
  theme: document.createElement("dr-theme"),
  customcss: Object.assign(document.createElement("style"), {
    id: "dr-customcss",
    innerHTML: internal.get("customCSS") ?? ""
  }),
  csssettings: Object.assign(document.createElement("style"), {
    id: "dr-csssettings"
  })
}
for (const key of Object.keys(Dr_ele)) DrHead.appendChild(Dr_ele[key])

function inject(type:string) {
  return (id:string, css:string) => {
    const style = document.createElement("style")
    style.setAttribute(`dr-${type}-css`, id)
    style.innerHTML = css
    Dr_ele[type].appendChild(style)
  }
}
function update(type:string) {
  return (id:string, css:string) => {
    const style = document.querySelector(`style[dr-${type}-css=${JSON.stringify(id)}]`)
    if (style) style.innerHTML = css
    else inject(type)(id, css)
  }
}
function uninject(type:string) {
  return (id:string) => {
    const style = document.querySelector(`style[dr-${type}-css=${JSON.stringify(id)}]`)
    if (style) style.remove()
  }
}

// Simple method
export const pluginStyling = {
  inject: inject("plugin"),
  update: update("plugin"),
  uninject: uninject("plugin")
}
export const themeStyling = {
  inject: inject("theme"),
  update: update("theme"),
  uninject: uninject("theme")
}
export const internalStyling = {
  inject: inject("internal"),
  update: update("internal"),
  uninject: uninject("internal")
}

export function updateCustomCSS(css:string) {
  Dr_ele.customcss.innerHTML = css
}