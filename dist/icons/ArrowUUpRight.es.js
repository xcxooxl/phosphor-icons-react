var o = Object.defineProperty, p = Object.defineProperties;
var H = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var E = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var n = (t, a, l) => a in t ? o(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[a] = l, m = (t, a) => {
  for (var l in a || (a = {}))
    E.call(a, l) && n(t, l, a[l]);
  if (r)
    for (var l of r(a))
      d.call(a, l) && n(t, l, a[l]);
  return t;
}, h = (t, a) => p(t, H(a));
import e, { forwardRef as g } from "react";
import i from "../lib/IconBase.es.js";
const A = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M167.51,127.51,195,100H88a44,44,0,0,0,0,88h88a12,12,0,0,1,0,24H88A68,68,0,0,1,88,76H195L167.51,48.49a12,12,0,1,1,17-17l48,48a12,12,0,0,1,0,17l-48,48a12,12,0,0,1-17-17Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M224,88l-48,48V40Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M172.94,143.39a8,8,0,0,0,8.72-1.73l48-48a8,8,0,0,0,0-11.32l-48-48A8,8,0,0,0,168,40V80H88a64,64,0,0,0,0,128h88a8,8,0,0,0,0-16H88a48,48,0,0,1,0-96h80v40A8,8,0,0,0,172.94,143.39ZM184,59.31,212.69,88,184,116.69Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M168,136V96H88a48,48,0,0,0,0,96h88a8,8,0,0,1,0,16H88A64,64,0,0,1,88,80h80V40a8,8,0,0,1,13.66-5.66l48,48a8,8,0,0,1,0,11.32l-48,48A8,8,0,0,1,168,136Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M171.76,131.76,209.51,94H88a50,50,0,0,0,0,100h88a6,6,0,0,1,0,12H88A62,62,0,0,1,88,82H209.51L171.76,44.24a6,6,0,0,1,8.48-8.48l48,48a6,6,0,0,1,0,8.48l-48,48a6,6,0,0,1-8.48-8.48Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M170.34,130.34,204.69,96H88a48,48,0,0,0,0,96h88a8,8,0,0,1,0,16H88A64,64,0,0,1,88,80H204.69L170.34,45.66a8,8,0,0,1,11.32-11.32l48,48a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32-11.32Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M173.17,133.17,214.34,92H88a52,52,0,0,0,0,104h88a4,4,0,0,1,0,8H88A60,60,0,0,1,88,84H214.34L173.17,42.83a4,4,0,0,1,5.66-5.66l48,48a4,4,0,0,1,0,5.66l-48,48a4,4,0,0,1-5.66-5.66Z" }))
  ]
]), c = g((t, a) => /* @__PURE__ */ e.createElement(i, h(m({ ref: a }, t), { weights: A })));
c.displayName = "ArrowUUpRight";
const s = c;
export {
  s as default
};
