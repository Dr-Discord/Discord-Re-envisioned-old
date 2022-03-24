/**
 * @file react.ts
 * @author doggybootsy
 * @desc Holds React, ReactDOM and, ReactSpring.
 * @license MIT
 * @version 1.0.0
 */

import getModule from "./getModule"

export const React:typeof import("react") = getModule(["createElement", "Component"])
export const ReactDOM:typeof import("react-dom") = getModule(["render", "findDOMNode"])
export const ReactSpring = getModule(["useSpring", "animated"])

export default React