var o = Object.defineProperty, V = Object.defineProperties;
var A = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var n = (t, e, l) => e in t ? o(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l, r = (t, e) => {
  for (var l in e || (e = {}))
    c.call(e, l) && n(t, l, e[l]);
  if (m)
    for (var l of m(e))
      Z.call(e, l) && n(t, l, e[l]);
  return t;
}, H = (t, e) => V(t, A(e));
import a, { forwardRef as v } from "react";
import E from "../lib/IconBase.es.js";
const L = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,20H72A36,36,0,0,0,36,56V224a12,12,0,0,0,12,12H192a12,12,0,0,0,0-24H60v-4a12,12,0,0,1,12-12H208a12,12,0,0,0,12-12V32A12,12,0,0,0,208,20ZM120,44h40v60l-12.81-9.6a12,12,0,0,0-14.4,0L120,104Zm76,128H72a35.59,35.59,0,0,0-12,2.06V56A12,12,0,0,1,72,44H96v84a12,12,0,0,0,19.2,9.6L140,119l24.81,18.6A12,12,0,0,0,184,128V44h12Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M208,32V192H72a24,24,0,0,0-24,24V56A24,24,0,0,1,72,32h40v96l32-24,32,24V32Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24ZM120,40h48v72L148.79,97.6a8,8,0,0,0-9.6,0L120,112Zm80,144H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40h32v88a8,8,0,0,0,12.8,6.4L144,114l27.21,20.4A8,8,0,0,0,176,136a8.1,8.1,0,0,0,3.58-.84A8,8,0,0,0,184,128V40h16Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-24,96-25.61-19.2a4,4,0,0,0-4.8,0L128,120V40h56Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,26H72A30,30,0,0,0,42,56V224a6,6,0,0,0,6,6H192a6,6,0,0,0,0-12H54v-2a18,18,0,0,1,18-18H208a6,6,0,0,0,6-6V32A6,6,0,0,0,208,26ZM118,38h52v78L147.59,99.2a6,6,0,0,0-7.2,0L118,116Zm84,148H72a29.87,29.87,0,0,0-18,6V56A18,18,0,0,1,72,38h34v90a6,6,0,0,0,9.6,4.8L144,111.5l28.41,21.3A6,6,0,0,0,182,128V38h20Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24ZM120,40h48v72L148.79,97.6a8,8,0,0,0-9.6,0L120,112Zm80,144H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40h32v88a8,8,0,0,0,12.8,6.4L144,114l27.21,20.4A8,8,0,0,0,176,136a8,8,0,0,0,8-8V40h16Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,28H72A28,28,0,0,0,44,56V224a4,4,0,0,0,4,4H192a4,4,0,0,0,0-8H52v-4a20,20,0,0,1,20-20H208a4,4,0,0,0,4-4V32A4,4,0,0,0,208,28Zm-92,8h56v84l-25.61-19.2a4,4,0,0,0-4.8,0L116,120Zm88,152H72a27.94,27.94,0,0,0-20,8.42V56A20,20,0,0,1,72,36h36v92a4,4,0,0,0,6.4,3.2L144,109l29.61,22.2a4,4,0,0,0,2.4.8,4,4,0,0,0,4-4V36h24Z" }))
  ]
]), h = v((t, e) => /* @__PURE__ */ a.createElement(E, H(r({ ref: e }, t), { weights: L })));
h.displayName = "BookBookmark";
const g = h;
export {
  g as default
};
