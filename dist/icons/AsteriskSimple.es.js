var L = Object.defineProperty, i = Object.defineProperties;
var o = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var E = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var r = (t, a, l) => a in t ? L(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[a] = l, m = (t, a) => {
  for (var l in a || (a = {}))
    E.call(a, l) && r(t, l, a[l]);
  if (n)
    for (var l of n(a))
      s.call(a, l) && r(t, l, a[l]);
  return t;
}, c = (t, a) => i(t, o(a));
import e, { forwardRef as d } from "react";
import A from "../lib/IconBase.es.js";
const h = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M212.45,107.14l-65.19,26.08,46.21,59.41a12,12,0,1,1-18.94,14.74L128,147.55,81.47,207.37a12,12,0,0,1-18.94-14.74l46.21-59.41L43.55,107.14a12,12,0,1,1,8.91-22.28L116,110.28V40a12,12,0,0,1,24,0v70.28l63.54-25.42a12,12,0,1,1,8.91,22.28Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M200,128a72,72,0,1,1-72-72A72,72,0,0,1,200,128Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M211,103.43l-70.13,28,49.47,63.61a8,8,0,1,1-12.63,9.82L128,141,78.32,204.91a8,8,0,0,1-12.63-9.82l49.47-63.61L45,103.43A8,8,0,0,1,51,88.57l69,27.61V40a8,8,0,0,1,16,0v76.18l69-27.61A8,8,0,1,1,211,103.43Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm59.15,87.35L141,131.12l33.13,39.76a8,8,0,0,1-12.3,10.24L128,140.5,94.15,181.12a8,8,0,0,1-12.3-10.24L115,131.12,68.85,111.35a8,8,0,1,1,6.3-14.7L120,115.87V70a8,8,0,0,1,16,0v45.87l44.85-19.22a8,8,0,1,1,6.3,14.7Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M210.23,101.57l-72.6,29,51.11,65.71a6,6,0,0,1-9.48,7.36L128,137.77,76.74,203.68a6,6,0,1,1-9.48-7.36l51.11-65.71-72.6-29a6,6,0,1,1,4.46-11.14L122,119.14V40a6,6,0,0,1,12,0v79.14l71.77-28.71a6,6,0,1,1,4.46,11.14Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M211,103.43l-70.13,28,49.47,63.61a8,8,0,1,1-12.63,9.82L128,141,78.32,204.91a8,8,0,0,1-12.63-9.82l49.47-63.61L45,103.43A8,8,0,0,1,51,88.57l69,27.61V40a8,8,0,0,1,16,0v76.18l69-27.61A8,8,0,1,1,211,103.43Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M209.48,99.71l-75.06,30,52.74,67.8a4,4,0,0,1-.71,5.62A3.93,3.93,0,0,1,184,204a4,4,0,0,1-3.16-1.54L128,134.52,75.16,202.46A4,4,0,0,1,72,204a4,4,0,0,1-2.45-.84,4,4,0,0,1-.71-5.62l52.74-67.8-75.06-30a4,4,0,1,1,3-7.42L124,122.09V40a4,4,0,0,1,8,0v82.09l74.51-29.8a4,4,0,1,1,3,7.42Z" }))
  ]
]), p = d((t, a) => /* @__PURE__ */ e.createElement(A, c(m({ ref: a }, t), { weights: h })));
p.displayName = "AsteriskSimple";
const Z = p;
export {
  Z as default
};
