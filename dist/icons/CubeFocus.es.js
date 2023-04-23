var n = Object.defineProperty, A = Object.defineProperties;
var r = Object.getOwnPropertyDescriptors;
var V = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var Z = (l, e, t) => e in l ? n(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, m = (l, e) => {
  for (var t in e || (e = {}))
    v.call(e, t) && Z(l, t, e[t]);
  if (V)
    for (var t of V(e))
      c.call(e, t) && Z(l, t, e[t]);
  return l;
}, H = (l, e) => A(l, r(e));
import a, { forwardRef as h } from "react";
import L from "../lib/IconBase.es.js";
const o = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M196,157.43V98.57a17,17,0,0,0-8.42-14.71L136.24,54.21a16.55,16.55,0,0,0-16.48,0L68.43,83.86A17,17,0,0,0,60,98.57v58.86a17,17,0,0,0,8.42,14.71l51.34,29.65a16.53,16.53,0,0,0,16.48,0l51.33-29.65A17,17,0,0,0,196,157.43ZM128,77.17,160.59,96,128,114.81,95.41,96Zm-44,40,32,18.48v36.3L84,153.42Zm56,54.78V135.6l32-18.48v36.3ZM236,48V88a12,12,0,0,1-24,0V60H184a12,12,0,0,1,0-24h40A12,12,0,0,1,236,48ZM84,208a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V168a12,12,0,0,1,24,0v28H72A12,12,0,0,1,84,208Zm152-40v40a12,12,0,0,1-12,12H184a12,12,0,0,1,0-24h28V168a12,12,0,0,1,24,0ZM20,88V48A12,12,0,0,1,32,36H72a12,12,0,0,1,0,24H44V88a12,12,0,0,1-24,0Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M184,98.57v58.86a5,5,0,0,1-2.43,4.32L130.24,191.4a4.48,4.48,0,0,1-4.48,0L74.43,161.75A5,5,0,0,1,72,157.43V98.57a5,5,0,0,1,2.43-4.32L125.76,64.6a4.48,4.48,0,0,1,4.48,0l51.33,29.65A5,5,0,0,1,184,98.57Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M192,157.43V98.57a13,13,0,0,0-6.42-11.24L134.24,57.68a12.48,12.48,0,0,0-12.48,0L70.43,87.33A13,13,0,0,0,64,98.57v58.86a13,13,0,0,0,6.42,11.24l51.34,29.65a12.49,12.49,0,0,0,12.48,0l51.33-29.65A13,13,0,0,0,192,157.43ZM128,72.55,168.59,96,128,119.43,87.41,96ZM80,110.19l40,23.1v45.54l-40-23.1Zm56,68.64V133.29l40-23.1v45.54ZM232,48V88a8,8,0,0,1-16,0V56H184a8,8,0,0,1,0-16h40A8,8,0,0,1,232,48ZM80,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V168a8,8,0,0,1,16,0v32H72A8,8,0,0,1,80,208Zm152-40v40a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16h32V168a8,8,0,0,1,16,0ZM24,88V48a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H40V88a8,8,0,0,1-16,0Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M178.59,90.22,128,119.43,77.41,90.22a4,4,0,0,1,0-6.93l44.35-25.61a12.48,12.48,0,0,1,12.48,0l44.35,25.61A4,4,0,0,1,178.59,90.22ZM64,107.88v49.55a13,13,0,0,0,6.42,11.24L114,193.84a4,4,0,0,0,6-3.46V133.29L70,104.42A4,4,0,0,0,64,107.88Zm128,49.55V107.88a4,4,0,0,0-6-3.46l-50,28.87v57.09a4,4,0,0,0,6,3.46l43.57-25.17A13,13,0,0,0,192,157.43ZM224,40H184a8,8,0,0,0,0,16h32V88a8,8,0,0,0,16,0V48A8,8,0,0,0,224,40ZM72,200H40V168a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H72a8,8,0,0,0,0-16Zm152-40a8,8,0,0,0-8,8v32H184a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,224,160ZM32,96a8,8,0,0,0,8-8V56H72a8,8,0,0,0,0-16H32a8,8,0,0,0-8,8V88A8,8,0,0,0,32,96Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M190,157.43V98.57a11,11,0,0,0-5.42-9.51L133.24,59.41a10.49,10.49,0,0,0-10.48,0L71.43,89.06A11,11,0,0,0,66,98.57v58.86a11,11,0,0,0,5.42,9.51l51.34,29.65a10.51,10.51,0,0,0,10.48,0l51.33-29.65A11,11,0,0,0,190,157.43ZM128,70.24,172.59,96,128,121.74,83.41,96ZM78,106.73l44,25.4V182.3L78,156.88Zm56,75.57V132.13l44-25.4v50.15ZM230,48V88a6,6,0,0,1-12,0V54H184a6,6,0,0,1,0-12h40A6,6,0,0,1,230,48ZM78,208a6,6,0,0,1-6,6H32a6,6,0,0,1-6-6V168a6,6,0,0,1,12,0v34H72A6,6,0,0,1,78,208Zm152-40v40a6,6,0,0,1-6,6H184a6,6,0,0,1,0-12h34V168a6,6,0,0,1,12,0ZM26,88V48a6,6,0,0,1,6-6H72a6,6,0,0,1,0,12H38V88a6,6,0,0,1-12,0Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M192,157.43V98.57a13,13,0,0,0-6.42-11.24L134.24,57.68a12.48,12.48,0,0,0-12.48,0L70.43,87.33A13,13,0,0,0,64,98.57v58.86a13,13,0,0,0,6.42,11.24l51.34,29.65a12.49,12.49,0,0,0,12.48,0l51.33-29.65A13,13,0,0,0,192,157.43ZM128,72.55,168.59,96,128,119.43,87.41,96ZM80,110.19l40,23.1v45.54l-40-23.1Zm56,68.64V133.29l40-23.1v45.54ZM232,48V88a8,8,0,0,1-16,0V56H184a8,8,0,0,1,0-16h40A8,8,0,0,1,232,48ZM80,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V168a8,8,0,0,1,16,0v32H72A8,8,0,0,1,80,208Zm152-40v40a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16h32V168a8,8,0,0,1,16,0ZM24,88V48a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H40V88a8,8,0,0,1-16,0Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M188,157.43V98.57a9,9,0,0,0-4.42-7.78L132.24,61.14a8.5,8.5,0,0,0-8.48,0L72.43,90.79A9,9,0,0,0,68,98.57v58.86a9,9,0,0,0,4.42,7.78l51.34,29.65a8.52,8.52,0,0,0,8.48,0l51.33-29.65A9,9,0,0,0,188,157.43ZM127.76,68.07a.45.45,0,0,1,.48,0L176.59,96,128,124.05,79.41,96ZM76.43,158.28a1,1,0,0,1-.43-.85V103.26L124,131v54.78Zm103.14,0L132,185.76V131l48-27.72v54.17A1,1,0,0,1,179.57,158.28ZM228,48V88a4,4,0,0,1-8,0V52H184a4,4,0,0,1,0-8h40A4,4,0,0,1,228,48ZM76,208a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V168a4,4,0,0,1,8,0v36H72A4,4,0,0,1,76,208Zm152-40v40a4,4,0,0,1-4,4H184a4,4,0,0,1,0-8h36V168a4,4,0,0,1,8,0ZM28,88V48a4,4,0,0,1,4-4H72a4,4,0,0,1,0,8H36V88a4,4,0,0,1-8,0Z" }))
  ]
]), M = h((l, e) => /* @__PURE__ */ a.createElement(L, H(m({ ref: e }, l), { weights: o })));
M.displayName = "CubeFocus";
const d = M;
export {
  d as default
};
