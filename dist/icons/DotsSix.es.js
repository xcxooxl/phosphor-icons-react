var c = Object.defineProperty, o = Object.defineProperties;
var E = Object.getOwnPropertyDescriptors;
var A = Object.getOwnPropertySymbols;
var M = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var Z = (t, e, m) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : t[e] = m, l = (t, e) => {
  for (var m in e || (e = {}))
    M.call(e, m) && Z(t, m, e[m]);
  if (A)
    for (var m of A(e))
      p.call(e, m) && Z(t, m, e[m]);
  return t;
}, n = (t, e) => o(t, E(e));
import a, { forwardRef as d } from "react";
import i from "../lib/IconBase.es.js";
const h = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M76,92A16,16,0,1,1,60,76,16,16,0,0,1,76,92Zm52-16a16,16,0,1,0,16,16A16,16,0,0,0,128,76Zm68,32a16,16,0,1,0-16-16A16,16,0,0,0,196,108ZM60,148a16,16,0,1,0,16,16A16,16,0,0,0,60,148Zm68,0a16,16,0,1,0,16,16A16,16,0,0,0,128,148Zm68,0a16,16,0,1,0,16,16A16,16,0,0,0,196,148Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M240,64V192a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V64A16,16,0,0,1,32,48H224A16,16,0,0,1,240,64Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M72,92A12,12,0,1,1,60,80,12,12,0,0,1,72,92Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,128,80Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,104ZM60,152a12,12,0,1,0,12,12A12,12,0,0,0,60,152Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,152Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,152Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM68,168a12,12,0,1,1,12-12A12,12,0,0,1,68,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,68,112Zm60,56a12,12,0,1,1,12-12A12,12,0,0,1,128,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,128,112Zm60,56a12,12,0,1,1,12-12A12,12,0,0,1,188,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,188,112Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M70,92A10,10,0,1,1,60,82,10,10,0,0,1,70,92Zm58-10a10,10,0,1,0,10,10A10,10,0,0,0,128,82Zm68,20a10,10,0,1,0-10-10A10,10,0,0,0,196,102ZM60,154a10,10,0,1,0,10,10A10,10,0,0,0,60,154Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,128,154Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,196,154Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M72,92A12,12,0,1,1,60,80,12,12,0,0,1,72,92Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,128,80Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,104ZM60,152a12,12,0,1,0,12,12A12,12,0,0,0,60,152Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,152Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,152Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M68,92a8,8,0,1,1-8-8A8,8,0,0,1,68,92Zm60-8a8,8,0,1,0,8,8A8,8,0,0,0,128,84Zm68,16a8,8,0,1,0-8-8A8,8,0,0,0,196,100ZM60,156a8,8,0,1,0,8,8A8,8,0,0,0,60,156Zm68,0a8,8,0,1,0,8,8A8,8,0,0,0,128,156Zm68,0a8,8,0,1,0,8,8A8,8,0,0,0,196,156Z" }))
  ]
]), r = d((t, e) => /* @__PURE__ */ a.createElement(i, n(l({ ref: e }, t), { weights: h })));
r.displayName = "DotsSix";
const f = r;
export {
  f as default
};
