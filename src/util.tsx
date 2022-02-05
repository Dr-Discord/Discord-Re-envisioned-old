import React from "./react"
import getModule from "./getModule"

export const sleep = (time:number) => new Promise(resolve => setTimeout(resolve, time))

export async function waitUntil(condition:Function):Promise<any> {
  let item:any|null
  while (!(item = condition())) await sleep(1)
  return item
}

export function getReactInstance(element:Element) {
  if (element.__reactInternalInstance$) return element.__reactInternalInstance$
  // @ts-expect-error
  return element[Object.keys(element).find(k => k.startsWith("__reactInternalInstance") || k.startsWith("__reactFiber"))] || null
}
export function getOwnerInstance(element:Element) {
  for (let RI = getReactInstance(element); RI; RI = RI.return) {
    const sn = RI.stateNode
    if (typeof sn?.forceUpdate === "function") return sn
  }
}

interface showConfirmationModalProps {
  onConfirm?:() => void
  onCancel?:() => void
  confirmText?:string
  cancelText?:string
  danger?:boolean
  key?:string|undefined
}

export function showConfirmationModal (title:string|any, content:string|any|Array<string|any>, opts:showConfirmationModalProps) {
  const Markdown = getModule((m: { default: { displayName: string; rules: any } }) => m.default?.displayName === "Markdown" && m.default.rules).default
  const ConfirmationModal = getModule("ConfirmModal").default
  const Button = getModule(["ButtonColors"])
  const { openModal } = getModule(["openModal", "openModalLazy"])
  const Messages = getModule(["Messages"], false)[1].Messages
  
  const emptyFunction = () => {}
  const { 
    onConfirm = emptyFunction, 
    onCancel = emptyFunction, 
    confirmText = Messages.OKAY, 
    cancelText = Messages.CANCEL, 
    danger = false
  } = opts
  if (!Array.isArray(content)) content = [content]
  content = content.map((c:any) => typeof(c) === "string" ? <Markdown>{c}</Markdown> : c)
  openModal((props:any) => (
    <ConfirmationModal
      {...props}
      header={title}
      content={content}
      onConfirm={onConfirm}
      onCancel={onCancel}
      confirmText={confirmText}
      cancelText={cancelText}
      confirmButtonColor={danger ? Button.ButtonColors.RED : Button.ButtonColors.BRAND}
    >{content}</ConfirmationModal>
  ))
}