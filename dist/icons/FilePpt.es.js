var v = Object.defineProperty, V = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var H = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
var m = (t, e, h) => e in t ? v(t, e, { enumerable: !0, configurable: !0, writable: !0, value: h }) : t[e] = h, A = (t, e) => {
  for (var h in e || (e = {}))
    r.call(e, h) && m(t, h, e[h]);
  if (H)
    for (var h of H(e))
      M.call(e, h) && m(t, h, e[h]);
  return t;
}, Z = (t, e) => V(t, n(e));
import a, { forwardRef as c } from "react";
import p from "../lib/IconBase.es.js";
const o = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M232,152a12,12,0,0,1-12,12h-8v44a12,12,0,0,1-24,0V164h-8a12,12,0,0,1,0-24h40A12,12,0,0,1,232,152ZM92,172a32,32,0,0,1-32,32H56v4a12,12,0,0,1-24,0V152a12,12,0,0,1,12-12H60A32,32,0,0,1,92,172Zm-24,0a8,8,0,0,0-8-8H56v16h4A8,8,0,0,0,68,172Zm96,0a32,32,0,0,1-32,32h-4v4a12,12,0,0,1-24,0V152a12,12,0,0,1,12-12h16A32,32,0,0,1,164,172Zm-24,0a8,8,0,0,0-8-8h-4v16h4A8,8,0,0,0,140,172ZM36,108V40A20,20,0,0,1,56,20h96a12,12,0,0,1,8.49,3.52l56,56A12,12,0,0,1,220,88v20a12,12,0,0,1-24,0v-4H148a12,12,0,0,1-12-12V44H60v64a12,12,0,0,1-24,0ZM160,80h23L160,57Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,88H152V32Z", opacity: "0.2" }), /* @__PURE__ */ a.createElement("path", { d: "M224,152a8,8,0,0,1-8,8H204v48a8,8,0,0,1-16,0V160H176a8,8,0,0,1,0-16h40A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm84,0a28,28,0,0,1-28,28h-8v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h16A28,28,0,0,1,160,172Zm-16,0a12,12,0,0,0-12-12h-8v24h8A12,12,0,0,0,144,172ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M224,152a8,8,0,0,1-8,8H204v48a8,8,0,0,1-16,0V160H176a8,8,0,0,1,0-16h40A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm84,0a28,28,0,0,1-28,28h-8v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h16A28,28,0,0,1,160,172Zm-16,0a12,12,0,0,0-12-12h-8v24h8A12,12,0,0,0,144,172ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-8,8H48A8,8,0,0,1,40,112ZM152,88h44L152,44Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M222,152a6,6,0,0,1-6,6H202v50a6,6,0,0,1-12,0V158H176a6,6,0,0,1,0-12h40A6,6,0,0,1,222,152ZM90,172a26,26,0,0,1-26,26H54v10a6,6,0,0,1-12,0V152a6,6,0,0,1,6-6H64A26,26,0,0,1,90,172Zm-12,0a14,14,0,0,0-14-14H54v28H64A14,14,0,0,0,78,172Zm80,0a26,26,0,0,1-26,26H122v10a6,6,0,0,1-12,0V152a6,6,0,0,1,6-6h16A26,26,0,0,1,158,172Zm-12,0a14,14,0,0,0-14-14H122v28h10A14,14,0,0,0,146,172ZM42,112V40A14,14,0,0,1,56,26h96a6,6,0,0,1,4.25,1.76l56,56A6,6,0,0,1,214,88v24a6,6,0,0,1-12,0V94H152a6,6,0,0,1-6-6V38H56a2,2,0,0,0-2,2v72a6,6,0,0,1-12,0ZM158,82h35.52L158,46.48Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M224,152a8,8,0,0,1-8,8H204v48a8,8,0,0,1-16,0V160H176a8,8,0,0,1,0-16h40A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm84,0a28,28,0,0,1-28,28h-8v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h16A28,28,0,0,1,160,172Zm-16,0a12,12,0,0,0-12-12h-8v24h8A12,12,0,0,0,144,172ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M220,152a4,4,0,0,1-4,4H200v52a4,4,0,0,1-8,0V156H176a4,4,0,0,1,0-8h40A4,4,0,0,1,220,152ZM88,172a24,24,0,0,1-24,24H52v12a4,4,0,0,1-8,0V152a4,4,0,0,1,4-4H64A24,24,0,0,1,88,172Zm-8,0a16,16,0,0,0-16-16H52v32H64A16,16,0,0,0,80,172Zm76,0a24,24,0,0,1-24,24H120v12a4,4,0,0,1-8,0V152a4,4,0,0,1,4-4h16A24,24,0,0,1,156,172Zm-8,0a16,16,0,0,0-16-16H120v32h12A16,16,0,0,0,148,172ZM44,112V40A12,12,0,0,1,56,28h96a4,4,0,0,1,2.83,1.17l56,56A4,4,0,0,1,212,88v24a4,4,0,0,1-8,0V92H152a4,4,0,0,1-4-4V36H56a4,4,0,0,0-4,4v72a4,4,0,0,1-8,0ZM156,84h42.34L156,41.65Z" }))
  ]
]), l = c((t, e) => /* @__PURE__ */ a.createElement(p, Z(A({ ref: e }, t), { weights: o })));
l.displayName = "FilePpt";
const g = l;
export {
  g as default
};
