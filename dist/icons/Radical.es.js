var o = Object.defineProperty, A = Object.defineProperties;
var E = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var r = (t, a, l) => a in t ? o(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[a] = l, m = (t, a) => {
  for (var l in a || (a = {}))
    H.call(a, l) && r(t, l, a[l]);
  if (n)
    for (var l of n(a))
      V.call(a, l) && r(t, l, a[l]);
  return t;
}, c = (t, a) => A(t, E(a));
import e, { forwardRef as p } from "react";
import h from "../lib/IconBase.es.js";
const i = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M244,72V96a12,12,0,0,1-24,0V84H128.32L83.24,204.21a12,12,0,0,1-22.47,0l-48-128a12,12,0,1,1,22.47-8.43l36.76,98,36.77-98A12,12,0,0,1,120,60H232A12,12,0,0,1,244,72Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M232,72V192a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V72Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M240,72V96a8,8,0,0,1-16,0V80H125.55L79.49,202.81a8,8,0,0,1-15,0l-48-128a8,8,0,1,1,15-5.62L72,177.22l40.51-108A8,8,0,0,1,120,64H232A8,8,0,0,1,240,72Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,80a8,8,0,0,1-16,0v-8H125.42l-30,75a8,8,0,0,1-14.86,0l-32-80A8,8,0,1,1,63.43,93L88,154.46,112.57,93A8,8,0,0,1,120,88h80a8,8,0,0,1,8,8Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M238,72V96a6,6,0,0,1-12,0V78H124.16L77.62,202.11a6,6,0,0,1-11.24,0l-48-128a6,6,0,0,1,11.24-4.22L72,182.91l42.38-113A6,6,0,0,1,120,66H232A6,6,0,0,1,238,72Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M240,72V96a8,8,0,0,1-16,0V80H125.55L79.49,202.81a8,8,0,0,1-15,0l-48-128a8,8,0,1,1,15-5.62L72,177.22l40.51-108A8,8,0,0,1,120,64H232A8,8,0,0,1,240,72Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M236,72V96a4,4,0,0,1-8,0V76H122.77l-47,125.4a4,4,0,0,1-7.49,0l-48-128a4,4,0,0,1,7.49-2.81L72,188.61l44.26-118A4,4,0,0,1,120,68H232A4,4,0,0,1,236,72Z" }))
  ]
]), d = p((t, a) => /* @__PURE__ */ e.createElement(h, c(m({ ref: a }, t), { weights: i })));
d.displayName = "Radical";
const M = d;
export {
  M as default
};
