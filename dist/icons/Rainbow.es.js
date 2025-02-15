var c = Object.defineProperty, Z = Object.defineProperties;
var A = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
var l = (t, e, v) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: v }) : t[e] = v, m = (t, e) => {
  for (var v in e || (e = {}))
    o.call(e, v) && l(t, v, e[v]);
  if (n)
    for (var v of n(e))
      E.call(e, v) && l(t, v, e[v]);
  return t;
}, r = (t, e) => Z(t, A(e));
import a, { forwardRef as p } from "react";
import M from "../lib/IconBase.es.js";
const d = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M256,172v8a12,12,0,0,1-24,0v-8a104,104,0,0,0-208,0v8a12,12,0,0,1-24,0v-8a128,128,0,0,1,256,0ZM128,140a36,36,0,0,0-36,36v4a12,12,0,0,0,24,0v-4a12,12,0,0,1,24,0v4a12,12,0,0,0,24,0v-4A36,36,0,0,0,128,140Zm0-48a84.09,84.09,0,0,0-84,84v4a12,12,0,0,0,24,0v-4a60,60,0,0,1,120,0v4a12,12,0,0,0,24,0v-4A84.09,84.09,0,0,0,128,92Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M240,168v16H176V168a48,48,0,0,0-96,0v16H16V168a112,112,0,0,1,224,0Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M184,168v16a8,8,0,0,1-16,0V168a40,40,0,0,0-80,0v16a8,8,0,0,1-16,0V168a56,56,0,0,1,112,0ZM128,80a88.1,88.1,0,0,0-88,88v16a8,8,0,0,0,16,0V168a72,72,0,0,1,144,0v16a8,8,0,0,0,16,0V168A88.1,88.1,0,0,0,128,80Zm0-32A120.13,120.13,0,0,0,8,168v16a8,8,0,0,0,16,0V168a104,104,0,0,1,208,0v16a8,8,0,0,0,16,0V168A120.13,120.13,0,0,0,128,48Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M128,48A120.13,120.13,0,0,0,8,168v16a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V168A120.13,120.13,0,0,0,128,48Zm32,128a8,8,0,0,1-8-8,24,24,0,0,0-48,0,8,8,0,0,1-16,0,40,40,0,0,1,80,0A8,8,0,0,1,160,176Zm32,0a8,8,0,0,1-8-8,56,56,0,0,0-112,0,8,8,0,0,1-16,0,72,72,0,0,1,144,0A8,8,0,0,1,192,176Zm32,0a8,8,0,0,1-8-8,88,88,0,0,0-176,0,8,8,0,0,1-16,0,104,104,0,0,1,208,0A8,8,0,0,1,224,176Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M182,168v16a6,6,0,0,1-12,0V168a42,42,0,0,0-84,0v16a6,6,0,0,1-12,0V168a54,54,0,0,1,108,0ZM128,82a86.1,86.1,0,0,0-86,86v16a6,6,0,0,0,12,0V168a74,74,0,0,1,148,0v16a6,6,0,0,0,12,0V168A86.1,86.1,0,0,0,128,82Zm0-32A118.13,118.13,0,0,0,10,168v16a6,6,0,0,0,12,0V168a106,106,0,0,1,212,0v16a6,6,0,0,0,12,0V168A118.13,118.13,0,0,0,128,50Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M184,168v16a8,8,0,0,1-16,0V168a40,40,0,0,0-80,0v16a8,8,0,0,1-16,0V168a56,56,0,0,1,112,0ZM128,80a88.1,88.1,0,0,0-88,88v16a8,8,0,0,0,16,0V168a72,72,0,0,1,144,0v16a8,8,0,0,0,16,0V168A88.1,88.1,0,0,0,128,80Zm0-32A120.13,120.13,0,0,0,8,168v16a8,8,0,0,0,16,0V168a104,104,0,0,1,208,0v16a8,8,0,0,0,16,0V168A120.13,120.13,0,0,0,128,48Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M180,168v16a4,4,0,0,1-8,0V168a44,44,0,0,0-88,0v16a4,4,0,0,1-8,0V168a52,52,0,0,1,104,0ZM128,84a84.09,84.09,0,0,0-84,84v16a4,4,0,0,0,8,0V168a76,76,0,0,1,152,0v16a4,4,0,0,0,8,0V168A84.09,84.09,0,0,0,128,84Zm0-32A116.13,116.13,0,0,0,12,168v16a4,4,0,0,0,8,0V168a108,108,0,0,1,216,0v16a4,4,0,0,0,8,0V168A116.13,116.13,0,0,0,128,52Z" }))
  ]
]), V = p((t, e) => /* @__PURE__ */ a.createElement(M, r(m({ ref: e }, t), { weights: d })));
V.displayName = "Rainbow";
const u = V;
export {
  u as default
};
