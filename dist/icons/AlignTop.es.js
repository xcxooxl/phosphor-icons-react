var r = Object.defineProperty, A = Object.defineProperties;
var V = Object.getOwnPropertyDescriptors;
var H = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var l = (t, e, m) => e in t ? r(t, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : t[e] = m, n = (t, e) => {
  for (var m in e || (e = {}))
    c.call(e, m) && l(t, m, e[m]);
  if (H)
    for (var m of H(e))
      o.call(e, m) && l(t, m, e[m]);
  return t;
}, h = (t, e) => A(t, V(e));
import a, { forwardRef as p } from "react";
import M from "../lib/IconBase.es.js";
const E = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M228,40a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,40ZM212,88v88a20,20,0,0,1-20,20H156a20,20,0,0,1-20-20V88a20,20,0,0,1,20-20h36A20,20,0,0,1,212,88Zm-24,4H160v80h28Zm-68-4V216a20,20,0,0,1-20,20H64a20,20,0,0,1-20-20V88A20,20,0,0,1,64,68h36A20,20,0,0,1,120,88ZM96,92H68V212H96Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M200,80v96a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h40A8,8,0,0,1,200,80Zm-96-8H64a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8h40a8,8,0,0,0,8-8V80A8,8,0,0,0,104,72Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M224,40a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40ZM208,80v96a16,16,0,0,1-16,16H152a16,16,0,0,1-16-16V80a16,16,0,0,1,16-16h40A16,16,0,0,1,208,80Zm-16,0H152v96h40Zm-72,0V216a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V80A16,16,0,0,1,64,64h40A16,16,0,0,1,120,80Zm-16,0H64V216h40Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M224,40a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40ZM192,64H152a16,16,0,0,0-16,16v96a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V80A16,16,0,0,0,192,64Zm-88,0H64A16,16,0,0,0,48,80V216a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V80A16,16,0,0,0,104,64Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M222,40a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,40ZM206,80v96a14,14,0,0,1-14,14H152a14,14,0,0,1-14-14V80a14,14,0,0,1,14-14h40A14,14,0,0,1,206,80Zm-12,0a2,2,0,0,0-2-2H152a2,2,0,0,0-2,2v96a2,2,0,0,0,2,2h40a2,2,0,0,0,2-2Zm-76,0V216a14,14,0,0,1-14,14H64a14,14,0,0,1-14-14V80A14,14,0,0,1,64,66h40A14,14,0,0,1,118,80Zm-12,0a2,2,0,0,0-2-2H64a2,2,0,0,0-2,2V216a2,2,0,0,0,2,2h40a2,2,0,0,0,2-2Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M224,40a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40ZM208,80v96a16,16,0,0,1-16,16H152a16,16,0,0,1-16-16V80a16,16,0,0,1,16-16h40A16,16,0,0,1,208,80Zm-16,0H152v96h40Zm-72,0V216a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V80A16,16,0,0,1,64,64h40A16,16,0,0,1,120,80Zm-16,0H64V216h40Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M220,40a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,40ZM204,80v96a12,12,0,0,1-12,12H152a12,12,0,0,1-12-12V80a12,12,0,0,1,12-12h40A12,12,0,0,1,204,80Zm-8,0a4,4,0,0,0-4-4H152a4,4,0,0,0-4,4v96a4,4,0,0,0,4,4h40a4,4,0,0,0,4-4Zm-80,0V216a12,12,0,0,1-12,12H64a12,12,0,0,1-12-12V80A12,12,0,0,1,64,68h40A12,12,0,0,1,116,80Zm-8,0a4,4,0,0,0-4-4H64a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4h40a4,4,0,0,0,4-4Z" }))
  ]
]), Z = p((t, e) => /* @__PURE__ */ a.createElement(M, h(n({ ref: e }, t), { weights: E })));
Z.displayName = "AlignTop";
const i = Z;
export {
  i as default
};
