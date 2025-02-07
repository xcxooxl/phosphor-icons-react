var h = Object.defineProperty, A = Object.defineProperties;
var Z = Object.getOwnPropertyDescriptors;
var V = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var l = (t, e, H) => e in t ? h(t, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : t[e] = H, n = (t, e) => {
  for (var H in e || (e = {}))
    c.call(e, H) && l(t, H, e[H]);
  if (V)
    for (var H of V(e))
      v.call(e, H) && l(t, H, e[H]);
  return t;
}, m = (t, e) => A(t, Z(e));
import a, { forwardRef as M } from "react";
import i from "../lib/IconBase.es.js";
const d = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,60H180V52a28,28,0,0,0-28-28H104A28,28,0,0,0,76,52v8H40A20,20,0,0,0,20,80V208a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V80A20,20,0,0,0,216,60ZM100,52a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4v8H100ZM212,204H44V84H212Zm-48-60a12,12,0,0,1-12,12H140v12a12,12,0,0,1-24,0V156H104a12,12,0,0,1,0-24h12V120a12,12,0,0,1,24,0v12h12A12,12,0,0,1,164,144Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M224,80V208a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H216A8,8,0,0,1,224,80Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M216,64H176V56a24,24,0,0,0-24-24H104A24,24,0,0,0,80,56v8H40A16,16,0,0,0,24,80V208a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM96,56a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,208H40V80H216V208Zm-56-64a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V152H104a8,8,0,0,1,0-16h16V120a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,144Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,64H176V56a24,24,0,0,0-24-24H104A24,24,0,0,0,80,56v8H40A16,16,0,0,0,24,80V208a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm-64,88H136v16a8,8,0,0,1-16,0V152H104a8,8,0,0,1,0-16h16V120a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16Zm8-88H96V56a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,66H174V56a22,22,0,0,0-22-22H104A22,22,0,0,0,82,56V66H40A14,14,0,0,0,26,80V208a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V80A14,14,0,0,0,216,66ZM94,56a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V66H94ZM218,208a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V80a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2Zm-60-64a6,6,0,0,1-6,6H134v18a6,6,0,0,1-12,0V150H104a6,6,0,0,1,0-12h18V120a6,6,0,0,1,12,0v18h18A6,6,0,0,1,158,144Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,64H176V56a24,24,0,0,0-24-24H104A24,24,0,0,0,80,56v8H40A16,16,0,0,0,24,80V208a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM96,56a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,208H40V80H216V208Zm-56-64a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V152H104a8,8,0,0,1,0-16h16V120a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,144Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,68H172V56a20,20,0,0,0-20-20H104A20,20,0,0,0,84,56V68H40A12,12,0,0,0,28,80V208a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V80A12,12,0,0,0,216,68ZM92,56a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V68H92ZM220,208a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4Zm-64-64a4,4,0,0,1-4,4H132v20a4,4,0,0,1-8,0V148H104a4,4,0,0,1,0-8h20V120a4,4,0,0,1,8,0v20h20A4,4,0,0,1,156,144Z" }))
  ]
]), r = M((t, e) => /* @__PURE__ */ a.createElement(i, m(n({ ref: e }, t), { weights: d })));
r.displayName = "FirstAidKit";
const s = r;
export {
  s as default
};
