if (Boolean(window.DrApi)) throw new Error("Discord Re-envisioned is already loaded.")

import { React, ReactDOM } from "./react"
import patcher from "./patcher"
import { default as getModule, asyncGetModule } from "./getModule"
import { pluginStyling, internalStyling } from "./styling"
import createToast from "./toast"
import { showConfirmationModal, getOwnerInstance, waitUntil, getReactInstance } from "./util"
import { internal, plugins } from "./storage"
import "./ui/settings"
import addonManager from "./addonManager"

internalStyling.inject("minimal-mode", internalStyling.getClasses(`
.dr-minimal-mode #{"panels", "container", "downloadProgressCircle"} > #{"container", "godlike", "avatar"} #{"_flex", "flex", "_horizontal"} > :not(:last-child) {
  opacity: 0% !important;
  width: 0px;
  transition: all 0.2s ease-in-out
}
.dr-minimal-mode #{"panels", "container", "downloadProgressCircle"} > #{"container", "godlike", "avatar"} #{"_flex", "flex", "_horizontal"}:hover > :not(:last-child) {
  opacity: 100% !important;
  width: 32px
}
.dr-minimal-mode #{"privateChannels", "desaturate", "tabBadge"} > #{"scroller", "empty", "scroller"} > #{"content", "scrollerBase", "thin"} {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start
}
.dr-minimal-mode #{"privateChannels", "desaturate", "tabBadge"} > #{"scroller", "empty", "scroller"} > #{"content", "scrollerBase", "thin"} > a:not([href*="/channels/@me/"]) {
  flex-grow: 1;
  margin-top: 8px !important;
  margin-left: 0
}
.dr-minimal-mode #{"privateChannels", "desaturate", "tabBadge"} > #{"scroller", "empty", "scroller"} > #{"content", "scrollerBase", "thin"} > a:not([href*="/channels/@me/"]):first-of-type { margin-left: 8px !important }
.dr-minimal-mode #{"privateChannels", "desaturate", "tabBadge"} > #{"scroller", "empty", "scroller"} > #{"content", "scrollerBase", "thin"} > a:not([href*="/channels/@me/"]) #{"content", "container", "muted"} { display: none }
.dr-minimal-mode #{"privateChannels", "desaturate", "tabBadge"} > #{"scroller", "empty", "scroller"} > #{"content", "scrollerBase", "thin"} > a:not([href*="/channels/@me/"]) #{"avatar", "container", "muted"} { margin: 0 !important }
.dr-minimal-mode #{"privateChannels", "desaturate", "tabBadge"} > #{"scroller", "empty", "scroller"} > #{"content", "scrollerBase", "thin"} > a:not([href*="/channels/@me/"]) #{"children", "container", "muted"} {
  position: absolute;
  transform: translate(4px, 8px);
  box-shadow: 0 0 0 3px var(--background-secondary);
  border-radius: 100px
}
.dr-minimal-mode #{"privateChannels", "desaturate", "tabBadge"} > #{"scroller", "empty", "scroller"} > #{"content", "scrollerBase", "thin"} > a[href*="/channels/@me/"] { width: 100% }
.dr-minimal-mode #{"privateChannels", "desaturate", "tabBadge"} > #{"scroller", "empty", "scroller"} > #{"content", "scrollerBase", "thin"} > h2 { width: 100% }
.dr-minimal-mode #{"membersWrap", "container", "membersWrap"}{ min-width: 200px }
.dr-minimal-mode #{"membersWrap", "container", "membersWrap"} #{"members", "container", "membersWrap"} { width: 200px }
.dr-minimal-mode #{"sidebar", "container", "downloadProgressCircle"} { width: 200px }
.dr-minimal-mode #{"sidebar", "container", "downloadProgressCircle"} #{"bannerVisible", "container", "clickable"} ~ #{"scroller", "scroller", "unread"} [style="height: 84px;"] { height: 47.25px !important }
.dr-minimal-mode #{"sidebar", "container", "downloadProgressCircle"} #{"bannerImage", "container", "clickable"}, 
.dr-minimal-mode #{"sidebar", "container", "downloadProgressCircle"} #{"animatedContainer", "container", "clickable"}, 
.dr-minimal-mode #{"sidebar", "container", "downloadProgressCircle"} #{"bannerImg", "container", "clickable"} {
  width: 200px;
  height: 112.5px
}
.dr-minimal-mode #{"container", "container", "progressBar"} { margin-top: 7px }
.dr-minimal-mode #{"container", "container", "avatar"}:hover { transform: translateY(-18px) }
.dr-minimal-mode #{"container", "container", "avatar"}:hover > button:not(:last-child):not(:first-child) { display: block}
.dr-minimal-mode #{"container", "container", "avatar"} > button:first-child { order: 1 }
.dr-minimal-mode #{"container", "container", "avatar"} > button:last-child { order: 2 }
.dr-minimal-mode #{"container", "container", "avatar"} > button:not(:last-child):not(:first-child) { display: none }
.dr-minimal-mode #{"standardSidebarView", "sidebarContentWidth", "standardPadding"} #{"sidebarRegion", "sidebarContentWidth", "standardPadding"} { flex: 0 0 218px }
.dr-minimal-mode #{"standardSidebarView", "sidebarContentWidth", "standardPadding"} #{"contentColumn", "sidebarContentWidth", "standardPadding"}, 
.dr-minimal-mode #{"standardSidebarView", "sidebarContentWidth", "standardPadding"} #{"customColumn", "sidebarContentWidth", "standardPadding"} {
  flex: 0 0 calc(100% - 80px);
  max-width: 100%;
  min-width: 460px
}`))

