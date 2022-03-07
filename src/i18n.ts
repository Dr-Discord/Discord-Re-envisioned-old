export const languages:any = {
  global: {
    name: "Discord Re-envisioned",
    version: "0.0.1"
  },
  en: {
    devMode: {
      title: "Toggle Developer Mode",
      note: "Warning you can get banned from Discord if you do this (not a 100% chance)!"
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
        replace: function(this:any, name:string) { return this.content.replace("{{name}}", name) }
      },
      installed: {
        content: "Installed '{{name}}'! Refresh the page to see it.",
        replace: function(this:any, name:string) { return this.content.replace("{{name}}", name) }
      },
      notValid: {
        content: "'{{url}}' is not a valid plugin URL",
        replace: function(this:any, url:string) { return this.content.replace("{{url}}", url) }
      },
      install: "Install"
    }
  }
}

const i18n = new Proxy(languages[navigator.language.split("-", 1)[0]], {
  get: (target, key:string) => {
    const lang = navigator.language.split("-", 1)[0]
    return languages.global[key] || languages[lang][key] || languages.en[key] || key
  }
})

export default i18n