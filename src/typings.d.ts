interface patcherOpts {
  method?:"before"|"after"|"instead"
  id?:string|symbol
}
interface showConfirmationModalOpts {
  onConfirm?:()=>void
  onCancel?:()=>void
  confirmText?:string
  cancelText?:string
  danger?:boolean
  key?:string|undefined
}
interface toastOpts {
  type?:"success"|"error"|"info"|"warning"
  duration?: number
  autoClose?: boolean
  closeButton?: boolean
}

interface addonApi {
  get: (name:string) => any
  getAll: () => Array<any>
  isEnabled: (name:string) => Boolean
  disable: (name:string) => void
  enable: (name:string) => void
  toggle: (name:string) => void
}

interface DrApi {
  [x:string]:any
  getModule: (filter:Function|string|number|Array<string>, first?:boolean) => any|null
  asyncGetModule: (filter:Function|string|number|Array<string>) => Promise<any>
  patcher: {
    unpatchAll: (id:string|symbol) => void
    patch: (id:string|symbol, module:any, functionToPatch:string, callback:Function, opts?:patcherOpts) => Function
    before: (id:string|symbol, module:any, functionToPatch:string, callback:Function, opts?:patcherOpts) => Function
    instead: (id:string|symbol, module:any, functionToPatch:string, callback:Function, opts?:patcherOpts) => Function
    after: (id:string|symbol, module, functionToPatch:string, callback:Function, opts?:patcherOpts) => Function
    quick: (module:any, functionToPatch:string, callback:Function, opts?:patcherOpts) => Function
    patches: {}
  }
  React: typeof import("react"),
  ReactDOM: typeof import("react-dom"),
  styling: {
    inject: (id:string, css:string) => void
    update: (id:string, css:string) => void
    uninject: (id:string) => void
    getClasses: (css:string) => string
  }
  Plugins:addonApi
  Themes:addonApi
  showConfirmationModal: (title:string|any, content:string|any|Array<string|any>, opts:showConfirmationModalProps) => void
  toast: (text:string, opts:toastOpts) => Node
  storage: {
    get: (plugin:string, key:string) => any
    set: (plugin:string, key:string, data:any) => void
  }
  getOwnerInstance: (element:HTMLElement) => any
  getReactInstance: (element:HTMLElement) => any
}

interface localStorage {
  getItem: (key:string) => string|null
  setItem: (key:string, value:string) => void
  removeItem: (key:string) => void
  [x:string]: string|Function
}
interface webpackChunkdiscord_app {
  [x:string]:number|Function
  push: (chunk:Array<any>) => void
  webpackExports?:any
  pop: () => Array<any>
}

interface Window {
  DrApi:DrApi
  webpackChunkdiscord_app:webpackChunkdiscord_app
  localStorage?:localStorage|null
  [x:string]:any
}

declare const DrApi:DrApi
declare const webpackChunkdiscord_app:webpackChunkdiscord_app
declare const localStorage:localStorage|null

interface Element {
  __reactInternalInstance$?:any
  __reactFiber$?:any
}