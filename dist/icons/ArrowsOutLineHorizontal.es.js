var H = Object.defineProperty, c = Object.defineProperties;
var A = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
var r = (l, e, t) => e in l ? H(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, m = (l, e) => {
  for (var t in e || (e = {}))
    h.call(e, t) && r(l, t, e[t]);
  if (n)
    for (var t of n(e))
      M.call(e, t) && r(l, t, e[t]);
  return l;
}, o = (l, e) => c(l, A(e));
import a, { forwardRef as i } from "react";
import E from "../lib/IconBase.es.js";
const V = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M140,40V216a12,12,0,0,1-24,0V40a12,12,0,0,1,24,0ZM88,116H45l11.52-11.51a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17l32,32a12,12,0,0,0,17-17L45,140H88a12,12,0,0,0,0-24Zm160.49,3.51-32-32a12,12,0,0,0-17,17L211,116H168a12,12,0,0,0,0,24h43l-11.52,11.51a12,12,0,0,0,17,17l32-32A12,12,0,0,0,248.49,119.51Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M16,128,48,96v64ZM208,96v64l32-32Z", opacity: "0.2" }), /* @__PURE__ */ a.createElement("path", { d: "M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0Zm-32,88a8,8,0,0,1-8,8H56v24a8,8,0,0,1-13.66,5.66l-32-32a8,8,0,0,1,0-11.32l32-32A8,8,0,0,1,56,96v24H96A8,8,0,0,1,104,128ZM40,115.31,27.31,128,40,140.69Zm205.66,18.35-32,32A8,8,0,0,1,200,160V136H160a8,8,0,0,1,0-16h40V96a8,8,0,0,1,13.66-5.66l32,32A8,8,0,0,1,245.66,133.66Zm-17-5.66L216,115.31v25.38Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M104,128a8,8,0,0,1-8,8H56v24a8,8,0,0,1-13.66,5.66l-32-32a8,8,0,0,1,0-11.32l32-32A8,8,0,0,1,56,96v24H96A8,8,0,0,1,104,128Zm141.66-5.66-32-32A8,8,0,0,0,200,96v24H160a8,8,0,0,0,0,16h40v24a8,8,0,0,0,13.66,5.66l32-32A8,8,0,0,0,245.66,122.34ZM128,32a8,8,0,0,0-8,8V216a8,8,0,0,0,16,0V40A8,8,0,0,0,128,32Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M134,40V216a6,6,0,0,1-12,0V40a6,6,0,0,1,12,0ZM96,122H30.49l21.75-21.76a6,6,0,0,0-8.48-8.48l-32,32a6,6,0,0,0,0,8.48l32,32a6,6,0,0,0,8.48-8.48L30.49,134H96a6,6,0,0,0,0-12Zm148.24,1.76-32-32a6,6,0,0,0-8.48,8.48L225.51,122H160a6,6,0,0,0,0,12h65.51l-21.75,21.76a6,6,0,1,0,8.48,8.48l32-32A6,6,0,0,0,244.24,123.76Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM96,120H35.31l18.35-18.34A8,8,0,0,0,42.34,90.34l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32L35.31,136H96a8,8,0,0,0,0-16Zm149.66,2.34-32-32a8,8,0,0,0-11.32,11.32L220.69,120H160a8,8,0,0,0,0,16h60.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,245.66,122.34Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M132,40V216a4,4,0,0,1-8,0V40a4,4,0,0,1,8,0ZM96,124H25.66L50.83,98.83a4,4,0,0,0-5.66-5.66l-32,32a4,4,0,0,0,0,5.66l32,32a4,4,0,1,0,5.66-5.66L25.66,132H96a4,4,0,0,0,0-8Zm146.83,1.17-32-32a4,4,0,0,0-5.66,5.66L230.34,124H160a4,4,0,0,0,0,8h70.34l-25.17,25.17a4,4,0,0,0,5.66,5.66l32-32A4,4,0,0,0,242.83,125.17Z" }))
  ]
]), Z = i((l, e) => /* @__PURE__ */ a.createElement(E, o(m({ ref: e }, l), { weights: V })));
Z.displayName = "ArrowsOutLineHorizontal";
const u = Z;
export {
  u as default
};
