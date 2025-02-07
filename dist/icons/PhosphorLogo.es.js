var h = Object.defineProperty, M = Object.defineProperties;
var H = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var m = (t, a, l) => a in t ? h(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[a] = l, r = (t, a) => {
  for (var l in a || (a = {}))
    c.call(a, l) && m(t, l, a[l]);
  if (n)
    for (var l of n(a))
      V.call(a, l) && m(t, l, a[l]);
  return t;
}, Z = (t, a) => M(t, H(a));
import e, { forwardRef as p } from "react";
import E from "../lib/IconBase.es.js";
const d = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M220,96a76.08,76.08,0,0,0-76-76H64A12,12,0,0,0,52,32V160a84.09,84.09,0,0,0,84,84,12,12,0,0,0,12-12V171.89A76.09,76.09,0,0,0,220,96ZM76,77.81,115.48,148H76Zm48,36.38L84.52,44H124ZM77.22,172H124v46.79A60.18,60.18,0,0,1,77.22,172ZM148,147.83V44.17a52,52,0,0,1,0,103.66Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
      "path",
      {
        d: "M208,96a64,64,0,0,1-64,64h-8V32h8A64,64,0,0,1,208,96ZM64,160h72L64,32Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ e.createElement("path", { d: "M144,24H64a8,8,0,0,0-8,8V160a80.09,80.09,0,0,0,80,80,8,8,0,0,0,8-8V168a72,72,0,0,0,0-144ZM72,62.54,122.32,152H72Zm56,161A64.14,64.14,0,0,1,72.51,168H128Zm0-94L77.68,40H128ZM144,152V40a56,56,0,0,1,0,112Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M144,24H64a8,8,0,0,0-8,8V160a80.09,80.09,0,0,0,80,80,8,8,0,0,0,8-8V168a72,72,0,0,0,0-144ZM128,223.5A64.14,64.14,0,0,1,72.51,168H128Zm0-94L77.68,40H128ZM144,152V40a56,56,0,0,1,0,112Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M144,26H64a6,6,0,0,0-6,6V160a78.09,78.09,0,0,0,78,78,6,6,0,0,0,6-6V166h2a70,70,0,0,0,0-140ZM70,54.91,125.74,154H70Zm60,82.19L74.26,38H130ZM70.28,166H130v59.73A66.1,66.1,0,0,1,70.28,166ZM144,154h-2V38h2a58,58,0,0,1,0,116Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M144,24H64a8,8,0,0,0-8,8V160a80.09,80.09,0,0,0,80,80,8,8,0,0,0,8-8V168a72,72,0,0,0,0-144ZM72,62.54,122.32,152H72Zm56,66.92L77.68,40H128ZM72.51,168H128v55.5A64.14,64.14,0,0,1,72.51,168ZM144,152V40a56,56,0,0,1,0,112Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M144,28H64a4,4,0,0,0-4,4V160a76.08,76.08,0,0,0,76,76,4,4,0,0,0,4-4V164h4a68,68,0,0,0,0-136ZM68,47.27,129.16,156H68Zm64,97.46L70.84,36H132ZM68.13,164H132v63.88A68.1,68.1,0,0,1,68.13,164ZM144,156h-4V36h4a60,60,0,0,1,0,120Z" }))
  ]
]), o = p((t, a) => /* @__PURE__ */ e.createElement(E, Z(r({ ref: a }, t), { weights: d })));
o.displayName = "PhosphorLogo";
const u = o;
export {
  u as default
};
