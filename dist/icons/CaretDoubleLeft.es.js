var E = Object.defineProperty, p = Object.defineProperties;
var M = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (l, a, t) => a in l ? E(l, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[a] = t, m = (l, a) => {
  for (var t in a || (a = {}))
    Z.call(a, t) && r(l, t, a[t]);
  if (n)
    for (var t of n(a))
      d.call(a, t) && r(l, t, a[t]);
  return l;
}, c = (l, a) => p(l, M(a));
import e, { forwardRef as u } from "react";
import h from "../lib/IconBase.es.js";
const f = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M208.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L137,128ZM57,128l71.52-71.51a12,12,0,0,0-17-17l-80,80a12,12,0,0,0,0,17l80,80a12,12,0,0,0,17-17Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M200,48V208l-80-80Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M203.06,40.61a8,8,0,0,0-8.72,1.73l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,208,208V48A8,8,0,0,0,203.06,40.61ZM192,188.69,131.31,128,192,67.31Zm-66.34,13.65a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L51.31,128Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M208,48V208a8,8,0,0,1-13.66,5.66L128,147.31V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,128,48v60.69l66.34-66.35A8,8,0,0,1,208,48Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M204.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L128.49,128ZM48.49,128l75.75-75.76a6,6,0,0,0-8.48-8.48l-80,80a6,6,0,0,0,0,8.48l80,80a6,6,0,1,0,8.48-8.48Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M205.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L131.31,128ZM51.31,128l74.35-74.34a8,8,0,0,0-11.32-11.32l-80,80a8,8,0,0,0,0,11.32l80,80a8,8,0,0,0,11.32-11.32Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M202.83,205.17a4,4,0,0,1-5.66,5.66l-80-80a4,4,0,0,1,0-5.66l80-80a4,4,0,1,1,5.66,5.66L125.66,128ZM45.66,128l77.17-77.17a4,4,0,0,0-5.66-5.66l-80,80a4,4,0,0,0,0,5.66l80,80a4,4,0,1,0,5.66-5.66Z" }))
  ]
]), o = u((l, a) => /* @__PURE__ */ e.createElement(h, c(m({ ref: a }, l), { weights: f })));
o.displayName = "CaretDoubleLeft";
const s = o;
export {
  s as default
};
