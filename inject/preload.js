const { ipcRenderer, contextBridge } = require("electron")
const preload = ipcRenderer.sendSync("DR_DISCORD_PRELOAD")
if (!preload) throw new Error("no preload found")
require(preload)

const fs = require("fs/promises")
const path = require("path")

contextBridge.exposeInMainWorld("__DR__ELECTRON__BACKEND__", {
  require: (id) => require(id),
  app: true,
  init: function(eval) {
    async function start() {
      const data = await fs.readFile(path.join(__dirname, "../build/index.js"), "utf-8")
      try {
        setTimeout(() => {
          try {
            eval(`try {\n${data}\n}catch (e) {console.error(e)}\n//# sourceURL=Discord%20Re-envisioned`)
          } catch (error) {
            console.error(error)
          }
        }, 1000)
      } catch (error) {
        console.error(error)
      }
    }
    if (window.document.readyState == "loading") window.document.addEventListener("DOMContentLoaded", start)
    else start()
  }
})