var h = Object.defineProperty, o = Object.defineProperties;
var A = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
var n = (t, a, m) => a in t ? h(t, a, { enumerable: !0, configurable: !0, writable: !0, value: m }) : t[a] = m, r = (t, a) => {
  for (var m in a || (a = {}))
    p.call(a, m) && n(t, m, a[m]);
  if (l)
    for (var m of l(a))
      E.call(a, m) && n(t, m, a[m]);
  return t;
}, c = (t, a) => o(t, A(a));
import e, { forwardRef as d } from "react";
import i from "../lib/IconBase.es.js";
const H = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm32-104v40a12,12,0,0,1-12,12H108a12,12,0,0,1-12-12V108a12,12,0,0,1,12-12h40A12,12,0,0,1,160,108Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
      "path",
      {
        d: "M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32Zm24,120H104V104h48Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ e.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM152,96H104a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V104A8,8,0,0,0,152,96Zm-8,48H112V112h32Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm32,128a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V104a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM152,98H104a6,6,0,0,0-6,6v48a6,6,0,0,0,6,6h48a6,6,0,0,0,6-6V104A6,6,0,0,0,152,98Zm-6,48H110V110h36Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM152,96H104a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V104A8,8,0,0,0,152,96Zm-8,48H112V112h32Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm24-120H104a4,4,0,0,0-4,4v48a4,4,0,0,0,4,4h48a4,4,0,0,0,4-4V104A4,4,0,0,0,152,100Zm-4,48H108V108h40Z" }))
  ]
]), Z = d((t, a) => /* @__PURE__ */ e.createElement(i, c(r({ ref: a }, t), { weights: H })));
Z.displayName = "StopCircle";
const u = Z;
export {
  u as default
};
