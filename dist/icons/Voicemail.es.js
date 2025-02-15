var A = Object.defineProperty, o = Object.defineProperties;
var M = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
var n = (t, a, l) => a in t ? A(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[a] = l, r = (t, a) => {
  for (var l in a || (a = {}))
    i.call(a, l) && n(t, l, a[l]);
  if (m)
    for (var l of m(a))
      E.call(a, l) && n(t, l, a[l]);
  return t;
}, c = (t, a) => o(t, M(a));
import e, { forwardRef as p } from "react";
import d from "../lib/IconBase.es.js";
const H = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M196,68a60,60,0,0,0-48,96H108a60,60,0,1,0-48,24H196a60,60,0,0,0,0-120ZM24,128a36,36,0,1,1,36,36A36,36,0,0,1,24,128Zm172,36a36,36,0,1,1,36-36A36,36,0,0,1,196,164Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
      "path",
      {
        d: "M104,128A48,48,0,1,1,56,80,48,48,0,0,1,104,128Zm96-48a48,48,0,1,0,48,48A48,48,0,0,0,200,80Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ e.createElement("path", { d: "M200,72a56,56,0,0,0-39.14,96H95.14A56,56,0,1,0,56,184H200a56,56,0,0,0,0-112ZM16,128a40,40,0,1,1,40,40A40,40,0,0,1,16,128Zm184,40a40,40,0,1,1,40-40A40,40,0,0,1,200,168Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M200,72a56,56,0,0,0-39.14,96H95.14A56,56,0,1,0,56,184H200a56,56,0,0,0,0-112ZM56,168a40,40,0,1,1,40-40A40,40,0,0,1,56,168Zm144,0a40,40,0,1,1,40-40A40,40,0,0,1,200,168Zm24-40a24,24,0,1,1-24-24A24,24,0,0,1,224,128ZM80,128a24,24,0,1,1-24-24A24,24,0,0,1,80,128Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M200,74a54,54,0,0,0-33.89,96H89.89A54,54,0,1,0,56,182H200a54,54,0,0,0,0-108ZM14,128a42,42,0,1,1,42,42A42,42,0,0,1,14,128Zm186,42a42,42,0,1,1,42-42A42,42,0,0,1,200,170Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M200,72a56,56,0,0,0-39.14,96H95.14A56,56,0,1,0,56,184H200a56,56,0,0,0,0-112ZM16,128a40,40,0,1,1,40,40A40,40,0,0,1,16,128Zm184,40a40,40,0,1,1,40-40A40,40,0,0,1,200,168Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M200,76a52,52,0,0,0-27.66,96H83.66A52,52,0,1,0,56,180H200a52,52,0,0,0,0-104ZM12,128a44,44,0,1,1,44,44A44.05,44.05,0,0,1,12,128Zm188,44a44,44,0,1,1,44-44A44.05,44.05,0,0,1,200,172Z" }))
  ]
]), Z = p((t, a) => /* @__PURE__ */ e.createElement(d, c(r({ ref: a }, t), { weights: H })));
Z.displayName = "Voicemail";
const s = Z;
export {
  s as default
};
