var o = Object.defineProperty, E = Object.defineProperties;
var Z = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
var l = (t, a, n) => a in t ? o(t, a, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[a] = n, H = (t, a) => {
  for (var n in a || (a = {}))
    p.call(a, n) && l(t, n, a[n]);
  if (r)
    for (var n of r(a))
      M.call(a, n) && l(t, n, a[n]);
  return t;
}, m = (t, a) => E(t, Z(a));
import e, { forwardRef as V } from "react";
import d from "../lib/IconBase.es.js";
const h = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M212,100a12,12,0,0,1-12,12H140V212a12,12,0,0,1-24,0V112H56a12,12,0,0,1,0-24H200A12,12,0,0,1,212,100ZM56,64H200a12,12,0,0,0,0-24H56a12,12,0,0,0,0,24Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M200,56V96H56V56Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M208,96a8,8,0,0,1-8,8H136V216a8,8,0,0,1-16,0V104H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,96ZM56,64H200a8,8,0,0,0,0-16H56a8,8,0,0,0,0,16Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm48,96H136v72a8,8,0,0,1-16,0V120H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-32H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M206,96a6,6,0,0,1-6,6H134V216a6,6,0,0,1-12,0V102H56a6,6,0,0,1,0-12H200A6,6,0,0,1,206,96ZM56,62H200a6,6,0,0,0,0-12H56a6,6,0,0,0,0,12Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M208,96a8,8,0,0,1-8,8H136V216a8,8,0,0,1-16,0V104H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,96ZM56,64H200a8,8,0,0,0,0-16H56a8,8,0,0,0,0,16Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M204,96a4,4,0,0,1-4,4H132V216a4,4,0,0,1-8,0V100H56a4,4,0,0,1,0-8H200A4,4,0,0,1,204,96ZM56,60H200a4,4,0,0,0,0-8H56a4,4,0,0,0,0,8Z" }))
  ]
]), c = V((t, a) => /* @__PURE__ */ e.createElement(d, m(H({ ref: a }, t), { weights: h })));
c.displayName = "CurrencyKzt";
const s = c;
export {
  s as default
};
