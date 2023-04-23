var o = Object.defineProperty, A = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var E = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (t, a, l) => a in t ? o(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[a] = l, n = (t, a) => {
  for (var l in a || (a = {}))
    E.call(a, l) && r(t, l, a[l]);
  if (m)
    for (var l of m(a))
      p.call(a, l) && r(t, l, a[l]);
  return t;
}, c = (t, a) => A(t, h(a));
import e, { forwardRef as d } from "react";
import u from "../lib/IconBase.es.js";
const i = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm28.75-86.33L128,164h24a12,12,0,0,1,0,24H104a12,12,0,0,1-9.6-19.2l43.17-57.56A12,12,0,1,0,116.68,100a12,12,0,0,1-22.63-8,36.3,36.3,0,0,1,5.2-9.67,36,36,0,0,1,57.5,43.34Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M153.56,123.26,120,168h32a8,8,0,0,1,0,16H104a8,8,0,0,1-6.4-12.8l43.17-57.56a16,16,0,1,0-27.86-15,8,8,0,0,1-15.09-5.34,32,32,0,1,1,55.74,29.93ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm24,144a8,8,0,0,1,0,16H104a8,8,0,0,1-6.4-12.8l43.17-57.56a16,16,0,1,0-27.86-15,8,8,0,0,1-15.09-5.34,32,32,0,1,1,55.74,29.93L120,168Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm24-95.95-36,48h36a6,6,0,0,1,0,12H104a6,6,0,0,1-4.8-9.6l43.17-57.56A18,18,0,1,0,111,98a6,6,0,1,1-11.31-4A30,30,0,1,1,152,122.05Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm25.56-92.74L120,168h32a8,8,0,0,1,0,16H104a8,8,0,0,1-6.4-12.8l43.17-57.56a16,16,0,1,0-27.86-15,8,8,0,0,1-15.09-5.34,32,32,0,1,1,55.74,29.93Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm22.36-99.15L112,172h40a4,4,0,0,1,0,8H104a4,4,0,0,1-3.2-6.4L144,116A20,20,0,0,0,140,88,20,20,0,0,0,112,92a20.08,20.08,0,0,0-2.89,5.37,4,4,0,0,1-7.55-2.66,28.19,28.19,0,0,1,4-7.52,28,28,0,1,1,44.72,33.7Z" }))
  ]
]), Z = d((t, a) => /* @__PURE__ */ e.createElement(u, c(n({ ref: a }, t), { weights: i })));
Z.displayName = "NumberCircleTwo";
const f = Z;
export {
  f as default
};
