var Z = Object.defineProperty, M = Object.defineProperties;
var L = Object.getOwnPropertyDescriptors;
var A = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var n = (t, a, l) => a in t ? Z(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[a] = l, r = (t, a) => {
  for (var l in a || (a = {}))
    v.call(a, l) && n(t, l, a[l]);
  if (A)
    for (var l of A(a))
      i.call(a, l) && n(t, l, a[l]);
  return t;
}, c = (t, a) => M(t, L(a));
import e, { forwardRef as o } from "react";
import E from "../lib/IconBase.es.js";
const h = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M93.82,116.64A12,12,0,0,0,100,106.15V40.74A12,12,0,0,0,83,29.83,108.26,108.26,0,0,0,20,128c0,3.37.16,6.76.47,10.1a12,12,0,0,0,17.76,9.38ZM76,62.06v37L44.81,116.36A84.39,84.39,0,0,1,76,62.06Zm145.88,12.6c-.11-.24-.24-.47-.37-.7s-.26-.43-.4-.63A108.05,108.05,0,0,0,128,20a12,12,0,0,0-12,12v89.53L39.18,166.27a12,12,0,0,0-4.3,16.46A108,108,0,0,0,236,128,107.22,107.22,0,0,0,221.88,74.66ZM140,44.85a84.08,84.08,0,0,1,54,31.24l-54,31.46ZM128,212a84.47,84.47,0,0,1-65.57-31.5l71.42-41.6.36-.2L206,96.87A84,84,0,0,1,128,212Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M96,37.5v72l-62.4,36A96,96,0,0,1,96,37.5Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M100,116.43a8,8,0,0,0,4-6.93v-72A8,8,0,0,0,93.34,30,104.06,104.06,0,0,0,25.73,147a8,8,0,0,0,4.52,5.81,7.86,7.86,0,0,0,3.35.74,8,8,0,0,0,4-1.07ZM88,49.62v55.26L40.12,132.51C40,131,40,129.48,40,128A88.12,88.12,0,0,1,88,49.62Zm130.34,26.9c-.09-.18-.18-.37-.29-.55s-.2-.33-.31-.49A104.05,104.05,0,0,0,128,24a8,8,0,0,0-8,8v91.83l-78.81,45.9a8,8,0,0,0-2.87,11A104,104,0,0,0,232,128,103.34,103.34,0,0,0,218.34,76.52ZM136,40.36A88.05,88.05,0,0,1,199.89,77.3L136,114.51ZM128,216a88.45,88.45,0,0,1-71.49-36.68l75.4-43.91.22-.14L207.9,91.14A88,88,0,0,1,128,216Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M100,116.43a8,8,0,0,0,4-6.93v-72A8,8,0,0,0,93.34,30,104.06,104.06,0,0,0,25.73,147a8,8,0,0,0,4.52,5.81,7.86,7.86,0,0,0,3.35.74,8,8,0,0,0,4-1.07ZM88,49.62v55.26L40.12,132.51C40,131,40,129.48,40,128A88.12,88.12,0,0,1,88,49.62ZM232,128A104,104,0,0,1,38.32,180.7a8,8,0,0,1,2.87-11L120,123.83V32a8,8,0,0,1,8-8,104.05,104.05,0,0,1,89.74,51.48c.11.16.21.32.31.49s.2.37.29.55A103.34,103.34,0,0,1,232,128Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M102,109.5v-72a6,6,0,0,0-8-5.66A102,102,0,0,0,27.7,146.59a6,6,0,0,0,8.9,4.11l62.4-36A6,6,0,0,0,102,109.5ZM90,106l-51.66,29.8Q38,131.91,38,128A90.1,90.1,0,0,1,90,46.42ZM216.57,77.45c-.08-.16-.16-.32-.25-.47a3,3,0,0,0-.27-.42A102,102,0,0,0,128,26a6,6,0,0,0-6,6v93L42.2,171.46a6,6,0,0,0-2.15,8.22A102,102,0,0,0,230,128,101.41,101.41,0,0,0,216.57,77.45ZM134,38.2a90,90,0,0,1,68.76,39.74L134,118ZM128,218a90.48,90.48,0,0,1-74.38-39.31l77.31-45,.17-.1,77.67-45.24A90,90,0,0,1,128,218Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M100,116.43a8,8,0,0,0,4-6.93v-72A8,8,0,0,0,93.34,30,104.06,104.06,0,0,0,25.73,147a8,8,0,0,0,4.52,5.81,7.86,7.86,0,0,0,3.35.74,8,8,0,0,0,4-1.07ZM88,49.62v55.26L40.12,132.51C40,131,40,129.48,40,128A88.12,88.12,0,0,1,88,49.62Zm130.34,26.9c-.09-.18-.18-.37-.29-.55s-.2-.33-.31-.49A104.05,104.05,0,0,0,128,24a8,8,0,0,0-8,8v91.83l-78.81,45.9a8,8,0,0,0-2.87,11A104,104,0,0,0,232,128,103.34,103.34,0,0,0,218.34,76.52ZM136,40.36A88.05,88.05,0,0,1,199.89,77.3L136,114.51ZM128,216a88.45,88.45,0,0,1-71.49-36.68l75.4-43.91.22-.14L207.9,91.14A88,88,0,0,1,128,216Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M100,109.5v-72a4,4,0,0,0-5.33-3.77,100,100,0,0,0-65,112.5A4,4,0,0,0,35.6,149L98,113A4,4,0,0,0,100,109.5Zm-8-2.31L36.67,139.11A92,92,0,0,1,92,43.34ZM214.79,78.36c-.06-.13-.12-.25-.19-.37s-.15-.23-.22-.34A100.07,100.07,0,0,0,128,28a4,4,0,0,0-4,4v94.12L43.2,173.18a4,4,0,0,0-1.43,5.49A100,100,0,0,0,228,128,99.42,99.42,0,0,0,214.79,78.36ZM132,36.09A92.05,92.05,0,0,1,205.59,78.6L132,121.46ZM128,220a92.47,92.47,0,0,1-77.22-42L130,131.91l.1-.06L209.6,85.53A92,92,0,0,1,128,220Z" }))
  ]
]), m = o((t, a) => /* @__PURE__ */ e.createElement(E, c(r({ ref: a }, t), { weights: h })));
m.displayName = "ChartPieSlice";
const g = m;
export {
  g as default
};
