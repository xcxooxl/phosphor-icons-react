var V = Object.defineProperty, o = Object.defineProperties;
var E = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var r = (t, a, l) => a in t ? V(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[a] = l, L = (t, a) => {
  for (var l in a || (a = {}))
    p.call(a, l) && r(t, l, a[l]);
  if (n)
    for (var l of n(a))
      s.call(a, l) && r(t, l, a[l]);
  return t;
}, m = (t, a) => o(t, E(a));
import e, { forwardRef as d } from "react";
import A from "../lib/IconBase.es.js";
const i = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M218.29,182.17a12,12,0,0,1-16.47,4.12L140,149.19V216a12,12,0,0,1-24,0V149.19l-61.82,37.1a12,12,0,1,1-12.35-20.58L104.68,128,41.83,90.29A12,12,0,1,1,54.18,69.71L116,106.81V40a12,12,0,0,1,24,0v66.81l61.82-37.1a12,12,0,1,1,12.35,20.58L151.32,128l62.85,37.71A12,12,0,0,1,218.29,182.17Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M200,128a72,72,0,1,1-72-72A72,72,0,0,1,200,128Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M214.86,180.12a8,8,0,0,1-11,2.74L136,142.13V216a8,8,0,0,1-16,0V142.13L52.12,182.86a8,8,0,1,1-8.23-13.72L112.45,128,43.89,86.86a8,8,0,1,1,8.23-13.72L120,113.87V40a8,8,0,0,1,16,0v73.87l67.88-40.73a8,8,0,1,1,8.23,13.72L143.55,128l68.56,41.14A8,8,0,0,1,214.86,180.12Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm64.12,133.14a8,8,0,0,1-8.24,13.72L136,142.13V194a8,8,0,0,1-16,0V142.13L72.12,170.86a8,8,0,0,1-8.24-13.72L112.45,128,63.88,98.86a8,8,0,0,1,8.24-13.72L120,113.87V62a8,8,0,0,1,16,0v51.87l47.88-28.73a8,8,0,1,1,8.24,13.72L143.55,128Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M213.14,179.09a6,6,0,0,1-8.23,2.06L134,138.6V216a6,6,0,0,1-12,0V138.6L51.09,181.15A6.07,6.07,0,0,1,48,182a6,6,0,0,1-3.1-11.15L116.34,128,44.91,85.15a6,6,0,0,1,6.18-10.3L122,117.4V40a6,6,0,0,1,12,0v77.4l70.91-42.55a6,6,0,0,1,6.18,10.3L139.66,128l71.43,42.85A6,6,0,0,1,213.14,179.09Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M214.86,180.12a8,8,0,0,1-11,2.74L136,142.13V216a8,8,0,0,1-16,0V142.13L52.12,182.86a8,8,0,1,1-8.23-13.72L112.45,128,43.89,86.86a8,8,0,1,1,8.23-13.72L120,113.87V40a8,8,0,0,1,16,0v73.87l67.88-40.73a8,8,0,1,1,8.23,13.72L143.55,128l68.56,41.14A8,8,0,0,1,214.86,180.12Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M211.43,178.06a4,4,0,0,1-5.49,1.37L132,135.06V216a4,4,0,0,1-8,0V135.06L50.06,179.43a4,4,0,0,1-4.12-6.86L120.22,128,45.94,83.43a4,4,0,0,1,4.12-6.86L124,120.94V40a4,4,0,0,1,8,0v80.94l73.94-44.37a4,4,0,1,1,4.12,6.86L135.78,128l74.28,44.57A4,4,0,0,1,211.43,178.06Z" }))
  ]
]), c = d((t, a) => /* @__PURE__ */ e.createElement(A, m(L({ ref: a }, t), { weights: i })));
c.displayName = "Asterisk";
const M = c;
export {
  M as default
};
