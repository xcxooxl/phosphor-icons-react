var L = Object.defineProperty, Z = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var H = (t, e, l) => e in t ? L(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l, h = (t, e) => {
  for (var l in e || (e = {}))
    A.call(e, l) && H(t, l, e[l]);
  if (m)
    for (var l of m(e))
      V.call(e, l) && H(t, l, e[l]);
  return t;
}, n = (t, e) => Z(t, c(e));
import a, { forwardRef as o } from "react";
import E from "../lib/IconBase.es.js";
const M = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M120,176a12,12,0,0,1-12,12H80a12,12,0,0,1,0-24h28A12,12,0,0,1,120,176Zm56-12H148a12,12,0,0,0,0,24h28a12,12,0,0,0,0-24Zm76,52a12,12,0,0,1-12,12H16a12,12,0,0,1,0-24H28V88a12,12,0,0,1,19.2-9.6L92,112V88a12,12,0,0,1,19.2-9.6l33.33,25,10.61-74.23A20.1,20.1,0,0,1,174.94,12h18.12a20.1,20.1,0,0,1,19.8,17.17l15,105.13c0,.1.12,1.34.12,1.7v68h12A12,12,0,0,1,252,216Zm-85.57-96.17L172,124h30.16L189.59,36H178.41ZM52,204H204V148H168a12,12,0,0,1-7.2-2.4l-14.38-10.78-.06,0L116,112v24a12,12,0,0,1-19.2,9.6L52,112Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,136v80H40V88l64,48V88l64,48Z", opacity: "0.2" }), /* @__PURE__ */ a.createElement("path", { d: "M116,176a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h28A8,8,0,0,1,116,176Zm60-8H148a8,8,0,0,0,0,16h28a8,8,0,0,0,0-16Zm72,48a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H32V88a8,8,0,0,1,12.8-6.4L96,120V88a8,8,0,0,1,12.8-6.4l38.74,29.05L159.1,29.74A16.08,16.08,0,0,1,174.94,16h18.12A16.08,16.08,0,0,1,208.9,29.74l15,105.13s.08.78.08,1.13v72h16A8,8,0,0,1,248,216Zm-85.86-94.4,8.53,6.4h36.11L193.06,32H174.94ZM48,208H208V144H168a8,8,0,0,1-4.8-1.6l-14.4-10.8,0,0L112,104v32a8,8,0,0,1-12.8,6.4L48,104Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M240,208H224V136c0-.05,0-.09,0-.14s0-.29,0-.43,0-.28,0-.41a.76.76,0,0,0,0-.15l-15-105.13A16.08,16.08,0,0,0,193.06,16H174.94A16.08,16.08,0,0,0,159.1,29.74l-11.56,80.91L108.8,81.6A8,8,0,0,0,96,88v32L44.8,81.6A8,8,0,0,0,32,88V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM108,184H80a8,8,0,0,1,0-16h28a8,8,0,0,1,0,16Zm68,0H148a8,8,0,0,1,0-16h28a8,8,0,0,1,0,16Zm-5.33-56-8.53-6.4L174.94,32h18.12l13.72,96Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M114,176a6,6,0,0,1-6,6H80a6,6,0,0,1,0-12h28A6,6,0,0,1,114,176Zm62-6H148a6,6,0,0,0,0,12h28a6,6,0,0,0,0-12Zm70,46a6,6,0,0,1-6,6H16a6,6,0,0,1,0-12H34V88a6,6,0,0,1,9.6-4.8L98,124V88a6,6,0,0,1,9.6-4.8L149,114.28l12-84.26a14.07,14.07,0,0,1,13.86-12h18.12a14.07,14.07,0,0,1,13.86,12l15,105.13s.06.59.06.85v74h18A6,6,0,0,1,246,216Zm-86-93.51L170,130h39.08L195,31.72a2,2,0,0,0-2-1.72H174.94a2,2,0,0,0-2,1.72ZM46,210H210V142H168a6,6,0,0,1-3.6-1.2L150,130l0,0L110,100v36a6,6,0,0,1-9.6,4.8L46,100Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M116,176a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h28A8,8,0,0,1,116,176Zm60-8H148a8,8,0,0,0,0,16h28a8,8,0,0,0,0-16Zm72,48a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H32V88a8,8,0,0,1,12.8-6.4L96,120V88a8,8,0,0,1,12.8-6.4l38.74,29.05L159.1,29.74A16.08,16.08,0,0,1,174.94,16h18.12A16.08,16.08,0,0,1,208.9,29.74l15,105.13s.08.78.08,1.13v72h16A8,8,0,0,1,248,216Zm-85.86-94.4,8.53,6.4h36.11L193.06,32H174.94ZM48,208H208V144H168a8,8,0,0,1-4.8-1.6l-14.4-10.8,0,0L112,104v32a8,8,0,0,1-12.8,6.4L48,104Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M112,176a4,4,0,0,1-4,4H80a4,4,0,0,1,0-8h28A4,4,0,0,1,112,176Zm64-4H148a4,4,0,0,0,0,8h28a4,4,0,0,0,0-8Zm68,44a4,4,0,0,1-4,4H16a4,4,0,0,1,0-8H36V88a4,4,0,0,1,6.4-3.2L100,128V88a4,4,0,0,1,6.4-3.2l44.14,33.11L163.06,30.3A12.06,12.06,0,0,1,174.94,20h18.12a12.06,12.06,0,0,1,11.88,10.3l15,105.13a3.64,3.64,0,0,1,0,.57v76h20A4,4,0,0,1,244,216Zm-86.16-92.62L169.33,132h42.06L197,31.43a4,4,0,0,0-4-3.43H174.94a4,4,0,0,0-4,3.43ZM44,212H212V140H168a4,4,0,0,1-2.4-.8L108,96v40a4,4,0,0,1-6.4,3.2L44,96Z" }))
  ]
]), r = o((t, e) => /* @__PURE__ */ a.createElement(E, n(h({ ref: e }, t), { weights: M })));
r.displayName = "Factory";
const s = r;
export {
  s as default
};
