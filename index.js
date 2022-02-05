const { join } = require("path")
const electron = require("electron")
const Module = require("module")
const { readFileSync, existsSync } = require("fs")

electron.app.commandLine.appendSwitch("no-force-async-hooks-checks")

class BrowserWindow extends electron.BrowserWindow {
  constructor(opt) {
    if (opt.title != "Discord") return super(opt)
    
    const win = new electron.BrowserWindow(opt)
    
    async function starting() {
      win.webContents.executeJavaScript("(() => DiscordNative.window.setDevtoolsCallbacks(null, null))()")
      win.webContents.on("did-finish-load", () => {
        win.webContents.executeJavaScript(`(${async () => {
          try {
            const js = await fetch("http://127.0.0.1:5500/build/index.js", { cache: "no-cache" }).then(e => e.text())
            eval(js)
          } catch (e) { console.error("DrDiscord Start ERROR \n", e) }
        }})()`)
      })
    }
    starting()
    
    return win
  }
}

electron.app.once("ready", () => {
  electron.session.defaultSession.webRequest.onHeadersReceived(function({ responseHeaders }, callback) {
    delete responseHeaders["content-security-policy-report-only"]
    delete responseHeaders["content-security-policy"]
    
    callback({ 
      cancel: false, 
      responseHeaders
    })
  })
  try {
    const { default: installExtension, REACT_DEVELOPER_TOOLS } = require("electron-devtools-installer")
    installExtension(REACT_DEVELOPER_TOOLS)
  } catch (error) {}
})

const Electron = new Proxy(electron, { get: (target, prop) => prop === "BrowserWindow" ? BrowserWindow : target[prop] })

const electronPath = require.resolve("electron")
delete require.cache[electronPath].exports
require.cache[electronPath].exports = Electron

function LoadDiscord() {
  const basePath = join(process.resourcesPath, "app.asar")
  const pkg = require(join(basePath, "package.json"))
  electron.app.setAppPath(basePath)
  electron.app.name = pkg.name
  Module._load(join(basePath, pkg.main), null, true)
}
const appOld = join(process.resourcesPath, "app-old")
if (existsSync(appOld)) {
  if (existsSync(join(appOld, "index.js"))) {
    const js = readFileSync(join(appOld, "index.js"), "utf8")
    if (js.startsWith(`require("${join(__dirname).replace(/(\/|\\)/g, "/")}")`)) LoadDiscord()
    else require(join(process.resourcesPath, "app-old"))
  }
  else require(appOld)
}
else LoadDiscord()