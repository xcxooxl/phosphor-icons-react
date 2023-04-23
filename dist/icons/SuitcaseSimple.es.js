var Z = Object.defineProperty, c = Object.defineProperties;
var M = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var V = (t, a, H) => a in t ? Z(t, a, { enumerable: !0, configurable: !0, writable: !0, value: H }) : t[a] = H, n = (t, a) => {
  for (var H in a || (a = {}))
    A.call(a, H) && V(t, H, a[H]);
  if (l)
    for (var H of l(a))
      v.call(a, H) && V(t, H, a[H]);
  return t;
}, m = (t, a) => c(t, M(a));
import e, { forwardRef as h } from "react";
import p from "../lib/IconBase.es.js";
const i = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M216,48H180V40a28,28,0,0,0-28-28H104A28,28,0,0,0,76,40v8H40A20,20,0,0,0,20,68V196a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V68A20,20,0,0,0,216,48ZM100,40a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4v8H100ZM212,72v64H44V72ZM44,192V160H212v32Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M224,152v48a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V152Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v72H40V72Zm0,128H40V160H216v40Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v72H40V72Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M216,58H174V48a22,22,0,0,0-22-22H104A22,22,0,0,0,82,48V58H40A14,14,0,0,0,26,72V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V72A14,14,0,0,0,216,58ZM94,48a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V58H94ZM40,70H216a2,2,0,0,1,2,2v74H38V72A2,2,0,0,1,40,70ZM216,202H40a2,2,0,0,1-2-2V158H218v42A2,2,0,0,1,216,202Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v72H40V72Zm0,128H40V160H216v40Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M216,60H172V48a20,20,0,0,0-20-20H104A20,20,0,0,0,84,48V60H40A12,12,0,0,0,28,72V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V72A12,12,0,0,0,216,60ZM92,48a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V60H92ZM40,68H216a4,4,0,0,1,4,4v76H36V72A4,4,0,0,1,40,68ZM216,204H40a4,4,0,0,1-4-4V156H220v44A4,4,0,0,1,216,204Z" }))
  ]
]), r = h((t, a) => /* @__PURE__ */ e.createElement(p, m(n({ ref: a }, t), { weights: i })));
r.displayName = "SuitcaseSimple";
const u = r;
export {
  u as default
};
