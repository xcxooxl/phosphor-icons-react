var V = Object.defineProperty, c = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
var m = (t, e, l) => e in t ? V(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l, n = (t, e) => {
  for (var l in e || (e = {}))
    Z.call(e, l) && m(t, l, e[l]);
  if (r)
    for (var l of r(e))
      u.call(e, l) && m(t, l, e[l]);
  return t;
}, H = (t, e) => c(t, h(e));
import a, { forwardRef as o } from "react";
import E from "../lib/IconBase.es.js";
const p = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204ZM92,80a12,12,0,0,1,12-12h48a12,12,0,0,1,9.83,18.88l-18.34,26.2A40,40,0,1,1,95.43,176a12,12,0,1,1,17.14-16.79A16,16,0,1,0,124,132a12,12,0,0,1-9.83-18.88L129,92H104A12,12,0,0,1,92,80Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208Zm-48-60a36,36,0,0,1-61.71,25.19A8,8,0,1,1,109.71,162,20,20,0,1,0,124,128a8,8,0,0,1-6.55-12.59L136.63,88H104a8,8,0,0,1,0-16h48a8,8,0,0,1,6.55,12.59l-21,30A36.07,36.07,0,0,1,160,148Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM124,184a35.71,35.71,0,0,1-25.71-10.81A8,8,0,1,1,109.71,162,20,20,0,1,0,124,128a8,8,0,0,1-6.55-12.59L136.63,88H104a8,8,0,0,1,0-16h48a8,8,0,0,1,6.55,12.59l-21,30A36,36,0,0,1,124,184Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,174a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Zm-52-60a34,34,0,0,1-58.29,23.79,6,6,0,0,1,8.58-8.39A22,22,0,1,0,124,126a6,6,0,0,1-4.92-9.44L140.48,86H104a6,6,0,0,1,0-12h48a6,6,0,0,1,4.92,9.44l-22.53,32.18A34.06,34.06,0,0,1,158,148Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208Zm-48-60a36,36,0,0,1-61.71,25.19A8,8,0,1,1,109.71,162,20,20,0,1,0,124,128a8,8,0,0,1-6.55-12.59L136.63,88H104a8,8,0,0,1,0-16h48a8,8,0,0,1,6.55,12.59l-21,30A36.07,36.07,0,0,1,160,148Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-56-60a32,32,0,0,1-54.86,22.4,4,4,0,1,1,5.72-5.6A24,24,0,1,0,124,124a4,4,0,0,1-3.28-6.29L144.32,84H104a4,4,0,0,1,0-8h48a4,4,0,0,1,3.28,6.29L131.12,116.8A32.06,32.06,0,0,1,156,148Z" }))
  ]
]), A = o((t, e) => /* @__PURE__ */ a.createElement(E, H(n({ ref: e }, t), { weights: p })));
A.displayName = "NumberSquareThree";
const i = A;
export {
  i as default
};
