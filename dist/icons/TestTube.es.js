var M = Object.defineProperty, Z = Object.defineProperties;
var o = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var E = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (l, a, t) => a in l ? M(l, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[a] = t, r = (l, a) => {
  for (var t in a || (a = {}))
    E.call(a, t) && c(l, t, a[t]);
  if (n)
    for (var t of n(a))
      p.call(a, t) && c(l, t, a[t]);
  return l;
}, m = (l, a) => Z(l, o(a));
import e, { forwardRef as d } from "react";
import u from "../lib/IconBase.es.js";
const h = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M240.49,83.51l-60-60a12,12,0,0,0-17,0L34.28,152.75a48.77,48.77,0,0,0,69,69L214.48,110.49l21.31-7.11a12,12,0,0,0,4.7-19.87ZM86.28,204.75a24.77,24.77,0,0,1-35-35l28.13-28.13c7.73-2.41,19.58-3,35.06,5a83.94,83.94,0,0,0,21.95,8ZM204.2,88.62a12.15,12.15,0,0,0-4.69,2.89l-38.89,38.9c-7.73,2.41-19.58,3-35.06-5a83.94,83.94,0,0,0-21.94-8L172,49l37.79,37.79Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
      "path",
      {
        d: "M167.18,140.82,94.77,213.23a36.77,36.77,0,0,1-52,0h0a36.77,36.77,0,0,1,0-52l30-30c9.37-3.65,25.78-6.36,47.18,4.82S157.81,144.47,167.18,140.82Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ e.createElement("path", { d: "M237.66,86.34l-60-60a8,8,0,0,0-11.32,0L37.11,155.57a44.77,44.77,0,0,0,63.32,63.32L212.32,107l22.21-7.4a8,8,0,0,0,3.13-13.25ZM89.11,207.57a28.77,28.77,0,0,1-40.68-40.68l28.8-28.8c8.47-2.9,21.75-4,39.07,5,10.6,5.54,20.18,8,28.56,8.73ZM205.47,92.41a8,8,0,0,0-3.13,1.93l-39.57,39.57c-8.47,2.9-21.75,4-39.07-5-10.6-5.54-20.18-8-28.56-8.73L172,43.31,217.19,88.5Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M237.66,86.34l-60-60a8,8,0,0,0-11.32,0L37.11,155.57a44.77,44.77,0,0,0,63.32,63.32L212.32,107l22.21-7.4a8,8,0,0,0,3.13-13.25Zm-32.19,6.07a8,8,0,0,0-3.13,1.93l-39.57,39.57c-8.47,2.9-21.75,4-39.07-5-10.6-5.54-20.18-8-28.56-8.73L172,43.31,217.19,88.5Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M236.24,87.76l-60-60a6,6,0,0,0-8.48,0L38.53,157A42.77,42.77,0,1,0,99,217.47L211.24,105.24l22.66-7.55a6,6,0,0,0,2.34-9.93ZM90.53,209A30.77,30.77,0,1,1,47,165.47l29.13-29.12c8.84-3.14,22.84-4.56,41.08,5,12.28,6.41,23.13,8.66,32.27,8.71ZM206.1,94.31a6,6,0,0,0-2.34,1.45l-39.9,39.89c-8.84,3.14-22.84,4.56-41.08-5C110.5,124.27,99.65,122,90.51,122L172,40.49l48.89,48.89Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M237.66,86.34l-60-60a8,8,0,0,0-11.32,0L37.11,155.57a44.77,44.77,0,0,0,63.32,63.32L212.32,107l22.21-7.4a8,8,0,0,0,3.13-13.25ZM89.11,207.57a28.77,28.77,0,0,1-40.68-40.68l28.8-28.8c8.47-2.9,21.75-4,39.07,5,10.6,5.54,20.18,8,28.56,8.73ZM205.47,92.41a8,8,0,0,0-3.13,1.93l-39.57,39.57c-8.47,2.9-21.75,4-39.07-5-10.6-5.54-20.18-8-28.56-8.73L172,43.31,217.19,88.5Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M234.83,89.18l-60-60a4,4,0,0,0-5.66,0L39.94,158.41A40.78,40.78,0,0,0,97.6,216.08L210.16,103.5l23.1-7.7a4,4,0,0,0,1.57-6.62ZM91.94,210.42A32.77,32.77,0,1,1,45.6,164.07L75,134.63c9.2-3.38,23.94-5.08,43.11,4.93,12.09,6.31,22.74,8.48,31.66,8.48,1.64,0,3.2-.09,4.73-.22ZM206.74,96.21a4.06,4.06,0,0,0-1.57,1L165,137.39c-9.2,3.38-23.94,5.08-43.11-4.93-14.3-7.47-26.58-9.13-36.38-8.27L172,37.66l52.6,52.6Z" }))
  ]
]), L = d((l, a) => /* @__PURE__ */ e.createElement(u, m(r({ ref: a }, l), { weights: h })));
L.displayName = "TestTube";
const f = L;
export {
  f as default
};
