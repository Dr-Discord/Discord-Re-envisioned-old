import getModule from "./getModule"

const DrHead = document.createElement("dr-styles")
document.head.appendChild(DrHead)

interface eles { [x:string]:Element }
const Dr_ele:eles = {
  internal: document.createElement("dr-internal"),
  plugin: document.createElement("dr-plugin"),
  theme: document.createElement("dr-theme")
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
    const style = document.querySelector(`style[dr-${type}-css="${id}"]`)
    if (style) style.innerHTML = css
  }
}
function uninject(type:string) {
  return (id:string) => {
    const style = document.querySelector(`style[dr-${type}-css="${id}"]`)
    if (style) style.remove()
  }
}
function getClasses(css:string):string {
  const matches:Array<string>|null = css.match(/#{(("[A-z]+")((, )|)){1,}}/g)
  if (!matches) return css
  for (const styl of matches) {
    const arr = JSON.parse(styl.replace("#{", "[").replace("}", "]"))
    css = css.replace(styl, `.${getModule(arr, true)?.[arr[0]].replaceAll(" ", ".")}`)
  }
  return css
}

// Simple method
export const pluginStyling = {
  inject: inject("plugin"),
  update: update("plugin"),
  uninject: uninject("plugin"),
  getClasses
}
export const themeStyling = {
  inject: inject("theme"),
  update: update("theme"),
  uninject: uninject("theme"),
  getClasses
}
export const internalStyling = {
  inject: inject("internal"),
  update: update("internal"),
  uninject: uninject("internal"),
  getClasses
}