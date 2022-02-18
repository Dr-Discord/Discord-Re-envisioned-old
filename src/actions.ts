interface Actions { [x:string|symbol]:Array<{ name: string|symbol, callback: Function }> }
export const Actions:Actions = {}
export function register(this:any, name:string|symbol, callback:Function):Function {
  if (!Actions[name]) Actions[name] = []
  Actions[name].push({ name, callback })
  return () => this.unregister(name)
}
export function unregister(name:string|symbol):void { 
  if (!Actions[name]) return
  Actions[name] = Actions[name].filter(x => x.name !== name)
}
export function dispatch(name:string, ...args:any[]):Array<unknown>|undefined {
  let returnValue:Array<unknown> = []
  if (!Actions[name]) return undefined
  for (const { callback } of Actions[name]) returnValue.push(callback(...args))
  return returnValue.length ? returnValue : undefined
}