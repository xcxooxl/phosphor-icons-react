var h = Object.defineProperty, c = Object.defineProperties;
var o = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (t, e, l) => e in t ? h(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l, r = (t, e) => {
  for (var l in e || (e = {}))
    A.call(e, l) && m(t, l, e[l]);
  if (n)
    for (var l of n(e))
      d.call(e, l) && m(t, l, e[l]);
  return t;
}, H = (t, e) => c(t, o(e));
import a, { forwardRef as E } from "react";
import M from "../lib/IconBase.es.js";
const p = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M128,128a12,12,0,0,1-12,12H48a12,12,0,0,1,0-24h68A12,12,0,0,1,128,128ZM48,76H180a12,12,0,0,0,0-24H48a12,12,0,0,0,0,24Zm52,104H48a12,12,0,0,0,0,24h52a12,12,0,0,0,0-24Zm132.49-20.49a12,12,0,0,0-17,0L196,179V112a12,12,0,0,0-24,0v67l-19.51-19.52a12,12,0,0,0-17,17l40,40a12,12,0,0,0,17,0l40-40A12,12,0,0,0,232.49,159.51Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M224,168l-40,40-40-40Z", opacity: "0.2" }), /* @__PURE__ */ a.createElement("path", { d: "M128,128a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16h72A8,8,0,0,1,128,128ZM48,72H184a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16Zm56,112H48a8,8,0,0,0,0,16h56a8,8,0,0,0,0-16Zm125.66-10.34-40,40a8,8,0,0,1-11.32,0l-40-40A8,8,0,0,1,144,160h32V112a8,8,0,0,1,16,0v48h32a8,8,0,0,1,5.66,13.66Zm-25,2.34H163.31L184,196.69Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M128,128a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16h72A8,8,0,0,1,128,128ZM48,72H184a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16Zm56,112H48a8,8,0,0,0,0,16h56a8,8,0,0,0,0-16Zm127.39-19.06A8,8,0,0,0,224,160H192V112a8,8,0,0,0-16,0v48H144a8,8,0,0,0-5.66,13.66l40,40a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,231.39,164.94Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M126,128a6,6,0,0,1-6,6H48a6,6,0,0,1,0-12h72A6,6,0,0,1,126,128ZM48,70H184a6,6,0,0,0,0-12H48a6,6,0,0,0,0,12Zm56,116H48a6,6,0,0,0,0,12h56a6,6,0,0,0,0-12Zm124.24-22.24a6,6,0,0,0-8.48,0L190,193.51V112a6,6,0,0,0-12,0v81.51l-29.76-29.75a6,6,0,0,0-8.48,8.48l40,40a6,6,0,0,0,8.48,0l40-40A6,6,0,0,0,228.24,163.76Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M128,128a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16h72A8,8,0,0,1,128,128ZM48,72H184a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16Zm56,112H48a8,8,0,0,0,0,16h56a8,8,0,0,0,0-16Zm125.66-21.66a8,8,0,0,0-11.32,0L192,188.69V112a8,8,0,0,0-16,0v76.69l-26.34-26.35a8,8,0,0,0-11.32,11.32l40,40a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,229.66,162.34Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M124,128a4,4,0,0,1-4,4H48a4,4,0,0,1,0-8h72A4,4,0,0,1,124,128ZM48,68H184a4,4,0,0,0,0-8H48a4,4,0,0,0,0,8Zm56,120H48a4,4,0,0,0,0,8h56a4,4,0,0,0,0-8Zm122.83-22.83a4,4,0,0,0-5.66,0L188,198.34V112a4,4,0,0,0-8,0v86.34l-33.17-33.17a4,4,0,0,0-5.66,5.66l40,40a4,4,0,0,0,5.66,0l40-40A4,4,0,0,0,226.83,165.17Z" }))
  ]
]), Z = E((t, e) => /* @__PURE__ */ a.createElement(M, H(r({ ref: e }, t), { weights: p })));
Z.displayName = "SortAscending";
const u = Z;
export {
  u as default
};
