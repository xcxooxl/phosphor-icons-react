var o = Object.defineProperty, p = Object.defineProperties;
var M = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
var r = (a, t, l) => t in a ? o(a, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[t] = l, m = (a, t) => {
  for (var l in t || (t = {}))
    i.call(t, l) && r(a, l, t[l]);
  if (n)
    for (var l of n(t))
      E.call(t, l) && r(a, l, t[l]);
  return a;
}, c = (a, t) => p(a, M(t));
import e, { forwardRef as d } from "react";
import u from "../lib/IconBase.es.js";
const V = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M211.45,52.51l-80-24A12,12,0,0,0,116,40V140.22A52,52,0,1,0,140,184V56.13l64.55,19.36a12,12,0,1,0,6.9-23ZM88,212a28,28,0,1,1,28-28A28,28,0,0,1,88,212Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,184a40,40,0,1,1-40-40A40,40,0,0,1,128,184Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M210.3,56.34l-80-24A8,8,0,0,0,120,40V148.26A48,48,0,1,0,136,184V50.75l69.7,20.91a8,8,0,1,0,4.6-15.32ZM88,216a32,32,0,1,1,32-32A32,32,0,0,1,88,216Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M210.3,56.34l-80-24A8,8,0,0,0,120,40V148.26A48,48,0,1,0,136,184V50.75l69.7,20.91a8,8,0,1,0,4.6-15.32Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M209.72,58.25l-80-24A6,6,0,0,0,122,40V153.05A46,46,0,1,0,134,184V48.06l72.27,21.69a6,6,0,1,0,3.45-11.5ZM88,218a34,34,0,1,1,34-34A34,34,0,0,1,88,218Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M210.3,56.34l-80-24A8,8,0,0,0,120,40V148.26A48,48,0,1,0,136,184V50.75l69.7,20.91a8,8,0,1,0,4.6-15.32ZM88,216a32,32,0,1,1,32-32A32,32,0,0,1,88,216Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M209.15,60.17l-80-24A4,4,0,0,0,124,40V158.75A44,44,0,1,0,132,184V45.38l74.85,22.45a4,4,0,0,0,2.3-7.66ZM88,220a36,36,0,1,1,36-36A36,36,0,0,1,88,220Z" }))
  ]
]), A = d((a, t) => /* @__PURE__ */ e.createElement(u, c(m({ ref: t }, a), { weights: V })));
A.displayName = "MusicNoteSimple";
const g = A;
export {
  g as default
};
