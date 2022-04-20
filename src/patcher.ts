const Patch_Symbol = Symbol("DrApi.patch")
const Quick_Symbol = Symbol("DrApi.patch.quick")
const Internal_Symbol = Symbol("DrInternal")

Symbol.drPatcher = { patch: Patch_Symbol, quick: Quick_Symbol }

const ALLpatches:any = {}

type PatcherOf = typeof patcher
type PatcherKeys = keyof PatcherOf

function patch(this:PatcherOf, patchName:string|symbol, moduleToPatch:any, functionToPatch:string, callback:Function, opts:patcherOpts) {
  let { method = "after", id, index = 0 } = opts

  if (!moduleToPatch) throw new Error("moduleToPatch is required/is undefined")

  if (!moduleToPatch[functionToPatch]) moduleToPatch[functionToPatch] = () => {}
  let originalFunction = moduleToPatch[functionToPatch]
  
  method = (method.toLowerCase() as "before"|"after"|"instead")
  if (!(method === "before" || method === "after" || method === "instead")) throw new Error(`'${method}' is a invalid patch type`)

  let patches = moduleToPatch[functionToPatch]?.[Patch_Symbol]?.patches ?? { before: [], after: [], instead: [] }

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
  
  if (!moduleToPatch[functionToPatch].hasOwnProperty(Patch_Symbol)) {
    Object.defineProperty(moduleToPatch, functionToPatch, {
      writable: true,
      configurable: true,
      value: function() {
        for (let patch = Object.keys(patches.before).length; patch > 0; patch--) patches.before[patch - 1](arguments, this)
        let insteadFunction = originalFunction
        for (let patch = Object.keys(patches.instead).length; patch > 0; patch--) insteadFunction = patches.instead[patch - 1](arguments, insteadFunction, this) ?? insteadFunction
        let res = Reflect.apply(insteadFunction, this, arguments)
        for (let patch = Object.keys(patches.after).length; patch > 0; patch--) patches.after[patch - 1](arguments, res, this)
        return res
      }
    })

    Object.assign(moduleToPatch[functionToPatch], originalFunction, {
      [Patch_Symbol]: {
        original: originalFunction,
        module: moduleToPatch,
        function: functionToPatch,
        patches, unpatchAll: () => {
          for (let patch = Object.keys(patches.before).length; patch > 0; patch--) patches.before[patch - 1].unpatch()
          for (let patch = Object.keys(patches.instead).length; patch > 0; patch--) patches.instead[patch - 1].unpatch()
          for (let patch = Object.keys(patches.after).length; patch > 0; patch--) patches.after[patch - 1].unpatch()
        }
      }
    })

    Object.defineProperty(moduleToPatch[functionToPatch], "toString", {
      value: () => originalFunction.toString(),
      writable: true,
      enumerable: false,
      configurable: true
    })
    Object.defineProperty(moduleToPatch[functionToPatch].toString, "toString", {
      value: () => originalFunction.toString.toString(),
      writable: true,
      enumerable: false,
      configurable: true
    })
  }
  
  if (typeof patchName === "string" && /DrInternal-([A-z]+)-Patch/.test(patchName))
    if (patchName === "DrInternal-dontShow-Patch") return unpatch
    else
      if (!ALLpatches[Internal_Symbol]) ALLpatches[Internal_Symbol] = [patchInfo]
      else ALLpatches[Internal_Symbol].push(patchInfo)
  else
    if (!ALLpatches[patchName]) ALLpatches[patchName] = [patchInfo]
    else ALLpatches[patchName].push(patchInfo)
  return unpatch
}

const patcher:any = {
  patch,
  before: function(this:PatcherOf, id:string|symbol, module:any, functionToPatch:string, callback:Function, opts?:patcherOpts) { return patch(id, module, functionToPatch, callback, Object.assign({}, opts, { method: "before" })) },
  instead: function(this:PatcherOf, id:string|symbol, module:any, functionToPatch:string, callback:Function, opts?:patcherOpts) { return patch(id, module, functionToPatch, callback, Object.assign({}, opts, { method: "instead" })) },
  after: function(this:PatcherOf, id:string|symbol, module:any, functionToPatch:string, callback:Function, opts?:patcherOpts) { return patch(id, module, functionToPatch, callback, Object.assign({}, opts, { method: "after" })) },
  unpatchAll: function(this:PatcherOf, id:string|symbol) {
    if (!ALLpatches[id]) return
    for (const patch of ALLpatches[id]) patch.unpatch()
  },
}

export default {
  ...patcher,
  quick: (moduleToPatch:any, functionToPatch:string, callback:Function, opts?:patcherOpts) => patch(Quick_Symbol, moduleToPatch, functionToPatch, callback, Object.assign({}, opts)),
  create: (id:string|symbol) => Object.fromEntries(Object.keys(patcher).map((key:PatcherKeys) => [
    key, patcher[key].bind(null, id)
  ])),
  patches: ALLpatches
}