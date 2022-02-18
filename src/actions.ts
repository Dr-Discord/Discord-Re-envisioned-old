import patcher from "./patcher"

const actionsSymbol = Symbol("DrApi.actions")

export const Actions:{ [x:string|symbol]:Function } = {}

export function register(name:string, callback:Function):Function {
  Actions[name] = callback
  return () => unregister(name)
}
export function unregister(name:string):void { 
  if (!Actions[name]) return
  delete Actions[name]
}

const _Actions:any = []

export function subscribe(name:string, callback:Function):Function {
  _Actions.push({ callback, undo: patcher.after(actionsSymbol, Actions, name, callback) })
  return () => unsubscibe(callback)
}
export function unsubscibe(callback:Function):void { 
  _Actions.find(({ callback:_callback }:any) => _callback === callback)?.undo?.()
}

export function dispatch(name:string, ...args:any[]):any {
  const action = Actions[name]
  if (!action) return
  return action(...args)
}