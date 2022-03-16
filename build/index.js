(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

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
          toggleTransparency: {
            title: "Toggle Transparency",
            note: "Warning this will braek window snapping!"
          },
          badges: {
            developer: "Dr-Developer",
            tester: "Dr-Tester"
          },
          settingTabs: {
            general: "General",
            plugins: "Plugins",
            themes: "Themes",
            customcss: "Custom CSS"
          },
          customCSS: {
            title: "Custom CSS",
            popout: "Popout",
            settings: "CSS Settings",
            changeTheme: "Change Theme"
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

  // tsBuild/logger.js
  var require_logger = __commonJS({
    "tsBuild/logger.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.cache = void 0;
      var i18n_1 = __importDefault(require_i18n());
      function getOriginal(type) {
        const original = console[type];
        if (original?.__sentry_original__)
          return original.__sentry_original__;
        if (original?.__REACT_DEVTOOLS_ORIGINAL_METHOD__)
          return original.__REACT_DEVTOOLS_ORIGINAL_METHOD__;
        return original;
      }
      function getIcon(color) {
        return btoa(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M11.1903 7.802C11.1903 8.426 11.1003 9.092 10.9203 9.8C10.7403 10.496 10.4883 11.192 10.1643 11.888C9.84032 12.572 9.43832 13.232 8.95832 13.868C8.49032 14.492 7.95632 15.044 7.35632 15.524C6.75632 15.992 6.09632 16.37 5.37632 16.658C4.66832 16.946 3.91232 17.09 3.10832 17.09C2.94032 17.09 2.77232 17.078 2.60432 17.054C2.43632 17.042 2.26832 17.024 2.10032 17C2.42432 15.344 2.74232 13.73 3.05432 12.158C3.17432 11.498 3.30032 10.814 3.43232 10.106C3.56432 9.386 3.69032 8.678 3.81032 7.982C3.93032 7.286 4.04432 6.62 4.15232 5.984C4.27232 5.348 4.36832 4.772 4.44032 4.256C4.95632 4.16 5.47832 4.07 6.00632 3.986C6.53432 3.902 7.07432 3.86 7.62632 3.86C8.27432 3.86 8.82032 3.962 9.26432 4.166C9.72032 4.37 10.0863 4.652 10.3623 5.012C10.6503 5.372 10.8603 5.792 10.9923 6.272C11.1243 6.752 11.1903 7.262 11.1903 7.802ZM6.94232 6.398C6.81032 7.106 6.67232 7.784 6.52832 8.432C6.38432 9.08 6.24032 9.734 6.09632 10.394C5.95232 11.054 5.80832 11.744 5.66432 12.464C5.52032 13.184 5.38232 13.97 5.25032 14.822C5.53832 14.63 5.81432 14.372 6.07832 14.048C6.35432 13.712 6.61232 13.328 6.85232 12.896C7.09232 12.464 7.30832 12.008 7.50032 11.528C7.70432 11.048 7.87832 10.58 8.02232 10.124C8.16632 9.668 8.27432 9.242 8.34632 8.846C8.43032 8.45 8.47232 8.108 8.47232 7.82C8.47232 7.376 8.34632 7.028 8.09432 6.776C7.85432 6.524 7.47032 6.398 6.94232 6.398ZM10.0456 17.018C10.3696 15.422 10.6816 13.862 10.9816 12.338C11.0896 11.69 11.2096 11.018 11.3416 10.322C11.4736 9.614 11.5936 8.918 11.7016 8.234C11.8216 7.538 11.9296 6.872 12.0256 6.236C12.1336 5.588 12.2176 5 12.2776 4.472C12.9616 4.256 13.6996 4.1 14.4916 4.004C15.2836 3.896 16.0696 3.842 16.8496 3.842C17.3176 3.842 17.7016 3.896 18.0016 4.004C18.3136 4.112 18.5536 4.268 18.7216 4.472C18.9016 4.664 19.0276 4.892 19.0996 5.156C19.1716 5.42 19.2076 5.714 19.2076 6.038C19.2076 6.518 19.1236 6.992 18.9556 7.46C18.7876 7.916 18.5596 8.354 18.2716 8.774C17.9956 9.182 17.6716 9.56 17.2996 9.908C16.9396 10.244 16.5496 10.52 16.1296 10.736C16.3456 11.216 16.5736 11.744 16.8136 12.32C17.0656 12.884 17.2996 13.424 17.5156 13.94C17.7556 14.54 18.0016 15.14 18.2536 15.74L15.4636 16.712C15.2236 15.944 15.0076 15.224 14.8156 14.552C14.7316 14.276 14.6476 13.994 14.5636 13.706C14.4796 13.406 14.4016 13.124 14.3296 12.86C14.2576 12.596 14.1976 12.362 14.1496 12.158C14.1016 11.942 14.0716 11.768 14.0596 11.636L13.8256 11.708C13.7536 12.092 13.6636 12.542 13.5556 13.058C13.4596 13.574 13.3696 14.072 13.2856 14.552C13.1776 15.116 13.0696 15.686 12.9616 16.262L10.0456 17.018ZM14.2756 9.206C14.5036 9.182 14.7796 9.086 15.1036 8.918C15.4396 8.75 15.7576 8.552 16.0576 8.324C16.3576 8.084 16.6156 7.838 16.8316 7.586C17.0476 7.334 17.1556 7.112 17.1556 6.92C17.1556 6.788 17.1136 6.686 17.0296 6.614C16.9456 6.53 16.8256 6.47 16.6696 6.434C16.5256 6.386 16.3636 6.356 16.1836 6.344C16.0036 6.332 15.8176 6.326 15.6256 6.326C15.4936 6.326 15.3556 6.332 15.2116 6.344C15.0796 6.344 14.9596 6.344 14.8516 6.344L14.2756 9.206Z" fill="${color}"></path></svg>`);
      }
      function ifDark(yes, no, force) {
        function bool(condition) {
          return condition ? yes : no;
        }
        if (typeof force === "boolean")
          return bool(force);
        return bool(matchMedia("(prefers-color-scheme: dark)").matches);
      }
      exports.cache = {};
      exports.default = new Proxy(exports.cache, {
        get: (_, prop) => {
          const log = (...input) => {
            let firstArgIsString = typeof input[0] === "string";
            let lastArgs = firstArgIsString ? [`
${input[0]}`, ...input.slice(1)] : ["\n", ...input];
            getOriginal(prop)(`%cDR%c${i18n_1.default.name}`, `background-image:url(data:image/svg+xml;base64,${getIcon(ifDark("#202124", "#fff"))}); color: transparent; background-size: 24px; background-repeat: no-repeat; padding: 5px; background-color: #F52590; border-radius: 4px`, `background: #F52590; margin-left: 5px; margin-bottom: 9px; padding: 2px; border-radius: 4px; color: ${ifDark("#202124", "#fff")}`, ...lastArgs);
          };
          exports.cache[prop] = log;
          return log;
        }
      });
    }
  });

  // tsBuild/getModule.js
  var require_getModule = __commonJS({
    "tsBuild/getModule.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.asyncGetModule = void 0;
      var webpackExports = !webpackChunkdiscord_app.webpackExports ? webpackChunkdiscord_app.push([
        [Symbol("Discord Re-envisioned")],
        {},
        (exp) => {
          webpackChunkdiscord_app.pop();
          webpackChunkdiscord_app.webpackExports = exp;
          return exp;
        }
      ]) : webpackChunkdiscord_app.webpackExports;
      function find(filter) {
        let modules = [];
        for (let ite in webpackExports.c) {
          if (!Object.hasOwnProperty.call(webpackExports.c, ite))
            continue;
          let ele = webpackExports.c[ite].exports;
          if (!ele)
            continue;
          if (filter(ele))
            modules.push(ele);
        }
        return modules;
      }
      function byPropsAll(...props) {
        const norm = find((m) => props.every((prop) => typeof m[prop] !== "undefined"));
        const def = find((m) => props.every((prop) => typeof m.default?.[prop] !== "undefined")).map((m) => m.default);
        return [...norm, ...def];
      }
      function byDisplayName(displayName) {
        const norm = find((m) => m.default?.displayName === displayName);
        const type = find((m) => m.default?.type?.displayName === displayName);
        const rend = find((m) => m.default?.type?.render?.displayName === displayName);
        return [...norm, ...type, ...rend];
      }
      function getModule(filter, first = true) {
        let modules = [];
        if (Array.isArray(filter))
          modules = byPropsAll(...filter);
        else if (typeof filter === "string")
          modules = byDisplayName(filter);
        else if (typeof filter === "number")
          modules = [webpackExports.c[filter]];
        else if (typeof filter === "function")
          modules = find(filter);
        if (first)
          return modules[0];
        return modules;
      }
      exports.default = getModule;
      var listeners = new Set();
      var __ORIGINAL_PUSH__ = webpackChunkdiscord_app.push;
      function handlePush(chunk) {
        const [, modules] = chunk;
        for (const id in modules) {
          const originalModule = modules[id];
          modules[id] = (module2, exports2, require2) => {
            Reflect.apply(originalModule, null, [module2, exports2, require2]);
            for (const ite of [...listeners])
              ite(exports2);
          };
          Object.assign(modules[id], originalModule, {
            toString: () => originalModule.toString()
          });
        }
        return __ORIGINAL_PUSH__.apply(window.webpackChunkdiscord_app, [chunk]);
      }
      Object.defineProperty(webpackChunkdiscord_app, "push", {
        configurable: true,
        get: () => handlePush,
        set: (newPush) => {
          __ORIGINAL_PUSH__ = newPush;
          Object.defineProperty(webpackChunkdiscord_app, "push", {
            value: handlePush,
            configurable: true,
            writable: true
          });
        }
      });
      function asyncGetModule(filter) {
        return new Promise((resolve, reject) => {
          if (typeof filter !== "function")
            return reject(`Filter has to be a function, cannot be '${typeof filter}'`);
          const cached = getModule(filter);
          if (cached)
            return resolve(cached);
          function listener(m) {
            const directMatch = filter(m);
            if (!directMatch)
              return;
            listeners.delete(listener);
            resolve(m);
          }
          listeners.add(listener);
        });
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
      exports.ReactSpring = exports.ReactDOM = exports.React = void 0;
      var getModule_1 = __importDefault(require_getModule());
      exports.React = (0, getModule_1.default)(["createElement", "Component"]);
      exports.ReactDOM = (0, getModule_1.default)(["render", "findDOMNode"]);
      exports.ReactSpring = (0, getModule_1.default)(["useSpring", "animated"]);
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
        let { method = "after", id, once = false, index = 0 } = opts;
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
        patches[method].splice(index, 0, Object.assign(callback, { unpatch, Symbol: CallbackSymbol }));
        let DidUnpatch = false;
        function unpatch() {
          if (DidUnpatch)
            return;
          DidUnpatch = true;
          let found = patches[method].find((p) => p.Symbol === patchInfo.Symbol);
          let index2 = patches[method].indexOf(found);
          patches[method].splice(index2, 1);
          found = ALLpatches[patchName].find((p) => p.Symbol === patchInfo.Symbol);
          index2 = ALLpatches[patchName].indexOf(found);
          ALLpatches[patchName].splice(index2, 1);
          if (!ALLpatches[patchName].length)
            delete ALLpatches[patchName];
        }
        if (!moduleToPatch[functionToPatch][Patch_Symbol]) {
          moduleToPatch[functionToPatch] = function() {
            for (let patch2 = Object.keys(patches.before).length; patch2 > 0; patch2--)
              patches.before[patch2 - 1]();
            let insteadFunction = originalFunction;
            for (let patch2 = Object.keys(patches.instead).length; patch2 > 0; patch2--)
              insteadFunction = patches.instead[patch2 - 1]([...arguments], insteadFunction, this) ?? insteadFunction;
            let res = insteadFunction.apply(this, [...arguments]);
            for (let patch2 = Object.keys(patches.after).length; patch2 > 0; patch2--)
              patches.after[patch2 - 1]([...arguments], res, this);
            if (once)
              unpatch();
            return res;
          };
          moduleToPatch[functionToPatch][Patch_Symbol] = {
            original: originalFunction,
            module: moduleToPatch,
            function: functionToPatch,
            patches,
            unpatchAll: () => {
              for (let patch2 = Object.keys(patches.before).length; patch2 > 0; patch2--)
                patches.before[patch2 - 1].unpatch();
              for (let patch2 = Object.keys(patches.instead).length; patch2 > 0; patch2--)
                patches.instead[patch2 - 1].unpatch();
              for (let patch2 = Object.keys(patches.after).length; patch2 > 0; patch2--)
                patches.after[patch2 - 1].unpatch();
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
          return;
        },
        patches: ALLpatches
      };
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
        return window.localStorage;
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

  // tsBuild/styling.js
  var require_styling = __commonJS({
    "tsBuild/styling.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.customcss = exports.internalStyling = exports.themeStyling = exports.pluginStyling = void 0;
      var storage_1 = require_storage();
      var DrHead = document.createElement("dr-styles");
      document.head.appendChild(DrHead);
      var Dr_ele = {
        internal: document.createElement("dr-internal"),
        plugin: document.createElement("dr-plugin"),
        theme: document.createElement("dr-theme"),
        customcss: Object.assign(document.createElement("style"), {
          innerHTML: storage_1.internal.get("customCSS") ?? "",
          id: "dr-customcss"
        })
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
      exports.pluginStyling = {
        inject: inject("plugin"),
        update: update("plugin"),
        uninject: uninject("plugin")
      };
      exports.themeStyling = {
        inject: inject("theme"),
        update: update("theme"),
        uninject: uninject("theme")
      };
      exports.internalStyling = {
        inject: inject("internal"),
        update: update("internal"),
        uninject: uninject("internal")
      };
      function customcss(css) {
        Dr_ele.customcss.innerHTML = css;
      }
      exports.customcss = customcss;
    }
  });

  // tsBuild/toast.js
  var require_toast = __commonJS({
    "tsBuild/toast.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var styling_1 = require_styling();
      styling_1.internalStyling.inject("toasts", `.dr-toast { display: inline-flex; box-sizing: border-box; border-radius: 3px; color: var(--text-normal); font-size: 16px; background-color: var(--background-floating); vertical-align: bottom; box-shadow: var(--elevation-low); margin: 0 10px 0 auto; flex-grow: 1; opacity: 1; transition: opacity 0.3s ease-in-out; width: fit-content }
.dr-toast:is(.adding, .removing) { opacity: 0 }
.dr-toast:not(:last-child) {  margin-bottom: 5px }
.dr-toast-container { position: absolute; bottom: 0; right: 0; display: flex; flex-direction: column; align-items: flex-end; max-width: 100%; z-index: 999; overflow: hidden }
.dr-toast-wrapper { overflow: hidden; height: auto; margin: 0; border-radius: 3px; display: flex; flex-direction: column; min-width: auto; transition-property: all; transition-timing-function: ease; transition-duration: 0.5s }
.dr-toast-type { display: flex; justify-content: center; align-items: center; min-width: 18px; margin-right: 5px; border-radius: 3px 0 0 3px; background-color: transparent; position: relative }
.dr-toast-type::after { content: ""; position: absolute; background-color: var(--background-floating); width: 6px; border-radius: 6px; height: 100%; right: -3px }
.dr-toast-type.success { background-color: var(--info-positive-foreground) }
.dr-toast-type.error { background-color: var(--info-danger-foreground) }
.dr-toast-type.info { background-color: var(--brand-experiment) }
.dr-toast-type.warning { background-color: var(--info-warning-foreground) }
.dr-toast-message { display: inline-block; user-select: text }
.dr-toast-message-wrapper { flex: 1; padding: 12px 6px 12px 3px; position: relative }
.dr-toast-close { cursor: pointer; display: flex; align-items: center; padding: 2px 10px 0; user-select: none; color: var(--interactive-normal); position: relative; font-size: 14px }
.dr-toast-close:hover { color: var(--interactive-hover); background-color: var(--background-modifier-hover) }`);
      insure();
      var toastWrapper = null;
      function insure() {
        if (!!toastWrapper)
          return;
        const toastContainer = document.createElement("div");
        toastContainer.className = "dr-toast-container";
        document.body.appendChild(toastContainer);
        toastWrapper = document.createElement("div");
        toastWrapper.className = "dr-toast-wrapper";
        toastWrapper.style.marginBottom = "5px";
        toastContainer.appendChild(toastWrapper);
      }
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
        insure();
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

  // tsBuild/util.js
  var require_util = __commonJS({
    "tsBuild/util.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.openSetting = exports.restart = exports.findInReactTree = exports.findInTree = exports.prompt = exports.showConfirmationModal = exports.getOwnerInstance = exports.getReactInstance = exports.waitUntil = exports.sleep = void 0;
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
      function openSetting() {
        const { openModal } = (0, getModule_1.default)(["openModal", "openModalLazy"]);
        const { ModalRoot, ModalSize, ModalHeader, ModalContent, ModalCloseButton } = (0, getModule_1.default)(["ModalRoot", "ModalSize"]);
        const Flex = (0, getModule_1.default)("Flex").default;
        const FormTitle = (0, getModule_1.default)("FormTitle").default;
        const Text = (0, getModule_1.default)("Text").default;
        function needsCreated(ele) {
          if (typeof ele === "string" || typeof ele.type === "string")
            return false;
          return true;
        }
        return (title, lowerTitle, Content) => {
          Content = needsCreated(Content) ? react_1.React.createElement(Content, null) : Content;
          openModal((props) => {
            return react_1.React.createElement(ModalRoot, { ...props, size: ModalSize.MEDIUM }, react_1.React.createElement(ModalHeader, { separator: false }, react_1.React.createElement(Flex, null, react_1.React.createElement(Flex.Child, null, react_1.React.createElement(FormTitle, { tag: FormTitle.Tags.H4 }, title), react_1.React.createElement(Text, null, lowerTitle)), react_1.React.createElement(Flex.Child, null, react_1.React.createElement(ModalCloseButton, { onClick: props.onClose })))), react_1.React.createElement(ModalContent, null, Content));
          });
        };
      }
      exports.openSetting = openSetting;
    }
  });

  // tsBuild/dashboard.js
  var require_dashboard = __commonJS({
    "tsBuild/dashboard.js"(exports) {
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
      var react_1 = require_react();
      var util_1 = require_util();
      var getModule_1 = __importStar(require_getModule());
      var patcher_1 = __importDefault(require_patcher());
      var i18n_1 = __importDefault(require_i18n());
      var storage_1 = require_storage();
      var styling_1 = require_styling();
      var dispatch = (val) => {
      };
      var Editor = react_1.React.memo(({ props = {}, editor = () => {
      } }) => {
        const ref = react_1.React.useRef();
        react_1.React.useEffect(() => editor(ace.edit(ref.current)));
        return react_1.React.createElement("div", { ref, ...props });
      });
      var openSetting = (0, util_1.openSetting)();
      styling_1.internalStyling.inject("settings", `.dr-editor-header { background-color: var(--background-secondary); display: flex; flex-direction: row; padding: 2px 4px; border-radius: 6px 6px 0 0 }
.dr-editor-header-button { color: red; margin-right: 5px; width: 26px; height: 26px; color: var(--interactive-normal); position: relative }
.dr-editor-header-button:hover { color: var(--interactive-hover) }
.dr-editor-header-button:active { color: var(--interactive-active) }
.dr-editor-header-button > * { width: 22px; height: 22px; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%) }
.dr-editor-header + .ace_editor { border-radius: 0 0 6px 6px }
.dr-select { height: 330px }
.dr-addon-card {
  background: var(--background-tertiary);
  border-radius: 8px;
  color: var(--text-normal)
}
.dr-addon-card-header {
  background: var(--background-secondary-alt);
  padding: 10px;
  border-radius: 8px 8px 0 0;
}
.dr-addon-card-body {
  padding: 10px 10px 2px;
  height: calc(100% - 107px);
}
.dr-addon-card-footer {
  background: var(--background-secondary-alt);
  padding: 6px;
  border-radius: 0 0 8px 8px;
  height: 32px;
}
.dr-addon-card-button {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  background: var(--background-primary);
}
.dr-addon-card-button > svg {
  height: 24px;
  width: 24px;
  padding: 4px;
}
.dr-addon-card-button.dr-addon-card-uninstall {
  background: #F04747;
}
.dr-addon-card-footer .container-2nx-BQ {
  transform: translateY(4px)
}`);
      var DrIcon = react_1.React.memo(() => react_1.React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 22 22" }, react_1.React.createElement("path", { d: "M11.1903 7.802C11.1903 8.426 11.1003 9.092 10.9203 9.8C10.7403 10.496 10.4883 11.192 10.1643 11.888C9.84032 12.572 9.43832 13.232 8.95832 13.868C8.49032 14.492 7.95632 15.044 7.35632 15.524C6.75632 15.992 6.09632 16.37 5.37632 16.658C4.66832 16.946 3.91232 17.09 3.10832 17.09C2.94032 17.09 2.77232 17.078 2.60432 17.054C2.43632 17.042 2.26832 17.024 2.10032 17C2.42432 15.344 2.74232 13.73 3.05432 12.158C3.17432 11.498 3.30032 10.814 3.43232 10.106C3.56432 9.386 3.69032 8.678 3.81032 7.982C3.93032 7.286 4.04432 6.62 4.15232 5.984C4.27232 5.348 4.36832 4.772 4.44032 4.256C4.95632 4.16 5.47832 4.07 6.00632 3.986C6.53432 3.902 7.07432 3.86 7.62632 3.86C8.27432 3.86 8.82032 3.962 9.26432 4.166C9.72032 4.37 10.0863 4.652 10.3623 5.012C10.6503 5.372 10.8603 5.792 10.9923 6.272C11.1243 6.752 11.1903 7.262 11.1903 7.802ZM6.94232 6.398C6.81032 7.106 6.67232 7.784 6.52832 8.432C6.38432 9.08 6.24032 9.734 6.09632 10.394C5.95232 11.054 5.80832 11.744 5.66432 12.464C5.52032 13.184 5.38232 13.97 5.25032 14.822C5.53832 14.63 5.81432 14.372 6.07832 14.048C6.35432 13.712 6.61232 13.328 6.85232 12.896C7.09232 12.464 7.30832 12.008 7.50032 11.528C7.70432 11.048 7.87832 10.58 8.02232 10.124C8.16632 9.668 8.27432 9.242 8.34632 8.846C8.43032 8.45 8.47232 8.108 8.47232 7.82C8.47232 7.376 8.34632 7.028 8.09432 6.776C7.85432 6.524 7.47032 6.398 6.94232 6.398ZM10.0456 17.018C10.3696 15.422 10.6816 13.862 10.9816 12.338C11.0896 11.69 11.2096 11.018 11.3416 10.322C11.4736 9.614 11.5936 8.918 11.7016 8.234C11.8216 7.538 11.9296 6.872 12.0256 6.236C12.1336 5.588 12.2176 5 12.2776 4.472C12.9616 4.256 13.6996 4.1 14.4916 4.004C15.2836 3.896 16.0696 3.842 16.8496 3.842C17.3176 3.842 17.7016 3.896 18.0016 4.004C18.3136 4.112 18.5536 4.268 18.7216 4.472C18.9016 4.664 19.0276 4.892 19.0996 5.156C19.1716 5.42 19.2076 5.714 19.2076 6.038C19.2076 6.518 19.1236 6.992 18.9556 7.46C18.7876 7.916 18.5596 8.354 18.2716 8.774C17.9956 9.182 17.6716 9.56 17.2996 9.908C16.9396 10.244 16.5496 10.52 16.1296 10.736C16.3456 11.216 16.5736 11.744 16.8136 12.32C17.0656 12.884 17.2996 13.424 17.5156 13.94C17.7556 14.54 18.0016 15.14 18.2536 15.74L15.4636 16.712C15.2236 15.944 15.0076 15.224 14.8156 14.552C14.7316 14.276 14.6476 13.994 14.5636 13.706C14.4796 13.406 14.4016 13.124 14.3296 12.86C14.2576 12.596 14.1976 12.362 14.1496 12.158C14.1016 11.942 14.0716 11.768 14.0596 11.636L13.8256 11.708C13.7536 12.092 13.6636 12.542 13.5556 13.058C13.4596 13.574 13.3696 14.072 13.2856 14.552C13.1776 15.116 13.0696 15.686 12.9616 16.262L10.0456 17.018ZM14.2756 9.206C14.5036 9.182 14.7796 9.086 15.1036 8.918C15.4396 8.75 15.7576 8.552 16.0576 8.324C16.3576 8.084 16.6156 7.838 16.8316 7.586C17.0476 7.334 17.1556 7.112 17.1556 6.92C17.1556 6.788 17.1136 6.686 17.0296 6.614C16.9456 6.53 16.8256 6.47 16.6696 6.434C16.5256 6.386 16.3636 6.356 16.1836 6.344C16.0036 6.332 15.8176 6.326 15.6256 6.326C15.4936 6.326 15.3556 6.332 15.2116 6.344C15.0796 6.344 14.9596 6.344 14.8516 6.344L14.2756 9.206Z", fill: "currentcolor" })));
      var selectedChild = () => {
      };
      var { LinkButton } = (0, getModule_1.default)(["LinkButton"]);
      var DrDashboardButton = react_1.React.memo(({ children }) => {
        const [isSelected, setSelected] = react_1.React.useState(false);
        let _selectedChild = children.find((e) => e?.props?.selected);
        if (_selectedChild)
          selectedChild = _selectedChild;
        dispatch = function(val) {
          if (!val) {
            const domNode = document.querySelector(`.channel-1Shao0 [href="${location.pathname}"]`);
            if (!domNode)
              return setSelected(val);
            if (!selectedChild.props)
              selectedChild.props = {};
            selectedChild.props.selected = (0, util_1.getOwnerInstance)(domNode)._reactInternals.return.key === selectedChild.key;
          }
          setSelected(val);
        };
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
      patcher_1.default.after("DrInternal-RouterRoutes-Patch", (0, getModule_1.default)("ConnectedPrivateChannelsList"), "default", (_, res, that) => {
        const children = res.props.children.props.children;
        dispatch(/^\/dr_dashboard/.test(location.pathname));
        if (children.find((e) => e && e.key === "drdashLinkButton"))
          return;
        children.unshift(react_1.React.createElement(DrDashboardButton, { key: "drdashLinkButton" }, children));
      });
      {
        (async () => {
          const Views = await (0, getModule_1.asyncGetModule)((e) => e.default?.displayName === "ViewsWithMainInterface");
          patcher_1.default.after("DrInternal-RouterRoutes-Patch", Views.default?.prototype, "render", (_, res) => {
            const routes = res.props.children[0].props.children[1];
            routes[routes.length - 1].props.path.push("/dr_dashboard");
          });
        })();
      }
      var Gear = (0, getModule_1.default)("Gear").default;
      var OpenExternal = (0, getModule_1.default)("OpenExternal").default;
      var editorThemes = [
        "ambiance",
        "chaos",
        "chrome",
        "clouds",
        "clouds_midnight",
        "cobalt",
        "crimson_editor",
        "dawn",
        "dracula",
        "dreamweaver",
        "eclipse",
        "github",
        "gob",
        "gruvbox",
        "monokai",
        "nord_dark",
        "one_dark",
        "pastel_on_dark",
        "solarized_dark",
        "solarized_light",
        "sqlserver",
        "terminal",
        "textmate",
        "tomorrow",
        "twilight",
        "vibrant_ink",
        "xcode"
      ];
      var Tooltip = (0, getModule_1.default)("Tooltip").default;
      var Select = (0, getModule_1.default)("SelectTempWrapper").default;
      var SelectTheme = react_1.React.memo((props) => {
        const [theme, setTheme] = react_1.React.useState(props.theme);
        return react_1.React.createElement(Select, { onChange: (e) => {
          props.setTheme(e.value);
          setTheme(e.value);
        }, className: "dr-select", options: editorThemes.map((e) => ({ label: e, value: e })), value: theme });
      });
      var Markdown = (0, getModule_1.default)((m) => m.default?.displayName === "Markdown" && m.default.rules).default;
      var Switch = (0, getModule_1.default)("Switch").default;
      var Flex = (0, getModule_1.default)("Flex").default;
      var Trash = (0, getModule_1.default)("Trash").default;
      var Addoncard = react_1.React.memo(({}) => {
        const [isEnabled, setEnabled] = react_1.React.useState(false);
        return react_1.React.createElement("div", { className: "dr-addon-card" }, react_1.React.createElement("div", { className: "dr-addon-card-header" }, react_1.React.createElement(Flex, { className: Flex.Direction.HORIZONTAL }, react_1.React.createElement(Flex.Child, { grow: 0 }, "Name"), react_1.React.createElement(Flex.Child, { grow: 0 }, "Version")), react_1.React.createElement("div", null, "Author")), react_1.React.createElement("div", { className: "dr-addon-card-body" }, react_1.React.createElement(Markdown, null, "content")), react_1.React.createElement(Flex, { className: "dr-addon-card-footer" }, react_1.React.createElement(Flex.Child, { className: Flex.Direction.HORIZONTAL }, react_1.React.createElement(Flex.Child, { grow: 0 }, react_1.React.createElement("div", { className: "dr-addon-card-button dr-addon-card-uninstall" }, react_1.React.createElement(Trash, null))), react_1.React.createElement(Flex.Child, { grow: 0 }, react_1.React.createElement("div", { className: "dr-addon-card-button" }, react_1.React.createElement(Gear, null)))), react_1.React.createElement(Flex.Child, null, react_1.React.createElement(Switch, { checked: isEnabled, onChange: (val) => {
          setEnabled(val);
        } }))));
      });
      var pages = {
        general: react_1.React.memo(() => {
          return react_1.React.createElement(react_1.React.Fragment, null, react_1.React.createElement(SwitchItem, { value: storage_1.internal.get("devMode") ?? false, title: i18n_1.default.devMode.title, note: i18n_1.default.devMode.note, disabled: window.__DR__BACKEND__.isDeveloperErrored, onChange: (val) => {
            storage_1.internal.set("devMode", val);
            window.__DR__BACKEND__.devMode = val;
          } }), window.__DR__BACKEND__.app ? react_1.React.createElement(SwitchItem, { value: window.__DR__BACKEND__.transparent, title: i18n_1.default.toggleTransparency.title, note: i18n_1.default.toggleTransparency.note, onChange: (val) => {
            window.__DR__BACKEND__.toggleTransparency();
          } }) : false);
        }),
        plugins: react_1.React.memo(() => {
          return react_1.React.createElement(react_1.React.Fragment, null, react_1.React.createElement(Addoncard, null));
        }),
        customcss: react_1.React.memo(() => {
          const [theme, setTheme] = react_1.React.useState(storage_1.internal.get("editorTheme") ?? "monokai");
          let _theme = theme;
          function makeButton(reactElement, tooltip, onClick) {
            return react_1.React.createElement(Tooltip, { text: tooltip }, (props) => react_1.React.createElement("div", { ...props, onClick: (e) => {
              onClick(e);
              props.onClick(e);
            }, className: "dr-editor-header-button" }, reactElement));
          }
          return react_1.React.createElement(react_1.React.Fragment, null, react_1.React.createElement("div", { className: "dr-editor-header" }, makeButton(react_1.React.createElement(OpenExternal, null), i18n_1.default.customCSS.popout, console.log), makeButton(react_1.React.createElement(Gear, null), i18n_1.default.customCSS.settings, () => openSetting(i18n_1.default.customCSS.settings, "Apply and customize settings to your css", "hasnt been added yet")), makeButton(react_1.React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, react_1.React.createElement("path", { fill: "currentcolor", d: "M20.259,3.879c-1.172-1.173-3.07-1.173-4.242,0l-8.753,8.753c1.111-0.074,2.247,0.296,3.096,1.146 s1.22,1.985,1.146,3.097l8.754-8.755C20.822,7.559,21.138,6.796,21.138,6C21.138,5.204,20.822,4.442,20.259,3.879z" }), react_1.React.createElement("path", { fill: "currentcolor", d: "M3.739,15.193C0.956,17.976,4.12,19.405,1,22.526c0,0,5.163,0.656,7.945-2.127 c1.438-1.438,1.438-3.769,0-5.207C7.507,13.755,5.176,13.755,3.739,15.193z" })), i18n_1.default.customCSS.changeTheme, () => {
            (0, util_1.showConfirmationModal)(i18n_1.default.customCSS.changeTheme, react_1.React.createElement(SelectTheme, { theme, setTheme: (val) => _theme = val }), {
              onConfirm: () => {
                setTheme(_theme);
                storage_1.internal.set("editorTheme", _theme);
              }
            });
          })), react_1.React.createElement(Editor, { props: { style: { height: "calc(100% - 30px)" } }, editor: (editor) => {
            editor.setTheme(`ace/theme/${theme}`);
            editor.getSession().setMode("ace/mode/css");
            editor.setValue(storage_1.internal.get("customCSS") ?? "");
            editor.on("change", () => {
              const value = editor.getValue();
              (0, styling_1.customcss)(value);
              storage_1.internal.set("customCSS", value);
            });
          } }));
        })
      };
      var { content } = (0, getModule_1.default)(["chat", "uploadArea", "threadSidebarOpen"]);
      var { auto } = (0, getModule_1.default)(["scrollerBase"]);
      var { container } = (0, getModule_1.default)(["container", "downloadProgressCircle"]);
      var Header = (0, getModule_1.default)(["Caret", "Icon", "defaultProps"]);
      var TabBar = (0, getModule_1.default)("TabBar").default;
      var DashPage = react_1.React.memo(() => {
        const [page, setPage] = react_1.React.useState("general");
        const Page = pages[page] ?? react_1.React.memo(() => react_1.React.createElement(react_1.React.Fragment, null, "ERROR | This page may not be added"));
        return react_1.React.createElement("div", { className: (0, getModule_1.default)(["maxWidthWithToolbar", "container", "inviteToolbar"]).container }, react_1.React.createElement(Header, { toolbar: react_1.React.createElement(react_1.React.Fragment, null) }, react_1.React.createElement(Header.Icon, { icon: () => react_1.React.createElement(DrIcon, null) }), react_1.React.createElement(Header.Title, null, i18n_1.default.name), react_1.React.createElement(Header.Divider, null), react_1.React.createElement(TabBar, { type: TabBar.Types.TOP_PILL, onItemSelect: (e) => setPage(e), selectedItem: page }, Object.entries(i18n_1.default.settingTabs).map(([key, val]) => react_1.React.createElement(TabBar.Item, { id: key, disabled: key === "customcss" && (!window.ace || window.__DR__BACKEND__.isPopped) }, val)))), react_1.React.createElement("div", { className: content }, react_1.React.createElement("div", { className: auto, style: { padding: "16px 12px" } }, react_1.React.createElement(Page, null))));
      });
      (0, util_1.waitUntil)(() => document.querySelector(`.${container}`)).then((domNode) => {
        const Router = (0, util_1.getOwnerInstance)(domNode);
        const Route = (0, getModule_1.default)("RouteWithImpression").default;
        patcher_1.default.after("DrInternal-RouterRoutes-Patch", Router?.props?.children, "type", (_, res) => {
          const { children } = (0, util_1.findInReactTree)(res, (m) => Array.isArray(m.children) && m.children.length > 5);
          children.push(react_1.React.createElement(Route, { path: "/dr_dashboard", impressionName: "dr_dashboard", disableTrack: true, render: () => react_1.React.createElement(DashPage, null) }));
        });
        Router.forceUpdate();
        const { app } = (0, getModule_1.default)(["app"]);
        (0, util_1.waitUntil)(() => document.querySelector(`.${app}`)).then((domNode2) => {
          (0, util_1.findInTree)((0, util_1.getOwnerInstance)(domNode2)?._reactInternals, (n) => n?.historyUnlisten, { walkable: ["child", "stateNode"] }).forceUpdate();
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
      var logger_1 = __importDefault(require_logger());
      logger_1.default.log("Loading...");
      if (location.pathname.startsWith("/dr_dashboard")) {
        const node = document.querySelector('[href="//discord.com/login"]');
        if (node)
          node.click();
        throw new Error("Preventing further execution");
      }
      if (Boolean(window.DrApi))
        throw new Error("Discord Re-envisioned is already loaded.");
      var react_1 = require_react();
      var patcher_1 = __importDefault(require_patcher());
      var getModule_1 = __importStar(require_getModule());
      var styling_1 = require_styling();
      var toast_1 = __importDefault(require_toast());
      var util_1 = require_util();
      var storage_1 = require_storage();
      require_dashboard();
      var i18n_1 = __importDefault(require_i18n());
      document.body.appendChild(Object.assign(document.createElement("script"), {
        src: "https://ajaxorg.github.io/ace-builds/src-min-noconflict/ace.js",
        nonce: document.querySelector("[nonce]")?.nonce
      }));
      Start();
      window.__DR__BACKEND__ = {
        devMode: storage_1.internal.get("devMode") ?? false,
        app: window?.__DR__ELECTRON__BACKEND__?.app ?? false,
        transparent: window?.__DR__ELECTRON__BACKEND__?.transparent ?? false,
        toggleTransparency: window?.__DR__ELECTRON__BACKEND__?.toggleTransparency ?? function() {
          throw new Error("tried using toggleTransparency on WEB!");
        },
        isPopped: false
      };
      var badges = {
        "515780151791976453": [i18n_1.default.badges.developer, "#F52590"],
        "359174224809689089": [i18n_1.default.badges.developer, "#F52590"],
        "775199408638656553": [i18n_1.default.badges.tester, "#FFF"]
      };
      if (window.__DR__BACKEND__.app)
        window.DiscordNative.window.setDevtoolsCallbacks(null, null);
      async function Start() {
        try {
          Object.defineProperty((0, getModule_1.default)(["isDeveloper"]), "isDeveloper", {
            get: () => window.__DR__BACKEND__.devMode,
            set: (val) => window.__DR__BACKEND__.devMode = val
          });
        } catch (error) {
          window.__DR__BACKEND__.isDeveloperErrored = true;
        }
        await (0, util_1.waitUntil)(() => document.querySelector(".container-YkUktl"));
        const Plugins = {};
        const themes = {};
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
          styling: {
            inject: function(id, css) {
              return styling_1.pluginStyling.inject(id, css);
            },
            update: function(id, css) {
              return styling_1.pluginStyling.update(id, css);
            },
            uninject: function(id) {
              return styling_1.pluginStyling.uninject(id);
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
        const Tooltip = (0, getModule_1.default)("Tooltip").default;
        const Clickable = (0, getModule_1.default)("Clickable").default;
        function makeBadge(text, color, size = 22) {
          return react_1.React.createElement(Tooltip, { text, spacing: 24 }, (props) => react_1.React.createElement(Clickable, { ...props }, react_1.React.createElement("svg", { viewBox: "0 0 22 22", width: size, height: size }, react_1.React.createElement("path", { d: "M11.1903 7.802C11.1903 8.426 11.1003 9.092 10.9203 9.8C10.7403 10.496 10.4883 11.192 10.1643 11.888C9.84032 12.572 9.43832 13.232 8.95832 13.868C8.49032 14.492 7.95632 15.044 7.35632 15.524C6.75632 15.992 6.09632 16.37 5.37632 16.658C4.66832 16.946 3.91232 17.09 3.10832 17.09C2.94032 17.09 2.77232 17.078 2.60432 17.054C2.43632 17.042 2.26832 17.024 2.10032 17C2.42432 15.344 2.74232 13.73 3.05432 12.158C3.17432 11.498 3.30032 10.814 3.43232 10.106C3.56432 9.386 3.69032 8.678 3.81032 7.982C3.93032 7.286 4.04432 6.62 4.15232 5.984C4.27232 5.348 4.36832 4.772 4.44032 4.256C4.95632 4.16 5.47832 4.07 6.00632 3.986C6.53432 3.902 7.07432 3.86 7.62632 3.86C8.27432 3.86 8.82032 3.962 9.26432 4.166C9.72032 4.37 10.0863 4.652 10.3623 5.012C10.6503 5.372 10.8603 5.792 10.9923 6.272C11.1243 6.752 11.1903 7.262 11.1903 7.802ZM6.94232 6.398C6.81032 7.106 6.67232 7.784 6.52832 8.432C6.38432 9.08 6.24032 9.734 6.09632 10.394C5.95232 11.054 5.80832 11.744 5.66432 12.464C5.52032 13.184 5.38232 13.97 5.25032 14.822C5.53832 14.63 5.81432 14.372 6.07832 14.048C6.35432 13.712 6.61232 13.328 6.85232 12.896C7.09232 12.464 7.30832 12.008 7.50032 11.528C7.70432 11.048 7.87832 10.58 8.02232 10.124C8.16632 9.668 8.27432 9.242 8.34632 8.846C8.43032 8.45 8.47232 8.108 8.47232 7.82C8.47232 7.376 8.34632 7.028 8.09432 6.776C7.85432 6.524 7.47032 6.398 6.94232 6.398ZM10.0456 17.018C10.3696 15.422 10.6816 13.862 10.9816 12.338C11.0896 11.69 11.2096 11.018 11.3416 10.322C11.4736 9.614 11.5936 8.918 11.7016 8.234C11.8216 7.538 11.9296 6.872 12.0256 6.236C12.1336 5.588 12.2176 5 12.2776 4.472C12.9616 4.256 13.6996 4.1 14.4916 4.004C15.2836 3.896 16.0696 3.842 16.8496 3.842C17.3176 3.842 17.7016 3.896 18.0016 4.004C18.3136 4.112 18.5536 4.268 18.7216 4.472C18.9016 4.664 19.0276 4.892 19.0996 5.156C19.1716 5.42 19.2076 5.714 19.2076 6.038C19.2076 6.518 19.1236 6.992 18.9556 7.46C18.7876 7.916 18.5596 8.354 18.2716 8.774C17.9956 9.182 17.6716 9.56 17.2996 9.908C16.9396 10.244 16.5496 10.52 16.1296 10.736C16.3456 11.216 16.5736 11.744 16.8136 12.32C17.0656 12.884 17.2996 13.424 17.5156 13.94C17.7556 14.54 18.0016 15.14 18.2536 15.74L15.4636 16.712C15.2236 15.944 15.0076 15.224 14.8156 14.552C14.7316 14.276 14.6476 13.994 14.5636 13.706C14.4796 13.406 14.4016 13.124 14.3296 12.86C14.2576 12.596 14.1976 12.362 14.1496 12.158C14.1016 11.942 14.0716 11.768 14.0596 11.636L13.8256 11.708C13.7536 12.092 13.6636 12.542 13.5556 13.058C13.4596 13.574 13.3696 14.072 13.2856 14.552C13.1776 15.116 13.0696 15.686 12.9616 16.262L10.0456 17.018ZM14.2756 9.206C14.5036 9.182 14.7796 9.086 15.1036 8.918C15.4396 8.75 15.7576 8.552 16.0576 8.324C16.3576 8.084 16.6156 7.838 16.8316 7.586C17.0476 7.334 17.1556 7.112 17.1556 6.92C17.1556 6.788 17.1136 6.686 17.0296 6.614C16.9456 6.53 16.8256 6.47 16.6696 6.434C16.5256 6.386 16.3636 6.356 16.1836 6.344C16.0036 6.332 15.8176 6.326 15.6256 6.326C15.4936 6.326 15.3556 6.332 15.2116 6.344C15.0796 6.344 14.9596 6.344 14.8516 6.344L14.2756 9.206Z", fill: color }))));
        }
        const badgeModule = (0, getModule_1.default)("UserProfileBadgeList");
        patcher_1.default.after("DrInternal-UserProfileBadgeList-Patch", badgeModule, "default", ([props], res) => {
          const content = badges[props.user.id];
          if (!content)
            return;
          res.props.children.push(makeBadge(content[0], content[1], Number(badgeModule.BadgeSizes[props.size].replace("SIZE_", ""))));
        });
        logger_1.default.log("Loaded!");
      }
    }
  });
  require_tsBuild();
})();
