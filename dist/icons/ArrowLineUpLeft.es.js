var o = Object.defineProperty, L = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var r = (t, a, l) => a in t ? o(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[a] = l, m = (t, a) => {
  for (var l in a || (a = {}))
    A.call(a, l) && r(t, l, a[l]);
  if (n)
    for (var l of n(a))
      h.call(a, l) && r(t, l, a[l]);
  return t;
}, c = (t, a) => L(t, p(a));
import e, { forwardRef as E } from "react";
import Z from "../lib/IconBase.es.js";
const M = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M228,216a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,216ZM64,164a12,12,0,0,0,12-12V85l91.51,91.52a12,12,0,0,0,17-17L93,68h67a12,12,0,0,0,0-24H64A12,12,0,0,0,52,56v96A12,12,0,0,0,64,164Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M160,56,64,152V56Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216ZM56,152V56a8,8,0,0,1,8-8h96a8,8,0,0,1,5.66,13.66L123.31,104l58.35,58.34a8,8,0,0,1-11.32,11.32L112,115.31,69.66,157.66A8,8,0,0,1,56,152Zm16-19.31,34.34-34.35h0L140.69,64H72Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M56,152V56a8,8,0,0,1,8-8h96a8,8,0,0,1,5.66,13.66L123.31,104l58.35,58.34a8,8,0,0,1-11.32,11.32L112,115.31,69.66,157.66A8,8,0,0,1,56,152Zm160,56H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M222,216a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,216ZM64,158a6,6,0,0,0,6-6V70.49L171.76,172.24a6,6,0,0,0,8.48-8.48L78.49,62H160a6,6,0,0,0,0-12H64a6,6,0,0,0-6,6v96A6,6,0,0,0,64,158Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216ZM64,160a8,8,0,0,0,8-8V75.31l98.34,98.35a8,8,0,0,0,11.32-11.32L83.31,64H160a8,8,0,0,0,0-16H64a8,8,0,0,0-8,8v96A8,8,0,0,0,64,160Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M220,216a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,216ZM64,156a4,4,0,0,0,4-4V65.66L173.17,170.83a4,4,0,0,0,5.66-5.66L73.66,60H160a4,4,0,0,0,0-8H64a4,4,0,0,0-4,4v96A4,4,0,0,0,64,156Z" }))
  ]
]), H = E((t, a) => /* @__PURE__ */ e.createElement(Z, c(m({ ref: a }, t), { weights: M })));
H.displayName = "ArrowLineUpLeft";
const g = H;
export {
  g as default
};
