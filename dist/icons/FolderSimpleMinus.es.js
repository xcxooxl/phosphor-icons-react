var c = Object.defineProperty, V = Object.defineProperties;
var Z = Object.getOwnPropertyDescriptors;
var H = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (t, e, l) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l, n = (t, e) => {
  for (var l in e || (e = {}))
    h.call(e, l) && m(t, l, e[l]);
  if (H)
    for (var l of H(e))
      o.call(e, l) && m(t, l, e[l]);
  return t;
}, r = (t, e) => V(t, Z(e));
import a, { forwardRef as p } from "react";
import d from "../lib/IconBase.es.js";
const i = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M104,132h48a12,12,0,0,1,0,24H104a12,12,0,0,1,0-24ZM236,88V200.89A19.13,19.13,0,0,1,216.89,220H40a20,20,0,0,1-20-20V64A20,20,0,0,1,40,44H93.33a20.12,20.12,0,0,1,12,4L132,68h84A20,20,0,0,1,236,88Zm-24,4H130.67a20.12,20.12,0,0,1-12-4L92,68H44V196H212Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M224,88V200.89a7.11,7.11,0,0,1-7.11,7.11H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H216A8,8,0,0,1,224,88Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M160,144a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16h48A8,8,0,0,1,160,144Zm72-56V200.89A15.13,15.13,0,0,1,216.89,216H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H93.33a16.12,16.12,0,0,1,9.6,3.2L130.67,72H216A16,16,0,0,1,232,88Zm-16,0H130.67a16.12,16.12,0,0,1-9.6-3.2L93.33,64H40V200H216Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,72H130.67L102.92,51.2A16,16,0,0,0,93.34,48H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72Zm-64,80H104a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M158,144a6,6,0,0,1-6,6H104a6,6,0,0,1,0-12h48A6,6,0,0,1,158,144Zm72-56V200.89A13.12,13.12,0,0,1,216.89,214H40a14,14,0,0,1-14-14V64A14,14,0,0,1,40,50H93.33a14,14,0,0,1,8.4,2.8l27.74,20.8a2,2,0,0,0,1.2.4H216A14,14,0,0,1,230,88Zm-12,0a2,2,0,0,0-2-2H130.67a14,14,0,0,1-8.4-2.8L94.53,62.4a2,2,0,0,0-1.2-.4H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H216.89a1.11,1.11,0,0,0,1.11-1.11Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M160,144a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16h48A8,8,0,0,1,160,144Zm72-56V200.89A15.13,15.13,0,0,1,216.89,216H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H93.33a16.12,16.12,0,0,1,9.6,3.2L130.67,72H216A16,16,0,0,1,232,88Zm-16,0H130.67a16.12,16.12,0,0,1-9.6-3.2L93.33,64H40V200H216Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M156,144a4,4,0,0,1-4,4H104a4,4,0,0,1,0-8h48A4,4,0,0,1,156,144Zm72-56V200.89A11.12,11.12,0,0,1,216.89,212H40a12,12,0,0,1-12-12V64A12,12,0,0,1,40,52H93.33a12.05,12.05,0,0,1,7.2,2.4l27.74,20.8a4,4,0,0,0,2.4.8H216A12,12,0,0,1,228,88Zm-8,0a4,4,0,0,0-4-4H130.67a12.05,12.05,0,0,1-7.2-2.4L95.73,60.8a4,4,0,0,0-2.4-.8H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216.89a3.12,3.12,0,0,0,3.11-3.11Z" }))
  ]
]), A = p((t, e) => /* @__PURE__ */ a.createElement(d, r(n({ ref: e }, t), { weights: i })));
A.displayName = "FolderSimpleMinus";
const s = A;
export {
  s as default
};
