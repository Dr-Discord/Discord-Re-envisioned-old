import { waitUntil } from "./util"

const webpackExports = !webpackChunkdiscord_app.webpackExports ? webpackChunkdiscord_app.push([
  [Symbol("Discord Re-envisioned")], {}, (exp:any) => {
    webpackChunkdiscord_app.pop()
    return exp
  }
]) : webpackChunkdiscord_app.webpackExports
webpackChunkdiscord_app.webpackExports = webpackExports

function getModule(filter:Function|string|number|Array<string>, first = true):any|Array<any>|null {
  let modules = []
  function byPropsAll(...props: string[]) {
    const norm:Array<any> = getModule((m: { [x: string]: any }) => props.every((prop) => typeof m[prop] !== "undefined"), false)
    let def = []
    for (const module of getModule((m: { default: { [x: string]: any } }) => props.every((prop) => typeof m.default?.[prop] !== "undefined"), false)) 
      def.push(module.default)
    return [...norm, ...def]
  }
  function byDisplayName(displayName: string) {
    const norm:Array<any> = getModule((m: { default: { displayName: any } }) => m.default?.displayName === displayName, false)
    const type:Array<any> = getModule((m: { default: { type: { displayName: any } } }) => m.default?.type?.displayName === displayName, false)
    const rend:Array<any> = getModule((m: { default: { type: { render: { displayName: any } } } }) => m.default?.type?.render?.displayName === displayName, false)
    return [...norm, ...type, ...rend]
  }
  if (Array.isArray(filter)) modules = byPropsAll(...filter)
  else if (typeof filter === "string") modules = byDisplayName(filter)
  else if (typeof filter === "number") modules = [webpackExports.c[filter]]
  else if (typeof filter === "function") {
      for(let ite in webpackExports.c) {
      if(!Object.hasOwnProperty.call(webpackExports.c, ite)) return
      let ele = webpackExports.c[ite].exports
      if(!ele) continue
      if(filter(ele)) modules.push(ele)
    }
  }
  if (first) return modules[0]
  return modules
}

export default getModule

export async function asyncGetModule(filter:Function|string|number|Array<string>):Promise<any> {
  return await new Promise(async (resolve) => await waitUntil(() => {
    if (!getModule(filter)) return
    resolve(getModule(filter))
  }))
}