var E = Object.defineProperty, h = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var r = (a, t, l) => t in a ? E(a, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[t] = l, m = (a, t) => {
  for (var l in t || (t = {}))
    A.call(t, l) && r(a, l, t[l]);
  if (n)
    for (var l of n(t))
      V.call(t, l) && r(a, l, t[l]);
  return a;
}, c = (a, t) => h(a, p(t));
import e, { forwardRef as d } from "react";
import g from "../lib/IconBase.es.js";
const u = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M238.29,138.22l-104,64A12,12,0,0,1,116,192V85.47L30.29,138.22a12,12,0,0,1-12.58-20.44l104-64A12,12,0,0,1,140,64V170.53l85.71-52.75a12,12,0,1,1,12.58,20.44Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,64v64H24Zm104,64H128v64Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M236.19,134.81l-104,64A8,8,0,0,1,120,192V78.32L28.19,134.81a8,8,0,0,1-8.38-13.62l104-64A8,8,0,0,1,136,64V177.68l91.81-56.49a8,8,0,0,1,8.38,13.62Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-11.56,94.66-72,48A8,8,0,0,1,128,184a8,8,0,0,1-8-8V95L60.44,134.66a8,8,0,1,1-8.88-13.32l72-48A8,8,0,0,1,136,80v81.05l59.56-39.71a8,8,0,0,1,8.88,13.32Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M235.14,133.11l-104,64A6,6,0,0,1,122,192V74.74L27.15,133.11a6,6,0,1,1-6.29-10.22l104-64A6,6,0,0,1,134,64V181.26l94.85-58.37a6,6,0,1,1,6.29,10.22Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M236.19,134.81l-104,64A8,8,0,0,1,120,192V78.32L28.19,134.81a8,8,0,0,1-8.38-13.62l104-64A8,8,0,0,1,136,64V177.68l91.81-56.49a8,8,0,0,1,8.38,13.62Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M234.1,131.41l-104,64a4,4,0,0,1-2.1.59,4,4,0,0,1-4-4V71.16L26.1,131.41a4,4,0,0,1-4.2-6.82l104-64A4,4,0,0,1,132,64V184.84l97.9-60.25a4,4,0,1,1,4.2,6.82Z" }))
  ]
]), o = d((a, t) => /* @__PURE__ */ e.createElement(g, c(m({ ref: t }, a), { weights: u })));
o.displayName = "WaveSawtooth";
const s = o;
export {
  s as default
};
