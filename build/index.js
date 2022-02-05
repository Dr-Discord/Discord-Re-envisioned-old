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
      exports.showConfirmationModal = exports.getOwnerInstance = exports.getReactInstance = exports.waitUntil = exports.sleep = void 0;
      var react_1 = __importDefault(require_react());
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
        content = content.map((c) => typeof c === "string" ? react_1.default.createElement(Markdown, null, c) : c);
        openModal((props) => react_1.default.createElement(ConfirmationModal, { ...props, header: title, content, onConfirm, onCancel, confirmText, cancelText, confirmButtonColor: danger ? Button.ButtonColors.RED : Button.ButtonColors.BRAND }, content));
      }
      exports.showConfirmationModal = showConfirmationModal;
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
        const matches = css.match(/#{(("[A-z]+")((, )|)){1,3}}/g);
        if (!matches)
          return css;
        for (const styl of matches) {
          const arr = JSON.parse(styl.replace("#{", "[").replace("}", "]"));
          css = css.replace(styl, `.${(0, getModule_1.default)(arr, true)[arr[0]].replaceAll(" ", ".")}`);
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
  width: fit-content;
}
.dr-toast.adding {
  opacity: 0
}
.dr-toast.removing {
  opacity: 0
}
.dr-toast:not(:last-child) {
  margin-bottom: 5px
}
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
.dr-toast-type.success {
  background-color: var(--info-positive-foreground);
}
.dr-toast-type.error {
  background-color: var(--info-danger-foreground);
}
.dr-toast-type.info {
  background-color: var(--brand-experiment);
}
.dr-toast-type.warning {
  background-color: var(--info-warning-foreground);
}
.dr-toast-message {
  display: inline-block;
  user-select: text;
}
.dr-toast-message-wrapper {
  flex: 1;
  padding: 12px 6px 12px 3px;
  position: relative;
}
.dr-toast-close {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 2px 10px 0;
  user-select: none;
  color: var(--interactive-normal);
  position: relative;
  font-size: 14px;
}
.dr-toast-close:hover {
  color: var(--interactive-hover);
  background-color: var(--background-modifier-hover);
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
        if (!autoClose && !closeButton)
          throw new Error("You can't have autoClose and closeButton disabled");
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
          minimalMode: {
            title: "Minimal Mode",
            note: "Minimal mode makes discord more compact."
          },
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

  // tsBuild/ui/settings.js
  var require_settings = __commonJS({
    "tsBuild/ui/settings.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var react_1 = __importDefault(require_react());
      var getModule_1 = __importDefault(require_getModule());
      var patcher_1 = __importDefault(require_patcher());
      var storage_1 = require_storage();
      var styling_1 = require_styling();
      var i18n_1 = __importDefault(require_i18n());
      styling_1.internalStyling.inject("settings", `
.dr-addons-list {
  padding: 16px 0
}
.dr-addon-card {
  border: 2px solid var(--background-floating);
  border-radius: 8px;
  padding: 8px;
  background-color: var(--background-secondary);
}
.dr-addon-card:hover {
  background-color: var(--background-secondary-alt);
}

.dr-addon-card-header-top {
  display: flex;
  position: relative;
  width: fit-content;
}
.dr-addon-card-header-name {
  font-size: 23px;
  color: var(--text-normal);
}
.dr-addon-card-header-version {
  color: var(--text-muted);
  position: absolute;
  right: 0;
  transform: translateX(calc(100% + 8px));
  bottom: 0;
}
.dr-addon-card-header-bottom {
  color: var(--text-normal);
  padding-top: 3px;
  font-size: 14px;
}
.dr-addon-card-body {
  padding: 8px 0
}
.dr-addon-card-footer {
  display: flex;
}
.dr-addon-card-footer-right {
  margin-left: auto;
}
.dr-addon-card-footer-right {
  display: flex;
}
.dr-addon-card-footer-settings {
  margin-right: 8px;
}
.dr-addon-card-footer-toggle {
  transform: translateY(calc(50% - 12px));
}
`);
      var FluxDispatcher = (0, getModule_1.default)(["dirtyDispatch", "dispatch"]);
      var FormSection = (0, getModule_1.default)("FormSection").default;
      var Text = (0, getModule_1.default)("Text").default;
      var SwitchOrig = (0, getModule_1.default)("SwitchItem").default;
      var Switch = (0, getModule_1.default)("Switch").default;
      var Flex = (0, getModule_1.default)("Flex").default;
      var TextInput = (0, getModule_1.default)("TextInput").default;
      var Tooltip = (0, getModule_1.default)("Tooltip").default;
      var Button = (0, getModule_1.default)(["ButtonColors"]).default;
      var Trash = (0, getModule_1.default)("Trash").default;
      var Gear = (0, getModule_1.default)("Gear").default;
      var Markdown = (0, getModule_1.default)((m) => m.default?.displayName === "Markdown" && m.default.rules).default;
      var { ActionTypes } = (0, getModule_1.default)(["ActionTypes"]);
      function openUserModal(userId) {
        if (!userId)
          return;
        FluxDispatcher.dirtyDispatch({
          type: ActionTypes.USER_PROFILE_MODAL_OPEN,
          userId
        });
      }
      function readMeta(contents) {
        let meta = {};
        let jsdoc = contents.match(/\/\*\*([\s\S]*?)\*\//);
        if (!jsdoc?.[1])
          return meta;
        for (let ite of jsdoc[1].match(/\*\s([^\n]*)/g)) {
          ite = ite.replace(/\*( +|)@/, "");
          let split = ite.split(" ");
          let key = split[0];
          let value = split.slice(1).join(" ");
          meta[key] = value;
        }
        return meta;
      }
      var SwitchItem = react_1.default.memo((props) => {
        const { value, onChange = () => {
        }, title, note, disabled = false, initialChange = true } = props;
        const [checked, setChecked] = react_1.default.useState(value);
        return react_1.default.createElement(SwitchOrig, { value: checked, onChange: () => {
          if (initialChange)
            setChecked(!checked);
          onChange(!checked, setChecked);
        }, note, disabled }, title);
      });
      var AddonCard = react_1.default.memo((props) => {
        const [enabled, setEnabled] = react_1.default.useState(DrApi.Plugins.isEnabled(props.name));
        return react_1.default.createElement("div", { className: "dr-addon-card" }, react_1.default.createElement("div", { className: "dr-addon-card-header" }, react_1.default.createElement("div", { className: "dr-addon-card-header-top" }, react_1.default.createElement("div", { className: "dr-addon-card-header-name" }, props.name), react_1.default.createElement("div", { className: "dr-addon-card-header-version" }, props.version)), react_1.default.createElement("div", { className: "dr-addon-card-header-bottom" }, react_1.default.createElement("div", { className: "dr-addon-card-header-Author", onClick: () => Boolean(props.authorId) && openUserModal(props.authorId) }, props.author))), react_1.default.createElement("div", { className: "dr-addon-card-body" }, react_1.default.createElement(Markdown, { className: "dr-addon-card-body-description" }, props.description)), react_1.default.createElement("div", { className: "dr-addon-card-footer" }, react_1.default.createElement("div", { className: "dr-addon-card-footer-left" }, react_1.default.createElement(Tooltip, { text: i18n_1.default.uninstall }, (ttProps) => react_1.default.createElement(Button, { ...ttProps, size: Button.Sizes.ICON, color: Button.Colors.RED }, react_1.default.createElement(Trash, null)))), react_1.default.createElement("div", { className: "dr-addon-card-footer-right" }, react_1.default.createElement("div", { className: "dr-addon-card-footer-settings" }, react_1.default.createElement(Tooltip, { text: i18n_1.default.settings }, (ttProps) => react_1.default.createElement(Button, { ...ttProps, size: Button.Sizes.ICON, color: Button.Colors.BRAND_NEW }, react_1.default.createElement(Gear, null)))), react_1.default.createElement("div", { className: "dr-addon-card-footer-toggle" }, react_1.default.createElement(Switch, { checked: enabled, onChange: (val) => {
          setEnabled(val);
          DrApi.Plugins.toggle(props.name);
        } })))));
      });
      function tab(name, Element) {
        return {
          section: `DR_SETTINGS_${name.toUpperCase()}`,
          label: name,
          element: () => react_1.default.createElement(FormSection, { title: name, tag: FormSection.Tags.H1 }, react_1.default.createElement(Element, null))
        };
      }
      patcher_1.default.after("DrInternal-Settings-Patch", (0, getModule_1.default)("SettingsView").default.prototype, "getPredicateSections", (_, res) => {
        const num = res.indexOf(res.find((e) => e && e.section === "Connections")) + 1;
        if (num === 0)
          return;
        res.splice(num, 0, ...[
          { section: "DIVIDER" },
          { section: "HEADER", label: i18n_1.default.name },
          tab(i18n_1.default.settingTabs.general, react_1.default.memo(() => {
            return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(SwitchItem, { value: document.body.classList.contains("dr-minimal-mode"), title: i18n_1.default.minimalMode.title, note: i18n_1.default.minimalMode.note, onChange: (val) => {
              storage_1.internal.set("minimalMode", val);
              document.body.classList.toggle("dr-minimal-mode");
            } }), react_1.default.createElement(SwitchItem, { value: storage_1.internal.get("devMode") ?? false, title: i18n_1.default.devMode.title, note: i18n_1.default.devMode.note, onChange: (val) => {
              storage_1.internal.set("devMode", val);
              (0, getModule_1.default)(["isDeveloper"]).isDeveloper = val;
            } }));
          })),
          tab(i18n_1.default.settingTabs.plugins, react_1.default.memo(() => {
            const [pluginURL, setPluginURL] = react_1.default.useState("");
            return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(Flex, null, react_1.default.createElement(Flex.Child, { grow: 2 }, react_1.default.createElement("div", null, react_1.default.createElement(TextInput, { placeholder: "https://example.com/plugin.js", value: pluginURL, onChange: setPluginURL }))), react_1.default.createElement(Flex.Child, { grow: 0 }, react_1.default.createElement(Button, { onClick: async () => {
              if (!/(https|http):\/\/([A-z]+\.|)([A-z]+(:[0-9]+|\.[A-z]+))(\/\S+){1,}(\.js)/.test(pluginURL))
                return setPluginURL(i18n_1.default.installing.notValid.replace(pluginURL));
              const text = await fetch(pluginURL).then((res2) => res2.text());
              const meta = readMeta(text);
              if (!meta)
                return setPluginURL("ERROR");
              const urls = storage_1.internal.get("addonURLS") ?? [];
              if (!urls.plugins)
                urls.plugins = [];
              if (urls.plugins.includes(pluginURL))
                return setPluginURL(i18n_1.default.installing.alreadyInstalled.replace(pluginURL));
              urls.plugins.push(pluginURL);
              storage_1.internal.set("addonURLS", { ...urls });
              setPluginURL(i18n_1.default.installing.installed.replace(meta.name));
            } }, i18n_1.default.installing.install))), react_1.default.createElement("div", { className: "dr-addons-list" }, Array.from(DrApi.Plugins.getAll().map((e) => react_1.default.createElement(AddonCard, { ...e })))));
          })),
          tab(i18n_1.default.settingTabs.themes, react_1.default.memo(() => {
            return react_1.default.createElement(Text, null, "Themes");
          }))
        ]);
      });
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
      if (Boolean(window.DrApi))
        throw new Error("Discord Re-envisioned is already loaded.");
      var react_1 = require_react();
      var patcher_1 = __importDefault(require_patcher());
      var getModule_1 = __importStar(require_getModule());
      var styling_1 = require_styling();
      var toast_1 = __importDefault(require_toast());
      var util_1 = require_util();
      var storage_1 = require_storage();
      require_settings();
      var addonManager_1 = __importDefault(require_addonManager());
      styling_1.internalStyling.inject("minimal-mode", styling_1.internalStyling.getClasses(`
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
}`));
      Start();
      var backend = {
        devMode: storage_1.internal.get("devMode") ?? false
      };
      async function Start() {
        if (storage_1.internal.get("minimalMode") ?? false)
          document.body.classList.toggle("dr-minimal-mode");
        Object.defineProperty((0, getModule_1.default)(["isDeveloper"]), "isDeveloper", {
          get: () => backend.devMode,
          set: (val) => backend.devMode = val
        });
        await (0, util_1.waitUntil)(() => document.querySelector(".container-YkUktl"));
        const Plugins = await addonManager_1.default.plugins();
        const themes = addonManager_1.default.themes();
        window.DrApi = {
          getModule: getModule_1.default,
          asyncGetModule: getModule_1.asyncGetModule,
          patcher: {
            before: (id, module2, functionToPatch, callback, opts = {}) => patcher_1.default.before(id, module2, functionToPatch, callback, Object.assign({}, opts)),
            instead: (id, module2, functionToPatch, callback, opts = {}) => patcher_1.default.instead(id, module2, functionToPatch, callback, Object.assign({}, opts)),
            after: (id, module2, functionToPatch, callback, opts = {}) => patcher_1.default.after(id, module2, functionToPatch, callback, Object.assign({}, opts)),
            patch: (id, module2, functionToPatch, callback, opts = {}) => patcher_1.default.patch(id, module2, functionToPatch, callback, Object.assign({}, opts)),
            quick: (module2, functionToPatch, callback, opts = {}) => patcher_1.default.quick(module2, functionToPatch, callback, opts),
            unpatchAll: (id) => patcher_1.default.unpatchAll(id),
            patches: patcher_1.default.patches
          },
          styling: {
            inject: (id, css) => styling_1.pluginStyling.inject(id, css),
            update: (id, css) => styling_1.pluginStyling.update(id, css),
            uninject: (id) => styling_1.pluginStyling.uninject(id),
            getClasses: (css) => styling_1.pluginStyling.getClasses(css)
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
          showConfirmationModal: (title, content, opts = {}) => (0, util_1.showConfirmationModal)(title, content, opts),
          toast: (text, opts = {}) => (0, toast_1.default)(text, opts),
          React: react_1.React,
          ReactDOM: react_1.ReactDOM,
          storage: {
            get: (plugin, key) => storage_1.plugins.get(plugin, key),
            set: (plugin, key, data) => storage_1.plugins.set(plugin, key, data)
          },
          getOwnerInstance: (element) => (0, util_1.getOwnerInstance)(element),
          getReactInstance: (element) => (0, util_1.getReactInstance)(element)
        };
      }
    }
  });
  require_tsBuild();
})();
