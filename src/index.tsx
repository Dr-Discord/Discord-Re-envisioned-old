if (location.pathname.startsWith("/dr_dashboard")) {
  const node = document.querySelector("#app-mount>div")
  if (!node || !node.firstElementChild) throw new Error("Could not find '#app-mount>div'")
  node.__reactFiber$.return.stateNode.props.children.props.history.goBack()
}

if (Boolean(window.DrApi)) throw new Error("Discord Re-envisioned is already loaded.")

import { React, ReactDOM } from "./react"
import patcher from "./patcher"
import { default as getModule, asyncGetModule } from "./getModule"
import { pluginStyling } from "./styling"
import createToast from "./toast"
import { showConfirmationModal, getOwnerInstance, waitUntil, getReactInstance, findInReactTree, findInTree, prompt } from "./util"
import { internal, plugins } from "./storage"
import { dispatch, register, unregister } from "./actions"
import "./dashboard"
import logger from "./logger"

logger.log("Loading...")
Start()

const __DR__BACKEND__ = Object.assign({
  devMode: internal.get("devMode") ?? false,
  require: (function() { throw new Error("tried using require on WEB!") }),
  app: false,
  logger
}, window.__DR__BACKEND__|| {})
window.__DR__BACKEND__ = __DR__BACKEND__

async function Start() {
  Object.defineProperty(getModule(["isDeveloper"]), "isDeveloper", { 
    get: () => __DR__BACKEND__.devMode, 
    set: (val:boolean) => __DR__BACKEND__.devMode = val 
  })
  await waitUntil(() => document.querySelector(".container-YkUktl"))
  const Plugins:any = {}
  const themes:any = {}
  window.DrApi = {
    getModule, 
    asyncGetModule,
    findInReactTree, 
    findInTree,
    patcher: {
      before: function(id:string|symbol, module:any, functionToPatch:string, callback:Function, opts = {}) { return patcher.before(id, module, functionToPatch, callback, Object.assign({}, opts)) },
      instead: function(id:string|symbol, module:any, functionToPatch:string, callback:Function, opts = {}) { return patcher.instead(id, module, functionToPatch, callback, Object.assign({}, opts)) },
      after: function(id:string|symbol, module:any, functionToPatch:string, callback:Function, opts = {}) { return patcher.after(id, module, functionToPatch, callback, Object.assign({}, opts)) },
      patch: function(id:string|symbol, module:any, functionToPatch:string, callback:Function, opts = {}) { return patcher.patch(id, module, functionToPatch, callback, Object.assign({}, opts)) },
      quick: function(module:any, functionToPatch:string, callback:Function, opts = {}) { return patcher.quick(module, functionToPatch, callback, opts) },
      unpatchAll: function(id:string|symbol) { return patcher.unpatchAll(id) },
      patches: patcher.patches
    },
    actions: {
      dispatch: function(name:string, ...args:any[]):any { return dispatch(name, ...args) },
      register: function(name:string, callback:Function):any { return register(name, callback) },
      unregister: function(name:string):any { return unregister(name) },
    },
    styling: {
      inject: function(id, css) { return pluginStyling.inject(id, css) },
      update: function(id, css) { return pluginStyling.update(id, css) },
      uninject: function(id) { return pluginStyling.uninject(id) },
      getClasses: function(css) { return pluginStyling.getClasses(css) }
    },
    Plugins: {
      get: function(name) { return Plugins.get(name) },
      getAll: () => Plugins.getAll(),
      isEnabled: function(name) { return Plugins.isEnabled(name) },
      disable: function(name) { return Plugins.disable(name) },
      enable: function(name) { return Plugins.enable(name) },
      toggle: function(name) { return Plugins.toggle(name) }
    },
    Themes: {
      get: function(name) { return themes.get(name) },
      getAll: () => themes.getAll(),
      isEnabled: function(name) { return themes.isEnabled(name) },
      disable: function(name) { return themes.disable(name) },
      enable: function(name) { return themes.enable(name) },
      toggle: function(name) { return themes.toggle(name) }
    },
    showConfirmationModal: function(title, content, opts = {}) { return showConfirmationModal(title, content, opts) },
    prompt: async function(title, defaultValue) { return await prompt(title, defaultValue) },
    toast: function(text, opts = {}) { return createToast(text, opts) },
    React,
    ReactDOM,
    storage: {
      get: function(plugin:string, key:string) { return plugins.get(plugin, key) },
      set: function(plugin:string, key:string, data:any) { return plugins.set(plugin, key, data) }
    },
    getInstance: {
      owner: function(element) { return getOwnerInstance(element) },
      react: function(element) { return getReactInstance(element) }
    }
  }  
}