import React from "../react"
import getModule from "../getModule"
import patcher from "../patcher"
import { internal } from "../storage"
import { showConfirmationModal } from "../util"
import { internalStyling } from "../styling"
import i18n from "../i18n"

internalStyling.inject("settings", `
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
`)

const FluxDispatcher = getModule(["dirtyDispatch", "dispatch"])
const FormSection = getModule("FormSection").default
const Text = getModule("Text").default
const SwitchOrig = getModule("SwitchItem").default
const Switch = getModule("Switch").default
const Flex = getModule("Flex").default
const TextInput = getModule("TextInput").default
const Tooltip = getModule("Tooltip").default
const Button = getModule(["ButtonColors"]).default
const Trash = getModule("Trash").default
const Gear = getModule("Gear").default
const Markdown = getModule((m: { default: { displayName: string; rules: any } }) => m.default?.displayName === "Markdown" && m.default.rules).default
const { ActionTypes } = getModule(["ActionTypes"])

function openUserModal(userId:string) {
  if (!userId) return 
  FluxDispatcher.dirtyDispatch({
    type: ActionTypes.USER_PROFILE_MODAL_OPEN,
    userId
  })
}

function readMeta(contents:string) {
  let meta:any = {}
  let jsdoc:any = contents.match(/\/\*\*([\s\S]*?)\*\//)
  if (!jsdoc?.[1]) return meta
  for (let ite of jsdoc[1].match(/\*\s([^\n]*)/g)) {
    ite = ite.replace(/\*( +|)@/, "")
    let split = ite.split(" ")
    let key = split[0]
    let value = split.slice(1).join(" ")
    meta[key] = value
  }
  return meta
}

interface SwitchItemProps {
  value:boolean
  onChange?:Function
  title:string
  note?:string
  disabled?:boolean
  initialChange?:boolean
}
const SwitchItem = React.memo((props:SwitchItemProps) => {
  const { value, onChange = () => {}, title, note, disabled = false, initialChange = true } = props
  const [checked, setChecked] = React.useState(value)
  return <SwitchOrig
    value={checked}
    onChange={() => {
      if (initialChange) setChecked(!checked)
      onChange(!checked, setChecked)
    }}
    note={note}
    disabled={disabled}
  >{title}</SwitchOrig>
})

const AddonCard = React.memo((props:any) => {
  const [enabled, setEnabled] = React.useState(DrApi.Plugins.isEnabled(props.name))
  return (
    <div className="dr-addon-card">
      <div className="dr-addon-card-header">
        <div className="dr-addon-card-header-top">
          <div className="dr-addon-card-header-name">{props.name}</div>
          <div className="dr-addon-card-header-version">{props.version}</div>
        </div>
        <div className="dr-addon-card-header-bottom">
          <div className="dr-addon-card-header-Author" onClick={() => Boolean(props.authorId) && openUserModal(props.authorId)}>{props.author}</div>
        </div>
      </div>
      <div className="dr-addon-card-body">
        <Markdown className="dr-addon-card-body-description">{props.description}</Markdown>
      </div>
      <div className="dr-addon-card-footer">
        <div className="dr-addon-card-footer-left">
          <Tooltip text={i18n.uninstall}>
            {(ttProps:any) => (
              <Button {...ttProps} size={Button.Sizes.ICON} color={Button.Colors.RED}>
                <Trash />
              </Button>
            )}
          </Tooltip>
        </div>
        <div className="dr-addon-card-footer-right">
          <div className="dr-addon-card-footer-settings">
            <Tooltip text={i18n.settings}>
              {(ttProps:any) => (
                <Button {...ttProps} size={Button.Sizes.ICON} color={Button.Colors.BRAND_NEW}>
                  <Gear />
                </Button>
              )}
            </Tooltip>
          </div>
          <div className="dr-addon-card-footer-toggle">
            <Switch checked={enabled} onChange={(val:boolean) => {
              setEnabled(val)
              DrApi.Plugins.toggle(props.name)
            }}/>
          </div>
        </div>
      </div>
    </div>
  )
})

function tab(name:string, Element:any):object {
  return {
    section: `DR_SETTINGS_${name.toUpperCase()}`, 
    label: name, 
    element: () => <FormSection title={name} tag={FormSection.Tags.H1}><Element /></FormSection>
  }
}
patcher.after("DrInternal-Settings-Patch", getModule("SettingsView").default.prototype, "getPredicateSections", (_:any, res:any) => {
  const num = res.indexOf(res.find((e:any) => e && e.section === "Connections")) + 1
  if (num === 0) return
  res.splice(num, 0, ...[
    { section: "DIVIDER" },
    { section: "HEADER", label: i18n.name },
    tab(i18n.settingTabs.general, React.memo(() => {
      return (
        <>
          <SwitchItem 
            value={document.body.classList.contains("dr-minimal-mode")}
            title={i18n.minimalMode.title}
            note={i18n.minimalMode.note}
            onChange={(val:boolean) => {
              internal.set("minimalMode", val)
              document.body.classList.toggle("dr-minimal-mode")
            }}
          />
          <SwitchItem 
            value={internal.get("devMode") ?? false}
            title={i18n.devMode.title}
            note={i18n.devMode.note}
            onChange={(val:boolean) => {
              internal.set("devMode", val)
              getModule(["isDeveloper"]).isDeveloper = val
            }}
          />
        </>
      )
    })),
    tab(i18n.settingTabs.plugins, React.memo(() => {
      const [pluginURL, setPluginURL] = React.useState("")
      return (
        <>
          <Flex>
            <Flex.Child grow={2}>
              <div>
                <TextInput
                  placeholder="https://example.com/plugin.js"
                  value={pluginURL}
                  onChange={setPluginURL}
                />
              </div>
            </Flex.Child>
            <Flex.Child grow={0}>
              <Button
                onClick={async () => {
                  if (!/(https|http):\/\/([A-z]+\.|)([A-z]+(:[0-9]+|\.[A-z]+))(\/\S+){1,}(\.js)/.test(pluginURL)) return setPluginURL(i18n.installing.notValid.replace(pluginURL))
                  const text = await fetch(pluginURL).then(res => res.text())
                  const meta = readMeta(text)
                  if (!meta) return setPluginURL("ERROR")
                  const urls = internal.get("addonURLS") ?? []
                  if (!urls.plugins) urls.plugins = []
                  if (urls.plugins.includes(pluginURL)) return setPluginURL(i18n.installing.alreadyInstalled.replace(pluginURL))
                  urls.plugins.push(pluginURL)
                  internal.set("addonURLS", { ...urls })
                  setPluginURL(i18n.installing.installed.replace(meta.name))
                  
                }}
              >{i18n.installing.install}</Button>
            </Flex.Child>
          </Flex>
          <div className="dr-addons-list">
            {Array.from(DrApi.Plugins.getAll().map((e:any) => <AddonCard {...e} />))}
          </div>
        </>
      )
    })),
    tab(i18n.settingTabs.themes, React.memo(() => {
      return <Text>Themes</Text>
    }))
  ])
})