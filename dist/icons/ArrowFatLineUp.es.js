var c = Object.defineProperty, Z = Object.defineProperties;
var o = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var r = (t, e, l) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l, m = (t, e) => {
  for (var l in e || (e = {}))
    p.call(e, l) && r(t, l, e[l]);
  if (n)
    for (var l of n(e))
      A.call(e, l) && r(t, l, e[l]);
  return t;
}, h = (t, e) => Z(t, o(e));
import a, { forwardRef as E } from "react";
import M from "../lib/IconBase.es.js";
const d = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M232.48,111.51l-96-96a12,12,0,0,0-17,0l-96,96A12,12,0,0,0,32,132H68v44a12,12,0,0,0,12,12h96a12,12,0,0,0,12-12V132h36a12,12,0,0,0,8.48-20.49ZM176,108a12,12,0,0,0-12,12v44H92V120a12,12,0,0,0-12-12H61l67-67,67,67Zm12,108a12,12,0,0,1-12,12H80a12,12,0,0,1,0-24h96A12,12,0,0,1,188,216Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M224,120H176v64H80V120H32l96-96Z", opacity: "0.2" }), /* @__PURE__ */ a.createElement("path", { d: "M229.66,114.34l-96-96a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,32,128H72v56a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V128h40a8,8,0,0,0,5.66-13.66ZM176,112a8,8,0,0,0-8,8v56H88V120a8,8,0,0,0-8-8H51.31L128,35.31,204.69,112Zm8,104a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,216Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M184,216a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,216Zm45.66-101.66-96-96a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,32,128H72v56a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V128h40a8,8,0,0,0,5.66-13.66Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M228.24,115.76l-96-96a6,6,0,0,0-8.48,0l-96,96A6,6,0,0,0,32,126H74v58a6,6,0,0,0,6,6h96a6,6,0,0,0,6-6V126h42a6,6,0,0,0,4.24-10.24ZM176,114a6,6,0,0,0-6,6v58H86V120a6,6,0,0,0-6-6H46.49L128,32.49,209.51,114Zm6,102a6,6,0,0,1-6,6H80a6,6,0,0,1,0-12h96A6,6,0,0,1,182,216Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M229.66,114.34l-96-96a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,32,128H72v56a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V128h40a8,8,0,0,0,5.66-13.66ZM176,112a8,8,0,0,0-8,8v56H88V120a8,8,0,0,0-8-8H51.31L128,35.31,204.69,112Zm8,104a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,216Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M226.83,117.17l-96-96a4,4,0,0,0-5.66,0l-96,96A4,4,0,0,0,32,124H76v60a4,4,0,0,0,4,4h96a4,4,0,0,0,4-4V124h44a4,4,0,0,0,2.83-6.83ZM176,116a4,4,0,0,0-4,4v60H84V120a4,4,0,0,0-4-4H41.66L128,29.66,214.34,116Zm4,100a4,4,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4,4,0,0,1,180,216Z" }))
  ]
]), H = E((t, e) => /* @__PURE__ */ a.createElement(M, h(m({ ref: e }, t), { weights: d })));
H.displayName = "ArrowFatLineUp";
const g = H;
export {
  g as default
};
