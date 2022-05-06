import { React } from "./react"
import { findInReactTree, findInTree, waitUntil, getOwnerInstance, showConfirmationModal, openPopout, anonymous, alert } from "./util"
import getModule, { asyncGetModule } from "./getModule"
import patcher from "./patcher"
import i18n from "./i18n"
import { internal } from "./storage"
import { ReactNode } from "react"
import { updateCustomCSS, internalStyling } from "./styling"

let dispatch = (val:boolean) => {}

const Editor = React.memo(({ props = {}, editor = () => {} }:any) => {
  const ref = React.useRef<any>()
  React.useEffect(() => editor(window.ace.edit(ref.current)))
  return <div ref={ref} {...props} />
})

internalStyling.inject("settings", `.dr-editor-header { background-color: var(--background-secondary); display: flex; flex-direction: row; padding: 2px 4px; border-radius: 6px 6px 0 0 }
.dr-editor-header-button { margin-right: 5px; width: 26px; height: 26px; color: var(--interactive-normal); position: relative }
.dr-editor-header-button:hover { color: var(--interactive-hover) }
.dr-editor-header-button:active { color: var(--interactive-active) }
.dr-editor-header-button > * { width: 22px; height: 22px; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%) }
.dr-editor-header + .ace_editor { border-radius: 0 0 6px 6px }
.dr-select { height: 330px }`)

const DrIcon = React.memo(({ color }:{ color:string }) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 22 22"
  >
    <path 
      d="M11.1903 7.802C11.1903 8.426 11.1003 9.092 10.9203 9.8C10.7403 10.496 10.4883 11.192 10.1643 11.888C9.84032 12.572 9.43832 13.232 8.95832 13.868C8.49032 14.492 7.95632 15.044 7.35632 15.524C6.75632 15.992 6.09632 16.37 5.37632 16.658C4.66832 16.946 3.91232 17.09 3.10832 17.09C2.94032 17.09 2.77232 17.078 2.60432 17.054C2.43632 17.042 2.26832 17.024 2.10032 17C2.42432 15.344 2.74232 13.73 3.05432 12.158C3.17432 11.498 3.30032 10.814 3.43232 10.106C3.56432 9.386 3.69032 8.678 3.81032 7.982C3.93032 7.286 4.04432 6.62 4.15232 5.984C4.27232 5.348 4.36832 4.772 4.44032 4.256C4.95632 4.16 5.47832 4.07 6.00632 3.986C6.53432 3.902 7.07432 3.86 7.62632 3.86C8.27432 3.86 8.82032 3.962 9.26432 4.166C9.72032 4.37 10.0863 4.652 10.3623 5.012C10.6503 5.372 10.8603 5.792 10.9923 6.272C11.1243 6.752 11.1903 7.262 11.1903 7.802ZM6.94232 6.398C6.81032 7.106 6.67232 7.784 6.52832 8.432C6.38432 9.08 6.24032 9.734 6.09632 10.394C5.95232 11.054 5.80832 11.744 5.66432 12.464C5.52032 13.184 5.38232 13.97 5.25032 14.822C5.53832 14.63 5.81432 14.372 6.07832 14.048C6.35432 13.712 6.61232 13.328 6.85232 12.896C7.09232 12.464 7.30832 12.008 7.50032 11.528C7.70432 11.048 7.87832 10.58 8.02232 10.124C8.16632 9.668 8.27432 9.242 8.34632 8.846C8.43032 8.45 8.47232 8.108 8.47232 7.82C8.47232 7.376 8.34632 7.028 8.09432 6.776C7.85432 6.524 7.47032 6.398 6.94232 6.398ZM10.0456 17.018C10.3696 15.422 10.6816 13.862 10.9816 12.338C11.0896 11.69 11.2096 11.018 11.3416 10.322C11.4736 9.614 11.5936 8.918 11.7016 8.234C11.8216 7.538 11.9296 6.872 12.0256 6.236C12.1336 5.588 12.2176 5 12.2776 4.472C12.9616 4.256 13.6996 4.1 14.4916 4.004C15.2836 3.896 16.0696 3.842 16.8496 3.842C17.3176 3.842 17.7016 3.896 18.0016 4.004C18.3136 4.112 18.5536 4.268 18.7216 4.472C18.9016 4.664 19.0276 4.892 19.0996 5.156C19.1716 5.42 19.2076 5.714 19.2076 6.038C19.2076 6.518 19.1236 6.992 18.9556 7.46C18.7876 7.916 18.5596 8.354 18.2716 8.774C17.9956 9.182 17.6716 9.56 17.2996 9.908C16.9396 10.244 16.5496 10.52 16.1296 10.736C16.3456 11.216 16.5736 11.744 16.8136 12.32C17.0656 12.884 17.2996 13.424 17.5156 13.94C17.7556 14.54 18.0016 15.14 18.2536 15.74L15.4636 16.712C15.2236 15.944 15.0076 15.224 14.8156 14.552C14.7316 14.276 14.6476 13.994 14.5636 13.706C14.4796 13.406 14.4016 13.124 14.3296 12.86C14.2576 12.596 14.1976 12.362 14.1496 12.158C14.1016 11.942 14.0716 11.768 14.0596 11.636L13.8256 11.708C13.7536 12.092 13.6636 12.542 13.5556 13.058C13.4596 13.574 13.3696 14.072 13.2856 14.552C13.1776 15.116 13.0696 15.686 12.9616 16.262L10.0456 17.018ZM14.2756 9.206C14.5036 9.182 14.7796 9.086 15.1036 8.918C15.4396 8.75 15.7576 8.552 16.0576 8.324C16.3576 8.084 16.6156 7.838 16.8316 7.586C17.0476 7.334 17.1556 7.112 17.1556 6.92C17.1556 6.788 17.1136 6.686 17.0296 6.614C16.9456 6.53 16.8256 6.47 16.6696 6.434C16.5256 6.386 16.3636 6.356 16.1836 6.344C16.0036 6.332 15.8176 6.326 15.6256 6.326C15.4936 6.326 15.3556 6.332 15.2116 6.344C15.0796 6.344 14.9596 6.344 14.8516 6.344L14.2756 9.206Z"
      fill={color}
    />
  </svg>
))

