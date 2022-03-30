import { internalStyling } from "./styling"

internalStyling.inject("toasts", `.dr-toast { display: inline-flex; box-sizing: border-box; border-radius: 3px; color: var(--text-normal); font-size: 16px; background-color: var(--background-floating); vertical-align: bottom; box-shadow: var(--elevation-low); margin: 0 10px 0 auto; flex-grow: 1; opacity: 1; transition: opacity 0.3s ease-in-out; width: fit-content }
.dr-toast:is(.adding, .removing) { opacity: 0 }
.dr-toast:not(:last-child) {  margin-bottom: 5px }
.dr-toast-container { position: absolute; bottom: 0; right: 0; display: flex; flex-direction: column; align-items: flex-end; max-width: 100%; z-index: 999; overflow: hidden }
.dr-toast-wrapper { overflow: hidden; height: auto; margin: 0; border-radius: 3px; display: flex; flex-direction: column; min-width: auto; transition-property: all; transition-timing-function: ease; transition-duration: 0.5s }
.dr-toast-type { display: flex; justify-content: center; align-items: center; min-width: 18px; margin-right: 5px; border-radius: 3px 0 0 3px; background-color: transparent; position: relative }
.dr-toast-type::after { content: ""; position: absolute; background-color: var(--background-floating); width: 6px; border-radius: 6px; height: 100%; right: -3px }
.dr-toast-type.success { background-color: var(--info-positive-foreground) }
.dr-toast-type.error { background-color: var(--info-danger-foreground) }
.dr-toast-type.info { background-color: var(--brand-experiment) }
.dr-toast-type.warning { background-color: var(--info-warning-foreground) }
.dr-toast-message { display: inline-block; user-select: text }
.dr-toast-message-wrapper { flex: 1; padding: 12px 6px 12px 3px; position: relative }
.dr-toast-close { cursor: pointer; display: flex; align-items: center; padding: 2px 10px 0; user-select: none; color: var(--interactive-normal); position: relative; font-size: 14px }
.dr-toast-close:hover { color: var(--interactive-hover); background-color: var(--background-modifier-hover) }`)

// container
insure()
let toastWrapper:any = null
function insure() {
  if (!!toastWrapper) return
  const toastContainer = document.createElement("div")
  toastContainer.className = "dr-toast-container"
  document.body.appendChild(toastContainer)
  toastWrapper = document.createElement("div")
  toastWrapper.className = "dr-toast-wrapper"
  toastWrapper.style.marginBottom = "5px"
  toastContainer.appendChild(toastWrapper)
}

function Timer(callback:Function, delay:number):any {
  let timerId:any, start:any, remaining = delay
  const pause = function() {
    window.clearTimeout(timerId)
    timerId = null
    remaining -= Date.now() - start
  }
  const resume = function() {
    if (timerId) return
    start = Date.now()
    timerId = window.setTimeout(callback, remaining)
  }
  resume()
  return { pause, resume }
}

interface ToastOpts {
  type?: "success" | "error" | "info" | "warning"
  duration?: number
  autoClose?: boolean
  closeButton?: boolean
}
function createToast(text:string, opts:ToastOpts):Node {
  insure()
  const { type = "success", duration = 3000, autoClose = true, closeButton = true } = opts
  const toast = document.createElement("div")
  toast.className = "dr-toast adding"
  setTimeout(() => toast.classList.remove("adding"), 300)
  toastWrapper.appendChild(toast)
  const toastType = document.createElement("span")
  toastType.className = `dr-toast-type ${type.toLowerCase()}`
  toast.appendChild(toastType)
  const toastMessageWrapper = document.createElement("div")
  toastMessageWrapper.className = "dr-toast-message-wrapper"
  toast.appendChild(toastMessageWrapper)
  const toastMessage = document.createElement("span")
  toastMessage.className = "dr-toast-message"
  toastMessage.innerText = text
  toastMessageWrapper.appendChild(toastMessage)
  function removeToast():void {
    toast.classList.add("removing")
    setTimeout(() => toast.remove(), 300)
  }
  if (closeButton) {
    const toastClose = document.createElement("span") 
    toastClose.className = "dr-toast-close"
    toastClose.innerText = "✕"
    toastClose.onclick = removeToast
    toast.appendChild(toastClose)
  }
  if (autoClose) {
    const dur = Timer(() => removeToast(), duration)
    toast.onmouseenter = dur.pause
    toast.onmouseleave = dur.resume
  }
  return toast
}

export default createToast