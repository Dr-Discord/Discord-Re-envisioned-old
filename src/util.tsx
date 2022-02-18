import { React } from "./react"
import getModule from "./getModule"

export const sleep = (time:number):Promise<void> => new Promise(resolve => setTimeout(resolve, time))

export async function waitUntil(condition:Function):Promise<any> {
  let item:any|null
  while (!(item = condition())) await sleep(1)
  return item
}

export function getReactInstance(element:Element) {
  if (!element) return
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
export function prompt(title:string, defaultValue:string):Promise<string|null> {
  const TextInput = getModule("TextInput").default
  const ConfirmationModal = getModule("ConfirmModal").default
  const Button = getModule(["ButtonColors"])
  const { Messages } = getModule(["Messages"], false)[1]
  const { openModal } = getModule(["openModal", "openModalLazy"])

  let toReturn = ""

  return new Promise((resolve) => {
    openModal((props:any) => {
      if (props.transitionState === 3) resolve(null)
      return React.createElement(ConfirmationModal, Object.assign({
        header: title,
        confirmButtonColor: Button.ButtonColors.BRAND,
        confirmText: Messages.OKAY,
        cancelText: Messages.CANCEL,
        onConfirm: () => resolve(toReturn),
        onCancel: () => resolve(null),
        children: React.createElement(React.memo(() => {
          const [value, setValue] = React.useState(defaultValue)
          return React.createElement(TextInput, {
            value: value,
            onChange: (value:string) => {
              setValue(value)
              toReturn = value
            }
          })
        }))
      }, props))
    })
  })
}

interface findInTreeOpts {
  ignore?: Array<string>
  walkable?: null|Array<string>
}
export function findInTree(tree:any, filter:Function, opts:findInTreeOpts = {}):any {
  const { walkable = null, ignore = [] } = opts
  if (!tree || typeof tree !== "object") return null
  if (typeof filter === "string") {
    if (tree.hasOwnProperty(filter)) return tree[filter]
    return;
  } else if (filter(tree)) return tree
  let returnValue = null
  if (Array.isArray(tree)) {
    for (const value of tree) {
      returnValue = findInTree(value, filter, { walkable, ignore })
      if (returnValue) return returnValue
    }
  } 
  else {
    const walkables = !walkable ? Object.keys(tree) : walkable
    for (const key of walkables) {
      if (!tree.hasOwnProperty(key) || ignore.includes(key)) continue
      returnValue = findInTree(tree[key], filter, { walkable, ignore })
      if (returnValue) return returnValue
    }
  }
  return returnValue
}
export function findInReactTree(tree:any, searchFilter:Function):any {
  return findInTree(tree, searchFilter, {
    walkable: [ "props", "children", "child", "sibling" ]
  })
}

export function restart(full:boolean) {
  if (window.__DR__BACKEND__.app && full) return window.__DR__BACKEND__.require("electron").ipcRenderer.send("DR_FULL_RESTART")
  return location.reload()
}