let selectedChild:any = () => {}

interface DrDashboardButton {
  children: Array<React.ReactNode>
}
const { LinkButton } = getModule(["LinkButton"])
const DrDashboardButton = React.memo(({ children }:DrDashboardButton) => {
  const [isSelected, setSelected] = React.useState(false)
  let _selectedChild = children.find((e:any) => e?.props?.selected)
  if (_selectedChild) selectedChild = _selectedChild

  dispatch = function(val:boolean) {
    const inst = Array.from(document.querySelectorAll(`.channel-1Shao0 .link-39sEB3`))
      .map((e) => getOwnerInstance(e))
      .find(e => e._reactInternals.return.type.displayName === selectedChild.type?.displayName)
    if (!inst) return
    inst.props.selected = false
    inst.forceUpdate()
    setSelected(val)
  }

  return (
    <LinkButton 
      text={i18n.name}
      icon={() =>  <DrIcon color={isSelected ? "#F52590" : "currentcolor"}/>}
      route="/dr_dashboard"
      selected={isSelected}
      onFocus={() => {
        dispatch(true)
        if (selectedChild?.props) selectedChild.props.selected = false
      }}
    />
  )
})

const { transitionTo } = getModule(["transitionTo"])
patcher.before("DrInternal-HomeButtonToDash-Patch", getModule("NavItem"), "default", ([props]:any) => {
  if (props["data-list-item-id"] !== "guildsnav___home") return
  const oldOnClick = props.onClick
  props.onClick = function({ shiftKey }:MouseEvent) {
    if (shiftKey) return transitionTo("/dr_dashboard")
    return Reflect.apply(oldOnClick, this, arguments)
  }
})

interface SwitchItemProps {
  value:boolean
  onChange?:Function
  title:string
  note?:string
  disabled?:boolean
  initialChange?:boolean
}

const SwitchOrig = getModule("SwitchItem")
const SwitchItem = React.memo((props:SwitchItemProps) => {
  const { value, onChange = () => {}, title, note, disabled = false, initialChange = true } = props
  const [checked, setChecked] = React.useState(value)
  return <SwitchOrig.default
    value={checked}
    onChange={() => {
      if (initialChange) setChecked(!checked)
      onChange(!checked, setChecked)
    }}
    note={note}
    disabled={disabled}
  >{title}</SwitchOrig.default>
})
asyncGetModule((e: { default: { displayName: string }}) => e.default?.displayName === "ConnectedPrivateChannelsList").then(ConnectedPrivateChannelsList => {
  patcher.after("DrInternal-RouterRoutes-Patch", ConnectedPrivateChannelsList, "default", (_:unknown, res:any, that:unknown) => {
    const children = res.props.children.props.children
    
    setTimeout(() => { dispatch(/^\/dr_dashboard/.test(location.pathname)) }, 1)
    if (children.find((e:any) => e && e.key === "drdashLinkButton")) return
    if (!DrDashboardButton) return
    children.unshift(<DrDashboardButton key="drdashLinkButton">{children}</DrDashboardButton>)
  })
})

