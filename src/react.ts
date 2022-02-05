import getModule from "./getModule"

export const React:typeof import("react") = getModule(["createElement", "Component"])
export const ReactDOM:typeof import("react-dom") = getModule(["render", "findDOMNode"])

export default React