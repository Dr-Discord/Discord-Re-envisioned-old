const Patch_Symbol = Symbol("DrApi.patch")
const Quick_Symbol = Symbol("DrApi.patch.quick")
const Internal_Symbol = Symbol("DrInternal")
const ALLpatches:any = {}

interface patcherOpts {
  method?:"before"|"after"|"instead"
  id?:string|symbol
}

function patch(patchName:string|symbol, moduleToPatch:any, functionToPatch:string, callback:Function, opts:patcherOpts) {
  let { method = "after", id } = opts
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
  patches[method].push(Object.assign(callback, { unpatch, Symbol: CallbackSymbol }))
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
    moduleToPatch[functionToPatch] = function() {
      for (const patch of patches.before) patch([...arguments], this)
      let insteadFunction = originalFunction
      for (const patch of patches.instead) insteadFunction = patch([...arguments], insteadFunction, this)
      let res = (insteadFunction ?? originalFunction).apply(this, [...arguments])
      for (const patch of patches.after) patch([...arguments], res, this)
      return res
    }
    moduleToPatch[functionToPatch][Patch_Symbol] = {
      original: originalFunction,
      module: moduleToPatch,
      function: functionToPatch,
      patches, unpatchAll: () => {
        for (const patch of patches.before) patch.unpatch()
        for (const patch of patches.instead) patch.unpatch()
        for (const patch of patches.after) patch.unpatch()
        moduleToPatch[functionToPatch] = originalFunction
      }
    }
    Object.assign(moduleToPatch[functionToPatch], originalFunction, {
      toString: () => originalFunction.toString()
    })
  }
  if (typeof patchName === "string" && /DrInternal-([A-z]+)-Patch/.test(patchName))
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
    return void 0
  },
  patches: ALLpatches
}