asyncGetModule((e: { default: { displayName: string } }) => e.default?.displayName === "ViewsWithMainInterface").then(Views => {
  patcher.after("DrInternal-RouterRoutes-Patch", Views.default?.prototype, "render", (_:unknown, res:any) => {
    const routes = res.props.children[0].props.children[1]
    routes[routes.length - 1].props.path.push("/dr_dashboard")
  })
})

const Gear = getModule("Gear").default
const OpenExternal = getModule("OpenExternal").default
const editorThemes = [
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
]

const Tooltip = getModule("Tooltip").default
const Select  = getModule("SelectTempWrapper").default

const SelectTheme = React.memo((props:any) => {
  const [theme, setTheme] = React.useState(props.theme)
  return <Select 
    onChange={(e:any) => {
      props.setTheme(e.value)
      setTheme(e.value)
    }}
    className="dr-select"
    options={editorThemes.map(e => ({ label: e, value: e }))}
    value={theme}
  />
})
const Addoncard = React.memo(({  }:any) => {
  const [isEnabled, setEnabled] = React.useState(false)
  return (
    <div className="dr-addon-card">
      
    </div>
  )
})

function changeThemeModal(theme:string, setTheme:Function) {
  let _theme = theme
  showConfirmationModal(i18n.customCSS.changeTheme, <SelectTheme theme={theme} setTheme={(val:string) => _theme = val}/>, {
    onConfirm: () => {
      setTheme(_theme)
      internal.set("editorTheme", _theme)
    },
    context: window.__DR_BACKEND__.isPopped ? "popout" : "default"
  })
}

const pages:any = {
  general: React.memo(() => {
    return <>
      <SwitchItem
        value={internal.get("devMode") ?? false}
        title={i18n.devMode.title}
        note={i18n.devMode.note}
        disabled={window.__DR_BACKEND__.isDeveloperErrored}
        onChange={(val:boolean) => {
          internal.set("devMode", val)
          window.__DR_BACKEND__.devMode = val
        }}
      />
      {(window.__DR_BACKEND__.toggleTransparency && window.__DR_BACKEND__.app) ? <SwitchItem
        value={window.__DR_BACKEND__.transparent}
        title={i18n.toggleTransparency.title}
        note={i18n.toggleTransparency.note}
        onChange={() => window.__DR_BACKEND__.toggleTransparency()}
      /> : false}
    </>
  }),
  plugins: React.memo(() => {
    return <>
      <Addoncard />
    </>
  }),
  customcss: React.memo(() => {
    const [theme, setTheme] = React.useState(internal.get("editorTheme") ?? "monokai")
    function makeButton(reactElement:ReactNode, tooltip:string, onClick:Function) {
      return <Tooltip text={tooltip}>{(props:tooltipProps) => <div {...props} onClick={(e:any) => {
        onClick(e)
        props.onClick(e)
      }} className="dr-editor-header-button">{reactElement}</div>}</Tooltip>
    }

    return <>
      <div className="dr-editor-header">
        {makeButton(<OpenExternal />, i18n.customCSS.popout, () => openCSSPopout())}
        {makeButton(<Gear />, i18n.customCSS.settings, () => alert(i18n.customCSS.settings, [
          "Apply and customize settings to your css", "Not added yet"
        ]))}
        {makeButton(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="currentcolor" d="M20.259,3.879c-1.172-1.173-3.07-1.173-4.242,0l-8.753,8.753c1.111-0.074,2.247,0.296,3.096,1.146 s1.22,1.985,1.146,3.097l8.754-8.755C20.822,7.559,21.138,6.796,21.138,6C21.138,5.204,20.822,4.442,20.259,3.879z" />
  <path fill="currentcolor" d="M3.739,15.193C0.956,17.976,4.12,19.405,1,22.526c0,0,5.163,0.656,7.945-2.127 c1.438-1.438,1.438-3.769,0-5.207C7.507,13.755,5.176,13.755,3.739,15.193z" />
</svg>, i18n.customCSS.changeTheme, () => changeThemeModal(theme, setTheme))}
      </div>
      <Editor props={{ style: { height: "calc(100% - 30px)" } }} editor={(editor:any) => {
        editor.setTheme(`ace/theme/${theme}`)
        editor.getSession().setMode("ace/mode/css")
        editor.setValue(internal.get("customCSS") ?? "")
        editor.on("change", () => {
          const value = editor.getValue()
          updateCustomCSS(value)
          internal.set("customCSS", value)
        })
      }}/>
    </>
  })
}

