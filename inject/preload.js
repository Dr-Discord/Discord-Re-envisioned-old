const { ipcRenderer, webFrame } = require("electron")
const preload = ipcRenderer.sendSync("DR_DISCORD_PRELOAD")
if (!preload) return
require(preload)
webFrame.top.context.__DR__BACKEND__ = {
  require: (module) => require(module),
  app: true
}