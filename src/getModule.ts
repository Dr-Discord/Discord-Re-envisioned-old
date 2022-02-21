import { waitUntil } from "./util"

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

export async function asyncGetModule(filter:Function|string|number|Array<string>):Promise<any> {
  return await new Promise(async (resolve) => await waitUntil(() => {
    if (!getModule(filter)) return
    resolve(getModule(filter))
  }))
}