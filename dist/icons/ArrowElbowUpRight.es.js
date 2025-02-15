var E = Object.defineProperty, V = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var n = (t, a, l) => a in t ? E(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[a] = l, m = (t, a) => {
  for (var l in a || (a = {}))
    h.call(a, l) && n(t, l, a[l]);
  if (r)
    for (var l of r(a))
      d.call(a, l) && n(t, l, a[l]);
  return t;
}, c = (t, a) => V(t, p(a));
import e, { forwardRef as g } from "react";
import A from "../lib/IconBase.es.js";
const i = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M216.49,88.49l-48,48a12,12,0,0,1-17-17L179,92H76V224a12,12,0,0,1-24,0V80A12,12,0,0,1,64,68H179L151.51,40.49a12,12,0,1,1,17-17l48,48A12,12,0,0,1,216.49,88.49Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M208,80l-48,48V32Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M213.66,74.34l-48-48A8,8,0,0,0,152,32V72H64a8,8,0,0,0-8,8V224a8,8,0,0,0,16,0V88h80v40a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,213.66,74.34ZM168,108.69V51.31L196.69,80Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M213.66,85.66l-48,48A8,8,0,0,1,152,128V88H72V224a8,8,0,0,1-16,0V80a8,8,0,0,1,8-8h88V32a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,213.66,85.66Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M212.24,84.24l-48,48a6,6,0,0,1-8.48-8.48L193.51,86H70V224a6,6,0,0,1-12,0V80a6,6,0,0,1,6-6H193.51L155.76,36.24a6,6,0,0,1,8.48-8.48l48,48A6,6,0,0,1,212.24,84.24Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M213.66,85.66l-48,48a8,8,0,0,1-11.32-11.32L188.69,88H72V224a8,8,0,0,1-16,0V80a8,8,0,0,1,8-8H188.69L154.34,37.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,213.66,85.66Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M210.83,82.83l-48,48a4,4,0,0,1-5.66-5.66L198.34,84H68V224a4,4,0,0,1-8,0V80a4,4,0,0,1,4-4H198.34L157.17,34.83a4,4,0,0,1,5.66-5.66l48,48A4,4,0,0,1,210.83,82.83Z" }))
  ]
]), o = g((t, a) => /* @__PURE__ */ e.createElement(A, c(m({ ref: a }, t), { weights: i })));
o.displayName = "ArrowElbowUpRight";
const L = o;
export {
  L as default
};
