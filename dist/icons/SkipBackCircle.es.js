var Z = Object.defineProperty, M = Object.defineProperties;
var V = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (t, a, l) => a in t ? Z(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[a] = l, r = (t, a) => {
  for (var l in a || (a = {}))
    p.call(a, l) && m(t, l, a[l]);
  if (n)
    for (var l of n(a))
      i.call(a, l) && m(t, l, a[l]);
  return t;
}, c = (t, a) => M(t, V(a));
import e, { forwardRef as o } from "react";
import E from "../lib/IconBase.es.js";
const d = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212ZM165.82,77.5a12,12,0,0,0-12.18.32L108,106.35V88a12,12,0,0,0-24,0v80a12,12,0,0,0,24,0V149.65l45.64,28.53A12,12,0,0,0,172,168V88A12,12,0,0,0,165.82,77.5ZM148,146.35,118.64,128,148,109.65Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
      "path",
      {
        d: "M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32Zm32,136L96,128l64-40Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ e.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM163.88,81a8,8,0,0,0-8.12.22L104,113.57V88a8,8,0,0,0-16,0v80a8,8,0,0,0,16,0V142.43l51.76,32.35A8,8,0,0,0,168,168V88A8,8,0,0,0,163.88,81ZM152,153.57,111.09,128,152,102.43Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,144a8,8,0,0,1-12.65,6.51L104,137.83V168a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0v30.17l51.35-36.68A8,8,0,0,1,168,88Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM162.91,82.75a6,6,0,0,0-6.09.16L102,117.17V88a6,6,0,0,0-12,0v80a6,6,0,0,0,12,0V138.83l54.82,34.26A6,6,0,0,0,166,168V88A6,6,0,0,0,162.91,82.75ZM154,157.17,107.32,128,154,98.83Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM163.88,81a8,8,0,0,0-8.12.22L104,113.57V88a8,8,0,0,0-16,0v80a8,8,0,0,0,16,0V142.43l51.76,32.35A8,8,0,0,0,168,168V88A8,8,0,0,0,163.88,81ZM152,153.57,111.09,128,152,102.43Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM161.94,84.5a4,4,0,0,0-4.06.11L100,120.78V88a4,4,0,0,0-8,0v80a4,4,0,0,0,8,0V135.22l57.88,36.17A4,4,0,0,0,160,172a4.06,4.06,0,0,0,1.94-.5A4,4,0,0,0,164,168V88A4,4,0,0,0,161.94,84.5ZM156,160.78,103.55,128,156,95.22Z" }))
  ]
]), A = o((t, a) => /* @__PURE__ */ e.createElement(E, c(r({ ref: a }, t), { weights: d })));
A.displayName = "SkipBackCircle";
const s = A;
export {
  s as default
};
