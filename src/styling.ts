/**
 * @file styling.ts
 * @author doggybootsy
 * @desc Internal, theme, plugin, and custom CSS injection.
 * @license MIT
 * @version 1.0.0
 */

import domNodes from "./domNodes"

const DrHead = document.createElement("dr-styles")
document.head.appendChild(DrHead)

interface eles { [x:string]:Element }
const Dr_ele:eles = {
  internal: document.createElement("dr-internal"),
  plugin: document.createElement("dr-plugin"),
  theme: document.createElement("dr-theme"),
  customcss: domNodes.getCCss()
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

export function customcss(css:string) { Dr_ele.customcss.innerHTML = css }