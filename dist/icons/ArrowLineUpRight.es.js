var o = Object.defineProperty, L = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
var l = (t, a, n) => a in t ? o(t, a, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[a] = n, m = (t, a) => {
  for (var n in a || (a = {}))
    H.call(a, n) && l(t, n, a[n]);
  if (r)
    for (var n of r(a))
      M.call(a, n) && l(t, n, a[n]);
  return t;
}, c = (t, a) => L(t, p(a));
import e, { forwardRef as i } from "react";
import A from "../lib/IconBase.es.js";
const E = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M228,216a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,216ZM80,180a12,12,0,0,0,8.49-3.51L180,85v67a12,12,0,0,0,24,0V56a12,12,0,0,0-12-12H96a12,12,0,0,0,0,24h67L71.51,159.51A12,12,0,0,0,80,180Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M192,56v96L96,56Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216ZM74.34,173.66a8,8,0,0,1,0-11.32L132.69,104,90.34,61.66A8,8,0,0,1,96,48h96a8,8,0,0,1,8,8v96a8,8,0,0,1-13.66,5.66L144,115.31,85.66,173.66a8,8,0,0,1-11.32,0ZM115.31,64l34.35,34.34h0L184,132.69V64Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M74.34,173.66a8,8,0,0,1,0-11.32L132.69,104,90.34,61.66A8,8,0,0,1,96,48h96a8,8,0,0,1,8,8v96a8,8,0,0,1-13.66,5.66L144,115.31,85.66,173.66a8,8,0,0,1-11.32,0ZM216,208H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M222,216a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,216ZM80,174a6,6,0,0,0,4.24-1.76L186,70.49V152a6,6,0,0,0,12,0V56a6,6,0,0,0-6-6H96a6,6,0,0,0,0,12h81.51L75.76,163.76A6,6,0,0,0,80,174Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216ZM80,176a8,8,0,0,0,5.66-2.34L184,75.31V152a8,8,0,0,0,16,0V56a8,8,0,0,0-8-8H96a8,8,0,0,0,0,16h76.69L74.34,162.34A8,8,0,0,0,80,176Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M220,216a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,216ZM80,172a4,4,0,0,0,2.83-1.17L188,65.66V152a4,4,0,0,0,8,0V56a4,4,0,0,0-4-4H96a4,4,0,0,0,0,8h86.34L77.17,165.17A4,4,0,0,0,80,172Z" }))
  ]
]), h = i((t, a) => /* @__PURE__ */ e.createElement(A, c(m({ ref: a }, t), { weights: E })));
h.displayName = "ArrowLineUpRight";
const u = h;
export {
  u as default
};
