var c = Object.defineProperty, V = Object.defineProperties;
var Z = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
var H = (t, e, l) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l, n = (t, e) => {
  for (var l in e || (e = {}))
    o.call(e, l) && H(t, l, e[l]);
  if (m)
    for (var l of m(e))
      E.call(e, l) && H(t, l, e[l]);
  return t;
}, r = (t, e) => V(t, Z(e));
import a, { forwardRef as p } from "react";
import d from "../lib/IconBase.es.js";
const h = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M196,140a16,16,0,1,1-16-16A16,16,0,0,1,196,140Zm40-32v80a32,32,0,0,1-32,32H60a32,32,0,0,1-32-32V68.92A32,32,0,0,1,60,36H192a12,12,0,0,1,0,24H60a8,8,0,0,0-8,8.26v.08A8.32,8.32,0,0,0,60.48,76H204A32,32,0,0,1,236,108Zm-24,0a8,8,0,0,0-8-8H60.48A33.72,33.72,0,0,1,52,98.92V188a8,8,0,0,0,8,8H204a8,8,0,0,0,8-8Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M224,88V200a8,8,0,0,1-8,8H56a16,16,0,0,1-16-16V64A16,16,0,0,0,56,80H216A8,8,0,0,1,224,88Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M216,72H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,64V192a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72Zm0,128H56a8,8,0,0,1-8-8V86.63A23.84,23.84,0,0,0,56,88H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,140Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,72H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,64V192a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72Zm-36,80a12,12,0,1,1,12-12A12,12,0,0,1,180,152Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,74H56a10,10,0,0,1,0-20H192a6,6,0,0,0,0-12H56A22,22,0,0,0,34,64V192a22,22,0,0,0,22,22H216a14,14,0,0,0,14-14V88A14,14,0,0,0,216,74Zm2,126a2,2,0,0,1-2,2H56a10,10,0,0,1-10-10V83.59A21.84,21.84,0,0,0,56,86H216a2,2,0,0,1,2,2Zm-28-60a10,10,0,1,1-10-10A10,10,0,0,1,190,140Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,72H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,64V192a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72Zm0,128H56a8,8,0,0,1-8-8V86.63A23.84,23.84,0,0,0,56,88H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,140Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,76H56a12,12,0,0,1,0-24H192a4,4,0,0,0,0-8H56A20,20,0,0,0,36,64V192a20,20,0,0,0,20,20H216a12,12,0,0,0,12-12V88A12,12,0,0,0,216,76Zm4,124a4,4,0,0,1-4,4H56a12,12,0,0,1-12-12V80a19.86,19.86,0,0,0,12,4H216a4,4,0,0,1,4,4Zm-32-60a8,8,0,1,1-8-8A8,8,0,0,1,188,140Z" }))
  ]
]), A = p((t, e) => /* @__PURE__ */ a.createElement(d, r(n({ ref: e }, t), { weights: h })));
A.displayName = "Wallet";
const M = A;
export {
  M as default
};
