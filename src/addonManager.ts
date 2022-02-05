import { internal } from "./storage"
import { themeStyling } from "./styling"
import { waitUntil } from "./util"

interface exports {
  onLoad?: () => void
  onStart?: () => void
  onStop: () => void
  [key:string]: any
}
interface AddonMeta {
  name: string
  version: string
  description: string
  author: string
  exports?: string | exports
  [key: string]: string | exports | undefined
}

function readMeta(contents:string):AddonMeta {
  let meta:AddonMeta = {
    name: "???",
    version: "???",
    description: "???",
    author: "???"
  }
  let jsdoc = contents.match(/\/\*\*([\s\S]*?)\*\//)
  if (!jsdoc?.[1]) return meta
  const line = jsdoc[1].match(/\*\s([^\n]*)/g)
  if (!line) return meta
  for (let ite of line) {
    ite = ite.replace(/\*( +|)@/, "")
    let split = ite.split(" ")
    let key = split[0]
    let value = split.slice(1).join(" ")
    meta[key] = value
  }
  return meta
}

const addons: { themes: Array<any>, plugins: Array<any> } = {
  themes: [],
  plugins: []
}
const addonInits: { themes: Array<Function>, plugins: Array<Function> } = {
  themes: [],
  plugins: []
}
const addonURLS: { themes: Array<string>, plugins: Array<string> } = internal.get("addonURLS") ?? {
  themes: [],
  plugins: []
}
const enabled: { themes: { [x:string]: boolean }, plugins: { [x:string]: boolean } } = internal.get("enabled") ?? {
  themes: {},
  plugins: {}
}

let finished: {
  themes: boolean,
  plugins: boolean
} = {
  themes: false,
  plugins: false
}

getThemes()
function getThemes() {
  if (!addonURLS.themes) return
  for (const pluginURL of addonURLS.themes) {
    fetch(pluginURL).then(res => res.text()).then(async code => {
      const meta:AddonMeta = readMeta(code)
      meta.exports = code
      addons.themes.push(meta)
      addonInits.themes.push(async () => {
        if (enabled.themes[meta.name]) themeStyling.inject(meta.name, code)
      })
    })
  }
}

const Themes = new class {
  get(name:string) { return addons.plugins.find((p:AddonMeta) => p.name === name) }
  getAll() { return addons.plugins }
  getEnabled() { return this.getAll().filter((p:AddonMeta) => this.isEnabled(p.name)) }
  isEnabled(name:string) { return enabled.plugins[name] ?? false }
  enable(name:string) {
    const meta = this.get(name)
    meta.exports.onStart()
    internal.set("enabled", { ...enabled, plugins: { ...enabled.plugins, [name]: true } })
  }
  disable(name:string) {
    const meta = this.get(name)
    meta.exports.onStop()
    internal.set("enabled", { ...enabled, plugins: { ...enabled.plugins, [name]: false } })
  }
  toggle(name:string) { return this.isEnabled(name) ? this.disable(name) : this.enable(name) }
}

getPlugins()
function getPlugins() {
  if (!addonURLS.plugins) return
  for (const pluginURL of addonURLS.plugins) {
    fetch(pluginURL).then(res => res.text()).then(async code => {
      const meta:AddonMeta = readMeta(code)
      const blob = new Blob([code], { type: "application/javascript" })
      const url = URL.createObjectURL(blob)
      
      addonInits.plugins.push(() => {
        return new Promise<void>(async (resolve) => {
          const plugin = (await import(url)).default
          meta.export = plugin
          addons.plugins.push(meta)
          if (plugin.onLoad) plugin.onLoad()
          if (enabled.plugins[meta.name]) plugin.onStart()
          URL.revokeObjectURL(url)
          resolve()
        })
      })
    })
  }
  finished.plugins = true
}

const Plugins = new class {
  get(name:string) { return addons.plugins.find((p:AddonMeta) => p.name === name) }
  getAll() { return addons.plugins }
  getEnabled() { return this.getAll().filter((p:AddonMeta) => this.isEnabled(p.name)) }
  isEnabled(name:string) { return enabled.plugins[name] ?? false }
  enable(name:string) {
    const meta = this.get(name)
    meta.exports.onStart()
    internal.set("enabled", { ...enabled, plugins: { ...enabled.plugins, [name]: true } })
  }
  disable(name:string) {
    const meta = this.get(name)
    meta.exports.onStop()
    internal.set("enabled", { ...enabled, plugins: { ...enabled.plugins, [name]: false } })
  }
  toggle(name:string) { return this.isEnabled(name) ? this.disable(name) : this.enable(name) }
}

export default {
  readMeta,
  themes: () => {
    for (const theme of addonInits.themes) theme()
    return {
      get: (name:string) => Themes.get(name),
      getAll: () => Themes.getAll(),
      getEnabled: () => Themes.getEnabled(),
      isEnabled: (name:string) => Themes.isEnabled(name),
      enable: (name:string) => Themes.enable(name),
      disable: (name:string) => Themes.disable(name),
      toggle: (name:string) => Themes.toggle(name)
    }
  },
  plugins: async () => {
    return await new Promise(async (resolve) => {
      await waitUntil(() => finished.plugins)
      const toReturn:any = {
        get: (name:string) => Plugins.get(name),
        getAll: () => Plugins.getAll(),
        getEnabled: () => Plugins.getEnabled(),
        isEnabled: (name:string) => Plugins.isEnabled(name),
        enable: (name:string) => Plugins.enable(name),
        disable: (name:string) => Plugins.disable(name),
        toggle: (name:string) => Plugins.toggle(name)
      }
      for (const plugin of addonInits.plugins) plugin()
      resolve(toReturn)
    })
  }
}
