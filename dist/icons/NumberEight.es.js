var A = Object.defineProperty, E = Object.defineProperties;
var o = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var M = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var n = (t, a, m) => a in t ? A(t, a, { enumerable: !0, configurable: !0, writable: !0, value: m }) : t[a] = m, r = (t, a) => {
  for (var m in a || (a = {}))
    M.call(a, m) && n(t, m, a[m]);
  if (l)
    for (var m of l(a))
      h.call(a, m) && n(t, m, a[m]);
  return t;
}, c = (t, a) => E(t, o(a));
import e, { forwardRef as p } from "react";
import d from "../lib/IconBase.es.js";
const g = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M162.44,118.91a52,52,0,1,0-68.88,0,60,60,0,1,0,68.88,0ZM100,80a28,28,0,1,1,28,28A28,28,0,0,1,100,80Zm28,124a36,36,0,1,1,36-36A36,36,0,0,1,128,204Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
      "path",
      {
        d: "M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ e.createElement("path", { d: "M155.55,119.27a48,48,0,1,0-55.1,0,56,56,0,1,0,55.1,0ZM96,80a32,32,0,1,1,32,32A32,32,0,0,1,96,80Zm32,128a40,40,0,1,1,40-40A40,40,0,0,1,128,208Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M108,92a20,20,0,1,1,20,20A20,20,0,0,1,108,92Zm20,36a28,28,0,1,0,28,28A28,28,0,0,0,128,128Zm88-88V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40ZM172,156a44,44,0,0,0-20.23-37,36,36,0,1,0-47.54,0A44,44,0,1,0,172,156Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M151.62,119.45a46,46,0,1,0-47.24,0,54,54,0,1,0,47.24,0ZM94,80a34,34,0,1,1,34,34A34,34,0,0,1,94,80Zm34,130a42,42,0,1,1,42-42A42,42,0,0,1,128,210Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M155.55,119.27a48,48,0,1,0-55.1,0,56,56,0,1,0,55.1,0ZM96,80a32,32,0,1,1,32,32A32,32,0,0,1,96,80Zm32,128a40,40,0,1,1,40-40A40,40,0,0,1,128,208Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M147.08,119.64a44,44,0,1,0-38.16,0,52,52,0,1,0,38.16,0ZM92,80a36,36,0,1,1,36,36A36,36,0,0,1,92,80Zm36,132a44,44,0,1,1,44-44A44.05,44.05,0,0,1,128,212Z" }))
  ]
]), Z = p((t, a) => /* @__PURE__ */ e.createElement(d, c(r({ ref: a }, t), { weights: g })));
Z.displayName = "NumberEight";
const f = Z;
export {
  f as default
};
