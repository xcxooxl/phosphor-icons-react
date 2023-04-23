var E = Object.defineProperty, M = Object.defineProperties;
var o = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var n = (t, l, a) => l in t ? E(t, l, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[l] = a, r = (t, l) => {
  for (var a in l || (l = {}))
    h.call(l, a) && n(t, a, l[a]);
  if (m)
    for (var a of m(l))
      p.call(l, a) && n(t, a, l[a]);
  return t;
}, Z = (t, l) => M(t, o(l));
import e, { forwardRef as d } from "react";
import u from "../lib/IconBase.es.js";
const g = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M225.44,120.59l-88-112a12,12,0,0,0-18.88,0l-88,112a12,12,0,0,0,0,14.82l.6.76a3.72,3.72,0,0,0,.44.56l87,110.68a12,12,0,0,0,18.88,0l88-112A12,12,0,0,0,225.44,120.59ZM140,50.7l57.12,72.7-57.12,26Zm-24,98.66-57.12-26L116,50.7Zm0,26.37V205.3l-36.15-46Zm24,0,36.15-16.43L140,205.3Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M216,128,128,240,40,128l88,40Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M222.29,123.06l-88-112a8,8,0,0,0-12.58,0l-88,112a8,8,0,0,0,0,9.88l88,112a8,8,0,0,0,12.58,0l88-112A8,8,0,0,0,222.29,123.06ZM136,39.13l67.42,85.8L136,155.58ZM120,155.58,52.58,124.93,120,39.13Zm0,17.57v43.72l-53.43-68Zm16,0,53.43-24.29-53.43,68Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M222.29,123.06l-88-112a8,8,0,0,0-12.58,0l-88,112a8,8,0,0,0,0,9.88l88,112a8,8,0,0,0,12.58,0l88-112A8,8,0,0,0,222.29,123.06ZM136,155.58V39.13l67.42,85.8Zm-16,0L52.58,124.93,120,39.13Zm0,17.57v43.72l-53.43-68Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M220.72,124.29l-88-112a6,6,0,0,0-9.44,0l-88,112a6,6,0,0,0,0,7.42l88,112a6,6,0,0,0,9.44,0l88-112A6,6,0,0,0,220.72,124.29ZM134,33.35l72.56,92.35-72.56,33ZM122,158.68l-72.56-33L122,33.35Zm0,13.18v50.79l-62.08-79Zm12,0,62.08-28.21-62.08,79Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M222.29,123.06l-88-112a8,8,0,0,0-12.58,0l-88,112a8,8,0,0,0,0,9.88l88,112a8,8,0,0,0,12.58,0l88-112A8,8,0,0,0,222.29,123.06ZM136,39.13l67.42,85.8L136,155.58ZM120,155.58,52.58,124.93,120,39.13Zm0,17.57v43.72l-53.43-68Zm16,0,53.43-24.29-53.43,68Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M219.15,125.53l-88-112a4,4,0,0,0-6.3,0l-88,112a4,4,0,0,0,0,4.94l88,112a4,4,0,0,0,6.3,0l88-112A4,4,0,0,0,219.15,125.53ZM132,27.57l77.71,98.9L132,161.79Zm-8,134.22L46.29,126.47,124,27.57Zm0,8.79v57.85l-70.72-90Zm8,0,70.72-32.15-70.72,90Z" }))
  ]
]), c = d((t, l) => /* @__PURE__ */ e.createElement(u, Z(r({ ref: l }, t), { weights: g })));
c.displayName = "CurrencyEth";
const f = c;
export {
  f as default
};
