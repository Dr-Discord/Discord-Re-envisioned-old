import { React } from "./react"
import getModule from "./getModule"
import react from "react"

export const sleep = (time:number):Promise<void> => new Promise(resolve => setTimeout(resolve, time))

export async function waitUntil(condition:Function):Promise<any> {
  let item:any|null
  while (!(item = condition())) await sleep(1)
  return item
}

export function getReactInstance(element:Element) {
  if (!element) return
  if (element.__reactInternalInstance$) return element.__reactInternalInstance$
  return element[Object.keys(element).find(k => k.startsWith("__reactInternalInstance") || k.startsWith("__reactFiber")) as keyof typeof element] || null
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

function updateContent(content:ReactString|Array<ReactString>):Array<react.ReactElement> {
  const Markdown = getModule((m: { default: { displayName: string; rules: any } }) => m.default?.displayName === "Markdown" && m.default.rules).default

  if (!Array.isArray(content)) content = [content]
  return content = content.map((c:any) => typeof(c) === "string" ? <Markdown>{c}</Markdown> : c)
}
export function showConfirmationModal (title:ReactString, content:ReactString|Array<ReactString>, opts:showConfirmationModalProps) {
  const ConfirmationModal = getModule("ConfirmModal").default
  const Button = getModule(["ButtonColors"])
  const { openModal } = getModule(["openModal", "openModalLazy"])
  const { Messages } = getModule(["Messages"], false)[1]
  
  const emptyFunction = () => {}
  const { 
    onConfirm = emptyFunction, 
    onCancel = emptyFunction, 
    confirmText = Messages.OKAY, 
    cancelText = Messages.CANCEL, 
    danger = false
  } = opts
  content = updateContent(content)
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

export function alert(title:ReactString, content:ReactString|Array<ReactString>, options:alertOpts = {}):void {
  const { openModal } = getModule(["openModal", "openModalLazy"])
  const Alert = getModule("Alert").default
  content = updateContent(content)
  
  openModal((props:any) => (
    <Alert 
      {...props} 
      title={title} 
      body={...(content as Array<ReactString>)} 
      onConfirm={options.onConfirm}
      confirmText={options.confirmText}
      minorText={options.smallText}
      onConfirmSecondary={options.smallTextClose}
    />
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
      return <ConfirmationModal
        header={title}
        confirmButtonColor={Button.ButtonColors.BRAND}
        confirmText={Messages.OKAY}
        cancelText={Messages.CANCEL}
        onConfirm={() => resolve(toReturn)}
        onCancel={() => resolve(null)}
        {...props}
      >
        {React.createElement(() => {
          const [value, setValue] = React.useState(defaultValue)
          return <TextInput 
            value={value}
            onChange={(value:string) => {
              setValue(value)
              toReturn = value
            }}
          />
        })}
      </ConfirmationModal>
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

export function restart(this:any, full:boolean) {
  if (window.__DR_BACKEND__.app && full) {
    if (!window.__DR_BACKEND__.restart()) return this.alert("Restart Failed", "Reinstall using the installer.")
    return window.__DR_BACKEND__.restart()
  }
  return location.reload()
}

export function openSetting(this:any) {
  const { openModal } = getModule(["openModal", "openModalLazy"])
  const { ModalRoot, ModalSize, ModalHeader, ModalContent, ModalCloseButton } = getModule(["ModalRoot", "ModalSize"])
  const Flex = getModule("Flex").default
  const FormTitle = getModule("FormTitle").default
  const Text = getModule("Text").default

  function needsCreated(ele:any):boolean {
    if (typeof ele === "string" || typeof ele.type === "string") return false
    return true
  }

  return (title:string, lowerTitle:string, Content:any) => {
    Content = needsCreated(Content) ? <Content /> : Content
    openModal((props:any) => {
      return <ModalRoot {...props} size={ModalSize.MEDIUM}>
        <ModalHeader separator={false}>
          <Flex>
            <Flex.Child>
              <FormTitle tag={FormTitle.Tags.H4}>{title}</FormTitle>
              <Text>{lowerTitle}</Text>
            </Flex.Child>
            <Flex.Child>
              <ModalCloseButton onClick={props.onClose}/>
            </Flex.Child>
          </Flex>
        </ModalHeader>
        <ModalContent>{Content}</ModalContent>
      </ModalRoot>
    })
  }
}

export function anonymous(callback:Function, ...args:any[]) { return callback(...args) }

export function copyText(text:string) {
  const copyModule = getModule(["copy", "SUPPORTS_COPY"])
  // If we cant copy try 2 ways
  if (!copyModule.SUPPORTS_COPY) navigator.clipboard.writeText(text).catch(() => {
    // deprecated dom method
    const el = Object.assign(document.createElement("textarea"), {
      value: text,
      readonly: true,
      style: { position: "absolute", left: "-9999px" }
    })
    document.body.appendChild(el)
    el.select()
    document.execCommand("copy")
    document.body.removeChild(el)
  })
  else copyModule.copy(text)
}