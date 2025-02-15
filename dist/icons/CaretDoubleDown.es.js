var E = Object.defineProperty, p = Object.defineProperties;
var L = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (l, a, t) => a in l ? E(l, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[a] = t, m = (l, a) => {
  for (var t in a || (a = {}))
    Z.call(a, t) && r(l, t, a[t]);
  if (n)
    for (var t of n(a))
      d.call(a, t) && r(l, t, a[t]);
  return l;
}, c = (l, a) => p(l, L(a));
import e, { forwardRef as u } from "react";
import h from "../lib/IconBase.es.js";
const g = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M216.49,119.51a12,12,0,0,1,0,17l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,1,1,17-17L128,191l71.51-71.52A12,12,0,0,1,216.49,119.51Zm-97,17a12,12,0,0,0,17,0l80-80a12,12,0,0,0-17-17L128,111,56.49,39.51a12,12,0,0,0-17,17Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M208,48l-80,80L48,48Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M213.66,133.66l-80,80a8,8,0,0,1-11.32,0l-80-80a8,8,0,0,1,11.32-11.32L128,196.69l74.34-74.35a8,8,0,0,1,11.32,11.32Zm-171.32-80A8,8,0,0,1,48,40H208a8,8,0,0,1,5.66,13.66l-80,80a8,8,0,0,1-11.32,0Zm25,2.34L128,116.69,188.69,56Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M215.39,124.94a8,8,0,0,1-1.73,8.72l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,120h60.69L42.34,53.66A8,8,0,0,1,48,40H208a8,8,0,0,1,5.66,13.66L147.31,120H208A8,8,0,0,1,215.39,124.94Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M212.24,123.76a6,6,0,0,1,0,8.48l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,1,1,8.48-8.48L128,199.51l75.76-75.75A6,6,0,0,1,212.24,123.76Zm-88.48,8.48a6,6,0,0,0,8.48,0l80-80a6,6,0,0,0-8.48-8.48L128,119.51,52.24,43.76a6,6,0,0,0-8.48,8.48Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M213.66,122.34a8,8,0,0,1,0,11.32l-80,80a8,8,0,0,1-11.32,0l-80-80a8,8,0,0,1,11.32-11.32L128,196.69l74.34-74.35A8,8,0,0,1,213.66,122.34Zm-91.32,11.32a8,8,0,0,0,11.32,0l80-80a8,8,0,0,0-11.32-11.32L128,116.69,53.66,42.34A8,8,0,0,0,42.34,53.66Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M210.83,125.17a4,4,0,0,1,0,5.66l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,1,1,5.66-5.66L128,202.34l77.17-77.17A4,4,0,0,1,210.83,125.17Zm-85.66,5.66a4,4,0,0,0,5.66,0l80-80a4,4,0,1,0-5.66-5.66L128,122.34,50.83,45.17a4,4,0,0,0-5.66,5.66Z" }))
  ]
]), o = u((l, a) => /* @__PURE__ */ e.createElement(h, c(m({ ref: a }, l), { weights: g })));
o.displayName = "CaretDoubleDown";
const s = o;
export {
  s as default
};
