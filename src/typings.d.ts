interface patcherOpts {
  method?:"before"|"after"|"instead"
  id?:string|symbol
  index?:number
}
interface showConfirmationModalOpts {
  onConfirm?:()=>void
  onCancel?:()=>void
  confirmText?:string
  cancelText?:string
  danger?:boolean
  key?:string|undefined
}
interface alertOpts {
  confirmText?: String
  smallText?: String,
  smallTextClose?: Function
  onConfirm?: Function
  cancelText?: String
  onCancel?: Function
}
interface toastOpts {
  type?:"success"|"error"|"info"|"warning"
  duration?: number
  autoClose?: boolean
  closeButton?: boolean
}

type setImmediate = (callback:()=>void)=>number
const setImmediate:setImmediate

type React = typeof import("react")
type ReactDOM = typeof import("react-dom")
// Simple way for both 'string' and 'React.ReactElement' be one type
type ReactString = string|React.ReactElement

interface addonApi {
  get: (name:string) => any
  getAll: () => Array<any>
  isEnabled: (name:string) => Boolean
  disable: (name:string) => void
  enable: (name:string) => void
  toggle: (name:string) => void
  install: (url:string) => void
}

interface DrApi {
  getModule: (filter:Function|string|number|Array<string>, first?:boolean) => any|null
  asyncGetModule: (filter:Function) => Promise<any>
  findInReactTree: (tree:any, searchFilter:Function) => any
  findInTree: (tree:any, filter:Function, opts:findInTreeOpts = {}) => any
  patcher: {
    unpatchAll: (id:string|symbol) => void
    patch: (id:string|symbol, module:any, functionToPatch:string, callback:Function, opts?:patcherOpts) => Function
    before: (id:string|symbol, module:any, functionToPatch:string, callback:Function, opts?:patcherOpts) => Function
    instead: (id:string|symbol, module:any, functionToPatch:string, callback:Function, opts?:patcherOpts) => Function
    after: (id:string|symbol, module, functionToPatch:string, callback:Function, opts?:patcherOpts) => Function
    quick: (module:any, functionToPatch:string, callback:Function, opts?:patcherOpts) => Function
    create: (id:string|symbol) => PatcherOf
    patches: {}
  }
  React: React,
  ReactDOM: ReactDOM,
  styling: {
    inject: (id:string, css:string) => void
    update: (id:string, css:string) => void
    uninject: (id:string) => void
  }
  Plugins:addonApi
  Themes:addonApi
  showConfirmationModal: (title:ReactString, content:ReactString|Array<ReactString>, opts:showConfirmationModalProps) => void
  prompt: (title:string, defaultValue:string) => Promise<string|null>
  alert: (title:ReactString, content:ReactString|Array<ReactString>, options:alertOpts) => void
  showToast: (text:string, opts:toastOpts) => Node
  storage: {
    get: (plugin:string, key:string) => any
    set: (plugin:string, key:string, data:any) => void
  }
  getInstance: {
    owner: (element:Element) => any
    react: (element:Element) => any
  }
}

interface localStorage {
  getItem: (key:string) => string|null
  setItem: (key:string, value:string) => void
  removeItem: (key:string) => void
  [x:string]: string|Function
}
interface webpackChunkdiscord_app {
  [x:string]:any
  push: (chunk:Array<any>) => void
  webpackExports?:any
  pop: () => Array<any>
}

interface Window {
  0: Window
  DrApi:DrApi
  webpackChunkdiscord_app:webpackChunkdiscord_app
  localStorage?:localStorage|null
  __DR_BACKEND__: {
    [x:string]:any
  }
  [x:string]:any
  setImmediate:setImmediate
}

declare const DrApi:DrApi
declare const webpackChunkdiscord_app:webpackChunkdiscord_app
declare const localStorage:localStorage|null

interface Element {
  __reactInternalInstance$?:any
  __reactFiber$?:any
  _reactInternals?:any
  click:()=>void
  nonce?:string
  style:CSSStyleDeclaration
}

interface tooltipProps {
  "aria-label":string
  onBlur:()=>void
  onClick:(ReactOnClickEvent)=>void
  onContextMenu:()=>void
  onFocus:()=>void
  onMouseEnter:()=>void
  onMouseLeave:()=>void
}

interface SymbolConstructor {
  drPatcher: { patch: Symbol, quick: Symbol }
}