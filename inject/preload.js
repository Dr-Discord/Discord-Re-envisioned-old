const { ipcRenderer, webFrame } = require("electron")
const preload = ipcRenderer.sendSync("DR_DISCORD_PRELOAD")
if (!preload) return
require(preload)

const fs = require("fs/promises")
const path = require("path")

{((window) => {
  window.__DR__BACKEND__ = {
    require: (module) => require(module),
    app: true
  }
  async function start() {
    const data = await fs.readFile(path.join(__dirname, "../build/index.js"), "utf-8")
    try {
      setTimeout(() => window.eval(data), 1500)
    } catch (error) {
      console.error(error)
    }
  }
  if (window.document.readyState == "loading") window.document.addEventListener("DOMContentLoaded", start)
  else start()
})(webFrame.top.context)}