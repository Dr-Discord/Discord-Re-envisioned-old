/**
 * @file domNodes.ts
 * @author doggybootsy
 * @desc Simple way to share the nodes between the different parts of the code.
 * @license MIT
 * @version 1.0.0
 */

import { internal } from "./storage"

function getIframe(this:any):HTMLIFrameElement {
  if (this.iframe) return this.iframe
  const node = document.createElement("iframe")
  node.id = "dr-iframe"
  document.body.appendChild(node)
  return this.iframe = node
}

function getToastContainer(this:any):HTMLDivElement {
  if (this.toast) return this.toast
  const node = document.createElement("div")
  node.id = "dr-toast-container"
  document.body.appendChild(node)
  return this.toast = node
}

function getCCss(this:any):HTMLStyleElement {
  if (this.CCss) return this.CCss
  const node = document.createElement("style")
  node.id = "dr-customcss"
  node.innerHTML = internal.get("customCSS") ?? ""
  document.body.appendChild(node)
  return this.CCss = node
}

export default {
  getIframe, getToastContainer, getCCss
}