Start()

const backend = {
  devMode: internal.get("devMode") ?? false
}

async function Start() {
  if (internal.get("minimalMode") ?? false) document.body.classList.toggle("dr-minimal-mode")
  Object.defineProperty(getModule(["isDeveloper"]), "isDeveloper", { 
    get: () => backend.devMode, set: (val:boolean) => backend.devMode = val 
  })
  await waitUntil(() => document.querySelector(".container-YkUktl"))
  const Plugins:any = await addonManager.plugins()
  const themes = addonManager.themes()
  window.DrApi = {
    getModule, 
    asyncGetModule,
    patcher: {
      before: (id:string|symbol, module:any, functionToPatch:string, callback:Function, opts = {}) => patcher.before(id, module, functionToPatch, callback, Object.assign({}, opts)),
      instead: (id:string|symbol, module:any, functionToPatch:string, callback:Function, opts = {}) => patcher.instead(id, module, functionToPatch, callback, Object.assign({}, opts)),
      after: (id:string|symbol, module:any, functionToPatch:string, callback:Function, opts = {}) => patcher.after(id, module, functionToPatch, callback, Object.assign({}, opts)),
      patch: (id:string|symbol, module:any, functionToPatch:string, callback:Function, opts = {}) => patcher.patch(id, module, functionToPatch, callback, Object.assign({}, opts)),
      quick: (module:any, functionToPatch:string, callback:Function, opts = {}) => patcher.quick(module, functionToPatch, callback, opts),
      unpatchAll: (id:string|symbol) => patcher.unpatchAll(id),
      patches: patcher.patches
    },
    styling: {
      inject: (id, css) => pluginStyling.inject(id, css),
      update: (id, css) => pluginStyling.update(id, css),
      uninject: (id) => pluginStyling.uninject(id),
      getClasses: (css) => pluginStyling.getClasses(css),
    },
    Plugins: {
      get: (name) => Plugins.get(name),
      getAll: () => Plugins.getAll(),
      isEnabled: (name) => Plugins.isEnabled(name),
      disable: (name) => Plugins.disable(name),
      enable: (name) => Plugins.enable(name),
      toggle: (name) => Plugins.toggle(name)
    },
    Themes: {
      get: (name) => themes.get(name),
      getAll: () => themes.getAll(),
      isEnabled: (name) => themes.isEnabled(name),
      disable: (name) => themes.disable(name),
      enable: (name) => themes.enable(name),
      toggle: (name) => themes.toggle(name)
    },
    showConfirmationModal: (title, content, opts = {}) => showConfirmationModal(title, content, opts),
    toast: (text, opts = {}) => createToast(text, opts),
    React,
    ReactDOM,
    storage: {
      get: (plugin:string, key:string) => plugins.get(plugin, key),
      set: (plugin:string, key:string, data:any) => plugins.set(plugin, key, data)
    },
    getOwnerInstance: (element) => getOwnerInstance(element),
    getReactInstance: (element) => getReactInstance(element)
  }  
}