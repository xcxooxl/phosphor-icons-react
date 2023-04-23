var M = Object.defineProperty, c = Object.defineProperties;
var o = Object.getOwnPropertyDescriptors;
var L = Object.getOwnPropertySymbols;
var E = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var n = (e, l, t) => l in e ? M(e, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[l] = t, r = (e, l) => {
  for (var t in l || (l = {}))
    E.call(l, t) && n(e, t, l[t]);
  if (L)
    for (var t of L(l))
      p.call(l, t) && n(e, t, l[t]);
  return e;
}, m = (e, l) => c(e, o(l));
import a, { forwardRef as d } from "react";
import h from "../lib/IconBase.es.js";
const g = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M248.49,39.51l-32-32a12,12,0,0,0-18.55,15L147,60.77l-37.33,7.46a12.09,12.09,0,0,0-6.14,3.28L20.2,154.83a28,28,0,0,0,0,39.6L61.57,235.8a28,28,0,0,0,39.6,0l83.32-83.31a12.09,12.09,0,0,0,3.28-6.14L195.23,109l38.23-51a12,12,0,0,0,15-18.55ZM112,191,65,144l31-31,47,47ZM81.37,220a4,4,0,0,1-2.83-1.17L37.17,177.46a4,4,0,0,1,0-5.66L48,161l47,47L84.2,218.83A4,4,0,0,1,81.37,220Zm93-123.2a12,12,0,0,0-2.17,4.85L165,138.08,160,143,113,96l5-5,36.43-7.28a12,12,0,0,0,4.85-2.17l55.67-41.76,1.29,1.29Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M160,160l-56,56L40,152,96,96Z", opacity: "0.2" }), /* @__PURE__ */ a.createElement("path", { d: "M245.66,42.34l-32-32a8,8,0,0,0-11.32,11.32l1.48,1.47L148.65,64.51l-38.22,7.65a8.05,8.05,0,0,0-4.09,2.18L23,157.66a24,24,0,0,0,0,33.94L64.4,233a24,24,0,0,0,33.94,0l83.32-83.31a8,8,0,0,0,2.18-4.09l7.65-38.22,41.38-55.17,1.47,1.48a8,8,0,0,0,11.32-11.32ZM104,204.69,51.31,152,96,107.31,148.69,160ZM81.37,224a7.94,7.94,0,0,1-5.65-2.34L34.34,180.28a8,8,0,0,1,0-11.31L40,163.31,92.69,216,87,221.66A8,8,0,0,1,81.37,224ZM177.6,99.2a7.92,7.92,0,0,0-1.44,3.23l-7.53,37.63L160,148.69,107.31,96l8.63-8.63,37.63-7.53a7.92,7.92,0,0,0,3.23-1.44l58.45-43.84,6.19,6.19Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M245.66,42.34l-32-32a8,8,0,0,0-11.32,11.32l1.48,1.47L148.65,64.51l-38.22,7.65a8.05,8.05,0,0,0-4.09,2.18L23,157.66a24,24,0,0,0,0,33.94L64.4,233a24,24,0,0,0,33.94,0l83.32-83.31a8,8,0,0,0,2.18-4.09l7.65-38.22,41.38-55.17,1.47,1.48a8,8,0,0,0,11.32-11.32ZM81.37,224a7.94,7.94,0,0,1-5.65-2.34L34.34,180.28a8,8,0,0,1,0-11.31L40,163.31,92.69,216,87,221.66A8,8,0,0,1,81.37,224ZM177.6,99.2a7.92,7.92,0,0,0-1.44,3.23l-7.53,37.63L160,148.69,107.31,96l8.63-8.63,37.63-7.53a7.92,7.92,0,0,0,3.23-1.44l58.45-43.84,6.19,6.19Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M244.24,43.76l-32-32a6,6,0,0,0-8.48,8.48l3.11,3.11-57.38,43-38.67,7.74a5.92,5.92,0,0,0-3.06,1.64L24.44,159.07a22,22,0,0,0,0,31.11l41.38,41.38a22,22,0,0,0,31.11,0l83.31-83.32a5.92,5.92,0,0,0,1.64-3.06l7.74-38.67,43-57.38,3.11,3.11a6,6,0,0,0,8.48-8.48ZM88.44,223.07a10,10,0,0,1-14.14,0L32.93,181.7a10,10,0,0,1,0-14.14L40,160.49,95.51,216ZM104,207.51,48.49,152,96,104.49,151.51,160ZM179.2,100.4a5.88,5.88,0,0,0-1.08,2.42L170.47,141,160,151.51,104.49,96,115,85.53l38.22-7.65a5.88,5.88,0,0,0,2.42-1.08l59.84-44.88,8.64,8.64Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M245.66,42.34l-32-32a8,8,0,0,0-11.32,11.32l1.48,1.47L148.65,64.51l-38.22,7.65a8.05,8.05,0,0,0-4.09,2.18L23,157.66a24,24,0,0,0,0,33.94L64.4,233a24,24,0,0,0,33.94,0l83.32-83.31a8,8,0,0,0,2.18-4.09l7.65-38.22,41.38-55.17,1.47,1.48a8,8,0,0,0,11.32-11.32ZM96,107.31,148.69,160,104,204.69,51.31,152ZM81.37,224a7.94,7.94,0,0,1-5.65-2.34L34.34,180.28a8,8,0,0,1,0-11.31L40,163.31,92.69,216,87,221.66A8,8,0,0,1,81.37,224ZM177.6,99.2a7.92,7.92,0,0,0-1.44,3.23l-7.53,37.63L160,148.69,107.31,96l8.63-8.63,37.63-7.53a7.92,7.92,0,0,0,3.23-1.44l58.45-43.84,6.19,6.19Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M242.83,45.17l-32-32a4,4,0,0,0-5.66,5.66l4.74,4.74L150.33,68.26l-39.11,7.82a4,4,0,0,0-2,1.09L25.86,160.49a20,20,0,0,0,0,28.28l41.37,41.37a20,20,0,0,0,28.28,0l83.32-83.31a4,4,0,0,0,1.09-2.05l7.82-39.11,44.69-59.58,4.74,4.74a4,4,0,1,0,5.66-5.66Zm-153,179.31a12,12,0,0,1-17,0L31.51,183.11a12,12,0,0,1,0-17L40,157.66,98.34,216ZM104,210.34,45.66,152,96,101.66,154.34,160ZM180.8,101.6a3.89,3.89,0,0,0-.72,1.62L172.32,142,160,154.34,101.66,96,114,83.68l38.81-7.76a3.89,3.89,0,0,0,1.62-.72l61.22-45.92,11.1,11.1Z" }))
  ]
]), Z = d((e, l) => /* @__PURE__ */ a.createElement(h, m(r({ ref: l }, e), { weights: g })));
Z.displayName = "BeerBottle";
const B = Z;
export {
  B as default
};
