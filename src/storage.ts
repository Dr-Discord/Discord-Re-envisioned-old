interface localStorage {
  getItem: (key:string) => string|null
  setItem: (key:string, value:string) => void
  removeItem: (key:string) => void
  [x:string]: string|Function
}
// Get the localStorage object
export const localStorage:localStorage = (() => {
  if (window.localStorage) return window.localStorage
  const frame = document.createElement("frame")
  frame.src = "about:blank"
  document.body.appendChild(frame)
  let localStorage:any = Object.getOwnPropertyDescriptor(frame.contentWindow, "localStorage")
  frame.remove()
  Object.defineProperty(window, "localStorage", localStorage)
  localStorage = window.localStorage
  delete window.localStorage
  return localStorage
})()
// Set base data
localStorage.setItem("dr-storage", (() => {
  let res = JSON.parse(localStorage.getItem("dr-storage") ?? "{}")
  for (const dataType of ["themeData", "pluginData", "internalData"]) res[dataType] = res[dataType] ?? {}
  return JSON.stringify(res)
})())
// Plugin-Internal Data
export const plugins = {
  get: (plugin:string, key:string) => JSON.parse(localStorage.getItem("dr-storage") ?? "{}").pluginData?.[plugin]?.[key],
  set: (plugin:string, key:string, value:any) => {
    const storage = JSON.parse(localStorage.getItem("dr-storage") ?? "{}")
    if (!storage.pluginData[plugin]) storage.pluginData[plugin] = {}
    storage.pluginData[plugin][key] = value
    localStorage.setItem("dr-storage", JSON.stringify(storage))
  }
}
export const internal = {
  get: (key:string) => JSON.parse(localStorage.getItem("dr-storage") ?? "{}").internalData?.[key],
  set: (key:string, value:any) => {
    const storage = JSON.parse(localStorage.getItem("dr-storage") ?? "{}")
    storage.internalData[key] = value
    localStorage.setItem("dr-storage", JSON.stringify(storage))
  }
}