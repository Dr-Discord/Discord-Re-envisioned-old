(()=>{var y=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports);var V=y(R=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});R.languages=void 0;R.languages={global:{name:"Discord Re-envisioned",version:"0.0.1"},en:{devMode:{title:"Toggle Developer Mode",note:"Warning you can get banned from Discord if you do this (not a 100% chance)!"},settingTabs:{general:"General",plugins:"Plugins",themes:"Themes"},uninstall:"Uninstall",settings:"Settings",installing:{alreadyInstalled:{content:"Plugin '{{name}}' is already installed",replace:function(e){return this.content.replace("{{name}}",e)}},installed:{content:"Installed '{{name}}'! Refresh the page to see it.",replace:function(e){return this.content.replace("{{name}}",e)}},notValid:{content:"'{{url}}' is not a valid plugin URL",replace:function(e){return this.content.replace("{{url}}",e)}},install:"Install"}}};var xe=new Proxy(R.languages[navigator.language.split("-",1)[0]],{get:(e,n)=>{let t=navigator.language.split("-",1)[0];return R.languages.global[n]||R.languages[t][n]||R.languages.en[n]||n}});R.default=xe});var be=y(E=>{"use strict";var Ae=E&&E.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(E,"__esModule",{value:!0});E.cache=void 0;var qe=Ae(V());function Le(e){let n=console[e];return n?.__sentry_original__?n.__sentry_original__:n?.__REACT_DEVTOOLS_ORIGINAL_METHOD__?n.__REACT_DEVTOOLS_ORIGINAL_METHOD__:n}function Be(e){return btoa(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M11.1903 7.802C11.1903 8.426 11.1003 9.092 10.9203 9.8C10.7403 10.496 10.4883 11.192 10.1643 11.888C9.84032 12.572 9.43832 13.232 8.95832 13.868C8.49032 14.492 7.95632 15.044 7.35632 15.524C6.75632 15.992 6.09632 16.37 5.37632 16.658C4.66832 16.946 3.91232 17.09 3.10832 17.09C2.94032 17.09 2.77232 17.078 2.60432 17.054C2.43632 17.042 2.26832 17.024 2.10032 17C2.42432 15.344 2.74232 13.73 3.05432 12.158C3.17432 11.498 3.30032 10.814 3.43232 10.106C3.56432 9.386 3.69032 8.678 3.81032 7.982C3.93032 7.286 4.04432 6.62 4.15232 5.984C4.27232 5.348 4.36832 4.772 4.44032 4.256C4.95632 4.16 5.47832 4.07 6.00632 3.986C6.53432 3.902 7.07432 3.86 7.62632 3.86C8.27432 3.86 8.82032 3.962 9.26432 4.166C9.72032 4.37 10.0863 4.652 10.3623 5.012C10.6503 5.372 10.8603 5.792 10.9923 6.272C11.1243 6.752 11.1903 7.262 11.1903 7.802ZM6.94232 6.398C6.81032 7.106 6.67232 7.784 6.52832 8.432C6.38432 9.08 6.24032 9.734 6.09632 10.394C5.95232 11.054 5.80832 11.744 5.66432 12.464C5.52032 13.184 5.38232 13.97 5.25032 14.822C5.53832 14.63 5.81432 14.372 6.07832 14.048C6.35432 13.712 6.61232 13.328 6.85232 12.896C7.09232 12.464 7.30832 12.008 7.50032 11.528C7.70432 11.048 7.87832 10.58 8.02232 10.124C8.16632 9.668 8.27432 9.242 8.34632 8.846C8.43032 8.45 8.47232 8.108 8.47232 7.82C8.47232 7.376 8.34632 7.028 8.09432 6.776C7.85432 6.524 7.47032 6.398 6.94232 6.398ZM10.0456 17.018C10.3696 15.422 10.6816 13.862 10.9816 12.338C11.0896 11.69 11.2096 11.018 11.3416 10.322C11.4736 9.614 11.5936 8.918 11.7016 8.234C11.8216 7.538 11.9296 6.872 12.0256 6.236C12.1336 5.588 12.2176 5 12.2776 4.472C12.9616 4.256 13.6996 4.1 14.4916 4.004C15.2836 3.896 16.0696 3.842 16.8496 3.842C17.3176 3.842 17.7016 3.896 18.0016 4.004C18.3136 4.112 18.5536 4.268 18.7216 4.472C18.9016 4.664 19.0276 4.892 19.0996 5.156C19.1716 5.42 19.2076 5.714 19.2076 6.038C19.2076 6.518 19.1236 6.992 18.9556 7.46C18.7876 7.916 18.5596 8.354 18.2716 8.774C17.9956 9.182 17.6716 9.56 17.2996 9.908C16.9396 10.244 16.5496 10.52 16.1296 10.736C16.3456 11.216 16.5736 11.744 16.8136 12.32C17.0656 12.884 17.2996 13.424 17.5156 13.94C17.7556 14.54 18.0016 15.14 18.2536 15.74L15.4636 16.712C15.2236 15.944 15.0076 15.224 14.8156 14.552C14.7316 14.276 14.6476 13.994 14.5636 13.706C14.4796 13.406 14.4016 13.124 14.3296 12.86C14.2576 12.596 14.1976 12.362 14.1496 12.158C14.1016 11.942 14.0716 11.768 14.0596 11.636L13.8256 11.708C13.7536 12.092 13.6636 12.542 13.5556 13.058C13.4596 13.574 13.3696 14.072 13.2856 14.552C13.1776 15.116 13.0696 15.686 12.9616 16.262L10.0456 17.018ZM14.2756 9.206C14.5036 9.182 14.7796 9.086 15.1036 8.918C15.4396 8.75 15.7576 8.552 16.0576 8.324C16.3576 8.084 16.6156 7.838 16.8316 7.586C17.0476 7.334 17.1556 7.112 17.1556 6.92C17.1556 6.788 17.1136 6.686 17.0296 6.614C16.9456 6.53 16.8256 6.47 16.6696 6.434C16.5256 6.386 16.3636 6.356 16.1836 6.344C16.0036 6.332 15.8176 6.326 15.6256 6.326C15.4936 6.326 15.3556 6.332 15.2116 6.344C15.0796 6.344 14.9596 6.344 14.8516 6.344L14.2756 9.206Z" fill="${e}"></path></svg>`)}function _e(e,n,t){function r(o){return o?e:n}return r(typeof t=="boolean"?t:matchMedia("(prefers-color-scheme: dark)").matches)}E.cache={};E.default=new Proxy(E.cache,{get:(e,n)=>{let t=(...r)=>{let a=typeof r[0]=="string"?[`
${r[0]}`,...r.slice(1)]:[`
`,...r];Le(n)(`%cDR%c${qe.default.name}`,`background-image:url(data:image/svg+xml;base64,${Be(_e("#202124","#fff"))}); color: transparent; background-size: 24px; background-repeat: no-repeat; padding: 5px; background-color: rgb(31, 173, 78); border-radius: 4px`,`background: rgb(31, 173, 78); margin-left: 5px; margin-bottom: 9px; padding: 2px; border-radius: 4px; color: ${_e("#202124","#fff")}`,...a)};return E.cache[n]=t,t}})});var U=y(d=>{"use strict";var Ne=d&&d.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(d,"__esModule",{value:!0});d.restart=d.findInReactTree=d.findInTree=d.prompt=d.showConfirmationModal=d.getOwnerInstance=d.getReactInstance=d.waitUntil=d.sleep=void 0;var I=W(),M=Ne(L()),Te=e=>new Promise(n=>setTimeout(n,e));d.sleep=Te;async function $e(e){let n;for(;!(n=e());)await(0,d.sleep)(1);return n}d.waitUntil=$e;function ye(e){if(!!e)return e.__reactInternalInstance$?e.__reactInternalInstance$:e[Object.keys(e).find(n=>n.startsWith("__reactInternalInstance")||n.startsWith("__reactFiber"))]||null}d.getReactInstance=ye;function Pe(e){for(let n=ye(e);n;n=n.return){let t=n.stateNode;if(typeof t?.forceUpdate=="function")return t}}d.getOwnerInstance=Pe;function Ue(e,n,t){let r=(0,M.default)(b=>b.default?.displayName==="Markdown"&&b.default.rules).default,o=(0,M.default)("ConfirmModal").default,a=(0,M.default)(["ButtonColors"]),{openModal:i}=(0,M.default)(["openModal","openModalLazy"]),s=(0,M.default)(["Messages"],!1)[1].Messages,l=()=>{},{onConfirm:c=l,onCancel:u=l,confirmText:m=s.OKAY,cancelText:v=s.CANCEL,danger:$=!1}=t;Array.isArray(n)||(n=[n]),n=n.map(b=>typeof b=="string"?I.React.createElement(r,null,b):b),i(b=>I.React.createElement(o,{...b,header:e,content:n,onConfirm:c,onCancel:u,confirmText:m,cancelText:v,confirmButtonColor:$?a.ButtonColors.RED:a.ButtonColors.BRAND},n))}d.showConfirmationModal=Ue;function We(e,n){let t=(0,M.default)("TextInput").default,r=(0,M.default)("ConfirmModal").default,o=(0,M.default)(["ButtonColors"]),{Messages:a}=(0,M.default)(["Messages"],!1)[1],{openModal:i}=(0,M.default)(["openModal","openModalLazy"]),s="";return new Promise(l=>{i(c=>(c.transitionState===3&&l(null),I.React.createElement(r,Object.assign({header:e,confirmButtonColor:o.ButtonColors.BRAND,confirmText:a.OKAY,cancelText:a.CANCEL,onConfirm:()=>l(s),onCancel:()=>l(null),children:I.React.createElement(I.React.memo(()=>{let[u,m]=I.React.useState(n);return I.React.createElement(t,{value:u,onChange:v=>{m(v),s=v}})}))},c))))})}d.prompt=We;function P(e,n,t={}){let{walkable:r=null,ignore:o=[]}=t;if(!e||typeof e!="object")return null;if(typeof n=="string")return e.hasOwnProperty(n)?e[n]:void 0;if(n(e))return e;let a=null;if(Array.isArray(e)){for(let i of e)if(a=P(i,n,{walkable:r,ignore:o}),a)return a}else{let i=r||Object.keys(e);for(let s of i)if(!(!e.hasOwnProperty(s)||o.includes(s))&&(a=P(e[s],n,{walkable:r,ignore:o}),a))return a}return a}d.findInTree=P;function ze(e,n){return P(e,n,{walkable:["props","children","child","sibling"]})}d.findInReactTree=ze;function Fe(e){return window.__DR__BACKEND__.app&&e?window.__DR__BACKEND__.require("electron").ipcRenderer.send("DR_FULL_RESTART"):location.reload()}d.restart=Fe});var L=y(N=>{"use strict";Object.defineProperty(N,"__esModule",{value:!0});N.asyncGetModule=void 0;var Ge=U(),z=webpackChunkdiscord_app.webpackExports?webpackChunkdiscord_app.webpackExports:webpackChunkdiscord_app.push([[Symbol("Discord Re-envisioned")],{},e=>(webpackChunkdiscord_app.pop(),webpackChunkdiscord_app.webpackExports=e,e)]);function B(e){let n=[];for(let t in z.c){if(!Object.hasOwnProperty.call(z.c,t))continue;let r=z.c[t].exports;!r||e(r)&&n.push(r)}return n}function H(e,n=!0){let t=[];function r(...a){let i=B(l=>a.every(c=>typeof l[c]!="undefined")),s=[];for(let l of B(c=>a.every(u=>typeof c.default?.[u]!="undefined")))s.push(l.default);return[...i,...s]}function o(a){let i=B(c=>c.default?.displayName===a),s=B(c=>c.default?.type?.displayName===a),l=B(c=>c.default?.type?.render?.displayName===a);return[...i,...s,...l]}return Array.isArray(e)?t=r(...e):typeof e=="string"?t=o(e):typeof e=="number"?t=[z.c[e]]:typeof e=="function"&&(t=B(e)),n?t[0]:t}N.default=H;async function Je(e){return await new Promise(async n=>await(0,Ge.waitUntil)(()=>{!H(e)||n(H(e))}))}N.asyncGetModule=Je});var W=y(O=>{"use strict";var Ze=O&&O.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(O,"__esModule",{value:!0});O.ReactDOM=O.React=void 0;var we=Ze(L());O.React=(0,we.default)(["createElement","Component"]);O.ReactDOM=(0,we.default)(["render","findDOMNode"]);O.default=O.React});var F=y(X=>{"use strict";Object.defineProperty(X,"__esModule",{value:!0});var Y=Symbol("DrApi.patch"),Ke=Symbol("DrApi.patch.quick"),Q=Symbol("DrInternal"),_={};function T(e,n,t,r,o){let{method:a="after",id:i,once:s=!1,index:l=0}=o,c=n[t];if(c||(n[t]=()=>{},c=n[t]),a=a.toLowerCase(),!(a==="before"||a==="after"||a==="instead"))throw new Error(`'${a}' is a invalid patch type`);let u=n?.[t]?.[Y]?.patches??{before:[],after:[],instead:[]},m=Symbol(),v={unpatch:b,patchName:i??e,moduleToPatch:n,functionToPatch:t,callback:r,method:a,Symbol:m};u[a].splice(l,0,Object.assign(r,{unpatch:b,Symbol:m}));let $=!1;function b(){if($)return;$=!0;let g=u[a].find(C=>C.Symbol===v.Symbol),q=u[a].indexOf(g);u[a].splice(q,1),g=_[e].find(C=>C.Symbol===v.Symbol),q=_[e].indexOf(g),_[e].splice(q,1),_[e].length||delete _[e]}return n[t][Y]||(n[t]=function(){for(let C=Object.keys(u.before).length;C>0;C--)u.before[C-1]();let g=c;for(let C=Object.keys(u.instead).length;C>0;C--)g=u.instead[C-1]([...arguments],g,this)??g;let q=g.apply(this,[...arguments]);for(let C=Object.keys(u.after).length;C>0;C--)u.after[C-1]([...arguments],q,this);return s&&b(),q},n[t][Y]={original:c,module:n,function:t,patches:u,unpatchAll:()=>{for(let g=Object.keys(u.before).length;g>0;g--)u.before[g-1].unpatch();for(let g=Object.keys(u.instead).length;g>0;g--)u.instead[g-1].unpatch();for(let g=Object.keys(u.after).length;g>0;g--)u.after[g-1].unpatch();n[t]=c}},Object.assign(n[t],c,{toString:()=>c.toString()})),typeof e=="string"&&/DrInternal-([A-z]+)-Patch/.test(e)?_[Q]?_[Q].push(v):_[Q]=[v]:_[e]?_[e].push(v):_[e]=[v],b}X.default={patch:T,quick:(e,n,t,r)=>T(Ke,e,n,t,Object.assign({},r)),before:(e,n,t,r,o)=>T(e,n,t,r,Object.assign({},o,{method:"before"})),instead:(e,n,t,r,o)=>T(e,n,t,r,Object.assign({},o,{method:"instead"})),after:(e,n,t,r,o)=>T(e,n,t,r,Object.assign({},o,{method:"after"})),unpatchAll:e=>{if(!!_[e])for(let n of _[e])n.unpatch()},patches:_}});var oe=y(S=>{"use strict";var Ve=S&&S.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(S,"__esModule",{value:!0});S.internalStyling=S.themeStyling=S.pluginStyling=void 0;var He=Ve(L()),ve=document.createElement("dr-styles");document.head.appendChild(ve);var ee={internal:document.createElement("dr-internal"),plugin:document.createElement("dr-plugin"),theme:document.createElement("dr-theme")};for(let e of Object.keys(ee))ve.appendChild(ee[e]);function te(e){return(n,t)=>{let r=document.createElement("style");r.setAttribute(`dr-${e}-css`,n),r.innerHTML=t,ee[e].appendChild(r)}}function ne(e){return(n,t)=>{let r=document.querySelector(`style[dr-${e}-css="${n}"]`);r&&(r.innerHTML=t)}}function re(e){return n=>{let t=document.querySelector(`style[dr-${e}-css="${n}"]`);t&&t.remove()}}function ae(e){let n=e.match(/#{(("[A-z]+")((, )|)){1,}}/g);if(!n)return e;for(let t of n){let r=JSON.parse(t.replace("#{","[").replace("}","]"));e=e.replace(t,`.${(0,He.default)(r,!0)?.[r[0]].replaceAll(" ",".")}`)}return e}S.pluginStyling={inject:te("plugin"),update:ne("plugin"),uninject:re("plugin"),getClasses:ae};S.themeStyling={inject:te("theme"),update:ne("theme"),uninject:re("theme"),getClasses:ae};S.internalStyling={inject:te("internal"),update:ne("internal"),uninject:re("internal"),getClasses:ae}});var Me=y(se=>{"use strict";Object.defineProperty(se,"__esModule",{value:!0});var Ye=oe();Ye.internalStyling.inject("toasts",`.dr-toast { display: inline-flex; box-sizing: border-box; border-radius: 3px; color: var(--text-normal); font-size: 16px; background-color: var(--background-floating); vertical-align: bottom; box-shadow: var(--elevation-low); margin: 0 10px 0 auto; flex-grow: 1; opacity: 1; transition: opacity 0.3s ease-in-out; width: fit-content }
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
.dr-toast-close:hover { color: var(--interactive-hover); background-color: var(--background-modifier-hover) }`);var ie=document.createElement("div");ie.className="dr-toast-container";document.body.appendChild(ie);var G=document.createElement("div");G.className="dr-toast-wrapper";G.style.marginBottom="5px";ie.appendChild(G);function Qe(e,n){let t,r,o=n,a=function(){window.clearTimeout(t),t=null,o-=Date.now()-r},i=function(){t||(r=Date.now(),t=window.setTimeout(e,o))};return i(),{pause:a,resume:i}}function Xe(e,n){let{type:t="success",duration:r=3e3,autoClose:o=!0,closeButton:a=!0}=n,i=document.createElement("div");i.className="dr-toast adding",setTimeout(()=>i.classList.remove("adding"),300),G.appendChild(i);let s=document.createElement("span");s.className=`dr-toast-type ${t.toLowerCase()}`,i.appendChild(s);let l=document.createElement("div");l.className="dr-toast-message-wrapper",i.appendChild(l);let c=document.createElement("span");c.className="dr-toast-message",c.innerText=e,l.appendChild(c);function u(){i.classList.add("removing"),setTimeout(()=>i.remove(),300)}if(a){let m=document.createElement("span");m.className="dr-toast-close",m.innerText="\u2715",m.onclick=u,i.appendChild(m)}if(o){let m=Qe(()=>u(),r);i.onmouseenter=m.pause,i.onmouseleave=m.resume}return i}se.default=Xe});var le=y(h=>{"use strict";Object.defineProperty(h,"__esModule",{value:!0});h.internal=h.plugins=h.localStorage=void 0;h.localStorage=(()=>{if(window.localStorage)return window.localStorage;let e=document.createElement("frame");e.src="about:blank",document.body.appendChild(e);let n=Object.getOwnPropertyDescriptor(e.contentWindow,"localStorage");return e.remove(),Object.defineProperty(window,"localStorage",n),n=window.localStorage,delete window.localStorage,n})();h.localStorage.setItem("dr-storage",(()=>{let e=JSON.parse(h.localStorage.getItem("dr-storage")??"{}");for(let n of["themeData","pluginData","internalData"])e[n]=e[n]??{};return JSON.stringify(e)})());h.plugins={get:(e,n)=>JSON.parse(h.localStorage.getItem("dr-storage")??"{}").pluginData?.[e]?.[n],set:(e,n,t)=>{let r=JSON.parse(h.localStorage.getItem("dr-storage")??"{}");r.pluginData[e]||(r.pluginData[e]={}),r.pluginData[e][n]=t,h.localStorage.setItem("dr-storage",JSON.stringify(r))}};h.internal={get:e=>JSON.parse(h.localStorage.getItem("dr-storage")??"{}").internalData?.[e],set:(e,n)=>{let t=JSON.parse(h.localStorage.getItem("dr-storage")??"{}");t.internalData[e]=n,h.localStorage.setItem("dr-storage",JSON.stringify(t))}}});var ce=y(p=>{"use strict";var et=p&&p.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(p,"__esModule",{value:!0});p.dispatch=p.unsubscibe=p.subscribe=p.unregister=p.register=p.Actions=void 0;var tt=et(F()),nt=Symbol("DrApi.actions");p.Actions={};function rt(e,n){return p.Actions[e]=n,()=>Oe(e)}p.register=rt;function Oe(e){!p.Actions[e]||delete p.Actions[e]}p.unregister=Oe;var Se=[];function at(e,n){return Se.push({callback:n,undo:tt.default.after(nt,p.Actions,e,n)}),()=>De(n)}p.subscribe=at;function De(e){Se.find(({callback:n})=>n===e)?.undo?.()}p.unsubscibe=De;function ot(e,...n){let t=p.Actions[e];if(!!t)return t(...n)}p.dispatch=ot});var ke=y(Z=>{"use strict";var ue=Z&&Z.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Z,"__esModule",{value:!0});var f=W(),k=U(),w=ue(L()),de=ue(F()),J=ue(V()),Re=le(),Ee=ce(),Ie=f.React.memo(()=>f.React.createElement("svg",{width:24,height:24,viewBox:"0 0 22 22"},f.React.createElement("path",{d:"M11.1903 7.802C11.1903 8.426 11.1003 9.092 10.9203 9.8C10.7403 10.496 10.4883 11.192 10.1643 11.888C9.84032 12.572 9.43832 13.232 8.95832 13.868C8.49032 14.492 7.95632 15.044 7.35632 15.524C6.75632 15.992 6.09632 16.37 5.37632 16.658C4.66832 16.946 3.91232 17.09 3.10832 17.09C2.94032 17.09 2.77232 17.078 2.60432 17.054C2.43632 17.042 2.26832 17.024 2.10032 17C2.42432 15.344 2.74232 13.73 3.05432 12.158C3.17432 11.498 3.30032 10.814 3.43232 10.106C3.56432 9.386 3.69032 8.678 3.81032 7.982C3.93032 7.286 4.04432 6.62 4.15232 5.984C4.27232 5.348 4.36832 4.772 4.44032 4.256C4.95632 4.16 5.47832 4.07 6.00632 3.986C6.53432 3.902 7.07432 3.86 7.62632 3.86C8.27432 3.86 8.82032 3.962 9.26432 4.166C9.72032 4.37 10.0863 4.652 10.3623 5.012C10.6503 5.372 10.8603 5.792 10.9923 6.272C11.1243 6.752 11.1903 7.262 11.1903 7.802ZM6.94232 6.398C6.81032 7.106 6.67232 7.784 6.52832 8.432C6.38432 9.08 6.24032 9.734 6.09632 10.394C5.95232 11.054 5.80832 11.744 5.66432 12.464C5.52032 13.184 5.38232 13.97 5.25032 14.822C5.53832 14.63 5.81432 14.372 6.07832 14.048C6.35432 13.712 6.61232 13.328 6.85232 12.896C7.09232 12.464 7.30832 12.008 7.50032 11.528C7.70432 11.048 7.87832 10.58 8.02232 10.124C8.16632 9.668 8.27432 9.242 8.34632 8.846C8.43032 8.45 8.47232 8.108 8.47232 7.82C8.47232 7.376 8.34632 7.028 8.09432 6.776C7.85432 6.524 7.47032 6.398 6.94232 6.398ZM10.0456 17.018C10.3696 15.422 10.6816 13.862 10.9816 12.338C11.0896 11.69 11.2096 11.018 11.3416 10.322C11.4736 9.614 11.5936 8.918 11.7016 8.234C11.8216 7.538 11.9296 6.872 12.0256 6.236C12.1336 5.588 12.2176 5 12.2776 4.472C12.9616 4.256 13.6996 4.1 14.4916 4.004C15.2836 3.896 16.0696 3.842 16.8496 3.842C17.3176 3.842 17.7016 3.896 18.0016 4.004C18.3136 4.112 18.5536 4.268 18.7216 4.472C18.9016 4.664 19.0276 4.892 19.0996 5.156C19.1716 5.42 19.2076 5.714 19.2076 6.038C19.2076 6.518 19.1236 6.992 18.9556 7.46C18.7876 7.916 18.5596 8.354 18.2716 8.774C17.9956 9.182 17.6716 9.56 17.2996 9.908C16.9396 10.244 16.5496 10.52 16.1296 10.736C16.3456 11.216 16.5736 11.744 16.8136 12.32C17.0656 12.884 17.2996 13.424 17.5156 13.94C17.7556 14.54 18.0016 15.14 18.2536 15.74L15.4636 16.712C15.2236 15.944 15.0076 15.224 14.8156 14.552C14.7316 14.276 14.6476 13.994 14.5636 13.706C14.4796 13.406 14.4016 13.124 14.3296 12.86C14.2576 12.596 14.1976 12.362 14.1496 12.158C14.1016 11.942 14.0716 11.768 14.0596 11.636L13.8256 11.708C13.7536 12.092 13.6636 12.542 13.5556 13.058C13.4596 13.574 13.3696 14.072 13.2856 14.552C13.1776 15.116 13.0696 15.686 12.9616 16.262L10.0456 17.018ZM14.2756 9.206C14.5036 9.182 14.7796 9.086 15.1036 8.918C15.4396 8.75 15.7576 8.552 16.0576 8.324C16.3576 8.084 16.6156 7.838 16.8316 7.586C17.0476 7.334 17.1556 7.112 17.1556 6.92C17.1556 6.788 17.1136 6.686 17.0296 6.614C16.9456 6.53 16.8256 6.47 16.6696 6.434C16.5256 6.386 16.3636 6.356 16.1836 6.344C16.0036 6.332 15.8176 6.326 15.6256 6.326C15.4936 6.326 15.3556 6.332 15.2116 6.344C15.0796 6.344 14.9596 6.344 14.8516 6.344L14.2756 9.206Z",fill:"currentcolor"}))),j=()=>{},{LinkButton:it}=(0,w.default)(["LinkButton"]),st=f.React.memo(({children:e})=>{let[n,t]=f.React.useState(!1),r=e.find(o=>o?.props?.selected);return r&&(j=r),(0,Ee.register)("DrDashboardButtonOnRender",function(o){if(!o){let a=document.querySelector(`.channel-1Shao0 [href="${location.pathname}"]`);if(!a)return t(o);j.props||(j.props={}),j.props.selected=(0,k.getOwnerInstance)(a)._reactInternals.return.key===j.key}t(o)}),f.React.createElement(it,{text:J.default.name,icon:()=>f.React.createElement(Ie,null),route:"/dr_dashboard",selected:n,onFocus:()=>{j&&(j.props.selected=!1)}})}),lt=(0,w.default)("SwitchItem").default,ct=f.React.memo(e=>{let{value:n,onChange:t=()=>{},title:r,note:o,disabled:a=!1,initialChange:i=!0}=e,[s,l]=f.React.useState(n);return f.React.createElement(lt,{value:s,onChange:()=>{i&&l(!s),t(!s,l)},note:o,disabled:a},r)});de.default.after("router-routes",(0,w.default)("ConnectedPrivateChannelsList"),"default",(e,n)=>{let t=n.props.children.props.children;(0,Ee.dispatch)("DrDashboardButtonOnRender",/^\/dr_dashboard/.test(location.pathname)),!t.find(r=>r&&r.key==="drdashLinkButton")&&t.unshift(f.React.createElement(st,{key:"drdashLinkButton"},t))});var ut=(0,w.default)("FluxContainer(ViewsWithMainInterface)").default?.prototype?.render?.call({memoizedGetStateFromStores:()=>({})})?.type;de.default.after("router-routes",ut?.prototype,"render",(e,n)=>{let t=n.props.children[0].props.children[1];t[t.length-1].props.path.push("/dr_dashboard")});var{content:dt}=(0,w.default)(["chat","uploadArea","threadSidebarOpen"]),{auto:ft}=(0,w.default)(["scrollerBase"]),{container:pt}=(0,w.default)(["container","downloadProgressCircle"]);(0,k.waitUntil)(()=>document.querySelector(`.${pt}`)).then(e=>{let n=(0,k.getOwnerInstance)(e),t=(0,w.default)("RouteWithImpression").default;de.default.after("router-routes",n?.props?.children,"type",(o,a)=>{let{children:i}=(0,k.findInReactTree)(a,l=>Array.isArray(l.children)&&l.children.length>5),s=(0,w.default)(["Caret","Icon","defaultProps"]);i.push(f.React.createElement(t,{path:"/dr_dashboard",impressionName:"dr_dashboard",disableTrack:!0,render:()=>f.React.createElement("div",{className:(0,w.default)(["maxWidthWithToolbar","container","inviteToolbar"]).container},f.React.createElement(s,{toolbar:f.React.createElement(f.React.Fragment,null)},f.React.createElement(s.Icon,{icon:()=>f.React.createElement(Ie,null)}),f.React.createElement(s.Title,null,J.default.name)),f.React.createElement("div",{className:dt},f.React.createElement("div",{className:ft,style:{padding:"16px 12px"}},f.React.createElement(ct,{value:Re.internal.get("devMode")??!1,title:J.default.devMode.title,note:J.default.devMode.note,onChange:l=>{Re.internal.set("devMode",l),(0,w.default)(["isDeveloper"]).isDeveloper=l}}))))}))}),n.forceUpdate();let{app:r}=(0,w.default)(["app"]);(0,k.waitUntil)(()=>document.querySelector(`.${r}`)).then(o=>{(0,k.findInTree)((0,k.getOwnerInstance)(o)?._reactInternals,a=>a?.historyUnlisten,{walkable:["child","stateNode"]}).forceUpdate()})})});var bt=y(D=>{"use strict";var gt=D&&D.__createBinding||(Object.create?function(e,n,t,r){r===void 0&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){r===void 0&&(r=t),e[r]=n[t]}),ht=D&&D.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),Ct=D&&D.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(e!=null)for(var t in e)t!=="default"&&Object.prototype.hasOwnProperty.call(e,t)&&gt(n,e,t);return ht(n,e),n},fe=D&&D.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(D,"__esModule",{value:!0});var pe=fe(be());pe.default.log("Loading...");if(location.pathname.startsWith("/dr_dashboard")){let e=document.querySelector("#app-mount>div");if(!e||!e.firstElementChild)throw new Error("Could not find '#app-mount>div'");let{history:n}=e.__reactFiber$.return.stateNode.props.children.props;throw n.goBack(),new Error("Prevnting further execution")}if(Boolean(window.DrApi))throw new Error("Discord Re-envisioned is already loaded.");var je=W(),x=fe(F()),ge=Ct(L()),K=oe(),mt=fe(Me()),A=U(),he=le(),Ce=ce();ke();_t();var me=Object.assign({devMode:he.internal.get("devMode")??!1,require:function(){throw new Error("tried using require on WEB!")},app:!1,logger:pe.default},window.__DR__BACKEND__||{});window.__DR__BACKEND__=me;async function _t(){Object.defineProperty((0,ge.default)(["isDeveloper"]),"isDeveloper",{get:()=>me.devMode,set:t=>me.devMode=t}),await(0,A.waitUntil)(()=>document.querySelector(".container-YkUktl"));let e={},n={};window.DrApi={getModule:ge.default,asyncGetModule:ge.asyncGetModule,findInReactTree:A.findInReactTree,findInTree:A.findInTree,patcher:{before:function(t,r,o,a,i={}){return x.default.before(t,r,o,a,Object.assign({},i))},instead:function(t,r,o,a,i={}){return x.default.instead(t,r,o,a,Object.assign({},i))},after:function(t,r,o,a,i={}){return x.default.after(t,r,o,a,Object.assign({},i))},patch:function(t,r,o,a,i={}){return x.default.patch(t,r,o,a,Object.assign({},i))},quick:function(t,r,o,a={}){return x.default.quick(t,r,o,a)},unpatchAll:function(t){return x.default.unpatchAll(t)},patches:x.default.patches},actions:{dispatch:function(t,...r){return(0,Ce.dispatch)(t,...r)},register:function(t,r){return(0,Ce.register)(t,r)},unregister:function(t){return(0,Ce.unregister)(t)}},styling:{inject:function(t,r){return K.pluginStyling.inject(t,r)},update:function(t,r){return K.pluginStyling.update(t,r)},uninject:function(t){return K.pluginStyling.uninject(t)},getClasses:function(t){return K.pluginStyling.getClasses(t)}},Plugins:{get:function(t){return e.get(t)},getAll:()=>e.getAll(),isEnabled:function(t){return e.isEnabled(t)},disable:function(t){return e.disable(t)},enable:function(t){return e.enable(t)},toggle:function(t){return e.toggle(t)}},Themes:{get:function(t){return n.get(t)},getAll:()=>n.getAll(),isEnabled:function(t){return n.isEnabled(t)},disable:function(t){return n.disable(t)},enable:function(t){return n.enable(t)},toggle:function(t){return n.toggle(t)}},showConfirmationModal:function(t,r,o={}){return(0,A.showConfirmationModal)(t,r,o)},prompt:async function(t,r){return await(0,A.prompt)(t,r)},toast:function(t,r={}){return(0,mt.default)(t,r)},React:je.React,ReactDOM:je.ReactDOM,storage:{get:function(t,r){return he.plugins.get(t,r)},set:function(t,r,o){return he.plugins.set(t,r,o)}},getInstance:{owner:function(t){return(0,A.getOwnerInstance)(t)},react:function(t){return(0,A.getReactInstance)(t)}}}}pe.default.log("Loaded!")});bt();})();
