(() => {
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // tsBuild/util.js
  var require_util = __commonJS({
    "tsBuild/util.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.restart = exports.findInReactTree = exports.findInTree = exports.prompt = exports.showConfirmationModal = exports.getOwnerInstance = exports.getReactInstance = exports.waitUntil = exports.sleep = void 0;
      var react_1 = require_react();
      var getModule_1 = __importDefault(require_getModule());
      var sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
      exports.sleep = sleep;
      async function waitUntil(condition) {
        let item;
        while (!(item = condition()))
          await (0, exports.sleep)(1);
        return item;
      }
      exports.waitUntil = waitUntil;
      function getReactInstance(element) {
        if (!element)
          return;
        if (element.__reactInternalInstance$)
          return element.__reactInternalInstance$;
        return element[Object.keys(element).find((k) => k.startsWith("__reactInternalInstance") || k.startsWith("__reactFiber"))] || null;
      }
      exports.getReactInstance = getReactInstance;
      function getOwnerInstance(element) {
        for (let RI = getReactInstance(element); RI; RI = RI.return) {
          const sn = RI.stateNode;
          if (typeof sn?.forceUpdate === "function")
            return sn;
        }
      }
      exports.getOwnerInstance = getOwnerInstance;
      function showConfirmationModal(title, content, opts) {
        const Markdown = (0, getModule_1.default)((m) => m.default?.displayName === "Markdown" && m.default.rules).default;
        const ConfirmationModal = (0, getModule_1.default)("ConfirmModal").default;
        const Button = (0, getModule_1.default)(["ButtonColors"]);
        const { openModal } = (0, getModule_1.default)(["openModal", "openModalLazy"]);
        const Messages = (0, getModule_1.default)(["Messages"], false)[1].Messages;
        const emptyFunction = () => {
        };
        const { onConfirm = emptyFunction, onCancel = emptyFunction, confirmText = Messages.OKAY, cancelText = Messages.CANCEL, danger = false } = opts;
        if (!Array.isArray(content))
          content = [content];
        content = content.map((c) => typeof c === "string" ? react_1.React.createElement(Markdown, null, c) : c);
        openModal((props) => react_1.React.createElement(ConfirmationModal, { ...props, header: title, content, onConfirm, onCancel, confirmText, cancelText, confirmButtonColor: danger ? Button.ButtonColors.RED : Button.ButtonColors.BRAND }, content));
      }
      exports.showConfirmationModal = showConfirmationModal;
      function prompt(title, defaultValue) {
        const TextInput = (0, getModule_1.default)("TextInput").default;
        const ConfirmationModal = (0, getModule_1.default)("ConfirmModal").default;
        const Button = (0, getModule_1.default)(["ButtonColors"]);
        const { Messages } = (0, getModule_1.default)(["Messages"], false)[1];
        const { openModal } = (0, getModule_1.default)(["openModal", "openModalLazy"]);
        let toReturn = "";
        return new Promise((resolve) => {
          openModal((props) => {
            if (props.transitionState === 3)
              resolve(null);
            return react_1.React.createElement(ConfirmationModal, Object.assign({
              header: title,
              confirmButtonColor: Button.ButtonColors.BRAND,
              confirmText: Messages.OKAY,
              cancelText: Messages.CANCEL,
              onConfirm: () => resolve(toReturn),
              onCancel: () => resolve(null),
              children: react_1.React.createElement(react_1.React.memo(() => {
                const [value, setValue] = react_1.React.useState(defaultValue);
                return react_1.React.createElement(TextInput, {
                  value,
                  onChange: (value2) => {
                    setValue(value2);
                    toReturn = value2;
                  }
                });
              }))
            }, props));
          });
        });
      }
      exports.prompt = prompt;
      function findInTree(tree, filter, opts = {}) {
        const { walkable = null, ignore = [] } = opts;
        if (!tree || typeof tree !== "object")
          return null;
        if (typeof filter === "string") {
          if (tree.hasOwnProperty(filter))
            return tree[filter];
          return;
        } else if (filter(tree))
          return tree;
        let returnValue = null;
        if (Array.isArray(tree)) {
          for (const value of tree) {
            returnValue = findInTree(value, filter, { walkable, ignore });
            if (returnValue)
              return returnValue;
          }
        } else {
          const walkables = !walkable ? Object.keys(tree) : walkable;
          for (const key of walkables) {
            if (!tree.hasOwnProperty(key) || ignore.includes(key))
              continue;
            returnValue = findInTree(tree[key], filter, { walkable, ignore });
            if (returnValue)
              return returnValue;
          }
        }
        return returnValue;
      }
      exports.findInTree = findInTree;
      function findInReactTree(tree, searchFilter) {
        return findInTree(tree, searchFilter, {
          walkable: ["props", "children", "child", "sibling"]
        });
      }
      exports.findInReactTree = findInReactTree;
      function restart(full) {
        if (window.__DR__BACKEND__.app && full)
          return window.__DR__BACKEND__.require("electron").ipcRenderer.send("DR_FULL_RESTART");
        return location.reload();
      }
      exports.restart = restart;
    }
  });

  // tsBuild/getModule.js
  var require_getModule = __commonJS({
    "tsBuild/getModule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.asyncGetModule = void 0;
      var util_1 = require_util();
      var webpackExports = !webpackChunkdiscord_app.webpackExports ? webpackChunkdiscord_app.push([
        [Symbol("Discord Re-envisioned")],
        {},
        (exp) => {
          webpackChunkdiscord_app.pop();
          return exp;
        }
      ]) : webpackChunkdiscord_app.webpackExports;
      webpackChunkdiscord_app.webpackExports = webpackExports;
      function getModule(filter, first = true) {
        let modules = [];
        function byPropsAll(...props) {
          const norm = getModule((m) => props.every((prop) => typeof m[prop] !== "undefined"), false);
          let def = [];
          for (const module2 of getModule((m) => props.every((prop) => typeof m.default?.[prop] !== "undefined"), false))
            def.push(module2.default);
          return [...norm, ...def];
        }
        function byDisplayName(displayName) {
          const norm = getModule((m) => m.default?.displayName === displayName, false);
          const type = getModule((m) => m.default?.type?.displayName === displayName, false);
          const rend = getModule((m) => m.default?.type?.render?.displayName === displayName, false);
          return [...norm, ...type, ...rend];
        }
        if (Array.isArray(filter))
          modules = byPropsAll(...filter);
        else if (typeof filter === "string")
          modules = byDisplayName(filter);
        else if (typeof filter === "number")
          modules = [webpackExports.c[filter]];
        else if (typeof filter === "function") {
          for (let ite in webpackExports.c) {
            if (!Object.hasOwnProperty.call(webpackExports.c, ite))
              return;
            let ele = webpackExports.c[ite].exports;
            if (!ele)
              continue;
            if (filter(ele))
              modules.push(ele);
          }
        }
        if (first)
          return modules[0];
        return modules;
      }
      exports.default = getModule;
      async function asyncGetModule(filter) {
        return await new Promise(async (resolve) => await (0, util_1.waitUntil)(() => {
          if (!getModule(filter))
            return;
          resolve(getModule(filter));
        }));
      }
      exports.asyncGetModule = asyncGetModule;
    }
  });

  // tsBuild/react.js
  var require_react = __commonJS({
    "tsBuild/react.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ReactDOM = exports.React = void 0;
      var getModule_1 = __importDefault(require_getModule());
      exports.React = (0, getModule_1.default)(["createElement", "Component"]);
      exports.ReactDOM = (0, getModule_1.default)(["render", "findDOMNode"]);
      exports.default = exports.React;
    }
  });

  // tsBuild/patcher.js
  var require_patcher = __commonJS({
    "tsBuild/patcher.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var Patch_Symbol = Symbol("DrApi.patch");
      var Quick_Symbol = Symbol("DrApi.patch.quick");
      var Internal_Symbol = Symbol("DrInternal");
      var ALLpatches = {};
      function patch(patchName, moduleToPatch, functionToPatch, callback, opts) {
        let { method = "after", id } = opts;
        let originalFunction = moduleToPatch[functionToPatch];
        if (!originalFunction) {
          moduleToPatch[functionToPatch] = () => {
          };
          originalFunction = moduleToPatch[functionToPatch];
        }
        method = method.toLowerCase();
        if (!(method === "before" || method === "after" || method === "instead"))
          throw new Error(`'${method}' is a invalid patch type`);
        let patches = moduleToPatch?.[functionToPatch]?.[Patch_Symbol]?.patches ?? { before: [], after: [], instead: [] };
        let CallbackSymbol = Symbol();
        let patchInfo = { unpatch, patchName: id ?? patchName, moduleToPatch, functionToPatch, callback, method, Symbol: CallbackSymbol };
        patches[method].push(Object.assign(callback, { unpatch, Symbol: CallbackSymbol }));
        let DidUnpatch = false;
        function unpatch() {
          if (DidUnpatch)
            return;
          DidUnpatch = true;
          let found = patches[method].find((p) => p.Symbol === patchInfo.Symbol);
          let index = patches[method].indexOf(found);
          patches[method].splice(index, 1);
          found = ALLpatches[patchName].find((p) => p.Symbol === patchInfo.Symbol);
          index = ALLpatches[patchName].indexOf(found);
          ALLpatches[patchName].splice(index, 1);
          if (!ALLpatches[patchName].length)
            delete ALLpatches[patchName];
        }
        if (!moduleToPatch[functionToPatch][Patch_Symbol]) {
          moduleToPatch[functionToPatch] = function() {
            for (const patch2 of patches.before)
              patch2([...arguments], this);
            let insteadFunction = originalFunction;
            for (const patch2 of patches.instead)
              insteadFunction = patch2([...arguments], insteadFunction, this);
            let res = (insteadFunction ?? originalFunction).apply(this, [...arguments]);
            for (const patch2 of patches.after)
              patch2([...arguments], res, this);
            return res;
          };
          moduleToPatch[functionToPatch][Patch_Symbol] = {
            original: originalFunction,
            module: moduleToPatch,
            function: functionToPatch,
            patches,
            unpatchAll: () => {
              for (const patch2 of patches.before)
                patch2.unpatch();
              for (const patch2 of patches.instead)
                patch2.unpatch();
              for (const patch2 of patches.after)
                patch2.unpatch();
              moduleToPatch[functionToPatch] = originalFunction;
            }
          };
          Object.assign(moduleToPatch[functionToPatch], originalFunction, {
            toString: () => originalFunction.toString()
          });
        }
        if (typeof patchName === "string" && /DrInternal-([A-z]+)-Patch/.test(patchName))
          if (!ALLpatches[Internal_Symbol])
            ALLpatches[Internal_Symbol] = [patchInfo];
          else
            ALLpatches[Internal_Symbol].push(patchInfo);
        else if (!ALLpatches[patchName])
          ALLpatches[patchName] = [patchInfo];
        else
          ALLpatches[patchName].push(patchInfo);
        return unpatch;
      }
      exports.default = {
        patch,
        quick: (moduleToPatch, functionToPatch, callback, opts) => patch(Quick_Symbol, moduleToPatch, functionToPatch, callback, Object.assign({}, opts)),
        before: (id, module2, functionToPatch, callback, opts) => patch(id, module2, functionToPatch, callback, Object.assign({}, opts, { method: "before" })),
        instead: (id, module2, functionToPatch, callback, opts) => patch(id, module2, functionToPatch, callback, Object.assign({}, opts, { method: "instead" })),
        after: (id, module2, functionToPatch, callback, opts) => patch(id, module2, functionToPatch, callback, Object.assign({}, opts, { method: "after" })),
        unpatchAll: (id) => {
          if (!ALLpatches[id])
            return;
          for (const patch2 of ALLpatches[id])
            patch2.unpatch();
          return void 0;
        },
        patches: ALLpatches
      };
    }
  });

  // tsBuild/styling.js
  var require_styling = __commonJS({
    "tsBuild/styling.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.internalStyling = exports.themeStyling = exports.pluginStyling = void 0;
      var getModule_1 = __importDefault(require_getModule());
      var DrHead = document.createElement("dr-styles");
      document.head.appendChild(DrHead);
      var Dr_ele = {
        internal: document.createElement("dr-internal"),
        plugin: document.createElement("dr-plugin"),
        theme: document.createElement("dr-theme")
      };
      for (const key of Object.keys(Dr_ele))
        DrHead.appendChild(Dr_ele[key]);
      function inject(type) {
        return (id, css) => {
          const style = document.createElement("style");
          style.setAttribute(`dr-${type}-css`, id);
          style.innerHTML = css;
          Dr_ele[type].appendChild(style);
        };
      }
      function update(type) {
        return (id, css) => {
          const style = document.querySelector(`style[dr-${type}-css="${id}"]`);
          if (style)
            style.innerHTML = css;
        };
      }
      function uninject(type) {
        return (id) => {
          const style = document.querySelector(`style[dr-${type}-css="${id}"]`);
          if (style)
            style.remove();
        };
      }
      function getClasses(css) {
        const matches = css.match(/#{(("[A-z]+")((, )|)){1,}}/g);
        if (!matches)
          return css;
        for (const styl of matches) {
          const arr = JSON.parse(styl.replace("#{", "[").replace("}", "]"));
          css = css.replace(styl, `.${(0, getModule_1.default)(arr, true)?.[arr[0]].replaceAll(" ", ".")}`);
        }
        return css;
      }
      exports.pluginStyling = {
        inject: inject("plugin"),
        update: update("plugin"),
        uninject: uninject("plugin"),
        getClasses
      };
      exports.themeStyling = {
        inject: inject("theme"),
        update: update("theme"),
        uninject: uninject("theme"),
        getClasses
      };
      exports.internalStyling = {
        inject: inject("internal"),
        update: update("internal"),
        uninject: uninject("internal"),
        getClasses
      };
    }
  });

  // tsBuild/toast.js
  var require_toast = __commonJS({
    "tsBuild/toast.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var styling_1 = require_styling();
      styling_1.internalStyling.inject("toasts", `.dr-toast {
  display: inline-flex;
  box-sizing: border-box;
  border-radius: 3px;
  color: var(--text-normal);
  font-size: 16px;
  background-color: var(--background-floating);
  vertical-align: bottom;
  box-shadow: var(--elevation-low);
  margin: 0 10px 0 auto;
  flex-grow: 1;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  width: fit-content
}
.dr-toast:is(.adding, .removing) { opacity: 0 }
.dr-toast:not(:last-child) {  margin-bottom: 5px }
.dr-toast-container {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 100%;
  z-index: 999;
  overflow: hidden;
}
.dr-toast-wrapper {
  overflow: hidden;
  height: auto;
  margin: 0;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  min-width: auto;
  transition-property: all;
  transition-timing-function: ease;
  transition-duration: 0.5s;
}
.dr-toast-type {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 18px;
  margin-right: 5px;
  border-radius: 3px 0 0 3px;
  background-color: transparent;
  position: relative;
}
.dr-toast-type::after {
  content: "";
  position: absolute;
  background-color: var(--background-floating);
  width: 6px;
  border-radius: 6px;
  height: 100%;
  right: -3px;
}
.dr-toast-type.success { background-color: var(--info-positive-foreground) }
.dr-toast-type.error { background-color: var(--info-danger-foreground) }
.dr-toast-type.info { background-color: var(--brand-experiment) }
.dr-toast-type.warning { background-color: var(--info-warning-foreground) }
.dr-toast-message {
  display: inline-block;
  user-select: text
}
.dr-toast-message-wrapper {
  flex: 1;
  padding: 12px 6px 12px 3px;
  position: relative
}
.dr-toast-close {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 2px 10px 0;
  user-select: none;
  color: var(--interactive-normal);
  position: relative;
  font-size: 14px
}
.dr-toast-close:hover {
  color: var(--interactive-hover);
  background-color: var(--background-modifier-hover)
}`);
      var toastContainer = document.createElement("div");
      toastContainer.className = "dr-toast-container";
      document.body.appendChild(toastContainer);
      var toastWrapper = document.createElement("div");
      toastWrapper.className = "dr-toast-wrapper";
      toastWrapper.style.marginBottom = "5px";
      toastContainer.appendChild(toastWrapper);
      function Timer(callback, delay) {
        let timerId, start, remaining = delay;
        const pause = function() {
          window.clearTimeout(timerId);
          timerId = null;
          remaining -= Date.now() - start;
        };
        const resume = function() {
          if (timerId)
            return;
          start = Date.now();
          timerId = window.setTimeout(callback, remaining);
        };
        resume();
        return { pause, resume };
      }
      function createToast(text, opts) {
        const { type = "success", duration = 3e3, autoClose = true, closeButton = true } = opts;
        const toast = document.createElement("div");
        toast.className = "dr-toast adding";
        setTimeout(() => toast.classList.remove("adding"), 300);
        toastWrapper.appendChild(toast);
        const toastType = document.createElement("span");
        toastType.className = `dr-toast-type ${type.toLowerCase()}`;
        toast.appendChild(toastType);
        const toastMessageWrapper = document.createElement("div");
        toastMessageWrapper.className = "dr-toast-message-wrapper";
        toast.appendChild(toastMessageWrapper);
        const toastMessage = document.createElement("span");
        toastMessage.className = "dr-toast-message";
        toastMessage.innerText = text;
        toastMessageWrapper.appendChild(toastMessage);
        function removeToast() {
          toast.classList.add("removing");
          setTimeout(() => toast.remove(), 300);
        }
        if (closeButton) {
          const toastClose = document.createElement("span");
          toastClose.className = "dr-toast-close";
          toastClose.innerText = "\u2715";
          toastClose.onclick = removeToast;
          toast.appendChild(toastClose);
        }
        if (autoClose) {
          const dur = Timer(() => removeToast(), duration);
          toast.onmouseenter = dur.pause;
          toast.onmouseleave = dur.resume;
        }
        return toast;
      }
      exports.default = createToast;
    }
  });

  // tsBuild/storage.js
  var require_storage = __commonJS({
    "tsBuild/storage.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.internal = exports.plugins = exports.localStorage = void 0;
      exports.localStorage = (() => {
        if (window.localStorage)
          return window.localStorage;
        const frame = document.createElement("frame");
        frame.src = "about:blank";
        document.body.appendChild(frame);
        let localStorage = Object.getOwnPropertyDescriptor(frame.contentWindow, "localStorage");
        frame.remove();
        Object.defineProperty(window, "localStorage", localStorage);
        localStorage = window.localStorage;
        delete window.localStorage;
        return localStorage;
      })();
      exports.localStorage.setItem("dr-storage", (() => {
        let res = JSON.parse(exports.localStorage.getItem("dr-storage") ?? "{}");
        for (const dataType of ["themeData", "pluginData", "internalData"])
          res[dataType] = res[dataType] ?? {};
        return JSON.stringify(res);
      })());
      exports.plugins = {
        get: (plugin, key) => JSON.parse(exports.localStorage.getItem("dr-storage") ?? "{}").pluginData?.[plugin]?.[key],
        set: (plugin, key, value) => {
          const storage = JSON.parse(exports.localStorage.getItem("dr-storage") ?? "{}");
          if (!storage.pluginData[plugin])
            storage.pluginData[plugin] = {};
          storage.pluginData[plugin][key] = value;
          exports.localStorage.setItem("dr-storage", JSON.stringify(storage));
        }
      };
      exports.internal = {
        get: (key) => JSON.parse(exports.localStorage.getItem("dr-storage") ?? "{}").internalData?.[key],
        set: (key, value) => {
          const storage = JSON.parse(exports.localStorage.getItem("dr-storage") ?? "{}");
          storage.internalData[key] = value;
          exports.localStorage.setItem("dr-storage", JSON.stringify(storage));
        }
      };
    }
  });

  // tsBuild/addonManager.js
  var require_addonManager = __commonJS({
    "tsBuild/addonManager.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var storage_1 = require_storage();
      var styling_1 = require_styling();
      var util_1 = require_util();
      function readMeta(contents) {
        let meta = {
          name: "???",
          version: "???",
          description: "???",
          author: "???"
        };
        let jsdoc = contents.match(/\/\*\*([\s\S]*?)\*\//);
        if (!jsdoc?.[1])
          return meta;
        const line = jsdoc[1].match(/\*\s([^\n]*)/g);
        if (!line)
          return meta;
        for (let ite of line) {
          ite = ite.replace(/\*( +|)@/, "");
          let split = ite.split(" ");
          let key = split[0];
          let value = split.slice(1).join(" ");
          meta[key] = value;
        }
        return meta;
      }
      var addons = {
        themes: [],
        plugins: []
      };
      var addonInits = {
        themes: [],
        plugins: []
      };
      var addonURLS = storage_1.internal.get("addonURLS") ?? {
        themes: [],
        plugins: []
      };
      var enabled = storage_1.internal.get("enabled") ?? {
        themes: {},
        plugins: {}
      };
      var finished = {
        themes: false,
        plugins: false
      };
      getThemes();
      function getThemes() {
        if (!addonURLS.themes)
          return;
        for (const pluginURL of addonURLS.themes) {
          fetch(pluginURL).then((res) => res.text()).then(async (code) => {
            const meta = readMeta(code);
            meta.exports = code;
            addons.themes.push(meta);
            addonInits.themes.push(async () => {
              if (enabled.themes[meta.name])
                styling_1.themeStyling.inject(meta.name, code);
            });
          });
        }
      }
      var Themes = new class {
        get(name) {
          return addons.plugins.find((p) => p.name === name);
        }
        getAll() {
          return addons.plugins;
        }
        getEnabled() {
          return this.getAll().filter((p) => this.isEnabled(p.name));
        }
        isEnabled(name) {
          return enabled.plugins[name] ?? false;
        }
        enable(name) {
          const meta = this.get(name);
          meta.exports.onStart();
          storage_1.internal.set("enabled", { ...enabled, plugins: { ...enabled.plugins, [name]: true } });
        }
        disable(name) {
          const meta = this.get(name);
          meta.exports.onStop();
          storage_1.internal.set("enabled", { ...enabled, plugins: { ...enabled.plugins, [name]: false } });
        }
        toggle(name) {
          return this.isEnabled(name) ? this.disable(name) : this.enable(name);
        }
      }();
      getPlugins();
      function getPlugins() {
        if (!addonURLS.plugins)
          return;
        for (const pluginURL of addonURLS.plugins) {
          fetch(pluginURL).then((res) => res.text()).then(async (code) => {
            const meta = readMeta(code);
            const blob = new Blob([code], { type: "application/javascript" });
            const url = URL.createObjectURL(blob);
            addonInits.plugins.push(() => {
              return new Promise(async (resolve) => {
                const plugin = (await Promise.resolve().then(() => __importStar(__require(url)))).default;
                meta.export = plugin;
                addons.plugins.push(meta);
                if (plugin.onLoad)
                  plugin.onLoad();
                if (enabled.plugins[meta.name])
                  plugin.onStart();
                URL.revokeObjectURL(url);
                resolve();
              });
            });
          });
        }
        finished.plugins = true;
      }
      var Plugins = new class {
        get(name) {
          return addons.plugins.find((p) => p.name === name);
        }
        getAll() {
          return addons.plugins;
        }
        getEnabled() {
          return this.getAll().filter((p) => this.isEnabled(p.name));
        }
        isEnabled(name) {
          return enabled.plugins[name] ?? false;
        }
        enable(name) {
          const meta = this.get(name);
          meta.exports.onStart();
          storage_1.internal.set("enabled", { ...enabled, plugins: { ...enabled.plugins, [name]: true } });
        }
        disable(name) {
          const meta = this.get(name);
          meta.exports.onStop();
          storage_1.internal.set("enabled", { ...enabled, plugins: { ...enabled.plugins, [name]: false } });
        }
        toggle(name) {
          return this.isEnabled(name) ? this.disable(name) : this.enable(name);
        }
      }();
      exports.default = {
        readMeta,
        themes: () => {
          for (const theme of addonInits.themes)
            theme();
          return {
            get: (name) => Themes.get(name),
            getAll: () => Themes.getAll(),
            getEnabled: () => Themes.getEnabled(),
            isEnabled: (name) => Themes.isEnabled(name),
            enable: (name) => Themes.enable(name),
            disable: (name) => Themes.disable(name),
            toggle: (name) => Themes.toggle(name)
          };
        },
        plugins: async () => {
          return await new Promise(async (resolve) => {
            await (0, util_1.waitUntil)(() => finished.plugins);
            const toReturn = {
              get: (name) => Plugins.get(name),
              getAll: () => Plugins.getAll(),
              getEnabled: () => Plugins.getEnabled(),
              isEnabled: (name) => Plugins.isEnabled(name),
              enable: (name) => Plugins.enable(name),
              disable: (name) => Plugins.disable(name),
              toggle: (name) => Plugins.toggle(name)
            };
            for (const plugin of addonInits.plugins)
              plugin();
            resolve(toReturn);
          });
        }
      };
    }
  });

  // tsBuild/actions.js
  var require_actions = __commonJS({
    "tsBuild/actions.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.dispatch = exports.unregister = exports.register = exports.Actions = void 0;
      exports.Actions = {};
      function register(name, callback) {
        if (!exports.Actions[name])
          exports.Actions[name] = [];
        exports.Actions[name].push({ name, callback });
        return () => this.unregister(name);
      }
      exports.register = register;
      function unregister(name) {
        if (!exports.Actions[name])
          return;
        exports.Actions[name] = exports.Actions[name].filter((x) => x.name !== name);
      }
      exports.unregister = unregister;
      function dispatch(name, ...args) {
        let returnValue = [];
        if (!exports.Actions[name])
          return void 0;
        for (const { callback } of exports.Actions[name])
          returnValue.push(callback(...args));
        return returnValue.length ? returnValue : void 0;
      }
      exports.dispatch = dispatch;
    }
  });

  // tsBuild/i18n.js
  var require_i18n = __commonJS({
    "tsBuild/i18n.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.languages = void 0;
      exports.languages = {
        global: {
          name: "Discord Re-envisioned",
          version: "0.0.1"
        },
        en: {
          devMode: {
            title: "Toggle Developer Mode",
            note: "Warning you can get banned from Discord if you do this (not a 100% chance)!"
          },
          settingTabs: {
            general: "General",
            plugins: "Plugins",
            themes: "Themes"
          },
          uninstall: "Uninstall",
          settings: "Settings",
          installing: {
            alreadyInstalled: {
              content: "Plugin '{{name}}' is already installed",
              replace: function(name) {
                return this.content.replace("{{name}}", name);
              }
            },
            installed: {
              content: "Installed '{{name}}'! Refresh the page to see it.",
              replace: function(name) {
                return this.content.replace("{{name}}", name);
              }
            },
            notValid: {
              content: "'{{url}}' is not a valid plugin URL",
              replace: function(url) {
                return this.content.replace("{{url}}", url);
              }
            },
            install: "Install"
          }
        }
      };
      var i18n = new Proxy(exports.languages[navigator.language.split("-", 1)[0]], {
        get: (target, key) => {
          const lang = navigator.language.split("-", 1)[0];
          return exports.languages.global[key] || exports.languages[lang][key] || exports.languages.en[key] || key;
        }
      });
      exports.default = i18n;
    }
  });

  // tsBuild/dashboard.js
  var require_dashboard = __commonJS({
    "tsBuild/dashboard.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var react_1 = require_react();
      var util_1 = require_util();
      var getModule_1 = __importDefault(require_getModule());
      var patcher_1 = __importDefault(require_patcher());
      var i18n_1 = __importDefault(require_i18n());
      var storage_1 = require_storage();
      var DrIcon = react_1.React.memo(() => react_1.React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 22 22" }, react_1.React.createElement("path", { d: "M11.1903 7.802C11.1903 8.426 11.1003 9.092 10.9203 9.8C10.7403 10.496 10.4883 11.192 10.1643 11.888C9.84032 12.572 9.43832 13.232 8.95832 13.868C8.49032 14.492 7.95632 15.044 7.35632 15.524C6.75632 15.992 6.09632 16.37 5.37632 16.658C4.66832 16.946 3.91232 17.09 3.10832 17.09C2.94032 17.09 2.77232 17.078 2.60432 17.054C2.43632 17.042 2.26832 17.024 2.10032 17C2.42432 15.344 2.74232 13.73 3.05432 12.158C3.17432 11.498 3.30032 10.814 3.43232 10.106C3.56432 9.386 3.69032 8.678 3.81032 7.982C3.93032 7.286 4.04432 6.62 4.15232 5.984C4.27232 5.348 4.36832 4.772 4.44032 4.256C4.95632 4.16 5.47832 4.07 6.00632 3.986C6.53432 3.902 7.07432 3.86 7.62632 3.86C8.27432 3.86 8.82032 3.962 9.26432 4.166C9.72032 4.37 10.0863 4.652 10.3623 5.012C10.6503 5.372 10.8603 5.792 10.9923 6.272C11.1243 6.752 11.1903 7.262 11.1903 7.802ZM6.94232 6.398C6.81032 7.106 6.67232 7.784 6.52832 8.432C6.38432 9.08 6.24032 9.734 6.09632 10.394C5.95232 11.054 5.80832 11.744 5.66432 12.464C5.52032 13.184 5.38232 13.97 5.25032 14.822C5.53832 14.63 5.81432 14.372 6.07832 14.048C6.35432 13.712 6.61232 13.328 6.85232 12.896C7.09232 12.464 7.30832 12.008 7.50032 11.528C7.70432 11.048 7.87832 10.58 8.02232 10.124C8.16632 9.668 8.27432 9.242 8.34632 8.846C8.43032 8.45 8.47232 8.108 8.47232 7.82C8.47232 7.376 8.34632 7.028 8.09432 6.776C7.85432 6.524 7.47032 6.398 6.94232 6.398ZM10.0456 17.018C10.3696 15.422 10.6816 13.862 10.9816 12.338C11.0896 11.69 11.2096 11.018 11.3416 10.322C11.4736 9.614 11.5936 8.918 11.7016 8.234C11.8216 7.538 11.9296 6.872 12.0256 6.236C12.1336 5.588 12.2176 5 12.2776 4.472C12.9616 4.256 13.6996 4.1 14.4916 4.004C15.2836 3.896 16.0696 3.842 16.8496 3.842C17.3176 3.842 17.7016 3.896 18.0016 4.004C18.3136 4.112 18.5536 4.268 18.7216 4.472C18.9016 4.664 19.0276 4.892 19.0996 5.156C19.1716 5.42 19.2076 5.714 19.2076 6.038C19.2076 6.518 19.1236 6.992 18.9556 7.46C18.7876 7.916 18.5596 8.354 18.2716 8.774C17.9956 9.182 17.6716 9.56 17.2996 9.908C16.9396 10.244 16.5496 10.52 16.1296 10.736C16.3456 11.216 16.5736 11.744 16.8136 12.32C17.0656 12.884 17.2996 13.424 17.5156 13.94C17.7556 14.54 18.0016 15.14 18.2536 15.74L15.4636 16.712C15.2236 15.944 15.0076 15.224 14.8156 14.552C14.7316 14.276 14.6476 13.994 14.5636 13.706C14.4796 13.406 14.4016 13.124 14.3296 12.86C14.2576 12.596 14.1976 12.362 14.1496 12.158C14.1016 11.942 14.0716 11.768 14.0596 11.636L13.8256 11.708C13.7536 12.092 13.6636 12.542 13.5556 13.058C13.4596 13.574 13.3696 14.072 13.2856 14.552C13.1776 15.116 13.0696 15.686 12.9616 16.262L10.0456 17.018ZM14.2756 9.206C14.5036 9.182 14.7796 9.086 15.1036 8.918C15.4396 8.75 15.7576 8.552 16.0576 8.324C16.3576 8.084 16.6156 7.838 16.8316 7.586C17.0476 7.334 17.1556 7.112 17.1556 6.92C17.1556 6.788 17.1136 6.686 17.0296 6.614C16.9456 6.53 16.8256 6.47 16.6696 6.434C16.5256 6.386 16.3636 6.356 16.1836 6.344C16.0036 6.332 15.8176 6.326 15.6256 6.326C15.4936 6.326 15.3556 6.332 15.2116 6.344C15.0796 6.344 14.9596 6.344 14.8516 6.344L14.2756 9.206Z", fill: "currentcolor" })));
      var PanelDispatch = () => {
      };
      var { LinkButton } = (0, getModule_1.default)(["LinkButton"]);
      var DrDashboardButton = react_1.React.memo(({ children }) => {
        const [isSelected, setSelected] = react_1.React.useState(false);
        PanelDispatch = (val) => setSelected(val);
        const selectedChild = children.find((e) => e?.props?.selected);
        return react_1.React.createElement(LinkButton, { text: i18n_1.default.name, icon: () => react_1.React.createElement(DrIcon, null), route: "/dr_dashboard", selected: isSelected, onFocus: () => {
          if (selectedChild)
            selectedChild.props.selected = false;
        } });
      });
      var SwitchOrig = (0, getModule_1.default)("SwitchItem").default;
      var SwitchItem = react_1.React.memo((props) => {
        const { value, onChange = () => {
        }, title, note, disabled = false, initialChange = true } = props;
        const [checked, setChecked] = react_1.React.useState(value);
        return react_1.React.createElement(SwitchOrig, { value: checked, onChange: () => {
          if (initialChange)
            setChecked(!checked);
          onChange(!checked, setChecked);
        }, note, disabled }, title);
      });
      patcher_1.default.after("router-routes", (0, getModule_1.default)("ConnectedPrivateChannelsList"), "default", (_, res) => {
        const children = res.props.children.props.children;
        PanelDispatch(/^\/dr_dashboard/.test(location.pathname));
        if (children.find((e) => e && e.key === "drdashLinkButton"))
          return;
        children.unshift(react_1.React.createElement(DrDashboardButton, { key: "drdashLinkButton" }, children));
      });
      var Views = (0, getModule_1.default)("FluxContainer(ViewsWithMainInterface)").default?.prototype?.render?.call({ memoizedGetStateFromStores: () => ({}) })?.type;
      patcher_1.default.after("router-routes", Views?.prototype, "render", (_, res) => {
        const routes = res.props.children[0].props.children[1];
        routes[routes.length - 1].props.path.push("/dr_dashboard");
      });
      var { content } = (0, getModule_1.default)(["chat", "uploadArea", "threadSidebarOpen"]);
      var { auto } = (0, getModule_1.default)(["scrollerBase"]);
      var { container } = (0, getModule_1.default)(["container", "downloadProgressCircle"]);
      (0, util_1.waitUntil)(() => document.querySelector(`.${container}`)).then((domNode) => {
        const Router = (0, util_1.getOwnerInstance)(domNode);
        const Route = (0, getModule_1.default)("RouteWithImpression").default;
        patcher_1.default.after("router-routes", Router?.props?.children, "type", (_, res) => {
          const { children } = (0, util_1.findInReactTree)(res, (m) => Array.isArray(m.children) && m.children.length > 5);
          const Header = (0, getModule_1.default)(["Caret", "Icon", "defaultProps"]);
          children.push(react_1.React.createElement(Route, { path: "/dr_dashboard", impressionName: "dr_dashboard", disableTrack: true, render: () => react_1.React.createElement("div", { className: (0, getModule_1.default)(["maxWidthWithToolbar", "container", "inviteToolbar"]).container }, react_1.React.createElement(Header, { toolbar: react_1.React.createElement(react_1.React.Fragment, null) }, react_1.React.createElement(Header.Icon, { icon: () => react_1.React.createElement(DrIcon, null) }), react_1.React.createElement(Header.Title, null, i18n_1.default.name)), react_1.React.createElement("div", { className: content }, react_1.React.createElement("div", { className: auto, style: { padding: "16px 12px" } }, react_1.React.createElement(SwitchItem, { value: storage_1.internal.get("devMode") ?? false, title: i18n_1.default.devMode.title, note: i18n_1.default.devMode.note, onChange: (val) => {
            storage_1.internal.set("devMode", val);
            (0, getModule_1.default)(["isDeveloper"]).isDeveloper = val;
          } })))) }));
        });
        Router.forceUpdate();
        const { app } = (0, getModule_1.default)(["app"]);
        (0, util_1.waitUntil)(() => document.querySelector(`.${app}`)).then((domNode2) => {
          domNode2 = (0, util_1.getOwnerInstance)(domNode2)?._reactInternals;
          (0, util_1.findInTree)(domNode2, (n) => n?.historyUnlisten, { walkable: ["child", "stateNode"] }).forceUpdate();
        });
      });
    }
  });

  // tsBuild/index.js
  var require_tsBuild = __commonJS({
    "tsBuild/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      if (location.pathname.startsWith("/dr_dashboard"))
        location.pathname = "/app";
      if (Boolean(window.DrApi))
        throw new Error("Discord Re-envisioned is already loaded.");
      var react_1 = require_react();
      var patcher_1 = __importDefault(require_patcher());
      var getModule_1 = __importStar(require_getModule());
      var styling_1 = require_styling();
      var toast_1 = __importDefault(require_toast());
      var util_1 = require_util();
      var storage_1 = require_storage();
      var addonManager_1 = __importDefault(require_addonManager());
      var actions_1 = require_actions();
      require_dashboard();
      Start();
      var __DR__BACKEND__ = Object.assign({
        devMode: storage_1.internal.get("devMode") ?? false,
        require: function() {
          throw new Error("tried using require on WEB!");
        },
        app: false
      }, window.__DR__BACKEND__ || {});
      window.__DR__BACKEND__ = __DR__BACKEND__;
      async function Start() {
        Object.defineProperty((0, getModule_1.default)(["isDeveloper"]), "isDeveloper", {
          get: () => __DR__BACKEND__.devMode,
          set: (val) => __DR__BACKEND__.devMode = val
        });
        await (0, util_1.waitUntil)(() => document.querySelector(".container-YkUktl"));
        const Plugins = await addonManager_1.default.plugins();
        const themes = addonManager_1.default.themes();
        window.DrApi = {
          getModule: getModule_1.default,
          asyncGetModule: getModule_1.asyncGetModule,
          findInReactTree: util_1.findInReactTree,
          findInTree: util_1.findInTree,
          patcher: {
            before: function(id, module2, functionToPatch, callback, opts = {}) {
              return patcher_1.default.before(id, module2, functionToPatch, callback, Object.assign({}, opts));
            },
            instead: function(id, module2, functionToPatch, callback, opts = {}) {
              return patcher_1.default.instead(id, module2, functionToPatch, callback, Object.assign({}, opts));
            },
            after: function(id, module2, functionToPatch, callback, opts = {}) {
              return patcher_1.default.after(id, module2, functionToPatch, callback, Object.assign({}, opts));
            },
            patch: function(id, module2, functionToPatch, callback, opts = {}) {
              return patcher_1.default.patch(id, module2, functionToPatch, callback, Object.assign({}, opts));
            },
            quick: function(module2, functionToPatch, callback, opts = {}) {
              return patcher_1.default.quick(module2, functionToPatch, callback, opts);
            },
            unpatchAll: function(id) {
              return patcher_1.default.unpatchAll(id);
            },
            patches: patcher_1.default.patches
          },
          actions: {
            dispatch: function(name, ...args) {
              return (0, actions_1.dispatch)(name, ...args);
            },
            register: function(name, callback) {
              return (0, actions_1.register)(name, callback);
            },
            unregister: function(name) {
              return (0, actions_1.unregister)(name);
            }
          },
          styling: {
            inject: function(id, css) {
              return styling_1.pluginStyling.inject(id, css);
            },
            update: function(id, css) {
              return styling_1.pluginStyling.update(id, css);
            },
            uninject: function(id) {
              return styling_1.pluginStyling.uninject(id);
            },
            getClasses: function(css) {
              return styling_1.pluginStyling.getClasses(css);
            }
          },
          Plugins: {
            get: function(name) {
              return Plugins.get(name);
            },
            getAll: () => Plugins.getAll(),
            isEnabled: function(name) {
              return Plugins.isEnabled(name);
            },
            disable: function(name) {
              return Plugins.disable(name);
            },
            enable: function(name) {
              return Plugins.enable(name);
            },
            toggle: function(name) {
              return Plugins.toggle(name);
            }
          },
          Themes: {
            get: function(name) {
              return themes.get(name);
            },
            getAll: () => themes.getAll(),
            isEnabled: function(name) {
              return themes.isEnabled(name);
            },
            disable: function(name) {
              return themes.disable(name);
            },
            enable: function(name) {
              return themes.enable(name);
            },
            toggle: function(name) {
              return themes.toggle(name);
            }
          },
          showConfirmationModal: function(title, content, opts = {}) {
            return (0, util_1.showConfirmationModal)(title, content, opts);
          },
          prompt: async function(title, defaultValue) {
            return await (0, util_1.prompt)(title, defaultValue);
          },
          toast: function(text, opts = {}) {
            return (0, toast_1.default)(text, opts);
          },
          React: react_1.React,
          ReactDOM: react_1.ReactDOM,
          storage: {
            get: function(plugin, key) {
              return storage_1.plugins.get(plugin, key);
            },
            set: function(plugin, key, data) {
              return storage_1.plugins.set(plugin, key, data);
            }
          },
          getInstance: {
            owner: function(element) {
              return (0, util_1.getOwnerInstance)(element);
            },
            react: function(element) {
              return (0, util_1.getReactInstance)(element);
            }
          }
        };
      }
    }
  });
  require_tsBuild();
})();