const { macDragRegion } = getModule(["macDragRegion"])
function CSSPopout({ popoutWindow }:{ popoutWindow:Window }) {
  const Ref = React.useRef<HTMLDivElement>(null)

  const Theme = internal.get("editorTheme") ?? "monokai"
  
  React.useEffect(() => {
    popoutWindow.ace = window.ace
    popoutWindow.changeThemeModal = changeThemeModal
    
    setTimeout(() => {
      // Errors without this
      const editor = popoutWindow.ace.edit(Ref.current as HTMLElement)
      editor.setTheme(`ace/theme/${Theme}`)
      editor.getSession().setMode("ace/mode/css")
      editor.setValue(internal.get("customCSS") ?? "")
      editor.on("change", () => {
        const value = editor.getValue()
        updateCustomCSS(value)
        internal.set("customCSS", value)
      })
      popoutWindow.document.head.appendChild(Object.assign(document.createElement("style"), {
        textContent: `${[...document.querySelectorAll("style") as any].filter(e => e.innerHTML.includes("sourceURL=ace/")).reduce((styles, style) => styles += style.textContent, "")}.${macDragRegion}{ display: none }`,
        id: "dr-custom-css-popout-style"
      }))
    }, 0)
  })

  return <div ref={Ref} style={{
    height: "calc(100vh - 22px)",
    width: "100vw"
  }}/>
}

const { content } = getModule(["chat", "uploadArea", "threadSidebarOpen"])
const { auto } = getModule(["scrollerBase"])
const { container } = getModule(["container", "downloadProgressCircle"])
const Header = getModule(["Caret", "Icon", "defaultProps"])
const TabBar = getModule("TabBar").default

let goBack = () => {}
let toggleCustomCSSDisabled = (val:boolean) => {}
const DashPage = React.memo(() => {
  const [page, setPage]:any = React.useState("general")
  const [isCustomCSSDisabled, setCustomCSSDisabled]:any = React.useState(!window.ace || window.__DR_BACKEND__.isPopped)
  const Page = pages[page] ?? React.memo(() => <>ERROR | This page may not be added</>)

  React.useEffect(() => {
    goBack = () => setPage("general")
    toggleCustomCSSDisabled = (val:boolean) => setCustomCSSDisabled(val)
  })

  return (
    <div className={getModule(["maxWidthWithToolbar", "container", "inviteToolbar"]).container}>
      <Header toolbar={<React.Fragment />}>
        <Header.Icon icon={() => <DrIcon color="#F52590"/>}/>
        <Header.Title>{i18n.name}</Header.Title>
        <Header.Divider />
        <TabBar
          type={TabBar.Types.TOP_PILL}
          onItemSelect={(e:string) => {
            goBack = () => setPage(page)
            setPage(e)
          }}
          selectedItem={page}
        >
          {Object.entries(i18n.settingTabs).map(([key, val]) => (
            <TabBar.Item id={key} disabled={key === "customcss" && isCustomCSSDisabled}>{val}</TabBar.Item>
          ))}
        </TabBar>
      </Header>
      <div className={content}><div className={auto} style={{ padding: "16px 12px" }}><Page /></div></div>
    </div>
  )
})

function openCSSPopout() {
  window.__DR_BACKEND__.isPopped = true
  toggleCustomCSSDisabled(true)
  goBack()
  openPopout(({ window:popoutWindow }:{ window:Window }) => {
    popoutWindow.addEventListener("unload", () => {
      window.__DR_BACKEND__.isPopped = false
      toggleCustomCSSDisabled(false)
    })
    return <CSSPopout popoutWindow={popoutWindow} />
  })
}
setImmediate(() => window.__DR_BACKEND__.openCSSPopout = openCSSPopout)

anonymous(async () => {
  const domNode:Element = await waitUntil(() => document.querySelector(`.${container}`))
  const Router = getOwnerInstance(domNode)
  const Route = getModule("RouteWithImpression").default
  
  patcher.after("DrInternal-RouterRoutes-Patch", Router?.props?.children[0], "type", (_:unknown, res:any) => {
    const ret = findInReactTree(res, (m:any) => m && Array.isArray(m.children) && m.children.length > 5)
    if (!ret?.children) return
    
    ret.children.push(
      <Route
        path="/dr_dashboard"
        impressionName="dr_dashboard"
        disableTrack={true}
        render={() => <DashPage />}
      />
    )
  })

  Router.forceUpdate()
  const { app } = getModule(["app"])
  const _domNode:Element = await waitUntil(() => document.querySelector(`.${app}`))
  findInTree(getOwnerInstance(_domNode)?._reactInternals, (n:any) => n?.historyUnlisten, { walkable: [ "child", "stateNode" ] }).forceUpdate()
  Router.forceUpdate()
})