const { join } = require("path")
const electron = require("electron")
const Module = require("module")

electron.app.commandLine.appendSwitch("no-force-async-hooks-checks")

class BrowserWindow extends electron.BrowserWindow {
  constructor(opt) {
    if (opt.title != "Discord") return super(opt)
    opt.transparent = true
    opt.backgroundColor = "#00000000"
    const oldPreload = opt.webPreferences.preload

    opt.webPreferences.preload = join(__dirname, "preload.js")

    electron.ipcMain.on("DR_DISCORD_PRELOAD", (event) => event.returnValue = oldPreload)

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

// Enable DevTools on Stable.
let fakeAppSettings;
Object.defineProperty(global, "appSettings", {
  get() {
    return fakeAppSettings;
  },
  set(value) {
    if (!value.hasOwnProperty("settings")) value.settings = {};
    value.settings.DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING = true;
    fakeAppSettings = value;
  },
})

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
    console.log(REACT_DEVELOPER_TOOLS);
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
LoadDiscord()