var c = Object.defineProperty, i = Object.defineProperties;
var o = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var E = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (t, e, H) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : t[e] = H, n = (t, e) => {
  for (var H in e || (e = {}))
    E.call(e, H) && l(t, H, e[H]);
  if (m)
    for (var H of m(e))
      p.call(e, H) && l(t, H, e[H]);
  return t;
}, r = (t, e) => i(t, o(e));
import a, { forwardRef as A } from "react";
import d from "../lib/IconBase.es.js";
const g = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64ZM216,92H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,40H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,40H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,64V184H40V64Z", opacity: "0.2" }), /* @__PURE__ */ a.createElement("path", { d: "M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM216,96H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M224,64v8a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H216A8,8,0,0,1,224,64Zm-8,32H40a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8v-8A8,8,0,0,0,216,96Zm0,40H40a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8v-8A8,8,0,0,0,216,136Zm0,40H40a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8v-8A8,8,0,0,0,216,176Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64ZM216,98H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm0,40H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm0,40H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM216,96H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm180,36H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm0,40H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm0,40H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z" }))
  ]
]), Z = A((t, e) => /* @__PURE__ */ a.createElement(d, r(n({ ref: e }, t), { weights: g })));
Z.displayName = "TextAlignJustify";
const s = Z;
export {
  s as default
};
