const Patch_Symbol = Symbol("DrApi.patch")
const Quick_Symbol = Symbol("DrApi.patch.quick")
const Internal_Symbol = Symbol("DrInternal")
const ALLpatches:any = {}

function isClass(func:any):boolean {
  if(!(func && func.constructor === Function) || func.prototype === undefined) return false
  if(Function.prototype === Object.getPrototypeOf(func)) return Object.getOwnPropertyNames(func.prototype).length > 1
  return true
}
// symple way to change the toString to the original
function setToString(obj:any, old:any) {
  Object.defineProperty(obj, "toString", {
    value: () => old.toString(),
    writable: true,
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(obj.toString, "toString", {
    value: () => old.toString.toString(),
    writable: true,
    enumerable: false,
    configurable: true
  })
}

function patch(patchName:string|symbol, moduleToPatch:any, functionToPatch:string, callback:Function, opts:patcherOpts) {
  let { method = "after", id, index = 0 } = opts
  let originalFunction = moduleToPatch[functionToPatch]
  if (!originalFunction) {
    moduleToPatch[functionToPatch] = () => {}
    originalFunction = moduleToPatch[functionToPatch]
  }
  // @ts-expect-error
  method = method.toLowerCase()
  if (!(method === "before" || method === "after" || method === "instead")) throw new Error(`'${method}' is a invalid patch type`)
  let patches = moduleToPatch?.[functionToPatch]?.[Patch_Symbol]?.patches ?? { before: [], after: [], instead: [] }
  let CallbackSymbol = Symbol()
  let patchInfo = { unpatch, patchName: id ?? patchName, moduleToPatch, functionToPatch, callback, method, Symbol: CallbackSymbol }
  patches[method].splice(index, 0, Object.assign(callback, { unpatch, Symbol: CallbackSymbol }))
  let DidUnpatch = false
  function unpatch() {
    if (DidUnpatch) return
    DidUnpatch = true
    let found = patches[method].find((p: { Symbol: symbol }) => p.Symbol === patchInfo.Symbol)
    let index = patches[method].indexOf(found)
    patches[method].splice(index, 1)
    found = ALLpatches[patchName].find((p: { Symbol: symbol }) => p.Symbol === patchInfo.Symbol)
    index = ALLpatches[patchName].indexOf(found)
    ALLpatches[patchName].splice(index, 1)
    if (!ALLpatches[patchName].length) delete ALLpatches[patchName]
  }
  if (!moduleToPatch[functionToPatch][Patch_Symbol]) {
    if (isClass(originalFunction)) moduleToPatch[functionToPatch] = class extends originalFunction {
      constructor() {
        if (false) super()
        const that = moduleToPatch[functionToPatch]
        for (let patch = Object.keys(patches.before).length; patch > 0; patch--) patches.before[patch - 1]([...arguments], that)
        let insteadFunction:any = () => new originalFunction(arguments)
        for (let patch = Object.keys(patches.instead).length; patch > 0; patch--) insteadFunction = patches.instead[patch - 1]([...arguments], insteadFunction, that) ?? insteadFunction
        let res = Reflect.apply(insteadFunction, that, arguments) 
        for (let patch = Object.keys(patches.after).length; patch > 0; patch--) patches.after[patch - 1]([...arguments], res, that)
        return res
      }
    }
    else moduleToPatch[functionToPatch] = function() {
      for (let patch = Object.keys(patches.before).length; patch > 0; patch--) patches.before[patch - 1]()
      let insteadFunction = originalFunction
      for (let patch = Object.keys(patches.instead).length; patch > 0; patch--) insteadFunction = patches.instead[patch - 1]([...arguments], insteadFunction, this) ?? insteadFunction
      let res = Reflect.apply(insteadFunction, this, arguments)
      for (let patch = Object.keys(patches.after).length; patch > 0; patch--) patches.after[patch - 1]([...arguments], res, this)
      return res
    }
    moduleToPatch[functionToPatch][Patch_Symbol] = {
      original: originalFunction,
      module: moduleToPatch,
      function: functionToPatch,
      patches, unpatchAll: () => {
        for (let patch = Object.keys(patches.before).length; patch > 0; patch--) patches.before[patch - 1].unpatch()
        for (let patch = Object.keys(patches.instead).length; patch > 0; patch--) patches.instead[patch - 1].unpatch()
        for (let patch = Object.keys(patches.after).length; patch > 0; patch--) patches.after[patch - 1].unpatch()
      }
    }

    Object.assign(moduleToPatch[functionToPatch], originalFunction)
    setToString(moduleToPatch[functionToPatch], originalFunction)
  }
  // Check if internal if internal its not a 'handlePush' patch if it is skip adding it to the ALLpatches
  if (typeof patchName === "string" && /DrInternal-([A-z]+)-Patch/.test(patchName))
    if (patchName === "DrInternal-handlePush-Patch") return unpatch
    else
      if (!ALLpatches[Internal_Symbol]) ALLpatches[Internal_Symbol] = [patchInfo]
      else ALLpatches[Internal_Symbol].push(patchInfo)
  else
    if (!ALLpatches[patchName]) ALLpatches[patchName] = [patchInfo]
    else ALLpatches[patchName].push(patchInfo)
  return unpatch
}

export default {
  patch,
  quick: (moduleToPatch:any, functionToPatch:string, callback:Function, opts?:patcherOpts) => patch(Quick_Symbol, moduleToPatch, functionToPatch, callback, Object.assign({}, opts)),
  before: (id:string|symbol, module:any, functionToPatch:string, callback:Function, opts?:patcherOpts) => patch(id, module, functionToPatch, callback, Object.assign({}, opts, { method: "before" })),
  instead: (id:string|symbol, module:any, functionToPatch:string, callback:Function, opts?:patcherOpts) => patch(id, module, functionToPatch, callback, Object.assign({}, opts, { method: "instead" })),
  after: (id:string|symbol, module:any, functionToPatch:string, callback:Function, opts?:patcherOpts) => patch(id, module, functionToPatch, callback, Object.assign({}, opts, { method: "after" })),
  unpatchAll: (id:string|symbol) => {
    if (!ALLpatches[id]) return
    for (const patch of ALLpatches[id]) patch.unpatch()
  },
  patches: ALLpatches
}