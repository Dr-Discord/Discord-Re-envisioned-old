const { ipcRenderer, contextBridge } = require("electron")
const preload = ipcRenderer.sendSync("DR_DISCORD_PRELOAD")

if (!preload) throw new Error("no preload found")
require(preload)

const fs = require("fs/promises")
const path = require("path")

const data = fs.readFile(path.join(__dirname, "../build/index.js"), "utf-8")
const transparent = ipcRenderer.sendSync("DR_TRANSPARENT")

contextBridge.exposeInMainWorld("__DR_ELECTRON_BACKEND__", {
  app: true,
  init: async function(eval) {
    eval(`try {\n${await data}\n}catch (e) {console.error(e)}\n//# sourceURL=Discord%20Re-envisioned`)
  },
  transparent,
  toggleTransparency: async function() {
    await ipcRenderer.invoke("DR_TOGGLE_TRANSPARENCY")
  }
})