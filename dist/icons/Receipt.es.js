var H = Object.defineProperty, Z = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var L = (l, e, t) => e in l ? H(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, n = (l, e) => {
  for (var t in e || (e = {}))
    h.call(e, t) && L(l, t, e[t]);
  if (m)
    for (var t of m(e))
      V.call(e, t) && L(l, t, e[t]);
  return l;
}, r = (l, e) => Z(l, c(e));
import a, { forwardRef as p } from "react";
import o from "../lib/IconBase.es.js";
const E = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M68,100A12,12,0,0,1,80,88h96a12,12,0,0,1,0,24H80A12,12,0,0,1,68,100Zm12,52h96a12,12,0,0,0,0-24H80a12,12,0,0,0,0,24ZM236,56V208a12,12,0,0,1-17.37,10.73L192,205.42l-26.63,13.31a12,12,0,0,1-10.74,0L128,205.42l-26.63,13.31a12,12,0,0,1-10.74,0L64,205.42,37.37,218.73A12,12,0,0,1,20,208V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V188.58l14.63-7.31a12,12,0,0,1,10.74,0L96,194.58l26.63-13.31a12,12,0,0,1,10.74,0L160,194.58l26.63-13.31a12,12,0,0,1,10.74,0L212,188.58Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M224,56V208l-32-16-32,16-32-16L96,208,64,192,32,208V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M72,104a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,104Zm8,40h96a8,8,0,0,0,0-16H80a8,8,0,0,0,0,16ZM232,56V208a8,8,0,0,1-11.58,7.15L192,200.94l-28.42,14.21a8,8,0,0,1-7.16,0L128,200.94,99.58,215.15a8,8,0,0,1-7.16,0L64,200.94,35.58,215.15A8,8,0,0,1,24,208V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Zm-16,0H40V195.06l20.42-10.22a8,8,0,0,1,7.16,0L96,199.06l28.42-14.22a8,8,0,0,1,7.16,0L160,199.06l28.42-14.22a8,8,0,0,1,7.16,0L216,195.06Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V208a8,8,0,0,0,11.58,7.15L64,200.94l28.42,14.21a8,8,0,0,0,7.16,0L128,200.94l28.42,14.21a8,8,0,0,0,7.16,0L192,200.94l28.42,14.21A8,8,0,0,0,232,208V56A16,16,0,0,0,216,40ZM176,144H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-32H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M182,104a6,6,0,0,1-6,6H80a6,6,0,0,1,0-12h96A6,6,0,0,1,182,104Zm-6,26H80a6,6,0,0,0,0,12h96a6,6,0,0,0,0-12Zm54-74V208a6,6,0,0,1-2.85,5.1,5.93,5.93,0,0,1-3.15.9,6,6,0,0,1-2.68-.63L192,198.71l-29.32,14.66a6,6,0,0,1-5.36,0L128,198.71,98.68,213.37a6,6,0,0,1-5.36,0L64,198.71,34.68,213.37A6,6,0,0,1,26,208V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V198.29l23.32-11.66a6,6,0,0,1,5.36,0L96,201.29l29.32-14.66a6,6,0,0,1,5.36,0L160,201.29l29.32-14.66a6,6,0,0,1,5.36,0L218,198.29Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M72,104a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,104Zm8,40h96a8,8,0,0,0,0-16H80a8,8,0,0,0,0,16ZM232,56V208a8,8,0,0,1-11.58,7.15L192,200.94l-28.42,14.21a8,8,0,0,1-7.16,0L128,200.94,99.58,215.15a8,8,0,0,1-7.16,0L64,200.94,35.58,215.15A8,8,0,0,1,24,208V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Zm-16,0H40V195.06l20.42-10.22a8,8,0,0,1,7.16,0L96,199.06l28.42-14.22a8,8,0,0,1,7.16,0L160,199.06l28.42-14.22a8,8,0,0,1,7.16,0L216,195.06Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M180,104a4,4,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4,4,0,0,1,180,104Zm-4,28H80a4,4,0,0,0,0,8h96a4,4,0,0,0,0-8Zm52-76V208a4,4,0,0,1-4,4,4.05,4.05,0,0,1-1.79-.42L192,196.47l-30.21,15.11a4,4,0,0,1-3.58,0L128,196.47,97.79,211.58a4,4,0,0,1-3.58,0L64,196.47,33.79,211.58A4,4,0,0,1,28,208V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V201.53l26.21-13.11a4,4,0,0,1,3.58,0L96,203.53l30.21-15.11a4,4,0,0,1,3.58,0L160,203.53l30.21-15.11a4,4,0,0,1,3.58,0L220,201.53Z" }))
  ]
]), A = p((l, e) => /* @__PURE__ */ a.createElement(o, r(n({ ref: e }, l), { weights: E })));
A.displayName = "Receipt";
const g = A;
export {
  g as default
};
