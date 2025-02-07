var p = Object.defineProperty, E = Object.defineProperties;
var Z = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
var r = (l, a, t) => a in l ? p(l, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[a] = t, m = (l, a) => {
  for (var t in a || (a = {}))
    d.call(a, t) && r(l, t, a[t]);
  if (n)
    for (var t of n(a))
      u.call(a, t) && r(l, t, a[t]);
  return l;
}, c = (l, a) => E(l, Z(a));
import e, { forwardRef as h } from "react";
import L from "../lib/IconBase.es.js";
const g = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M216.49,199.51a12,12,0,0,1-17,17L128,145,56.49,216.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0Zm-160-63L128,65l71.51,71.52a12,12,0,0,0,17-17l-80-80a12,12,0,0,0-17,0l-80,80a12,12,0,0,0,17,17Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M208,208H48l80-80Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M133.66,122.34a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,48,216H208a8,8,0,0,0,5.66-13.66ZM67.31,200,128,139.31,188.69,200Zm-25-66.34a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,0l80,80a8,8,0,0,1-11.32,11.32L128,59.31,53.66,133.66A8,8,0,0,1,42.34,133.66Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M213.66,202.34A8,8,0,0,1,208,216H48a8,8,0,0,1-5.66-13.66L108.69,136H48a8,8,0,0,1-5.66-13.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,208,136H147.31Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M212.24,203.76a6,6,0,1,1-8.48,8.48L128,136.49,52.24,212.24a6,6,0,0,1-8.48-8.48l80-80a6,6,0,0,1,8.48,0Zm-160-71.52L128,56.49l75.76,75.75a6,6,0,0,0,8.48-8.48l-80-80a6,6,0,0,0-8.48,0l-80,80a6,6,0,0,0,8.48,8.48Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M213.66,202.34a8,8,0,0,1-11.32,11.32L128,139.31,53.66,213.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0Zm-160-68.68L128,59.31l74.34,74.35a8,8,0,0,0,11.32-11.32l-80-80a8,8,0,0,0-11.32,0l-80,80a8,8,0,0,0,11.32,11.32Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M210.83,205.17a4,4,0,0,1-5.66,5.66L128,133.66,50.83,210.83a4,4,0,0,1-5.66-5.66l80-80a4,4,0,0,1,5.66,0Zm-160-74.34L128,53.66l77.17,77.17a4,4,0,0,0,5.66-5.66l-80-80a4,4,0,0,0-5.66,0l-80,80a4,4,0,0,0,5.66,5.66Z" }))
  ]
]), o = h((l, a) => /* @__PURE__ */ e.createElement(L, c(m({ ref: a }, l), { weights: g })));
o.displayName = "CaretDoubleUp";
const f = o;
export {
  f as default
};
