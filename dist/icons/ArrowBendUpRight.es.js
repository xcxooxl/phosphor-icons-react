var o = Object.defineProperty, A = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
var r = (a, t, l) => t in a ? o(a, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[t] = l, m = (a, t) => {
  for (var l in t || (t = {}))
    d.call(t, l) && r(a, l, t[l]);
  if (n)
    for (var l of n(t))
      E.call(t, l) && r(a, l, t[l]);
  return a;
}, c = (a, t) => A(a, p(t));
import e, { forwardRef as g } from "react";
import i from "../lib/IconBase.es.js";
const u = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M232.49,112.49l-48,48a12,12,0,0,1-17-17L195,116H128a84.09,84.09,0,0,0-84,84,12,12,0,0,1-24,0A108.12,108.12,0,0,1,128,92h67L167.51,64.48a12,12,0,0,1,17-17l48,48A12,12,0,0,1,232.49,112.49Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M224,104l-48,48V56Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M229.66,98.34l-48-48A8,8,0,0,0,168,56V96H128A104.11,104.11,0,0,0,24,200a8,8,0,0,0,16,0,88.1,88.1,0,0,1,88-88h40v40a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,229.66,98.34ZM184,132.69V75.31L212.69,104Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M229.66,109.66l-48,48A8,8,0,0,1,168,152V112H128a88.1,88.1,0,0,0-88,88,8,8,0,0,1-16,0A104.11,104.11,0,0,1,128,96h40V56a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,229.66,109.66Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M228.24,108.24l-48,48a6,6,0,0,1-8.48-8.48L209.51,110H128a90.1,90.1,0,0,0-90,90,6,6,0,0,1-12,0A102.12,102.12,0,0,1,128,98h81.51L171.76,60.24a6,6,0,0,1,8.48-8.48l48,48A6,6,0,0,1,228.24,108.24Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L204.69,112H128a88.1,88.1,0,0,0-88,88,8,8,0,0,1-16,0A104.11,104.11,0,0,1,128,96h76.69L170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M226.83,106.83l-48,48a4,4,0,0,1-5.66-5.66L214.34,108H128a92.1,92.1,0,0,0-92,92,4,4,0,0,1-8,0A100.11,100.11,0,0,1,128,100h86.34L173.17,58.83a4,4,0,0,1,5.66-5.66l48,48A4,4,0,0,1,226.83,106.83Z" }))
  ]
]), h = g((a, t) => /* @__PURE__ */ e.createElement(i, c(m({ ref: t }, a), { weights: u })));
h.displayName = "ArrowBendUpRight";
const s = h;
export {
  s as default
};
