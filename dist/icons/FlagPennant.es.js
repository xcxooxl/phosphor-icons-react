var o = Object.defineProperty, E = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var M = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (a, t, l) => t in a ? o(a, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[t] = l, m = (a, t) => {
  for (var l in t || (t = {}))
    M.call(t, l) && r(a, l, t[l]);
  if (n)
    for (var l of n(t))
      d.call(t, l) && r(a, l, t[l]);
  return a;
}, c = (a, t) => E(a, p(t));
import e, { forwardRef as g } from "react";
import Z from "../lib/IconBase.es.js";
const h = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M243.94,92.67l-184-64A12,12,0,0,0,44,40V216a12,12,0,0,0,24,0V176.53l175.94-61.2a12,12,0,0,0,0-22.66ZM68,151.12V56.88L203.47,104Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M240,104,56,168V40Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M242.63,96.44l-184-64A8,8,0,0,0,48,40V216a8,8,0,0,0,16,0V173.69l178.63-62.13a8,8,0,0,0,0-15.12ZM64,156.75V51.25L215.65,104Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M248,104a8,8,0,0,1-5.37,7.56L64,173.69V216a8,8,0,0,1-16,0V40a8,8,0,0,1,10.63-7.56l184,64A8,8,0,0,1,248,104Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M242,98.33l-184-64A6,6,0,0,0,50,40V216a6,6,0,0,0,12,0V172.27l180-62.6a6,6,0,0,0,0-11.34ZM62,159.56V48.44L221.74,104Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M242.63,96.44l-184-64A8,8,0,0,0,48,40V216a8,8,0,0,0,16,0V173.69l178.63-62.13a8,8,0,0,0,0-15.12ZM64,156.75V51.25L215.65,104Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M241.31,100.22l-184-64A4,4,0,0,0,52,40V216a4,4,0,0,0,8,0V170.84l181.31-63.06a4,4,0,0,0,0-7.56ZM60,162.37V45.63L227.82,104Z" }))
  ]
]), V = g((a, t) => /* @__PURE__ */ e.createElement(Z, c(m({ ref: t }, a), { weights: h })));
V.displayName = "FlagPennant";
const s = V;
export {
  s as default
};
