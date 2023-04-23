var A = Object.defineProperty, M = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
var c = (l, e, t) => e in l ? A(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, m = (l, e) => {
  for (var t in e || (e = {}))
    o.call(e, t) && c(l, t, e[t]);
  if (n)
    for (var t of n(e))
      E.call(e, t) && c(l, t, e[t]);
  return l;
}, Z = (l, e) => M(l, h(e));
import a, { forwardRef as p } from "react";
import d from "../lib/IconBase.es.js";
const L = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M232.49,215.52l-44-44a64,64,0,0,0,35.59-81,12,12,0,0,0-15.38-7.17l-35.61,13A64,64,0,0,0,90.59,15.89a12,12,0,0,0-7.17,15.38l13,35.61a64,64,0,0,0-80.49,82.55,12,12,0,0,0,15.38,7.17l35.61-13a63.94,63.94,0,0,0,82.55,80.49,12,12,0,0,0,7.17-15.38l-12.95-35.59a63.53,63.53,0,0,0,15.7,3.16l56.17,56.17a12,12,0,0,0,17-17ZM129.38,39.78a40,40,0,0,1,7.43,68L110.7,36.05A39.81,39.81,0,0,1,129.38,39.78ZM36.05,129.32a40,40,0,0,1,71.75-26.11Zm74.59,70.92a40,40,0,0,1-7.43-68L129.32,204A39.83,39.83,0,0,1,110.64,200.24Zm36.45-51.51a39.86,39.86,0,0,1-14.87-11.92L204,110.7a40,40,0,0,1-56.88,38Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M124.88,109.74,27.15,145.33a52,52,0,1,1,97.73-35.59Zm88-15.07-97.73,35.59a52,52,0,1,0,97.73-35.59Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M229.66,218.34l-48.42-48.41c1.1-.33,2.19-.68,3.27-1.07A60,60,0,0,0,220.37,92a8,8,0,0,0-10.25-4.78l-44.2,16.08c.32-.62.64-1.24.93-1.88A60,60,0,0,0,92,19.65,8,8,0,0,0,87.18,29.9l16.08,44.2c-.62-.32-1.24-.64-1.88-.93a60,60,0,0,0-81.73,74.89,8,8,0,0,0,10.25,4.78l44.2-16.09c-.32.63-.64,1.25-.93,1.89a60,60,0,0,0,74.89,81.73,8,8,0,0,0,4.78-10.25l-16.09-44.2c.63.32,1.25.64,1.89.93a59.87,59.87,0,0,0,22.48,5.58l57.22,57.23a8,8,0,0,0,11.32-11.32ZM131.07,36.15A44,44,0,0,1,134.8,114L105.19,32.63A43.63,43.63,0,0,1,131.07,36.15ZM32.63,134.82A44,44,0,0,1,114,105.22ZM109,203.87a44,44,0,0,1-3.73-77.81l29.6,81.33A43.6,43.6,0,0,1,109,203.87Zm55.56-47.38h-.11a44.14,44.14,0,0,1-38.34-21.69l81.33-29.61a44.06,44.06,0,0,1-42.88,51.3Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M229.66,218.34l-48.42-48.41c1.1-.33,2.19-.68,3.27-1.07A60,60,0,0,0,220.37,92a8,8,0,0,0-10.25-4.78l-44.2,16.08c.32-.62.64-1.24.93-1.88A60,60,0,0,0,92,19.65,8,8,0,0,0,87.18,29.9l16.09,44.22c-.63-.32-1.25-.65-1.89-1a60,60,0,0,0-81.73,74.89,8,8,0,0,0,10.25,4.78l44.2-16.09c-.32.63-.64,1.25-.93,1.89a60,60,0,0,0,74.89,81.73,8,8,0,0,0,4.78-10.25l-16.08-44.18c.62.31,1.24.62,1.88.91a59.87,59.87,0,0,0,22.48,5.58l57.22,57.23a8,8,0,0,0,11.32-11.32ZM109,203.87a44,44,0,0,1-3.73-77.81l29.6,81.33A43.6,43.6,0,0,1,109,203.87Zm43.4-109.25A43.77,43.77,0,0,1,134.8,114L105.19,32.63a44,44,0,0,1,47.16,62Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M228.24,219.76,177.38,168.9a60.19,60.19,0,0,0,6.45-1.92,58,58,0,0,0,34.66-74.34,6,6,0,0,0-7.69-3.58L161.5,107a60.16,60.16,0,0,0,3.54-6.46,58,58,0,0,0-72.4-79,6,6,0,0,0-3.58,7.69L107,78.52A60.16,60.16,0,0,0,100.54,75a58,58,0,0,0-79,72.4,6,6,0,0,0,3.1,3.38,6,6,0,0,0,4.59.2L78.52,133A58.3,58.3,0,0,0,75,139.48,58.06,58.06,0,0,0,127.5,222a58.25,58.25,0,0,0,19.88-3.53A6,6,0,0,0,151,210.8L133,161.5A57.8,57.8,0,0,0,162,170.45l57.79,57.79a6,6,0,0,0,8.48-8.48ZM102.52,31.11a46,46,0,0,1,31.2,85.72ZM31.11,137.5a46,46,0,0,1,85.72-31.2ZM137.5,208.9a46,46,0,0,1-31.2-85.72Zm26.95-50.41a46.07,46.07,0,0,1-41.27-24.77l85.72-31.2a46.06,46.06,0,0,1-44.39,56Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M229.66,218.34l-48.42-48.41c1.1-.33,2.19-.68,3.27-1.07A60,60,0,0,0,220.37,92a8,8,0,0,0-10.25-4.78l-44.2,16.08c.32-.62.64-1.24.93-1.88A60,60,0,0,0,92,19.65,8,8,0,0,0,87.18,29.9l16.08,44.2c-.62-.32-1.24-.64-1.88-.93a60,60,0,0,0-81.73,74.89,8,8,0,0,0,10.25,4.78l44.2-16.09c-.32.63-.64,1.25-.93,1.89a60,60,0,0,0,74.89,81.73,8,8,0,0,0,4.78-10.25l-16.09-44.2c.63.32,1.25.64,1.89.93a59.87,59.87,0,0,0,22.48,5.58l57.22,57.23a8,8,0,0,0,11.32-11.32ZM131.07,36.15A44,44,0,0,1,134.8,114L105.19,32.63A43.63,43.63,0,0,1,131.07,36.15ZM32.63,134.82A44,44,0,0,1,114,105.22ZM109,203.87a44,44,0,0,1-3.73-77.81l29.6,81.33A43.6,43.6,0,0,1,109,203.87Zm55.56-47.38h-.11a44.14,44.14,0,0,1-38.34-21.69l81.33-29.61a44.06,44.06,0,0,1-42.88,51.3Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M226.83,221.17,173.35,167.7a56.83,56.83,0,0,0,9.79-2.6,56,56,0,0,0,33.47-71.77,4,4,0,0,0-5.13-2.39l-55.31,20.13a56.78,56.78,0,0,0,7.06-11.38,56,56,0,0,0-69.9-76.28,4,4,0,0,0-2.39,5.12l20.13,55.32a56.33,56.33,0,0,0-11.38-7.06,56,56,0,0,0-76.28,69.9A4,4,0,0,0,25.47,149a4,4,0,0,0,3.06.13L83.85,129a56,56,0,0,0,62.84,87.66,4,4,0,0,0,2.39-5.13L129,156.17a56.5,56.5,0,0,0,11.38,7.06,55.88,55.88,0,0,0,22.48,5.24l58.36,58.36a4,4,0,0,0,5.66-5.66ZM99.88,29.71a48,48,0,0,1,32.72,89.9Zm25.21,92.67-7.45,2.71-2.72-7.45,7.46-2.72ZM29.71,140.14a48,48,0,0,1,89.9-32.72Zm110.43,70.17a48,48,0,0,1-32.72-89.9Zm24.29-49.82a48.08,48.08,0,0,1-44-27.89l89.9-32.72a48,48,0,0,1-45.79,60.61Z" }))
  ]
]), r = p((l, e) => /* @__PURE__ */ a.createElement(d, Z(m({ ref: e }, l), { weights: L })));
r.displayName = "Pinwheel";
const s = r;
export {
  s as default
};
