(()=>{var S=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var W=S(O=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});O.languages=void 0;O.languages={global:{name:"Discord Re-envisioned",version:"0.0.1"},en:{devMode:{title:"Toggle Developer Mode",note:"Warning you can get banned from Discord if you do this (not a 100% chance)!"},badges:{developer:"Dr-Developer",tester:"Dr-Tester"},settingTabs:{general:"General",plugins:"Plugins",themes:"Themes",customcss:"Custom CSS"},customCSS:{title:"Custom CSS",popout:"Popout",settings:"CSS Settings",changeTheme:"Change Theme"},uninstall:"Uninstall",settings:"Settings",installing:{alreadyInstalled:{content:"Plugin '{{name}}' is already installed",replace:function(e){return this.content.replace("{{name}}",e)}},installed:{content:"Installed '{{name}}'! Refresh the page to see it.",replace:function(e){return this.content.replace("{{name}}",e)}},notValid:{content:"'{{url}}' is not a valid plugin URL",replace:function(e){return this.content.replace("{{url}}",e)}},install:"Install"}}};var je=new Proxy(O.languages[navigator.language.split("-",1)[0]],{get:(e,t)=>{let n=navigator.language.split("-",1)[0];return O.languages.global[t]||O.languages[n][t]||O.languages.en[t]||t}});O.default=je});var Re=S(D=>{"use strict";var Ae=D&&D.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(D,"__esModule",{value:!0});D.cache=void 0;var Ne=Ae(W());function Le(e){let t=console[e];return t?.__sentry_original__?t.__sentry_original__:t?.__REACT_DEVTOOLS_ORIGINAL_METHOD__?t.__REACT_DEVTOOLS_ORIGINAL_METHOD__:t}function Be(e){return btoa(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M11.1903 7.802C11.1903 8.426 11.1003 9.092 10.9203 9.8C10.7403 10.496 10.4883 11.192 10.1643 11.888C9.84032 12.572 9.43832 13.232 8.95832 13.868C8.49032 14.492 7.95632 15.044 7.35632 15.524C6.75632 15.992 6.09632 16.37 5.37632 16.658C4.66832 16.946 3.91232 17.09 3.10832 17.09C2.94032 17.09 2.77232 17.078 2.60432 17.054C2.43632 17.042 2.26832 17.024 2.10032 17C2.42432 15.344 2.74232 13.73 3.05432 12.158C3.17432 11.498 3.30032 10.814 3.43232 10.106C3.56432 9.386 3.69032 8.678 3.81032 7.982C3.93032 7.286 4.04432 6.62 4.15232 5.984C4.27232 5.348 4.36832 4.772 4.44032 4.256C4.95632 4.16 5.47832 4.07 6.00632 3.986C6.53432 3.902 7.07432 3.86 7.62632 3.86C8.27432 3.86 8.82032 3.962 9.26432 4.166C9.72032 4.37 10.0863 4.652 10.3623 5.012C10.6503 5.372 10.8603 5.792 10.9923 6.272C11.1243 6.752 11.1903 7.262 11.1903 7.802ZM6.94232 6.398C6.81032 7.106 6.67232 7.784 6.52832 8.432C6.38432 9.08 6.24032 9.734 6.09632 10.394C5.95232 11.054 5.80832 11.744 5.66432 12.464C5.52032 13.184 5.38232 13.97 5.25032 14.822C5.53832 14.63 5.81432 14.372 6.07832 14.048C6.35432 13.712 6.61232 13.328 6.85232 12.896C7.09232 12.464 7.30832 12.008 7.50032 11.528C7.70432 11.048 7.87832 10.58 8.02232 10.124C8.16632 9.668 8.27432 9.242 8.34632 8.846C8.43032 8.45 8.47232 8.108 8.47232 7.82C8.47232 7.376 8.34632 7.028 8.09432 6.776C7.85432 6.524 7.47032 6.398 6.94232 6.398ZM10.0456 17.018C10.3696 15.422 10.6816 13.862 10.9816 12.338C11.0896 11.69 11.2096 11.018 11.3416 10.322C11.4736 9.614 11.5936 8.918 11.7016 8.234C11.8216 7.538 11.9296 6.872 12.0256 6.236C12.1336 5.588 12.2176 5 12.2776 4.472C12.9616 4.256 13.6996 4.1 14.4916 4.004C15.2836 3.896 16.0696 3.842 16.8496 3.842C17.3176 3.842 17.7016 3.896 18.0016 4.004C18.3136 4.112 18.5536 4.268 18.7216 4.472C18.9016 4.664 19.0276 4.892 19.0996 5.156C19.1716 5.42 19.2076 5.714 19.2076 6.038C19.2076 6.518 19.1236 6.992 18.9556 7.46C18.7876 7.916 18.5596 8.354 18.2716 8.774C17.9956 9.182 17.6716 9.56 17.2996 9.908C16.9396 10.244 16.5496 10.52 16.1296 10.736C16.3456 11.216 16.5736 11.744 16.8136 12.32C17.0656 12.884 17.2996 13.424 17.5156 13.94C17.7556 14.54 18.0016 15.14 18.2536 15.74L15.4636 16.712C15.2236 15.944 15.0076 15.224 14.8156 14.552C14.7316 14.276 14.6476 13.994 14.5636 13.706C14.4796 13.406 14.4016 13.124 14.3296 12.86C14.2576 12.596 14.1976 12.362 14.1496 12.158C14.1016 11.942 14.0716 11.768 14.0596 11.636L13.8256 11.708C13.7536 12.092 13.6636 12.542 13.5556 13.058C13.4596 13.574 13.3696 14.072 13.2856 14.552C13.1776 15.116 13.0696 15.686 12.9616 16.262L10.0456 17.018ZM14.2756 9.206C14.5036 9.182 14.7796 9.086 15.1036 8.918C15.4396 8.75 15.7576 8.552 16.0576 8.324C16.3576 8.084 16.6156 7.838 16.8316 7.586C17.0476 7.334 17.1556 7.112 17.1556 6.92C17.1556 6.788 17.1136 6.686 17.0296 6.614C16.9456 6.53 16.8256 6.47 16.6696 6.434C16.5256 6.386 16.3636 6.356 16.1836 6.344C16.0036 6.332 15.8176 6.326 15.6256 6.326C15.4936 6.326 15.3556 6.332 15.2116 6.344C15.0796 6.344 14.9596 6.344 14.8516 6.344L14.2756 9.206Z" fill="${e}"></path></svg>`)}function ye(e,t,n){function r(c){return c?e:t}return r(typeof n=="boolean"?n:matchMedia("(prefers-color-scheme: dark)").matches)}D.cache={};D.default=new Proxy(D.cache,{get:(e,t)=>{let n=(...r)=>{let l=typeof r[0]=="string"?[`
${r[0]}`,...r.slice(1)]:[`
`,...r];Le(t)(`%cDR%c${Ne.default.name}`,`background-image:url(data:image/svg+xml;base64,${Be(ye("#202124","#fff"))}); color: transparent; background-size: 24px; background-repeat: no-repeat; padding: 5px; background-color: #F52590; border-radius: 4px`,`background: #F52590; margin-left: 5px; margin-bottom: 9px; padding: 2px; border-radius: 4px; color: ${ye("#202124","#fff")}`,...l)};return D.cache[t]=n,n}})});var $=S(U=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0});U.asyncGetModule=void 0;var G=webpackChunkdiscord_app.webpackExports?webpackChunkdiscord_app.webpackExports:webpackChunkdiscord_app.push([[Symbol("Discord Re-envisioned")],{},e=>(webpackChunkdiscord_app.pop(),webpackChunkdiscord_app.webpackExports=e,e)]);function B(e){let t=[];for(let n in G.c){if(!Object.hasOwnProperty.call(G.c,n))continue;let r=G.c[n].exports;!r||e(r)&&t.push(r)}return t}function qe(e,t=!0){let n=[];function r(...l){let a=B(s=>l.every(d=>typeof s[d]!="undefined")),i=B(s=>l.every(d=>typeof s.default?.[d]!="undefined")).map(s=>s.default);return[...a,...i]}function c(l){let a=B(d=>d.default?.displayName===l),i=B(d=>d.default?.type?.displayName===l),s=B(d=>d.default?.type?.render?.displayName===l);return[...a,...i,...s]}return Array.isArray(e)?n=r(...e):typeof e=="string"?n=c(e):typeof e=="number"?n=[G.c[e]]:typeof e=="function"&&(n=B(e)),t?n[0]:n}U.default=qe;var ae=new Set,we=webpackChunkdiscord_app.push;function ve(e){let[,t]=e;for(let n in t){let r=t[n];t[n]=(c,l,a)=>{Reflect.apply(r,null,[c,l,a]);for(let i of[...ae])i(l)},Object.assign(t[n],r,{toString:()=>r.toString()})}return Reflect.apply(we,window.webpackChunkdiscord_app,[e])}Object.defineProperty(webpackChunkdiscord_app,"push",{configurable:!0,get:()=>ve,set:e=>{we=e,Object.defineProperty(webpackChunkdiscord_app,"push",{value:ve,configurable:!0,writable:!0})}});function Pe(e){return new Promise((t,n)=>{if(typeof e!="function")return n(`Filter has to be a function, cannot be '${typeof e}'`);let r=DrApi.getModule(e);if(r)return t(r);function c(l){!e(l)||(ae.delete(c),t(l))}ae.add(c)})}U.asyncGetModule=Pe});var K=S(v=>{"use strict";var Fe=v&&v.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(v,"__esModule",{value:!0});v.ReactSpring=v.ReactDOM=v.React=void 0;var re=Fe($());v.React=(0,re.default)(["createElement","Component"]);v.ReactDOM=(0,re.default)(["render","findDOMNode"]);v.ReactSpring=(0,re.default)(["useSpring","animated"]);v.default=v.React});var ce=S(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});var oe=Symbol("DrApi.patch"),ze=Symbol("DrApi.patch.quick"),le=Symbol("DrInternal"),R={};function Z(e,t,n,r,c){let{method:l="after",id:a,once:i=!1,index:s=0}=c,d=t[n];if(d||(t[n]=()=>{},d=t[n]),l=l.toLowerCase(),!(l==="before"||l==="after"||l==="instead"))throw new Error(`'${l}' is a invalid patch type`);let u=t?.[n]?.[oe]?.patches??{before:[],after:[],instead:[]},h=Symbol(),m={unpatch:w,patchName:a??e,moduleToPatch:t,functionToPatch:n,callback:r,method:l,Symbol:h};u[l].splice(s,0,Object.assign(r,{unpatch:w,Symbol:h}));let A=!1;function w(){if(A)return;A=!0;let p=u[l].find(_=>_.Symbol===m.Symbol),L=u[l].indexOf(p);u[l].splice(L,1),p=R[e].find(_=>_.Symbol===m.Symbol),L=R[e].indexOf(p),R[e].splice(L,1),R[e].length||delete R[e]}return t[n][oe]||(t[n]=function(){for(let _=Object.keys(u.before).length;_>0;_--)u.before[_-1]();let p=d;for(let _=Object.keys(u.instead).length;_>0;_--)p=u.instead[_-1]([...arguments],p,this)??p;let L=p.apply(this,[...arguments]);for(let _=Object.keys(u.after).length;_>0;_--)u.after[_-1]([...arguments],L,this);return i&&w(),L},t[n][oe]={original:d,module:t,function:n,patches:u,unpatchAll:()=>{for(let p=Object.keys(u.before).length;p>0;p--)u.before[p-1].unpatch();for(let p=Object.keys(u.instead).length;p>0;p--)u.instead[p-1].unpatch();for(let p=Object.keys(u.after).length;p>0;p--)u.after[p-1].unpatch();t[n]=d}},Object.assign(t[n],d,{toString:()=>d.toString()})),typeof e=="string"&&/DrInternal-([A-z]+)-Patch/.test(e)?R[le]?R[le].push(m):R[le]=[m]:R[e]?R[e].push(m):R[e]=[m],w}ie.default={patch:Z,quick:(e,t,n,r)=>Z(ze,e,t,n,Object.assign({},r)),before:(e,t,n,r,c)=>Z(e,t,n,r,Object.assign({},c,{method:"before"})),instead:(e,t,n,r,c)=>Z(e,t,n,r,Object.assign({},c,{method:"instead"})),after:(e,t,n,r,c)=>Z(e,t,n,r,Object.assign({},c,{method:"after"})),unpatchAll:e=>{if(!!R[e])for(let t of R[e])t.unpatch()},patches:R}});var V=S(b=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0});b.internal=b.plugins=b.localStorage=void 0;b.localStorage=(()=>{if(window.localStorage)return window.localStorage;let e=document.createElement("frame");e.src="about:blank",document.body.appendChild(e);let t=Object.getOwnPropertyDescriptor(e.contentWindow,"localStorage");return e.remove(),Object.defineProperty(window,"localStorage",t),window.localStorage})();b.localStorage.setItem("dr-storage",(()=>{let e=JSON.parse(b.localStorage.getItem("dr-storage")??"{}");for(let t of["themeData","pluginData","internalData"])e[t]=e[t]??{};return JSON.stringify(e)})());b.plugins={get:(e,t)=>JSON.parse(b.localStorage.getItem("dr-storage")??"{}").pluginData?.[e]?.[t],set:(e,t,n)=>{let r=JSON.parse(b.localStorage.getItem("dr-storage")??"{}");r.pluginData[e]||(r.pluginData[e]={}),r.pluginData[e][t]=n,b.localStorage.setItem("dr-storage",JSON.stringify(r))}};b.internal={get:e=>JSON.parse(b.localStorage.getItem("dr-storage")??"{}").internalData?.[e],set:(e,t)=>{let n=JSON.parse(b.localStorage.getItem("dr-storage")??"{}");n.internalData[e]=t,b.localStorage.setItem("dr-storage",JSON.stringify(n))}}});var Y=S(E=>{"use strict";Object.defineProperty(E,"__esModule",{value:!0});E.customcss=E.internalStyling=E.themeStyling=E.pluginStyling=void 0;var Ue=V(),Se=document.createElement("dr-styles");document.head.appendChild(Se);var J={internal:document.createElement("dr-internal"),plugin:document.createElement("dr-plugin"),theme:document.createElement("dr-theme"),customcss:Object.assign(document.createElement("style"),{innerHTML:Ue.internal.get("customCSS")??"",id:"dr-customcss"})};for(let e of Object.keys(J))Se.appendChild(J[e]);function se(e){return(t,n)=>{let r=document.createElement("style");r.setAttribute(`dr-${e}-css`,t),r.innerHTML=n,J[e].appendChild(r)}}function de(e){return(t,n)=>{let r=document.querySelector(`style[dr-${e}-css="${t}"]`);r&&(r.innerHTML=n)}}function ue(e){return t=>{let n=document.querySelector(`style[dr-${e}-css="${t}"]`);n&&n.remove()}}E.pluginStyling={inject:se("plugin"),update:de("plugin"),uninject:ue("plugin")};E.themeStyling={inject:se("theme"),update:de("theme"),uninject:ue("theme")};E.internalStyling={inject:se("internal"),update:de("internal"),uninject:ue("internal")};function $e(e){J.customcss.innerHTML=e}E.customcss=$e});var Me=S(fe=>{"use strict";Object.defineProperty(fe,"__esModule",{value:!0});var Ze=Y();Ze.internalStyling.inject("toasts",`.dr-toast { display: inline-flex; box-sizing: border-box; border-radius: 3px; color: var(--text-normal); font-size: 16px; background-color: var(--background-floating); vertical-align: bottom; box-shadow: var(--elevation-low); margin: 0 10px 0 auto; flex-grow: 1; opacity: 1; transition: opacity 0.3s ease-in-out; width: fit-content }
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
.dr-toast-close:hover { color: var(--interactive-hover); background-color: var(--background-modifier-hover) }`);Ee();var q=null;function Ee(){if(q)return;let e=document.createElement("div");e.className="dr-toast-container",document.body.appendChild(e),q=document.createElement("div"),q.className="dr-toast-wrapper",q.style.marginBottom="5px",e.appendChild(q)}function He(e,t){let n,r,c=t,l=function(){window.clearTimeout(n),n=null,c-=Date.now()-r},a=function(){n||(r=Date.now(),n=window.setTimeout(e,c))};return a(),{pause:l,resume:a}}function We(e,t){Ee();let{type:n="success",duration:r=3e3,autoClose:c=!0,closeButton:l=!0}=t,a=document.createElement("div");a.className="dr-toast adding",setTimeout(()=>a.classList.remove("adding"),300),q.appendChild(a);let i=document.createElement("span");i.className=`dr-toast-type ${n.toLowerCase()}`,a.appendChild(i);let s=document.createElement("div");s.className="dr-toast-message-wrapper",a.appendChild(s);let d=document.createElement("span");d.className="dr-toast-message",d.innerText=e,s.appendChild(d);function u(){a.classList.add("removing"),setTimeout(()=>a.remove(),300)}if(l){let h=document.createElement("span");h.className="dr-toast-close",h.innerText="\u2715",h.onclick=u,a.appendChild(h)}if(c){let h=He(()=>u(),r);a.onmouseenter=h.pause,a.onmouseleave=h.resume}return a}fe.default=We});var pe=S(f=>{"use strict";var Ge=f&&f.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(f,"__esModule",{value:!0});f.openSetting=f.restart=f.findInReactTree=f.findInTree=f.prompt=f.showConfirmationModal=f.getOwnerInstance=f.getReactInstance=f.waitUntil=f.sleep=void 0;var C=K(),y=Ge($()),Ke=e=>new Promise(t=>setTimeout(t,e));f.sleep=Ke;async function Ve(e){let t;for(;!(t=e());)await(0,f.sleep)(1);return t}f.waitUntil=Ve;function xe(e){if(!!e)return e.__reactInternalInstance$?e.__reactInternalInstance$:e[Object.keys(e).find(t=>t.startsWith("__reactInternalInstance")||t.startsWith("__reactFiber"))]||null}f.getReactInstance=xe;function Je(e){for(let t=xe(e);t;t=t.return){let n=t.stateNode;if(typeof n?.forceUpdate=="function")return n}}f.getOwnerInstance=Je;function Ye(e,t,n){let r=(0,y.default)(w=>w.default?.displayName==="Markdown"&&w.default.rules).default,c=(0,y.default)("ConfirmModal").default,l=(0,y.default)(["ButtonColors"]),{openModal:a}=(0,y.default)(["openModal","openModalLazy"]),i=(0,y.default)(["Messages"],!1)[1].Messages,s=()=>{},{onConfirm:d=s,onCancel:u=s,confirmText:h=i.OKAY,cancelText:m=i.CANCEL,danger:A=!1}=n;Array.isArray(t)||(t=[t]),t=t.map(w=>typeof w=="string"?C.React.createElement(r,null,w):w),a(w=>C.React.createElement(c,{...w,header:e,content:t,onConfirm:d,onCancel:u,confirmText:h,cancelText:m,confirmButtonColor:A?l.ButtonColors.RED:l.ButtonColors.BRAND},t))}f.showConfirmationModal=Ye;function Qe(e,t){let n=(0,y.default)("TextInput").default,r=(0,y.default)("ConfirmModal").default,c=(0,y.default)(["ButtonColors"]),{Messages:l}=(0,y.default)(["Messages"],!1)[1],{openModal:a}=(0,y.default)(["openModal","openModalLazy"]),i="";return new Promise(s=>{a(d=>(d.transitionState===3&&s(null),C.React.createElement(r,Object.assign({header:e,confirmButtonColor:c.ButtonColors.BRAND,confirmText:l.OKAY,cancelText:l.CANCEL,onConfirm:()=>s(i),onCancel:()=>s(null),children:C.React.createElement(C.React.memo(()=>{let[u,h]=C.React.useState(t);return C.React.createElement(n,{value:u,onChange:m=>{h(m),i=m}})}))},d))))})}f.prompt=Qe;function Q(e,t,n={}){let{walkable:r=null,ignore:c=[]}=n;if(!e||typeof e!="object")return null;if(typeof t=="string")return e.hasOwnProperty(t)?e[t]:void 0;if(t(e))return e;let l=null;if(Array.isArray(e)){for(let a of e)if(l=Q(a,t,{walkable:r,ignore:c}),l)return l}else{let a=r||Object.keys(e);for(let i of a)if(!(!e.hasOwnProperty(i)||c.includes(i))&&(l=Q(e[i],t,{walkable:r,ignore:c}),l))return l}return l}f.findInTree=Q;function Xe(e,t){return Q(e,t,{walkable:["props","children","child","sibling"]})}f.findInReactTree=Xe;function et(e){return window.__DR__BACKEND__.app&&e?window.__DR__BACKEND__.require("electron").ipcRenderer.send("DR_FULL_RESTART"):location.reload()}f.restart=et;function tt(){let{openModal:e}=(0,y.default)(["openModal","openModalLazy"]),{ModalRoot:t,ModalSize:n,ModalHeader:r,ModalContent:c,ModalCloseButton:l}=(0,y.default)(["ModalRoot","ModalSize"]),a=(0,y.default)("Flex").default,i=(0,y.default)("FormTitle").default,s=(0,y.default)("Text").default;function d(u){return!(typeof u=="string"||typeof u.type=="string")}return(u,h,m)=>{m=d(m)?C.React.createElement(m,null):m,e(A=>C.React.createElement(t,{...A,size:n.MEDIUM},C.React.createElement(r,{separator:!1},C.React.createElement(a,null,C.React.createElement(a.Child,null,C.React.createElement(i,{tag:i.Tags.H4},u),C.React.createElement(s,null,h)),C.React.createElement(a.Child,null,C.React.createElement(l,{onClick:A.onClose})))),C.React.createElement(c,null,m)))}}f.openSetting=tt});var Te=S(ee=>{"use strict";var ge=ee&&ee.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ee,"__esModule",{value:!0});var o=K(),I=pe(),g=ge($()),me=ge(ce()),M=ge(W()),P=V(),ke=Y(),Oe=e=>{},nt=o.React.memo(({props:e={},editor:t=()=>{}})=>{let n=o.React.useRef();return o.React.useEffect(()=>t(ace.edit(n.current))),o.React.createElement("div",{ref:n,...e})}),at=(0,I.openSetting)();ke.internalStyling.inject("settings",`.dr-editor-header { background-color: var(--background-secondary); display: flex; flex-direction: row; padding: 2px 4px; border-radius: 6px 6px 0 0 }
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
}`);var De=o.React.memo(()=>o.React.createElement("svg",{width:24,height:24,viewBox:"0 0 22 22"},o.React.createElement("path",{d:"M11.1903 7.802C11.1903 8.426 11.1003 9.092 10.9203 9.8C10.7403 10.496 10.4883 11.192 10.1643 11.888C9.84032 12.572 9.43832 13.232 8.95832 13.868C8.49032 14.492 7.95632 15.044 7.35632 15.524C6.75632 15.992 6.09632 16.37 5.37632 16.658C4.66832 16.946 3.91232 17.09 3.10832 17.09C2.94032 17.09 2.77232 17.078 2.60432 17.054C2.43632 17.042 2.26832 17.024 2.10032 17C2.42432 15.344 2.74232 13.73 3.05432 12.158C3.17432 11.498 3.30032 10.814 3.43232 10.106C3.56432 9.386 3.69032 8.678 3.81032 7.982C3.93032 7.286 4.04432 6.62 4.15232 5.984C4.27232 5.348 4.36832 4.772 4.44032 4.256C4.95632 4.16 5.47832 4.07 6.00632 3.986C6.53432 3.902 7.07432 3.86 7.62632 3.86C8.27432 3.86 8.82032 3.962 9.26432 4.166C9.72032 4.37 10.0863 4.652 10.3623 5.012C10.6503 5.372 10.8603 5.792 10.9923 6.272C11.1243 6.752 11.1903 7.262 11.1903 7.802ZM6.94232 6.398C6.81032 7.106 6.67232 7.784 6.52832 8.432C6.38432 9.08 6.24032 9.734 6.09632 10.394C5.95232 11.054 5.80832 11.744 5.66432 12.464C5.52032 13.184 5.38232 13.97 5.25032 14.822C5.53832 14.63 5.81432 14.372 6.07832 14.048C6.35432 13.712 6.61232 13.328 6.85232 12.896C7.09232 12.464 7.30832 12.008 7.50032 11.528C7.70432 11.048 7.87832 10.58 8.02232 10.124C8.16632 9.668 8.27432 9.242 8.34632 8.846C8.43032 8.45 8.47232 8.108 8.47232 7.82C8.47232 7.376 8.34632 7.028 8.09432 6.776C7.85432 6.524 7.47032 6.398 6.94232 6.398ZM10.0456 17.018C10.3696 15.422 10.6816 13.862 10.9816 12.338C11.0896 11.69 11.2096 11.018 11.3416 10.322C11.4736 9.614 11.5936 8.918 11.7016 8.234C11.8216 7.538 11.9296 6.872 12.0256 6.236C12.1336 5.588 12.2176 5 12.2776 4.472C12.9616 4.256 13.6996 4.1 14.4916 4.004C15.2836 3.896 16.0696 3.842 16.8496 3.842C17.3176 3.842 17.7016 3.896 18.0016 4.004C18.3136 4.112 18.5536 4.268 18.7216 4.472C18.9016 4.664 19.0276 4.892 19.0996 5.156C19.1716 5.42 19.2076 5.714 19.2076 6.038C19.2076 6.518 19.1236 6.992 18.9556 7.46C18.7876 7.916 18.5596 8.354 18.2716 8.774C17.9956 9.182 17.6716 9.56 17.2996 9.908C16.9396 10.244 16.5496 10.52 16.1296 10.736C16.3456 11.216 16.5736 11.744 16.8136 12.32C17.0656 12.884 17.2996 13.424 17.5156 13.94C17.7556 14.54 18.0016 15.14 18.2536 15.74L15.4636 16.712C15.2236 15.944 15.0076 15.224 14.8156 14.552C14.7316 14.276 14.6476 13.994 14.5636 13.706C14.4796 13.406 14.4016 13.124 14.3296 12.86C14.2576 12.596 14.1976 12.362 14.1496 12.158C14.1016 11.942 14.0716 11.768 14.0596 11.636L13.8256 11.708C13.7536 12.092 13.6636 12.542 13.5556 13.058C13.4596 13.574 13.3696 14.072 13.2856 14.552C13.1776 15.116 13.0696 15.686 12.9616 16.262L10.0456 17.018ZM14.2756 9.206C14.5036 9.182 14.7796 9.086 15.1036 8.918C15.4396 8.75 15.7576 8.552 16.0576 8.324C16.3576 8.084 16.6156 7.838 16.8316 7.586C17.0476 7.334 17.1556 7.112 17.1556 6.92C17.1556 6.788 17.1136 6.686 17.0296 6.614C16.9456 6.53 16.8256 6.47 16.6696 6.434C16.5256 6.386 16.3636 6.356 16.1836 6.344C16.0036 6.332 15.8176 6.326 15.6256 6.326C15.4936 6.326 15.3556 6.332 15.2116 6.344C15.0796 6.344 14.9596 6.344 14.8516 6.344L14.2756 9.206Z",fill:"currentcolor"}))),N=()=>{},{LinkButton:rt}=(0,g.default)(["LinkButton"]),ot=o.React.memo(({children:e})=>{let[t,n]=o.React.useState(!1),r=e.find(c=>c?.props?.selected);return r&&(N=r),Oe=function(c){if(!c){let l=document.querySelector(`.channel-1Shao0 [href="${location.pathname}"]`);if(!l)return n(c);N.props||(N.props={}),N.props.selected=(0,I.getOwnerInstance)(l)._reactInternals.return.key===N.key}n(c)},o.React.createElement(rt,{text:M.default.name,icon:()=>o.React.createElement(De,null),route:"/dr_dashboard",selected:t,onFocus:()=>{N&&(N.props.selected=!1)}})}),lt=(0,g.default)("SwitchItem").default,it=o.React.memo(e=>{let{value:t,onChange:n=()=>{},title:r,note:c,disabled:l=!1,initialChange:a=!0}=e,[i,s]=o.React.useState(t);return o.React.createElement(lt,{value:i,onChange:()=>{a&&s(!i),n(!i,s)},note:c,disabled:l},r)});me.default.after("DrInternal-RouterRoutes-Patch",(0,g.default)("ConnectedPrivateChannelsList"),"default",(e,t,n)=>{let r=t.props.children.props.children;Oe(/^\/dr_dashboard/.test(location.pathname)),!r.find(c=>c&&c.key==="drdashLinkButton")&&r.unshift(o.React.createElement(ot,{key:"drdashLinkButton"},r))});var ct=(0,g.default)("FluxContainer(ViewsWithMainInterface)").default?.prototype?.render?.call({memoizedGetStateFromStores:()=>({})})?.type;me.default.after("DrInternal-RouterRoutes-Patch",ct?.prototype,"render",(e,t)=>{let n=t.props.children[0].props.children[1];n[n.length-1].props.path.push("/dr_dashboard")});var Ie=(0,g.default)("Gear").default,st=(0,g.default)("OpenExternal").default,dt=["ambiance","chaos","chrome","clouds","clouds_midnight","cobalt","crimson_editor","dawn","dracula","dreamweaver","eclipse","github","gob","gruvbox","idle_fingers","iplastic","katzenmilch","kr_theme","kuroir","merbivore","merbivore_soft","mono_industrial","monokai","nord_dark","one_dark","pastel_on_dark","solarized_dark","solarized_light","sqlserver","terminal","textmate","tomorrow","tomorrow_night","tomorrow_night_blue","tomorrow_night_bright","tomorrow_night_eighties","twilight","vibrant_ink","xcode"],ut=(0,g.default)("Tooltip").default,ft=(0,g.default)("SelectTempWrapper").default,pt=o.React.memo(e=>{let[t,n]=o.React.useState(e.theme);return o.React.createElement(ft,{onChange:r=>{e.setTheme(r.value),n(r.value)},className:"dr-select",options:dt.map(r=>({label:r,value:r})),value:t})}),gt=(0,g.default)(e=>e.default?.displayName==="Markdown"&&e.default.rules).default,mt=(0,g.default)("Switch").default,x=(0,g.default)("Flex").default,Ct=(0,g.default)("Trash").default,ht=o.React.memo(({})=>{let[e,t]=o.React.useState(!1);return o.React.createElement("div",{className:"dr-addon-card"},o.React.createElement("div",{className:"dr-addon-card-header"},o.React.createElement(x,{className:x.Direction.HORIZONTAL},o.React.createElement(x.Child,{grow:0},"Name"),o.React.createElement(x.Child,{grow:0},"Version")),o.React.createElement("div",null,"Author")),o.React.createElement("div",{className:"dr-addon-card-body"},o.React.createElement(gt,null,"content")),o.React.createElement(x,{className:"dr-addon-card-footer"},o.React.createElement(x.Child,{className:x.Direction.HORIZONTAL},o.React.createElement(x.Child,{grow:0},o.React.createElement("div",{className:"dr-addon-card-button dr-addon-card-uninstall"},o.React.createElement(Ct,null))),o.React.createElement(x.Child,{grow:0},o.React.createElement("div",{className:"dr-addon-card-button"},o.React.createElement(Ie,null)))),o.React.createElement(x.Child,null,o.React.createElement(mt,{checked:e,onChange:n=>{t(n)}}))))}),bt={general:o.React.memo(()=>o.React.createElement(o.React.Fragment,null,o.React.createElement(it,{value:P.internal.get("devMode")??!1,title:M.default.devMode.title,note:M.default.devMode.note,disabled:window.__DR__BACKEND__.isDeveloperErrored,onChange:e=>{P.internal.set("devMode",e),window.__DR__BACKEND__.devMode=e}}))),plugins:o.React.memo(()=>o.React.createElement(o.React.Fragment,null,o.React.createElement(ht,null))),customcss:o.React.memo(()=>{let[e,t]=o.React.useState(P.internal.get("editorTheme")??"monokai"),n=e;function r(c,l,a){return o.React.createElement(ut,{text:l},i=>o.React.createElement("div",{...i,onClick:s=>{a(s),i.onClick(s)},className:"dr-editor-header-button"},c))}return o.React.createElement(o.React.Fragment,null,o.React.createElement("div",{className:"dr-editor-header"},r(o.React.createElement(st,null),M.default.customCSS.popout,console.log),r(o.React.createElement(Ie,null),M.default.customCSS.settings,()=>at(M.default.customCSS.settings,"Apply and customize settings to your css","hasnt been added yet")),r(o.React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},o.React.createElement("path",{fill:"currentcolor",d:"M20.259,3.879c-1.172-1.173-3.07-1.173-4.242,0l-8.753,8.753c1.111-0.074,2.247,0.296,3.096,1.146 s1.22,1.985,1.146,3.097l8.754-8.755C20.822,7.559,21.138,6.796,21.138,6C21.138,5.204,20.822,4.442,20.259,3.879z"}),o.React.createElement("path",{fill:"currentcolor",d:"M3.739,15.193C0.956,17.976,4.12,19.405,1,22.526c0,0,5.163,0.656,7.945-2.127 c1.438-1.438,1.438-3.769,0-5.207C7.507,13.755,5.176,13.755,3.739,15.193z"})),M.default.customCSS.changeTheme,()=>{(0,I.showConfirmationModal)(M.default.customCSS.changeTheme,o.React.createElement(pt,{theme:e,setTheme:c=>n=c}),{onConfirm:()=>{t(n),P.internal.set("editorTheme",n)}})})),o.React.createElement(nt,{props:{style:{height:"calc(100% - 30px)"}},editor:c=>{c.setTheme(`ace/theme/${e}`),c.getSession().setMode("ace/mode/css"),c.setValue(P.internal.get("customCSS")??""),c.on("change",()=>{let l=c.getValue();(0,ke.customcss)(l),P.internal.set("customCSS",l)})}}))})},{content:_t}=(0,g.default)(["chat","uploadArea","threadSidebarOpen"]),{auto:yt}=(0,g.default)(["scrollerBase"]),{container:Rt}=(0,g.default)(["container","downloadProgressCircle"]),X=(0,g.default)(["Caret","Icon","defaultProps"]),Ce=(0,g.default)("TabBar").default,wt=o.React.memo(()=>{let[e,t]=o.React.useState("general"),n=bt[e]??o.React.memo(()=>o.React.createElement(o.React.Fragment,null,"ERROR | This page may not be added"));return o.React.createElement("div",{className:(0,g.default)(["maxWidthWithToolbar","container","inviteToolbar"]).container},o.React.createElement(X,{toolbar:o.React.createElement(o.React.Fragment,null)},o.React.createElement(X.Icon,{icon:()=>o.React.createElement(De,null)}),o.React.createElement(X.Title,null,M.default.name),o.React.createElement(X.Divider,null),o.React.createElement(Ce,{type:Ce.Types.TOP_PILL,onItemSelect:r=>t(r),selectedItem:e},Object.entries(M.default.settingTabs).map(([r,c])=>o.React.createElement(Ce.Item,{id:r,disabled:r==="customcss"&&(!window.ace||window.__DR__BACKEND__.isPopped)},c)))),o.React.createElement("div",{className:_t},o.React.createElement("div",{className:yt,style:{padding:"16px 12px"}},o.React.createElement(n,null))))});(0,I.waitUntil)(()=>document.querySelector(`.${Rt}`)).then(e=>{let t=(0,I.getOwnerInstance)(e),n=(0,g.default)("RouteWithImpression").default;me.default.after("DrInternal-RouterRoutes-Patch",t?.props?.children,"type",(c,l)=>{let{children:a}=(0,I.findInReactTree)(l,i=>Array.isArray(i.children)&&i.children.length>5);a.push(o.React.createElement(n,{path:"/dr_dashboard",impressionName:"dr_dashboard",disableTrack:!0,render:()=>o.React.createElement(wt,null)}))}),t.forceUpdate();let{app:r}=(0,g.default)(["app"]);(0,I.waitUntil)(()=>document.querySelector(`.${r}`)).then(c=>{(0,I.findInTree)((0,I.getOwnerInstance)(c)?._reactInternals,l=>l?.historyUnlisten,{walkable:["child","stateNode"]}).forceUpdate()})})});var kt=S(k=>{"use strict";var vt=k&&k.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),St=k&&k.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),Et=k&&k.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&vt(t,e,n);return St(t,e),t},te=k&&k.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(k,"__esModule",{value:!0});var he=te(Re());he.default.log("Loading...");if(location.pathname.startsWith("/dr_dashboard")){let e=document.querySelector('[href="//discord.com/login"]');throw e&&e.click(),new Error("Preventing further execution")}if(Boolean(window.DrApi))throw new Error("Discord Re-envisioned is already loaded.");var F=K(),T=te(ce()),z=Et($()),be=Y(),Mt=te(Me()),j=pe(),_e=V();Te();var ne=te(W());document.body.appendChild(Object.assign(document.createElement("script"),{src:"https://ajaxorg.github.io/ace-builds/src-min-noconflict/ace.js",nonce:document.querySelector("[nonce]")?.nonce}));xt();var H=Object.assign({devMode:_e.internal.get("devMode")??!1,require:function(){throw new Error("tried using require on WEB!")},app:!1,isPopped:!1,openSetting:(0,j.openSetting)(),badges:{"515780151791976453":[ne.default.badges.developer,"#F52590"],"359174224809689089":[ne.default.badges.developer,"#F52590"],"775199408638656553":[ne.default.badges.tester,"#F52590"]},logger:he.default,i18n:ne.default},window.__DR__BACKEND__||{});window.__DR__BACKEND__=H;H.app&&window.DiscordNative.window.setDevtoolsCallbacks(null,null);async function xt(){try{Object.defineProperty((0,z.default)(["isDeveloper"]),"isDeveloper",{get:()=>H.devMode,set:a=>H.devMode=a})}catch(a){H.isDeveloperErrored=!0}await(0,j.waitUntil)(()=>document.querySelector(".container-YkUktl"));let e={},t={};window.DrApi={getModule:z.default,asyncGetModule:z.asyncGetModule,findInReactTree:j.findInReactTree,findInTree:j.findInTree,patcher:{before:function(a,i,s,d,u={}){return T.default.before(a,i,s,d,Object.assign({},u))},instead:function(a,i,s,d,u={}){return T.default.instead(a,i,s,d,Object.assign({},u))},after:function(a,i,s,d,u={}){return T.default.after(a,i,s,d,Object.assign({},u))},patch:function(a,i,s,d,u={}){return T.default.patch(a,i,s,d,Object.assign({},u))},quick:function(a,i,s,d={}){return T.default.quick(a,i,s,d)},unpatchAll:function(a){return T.default.unpatchAll(a)},patches:T.default.patches},styling:{inject:function(a,i){return be.pluginStyling.inject(a,i)},update:function(a,i){return be.pluginStyling.update(a,i)},uninject:function(a){return be.pluginStyling.uninject(a)}},Plugins:{get:function(a){return e.get(a)},getAll:()=>e.getAll(),isEnabled:function(a){return e.isEnabled(a)},disable:function(a){return e.disable(a)},enable:function(a){return e.enable(a)},toggle:function(a){return e.toggle(a)}},Themes:{get:function(a){return t.get(a)},getAll:()=>t.getAll(),isEnabled:function(a){return t.isEnabled(a)},disable:function(a){return t.disable(a)},enable:function(a){return t.enable(a)},toggle:function(a){return t.toggle(a)}},showConfirmationModal:function(a,i,s={}){return(0,j.showConfirmationModal)(a,i,s)},prompt:async function(a,i){return await(0,j.prompt)(a,i)},toast:function(a,i={}){return(0,Mt.default)(a,i)},React:F.React,ReactDOM:F.ReactDOM,storage:{get:function(a,i){return _e.plugins.get(a,i)},set:function(a,i,s){return _e.plugins.set(a,i,s)}},getInstance:{owner:function(a){return(0,j.getOwnerInstance)(a)},react:function(a){return(0,j.getReactInstance)(a)}}};let n=(0,z.default)("Tooltip").default,r=(0,z.default)("Clickable").default;function c(a,i,s=22){return F.React.createElement(n,{text:a},d=>F.React.createElement(r,{...d},F.React.createElement("svg",{viewBox:"0 0 22 22",width:s,height:s},F.React.createElement("path",{d:"M11.1903 7.802C11.1903 8.426 11.1003 9.092 10.9203 9.8C10.7403 10.496 10.4883 11.192 10.1643 11.888C9.84032 12.572 9.43832 13.232 8.95832 13.868C8.49032 14.492 7.95632 15.044 7.35632 15.524C6.75632 15.992 6.09632 16.37 5.37632 16.658C4.66832 16.946 3.91232 17.09 3.10832 17.09C2.94032 17.09 2.77232 17.078 2.60432 17.054C2.43632 17.042 2.26832 17.024 2.10032 17C2.42432 15.344 2.74232 13.73 3.05432 12.158C3.17432 11.498 3.30032 10.814 3.43232 10.106C3.56432 9.386 3.69032 8.678 3.81032 7.982C3.93032 7.286 4.04432 6.62 4.15232 5.984C4.27232 5.348 4.36832 4.772 4.44032 4.256C4.95632 4.16 5.47832 4.07 6.00632 3.986C6.53432 3.902 7.07432 3.86 7.62632 3.86C8.27432 3.86 8.82032 3.962 9.26432 4.166C9.72032 4.37 10.0863 4.652 10.3623 5.012C10.6503 5.372 10.8603 5.792 10.9923 6.272C11.1243 6.752 11.1903 7.262 11.1903 7.802ZM6.94232 6.398C6.81032 7.106 6.67232 7.784 6.52832 8.432C6.38432 9.08 6.24032 9.734 6.09632 10.394C5.95232 11.054 5.80832 11.744 5.66432 12.464C5.52032 13.184 5.38232 13.97 5.25032 14.822C5.53832 14.63 5.81432 14.372 6.07832 14.048C6.35432 13.712 6.61232 13.328 6.85232 12.896C7.09232 12.464 7.30832 12.008 7.50032 11.528C7.70432 11.048 7.87832 10.58 8.02232 10.124C8.16632 9.668 8.27432 9.242 8.34632 8.846C8.43032 8.45 8.47232 8.108 8.47232 7.82C8.47232 7.376 8.34632 7.028 8.09432 6.776C7.85432 6.524 7.47032 6.398 6.94232 6.398ZM10.0456 17.018C10.3696 15.422 10.6816 13.862 10.9816 12.338C11.0896 11.69 11.2096 11.018 11.3416 10.322C11.4736 9.614 11.5936 8.918 11.7016 8.234C11.8216 7.538 11.9296 6.872 12.0256 6.236C12.1336 5.588 12.2176 5 12.2776 4.472C12.9616 4.256 13.6996 4.1 14.4916 4.004C15.2836 3.896 16.0696 3.842 16.8496 3.842C17.3176 3.842 17.7016 3.896 18.0016 4.004C18.3136 4.112 18.5536 4.268 18.7216 4.472C18.9016 4.664 19.0276 4.892 19.0996 5.156C19.1716 5.42 19.2076 5.714 19.2076 6.038C19.2076 6.518 19.1236 6.992 18.9556 7.46C18.7876 7.916 18.5596 8.354 18.2716 8.774C17.9956 9.182 17.6716 9.56 17.2996 9.908C16.9396 10.244 16.5496 10.52 16.1296 10.736C16.3456 11.216 16.5736 11.744 16.8136 12.32C17.0656 12.884 17.2996 13.424 17.5156 13.94C17.7556 14.54 18.0016 15.14 18.2536 15.74L15.4636 16.712C15.2236 15.944 15.0076 15.224 14.8156 14.552C14.7316 14.276 14.6476 13.994 14.5636 13.706C14.4796 13.406 14.4016 13.124 14.3296 12.86C14.2576 12.596 14.1976 12.362 14.1496 12.158C14.1016 11.942 14.0716 11.768 14.0596 11.636L13.8256 11.708C13.7536 12.092 13.6636 12.542 13.5556 13.058C13.4596 13.574 13.3696 14.072 13.2856 14.552C13.1776 15.116 13.0696 15.686 12.9616 16.262L10.0456 17.018ZM14.2756 9.206C14.5036 9.182 14.7796 9.086 15.1036 8.918C15.4396 8.75 15.7576 8.552 16.0576 8.324C16.3576 8.084 16.6156 7.838 16.8316 7.586C17.0476 7.334 17.1556 7.112 17.1556 6.92C17.1556 6.788 17.1136 6.686 17.0296 6.614C16.9456 6.53 16.8256 6.47 16.6696 6.434C16.5256 6.386 16.3636 6.356 16.1836 6.344C16.0036 6.332 15.8176 6.326 15.6256 6.326C15.4936 6.326 15.3556 6.332 15.2116 6.344C15.0796 6.344 14.9596 6.344 14.8516 6.344L14.2756 9.206Z",fill:i}))))}let l=(0,z.default)("UserProfileBadgeList");T.default.after("DrInternal-UserProfileBadgeList-Patch",l,"default",([a],i)=>{let s=window.__DR__BACKEND__.badges[a.user.id];!s||i.props.children.push(c(s[0],s[1],Number(l.BadgeSizes[a.size].replace("SIZE_",""))))}),he.default.log("Loaded!")}});kt();})();
