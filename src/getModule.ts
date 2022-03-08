import patcher from "./patcher"

const webpackExports = !webpackChunkdiscord_app.webpackExports ? webpackChunkdiscord_app.push([
  [Symbol("Discord Re-envisioned")], {}, (exp:any) => {
    webpackChunkdiscord_app.pop()
    webpackChunkdiscord_app.webpackExports = exp
    return exp
  }
]) : webpackChunkdiscord_app.webpackExports

function find(filter:Function):Array<any> {
  let modules = []
  for(let ite in webpackExports.c) {
    if(!Object.hasOwnProperty.call(webpackExports.c, ite)) continue
    let ele = webpackExports.c[ite].exports
    if(!ele) continue
    if(filter(ele)) modules.push(ele)
  }
  return modules
}

export default function getModule(filter:Function|string|number|Array<string>, first = true):any|Array<any>|null {
  let modules = []
  function byPropsAll(...props: string[]) {
    const norm:Array<any> = find((m: { [x: string]: any }) => props.every((prop) => typeof m[prop] !== "undefined"))
    const def = find((m: { default: { [x: string]: any } }) => props.every((prop) => typeof m.default?.[prop] !== "undefined")).map(m => m.default)
    return [...norm, ...def]
  }
  function byDisplayName(displayName: string) {
    const norm:Array<any> = find((m: { default: { displayName: any } }) => m.default?.displayName === displayName)
    const type:Array<any> = find((m: { default: { type: { displayName: any } } }) => m.default?.type?.displayName === displayName)
    const rend:Array<any> = find((m: { default: { type: { render: { displayName: any } } } }) => m.default?.type?.render?.displayName === displayName)
    return [...norm, ...type, ...rend]
  }
  if (Array.isArray(filter)) modules = byPropsAll(...filter)
  else if (typeof filter === "string") modules = byDisplayName(filter)
  else if (typeof filter === "number") modules = [webpackExports.c[filter]]
  else if (typeof filter === "function") modules = find(filter)
  if (first) return modules[0]
  return modules
}

// Off of Zlibs/BDs async find 
// Idk how it really works
const listeners = new Set<Function>()

let __ORIGINAL_PUSH__:Function = webpackChunkdiscord_app.push
function handlePush(chunk:any) {
  const [, modules] = chunk
  for (const id in modules) {
    const originalModule = modules[id]
    modules[id] = (module:any, exports:any, require:any) => {
      Reflect.apply(originalModule, null, [module, exports, require]);
      for (const ite of [...listeners]) ite(exports)
    }
    Object.assign(modules[id], originalModule, {
      toString: () => originalModule.toString()
    })
  }
  return __ORIGINAL_PUSH__.apply(window.webpackChunkdiscord_app, [chunk])
}
Object.defineProperty(webpackChunkdiscord_app, "push", {
  configurable: true,
  get: () => handlePush,
  set: (newPush) => {
    __ORIGINAL_PUSH__ = newPush
    Object.defineProperty(webpackChunkdiscord_app, "push", {
      value: handlePush,
      configurable: true,
      writable: true
    })
  }
})
export function asyncGetModule(filter:Function):Promise<any> {
  return new Promise((resolve, reject) => {
    if (typeof filter !== "function") return reject(`Filter has to be a function, cannot be '${typeof filter}'`)
    const cached = DrApi.getModule(filter)
    if (cached) return resolve(cached)
  
    function listener(m:any) {
      const directMatch = filter(m)
      if (!directMatch) return
      listeners.delete(listener)
      resolve(m)
    }
    listeners.add(listener)
  })
}