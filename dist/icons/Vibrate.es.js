var h = Object.defineProperty, c = Object.defineProperties;
var M = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var r = (t, e, V) => e in t ? h(t, e, { enumerable: !0, configurable: !0, writable: !0, value: V }) : t[e] = V, l = (t, e) => {
  for (var V in e || (e = {}))
    v.call(e, V) && r(t, V, e[V]);
  if (m)
    for (var V of m(e))
      A.call(e, V) && r(t, V, e[V]);
  return t;
}, n = (t, e) => c(t, M(e));
import a, { forwardRef as E } from "react";
import d from "../lib/IconBase.es.js";
const p = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M164,28H92A28,28,0,0,0,64,56V200a28,28,0,0,0,28,28h72a28,28,0,0,0,28-28V56A28,28,0,0,0,164,28Zm4,172a4,4,0,0,1-4,4H92a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h72a4,4,0,0,1,4,4Zm64-100v56a12,12,0,0,1-24,0V100a12,12,0,0,1,24,0ZM48,100v56a12,12,0,0,1-24,0V100a12,12,0,0,1,24,0Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M176,56V200a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16V56A16,16,0,0,1,96,40h64A16,16,0,0,1,176,56Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M160,32H96A24,24,0,0,0,72,56V200a24,24,0,0,0,24,24h64a24,24,0,0,0,24-24V56A24,24,0,0,0,160,32Zm8,168a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8ZM216,88v80a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm32,16v48a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0ZM56,88v80a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0ZM24,104v48a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("rect", { x: "72", y: "32", width: "112", height: "192", rx: "24" }), /* @__PURE__ */ a.createElement("path", { d: "M208,80a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,208,80Z" }), /* @__PURE__ */ a.createElement("path", { d: "M240,96a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V104A8,8,0,0,0,240,96Z" }), /* @__PURE__ */ a.createElement("path", { d: "M48,80a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,48,80Z" }), /* @__PURE__ */ a.createElement("path", { d: "M16,96a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V104A8,8,0,0,0,16,96Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M160,34H96A22,22,0,0,0,74,56V200a22,22,0,0,0,22,22h64a22,22,0,0,0,22-22V56A22,22,0,0,0,160,34Zm10,166a10,10,0,0,1-10,10H96a10,10,0,0,1-10-10V56A10,10,0,0,1,96,46h64a10,10,0,0,1,10,10ZM214,88v80a6,6,0,0,1-12,0V88a6,6,0,0,1,12,0Zm32,16v48a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0ZM54,88v80a6,6,0,0,1-12,0V88a6,6,0,0,1,12,0ZM22,104v48a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M160,32H96A24,24,0,0,0,72,56V200a24,24,0,0,0,24,24h64a24,24,0,0,0,24-24V56A24,24,0,0,0,160,32Zm8,168a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8ZM216,88v80a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm32,16v48a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0ZM56,88v80a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0ZM24,104v48a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M160,36H96A20,20,0,0,0,76,56V200a20,20,0,0,0,20,20h64a20,20,0,0,0,20-20V56A20,20,0,0,0,160,36Zm12,164a12,12,0,0,1-12,12H96a12,12,0,0,1-12-12V56A12,12,0,0,1,96,44h64a12,12,0,0,1,12,12ZM212,88v80a4,4,0,0,1-8,0V88a4,4,0,0,1,8,0Zm32,16v48a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0ZM52,88v80a4,4,0,0,1-8,0V88a4,4,0,0,1,8,0ZM20,104v48a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Z" }))
  ]
]), Z = E((t, e) => /* @__PURE__ */ a.createElement(d, n(l({ ref: e }, t), { weights: p })));
Z.displayName = "Vibrate";
const g = Z;
export {
  g as default
};
