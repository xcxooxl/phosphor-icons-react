var r = Object.defineProperty, V = Object.defineProperties;
var Z = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var H = (t, e, m) => e in t ? r(t, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : t[e] = m, h = (t, e) => {
  for (var m in e || (e = {}))
    c.call(e, m) && H(t, m, e[m]);
  if (l)
    for (var m of l(e))
      o.call(e, m) && H(t, m, e[m]);
  return t;
}, v = (t, e) => V(t, Z(e));
import a, { forwardRef as A } from "react";
import p from "../lib/IconBase.es.js";
const d = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M236,88v4a12,12,0,0,1-24,0H130.67a20.12,20.12,0,0,1-12-4L92,68H44V196h60a12,12,0,0,1,0,24H40a20,20,0,0,1-20-20V64A20,20,0,0,1,40,44H93.33a20.12,20.12,0,0,1,12,4L132,68h84A20,20,0,0,1,236,88Zm0,76v44a12,12,0,0,1-12,12H152a12,12,0,0,1-12-12V164a12,12,0,0,1,12-12h4v-4a32,32,0,0,1,64,0v4h4A12,12,0,0,1,236,164Zm-56-12h16v-4a8,8,0,0,0-16,0Zm32,24H164v20h48Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M224,168v40H152V168Z", opacity: "0.2" }), /* @__PURE__ */ a.createElement("path", { d: "M232,88v16a8,8,0,0,1-16,0V88H130.67a16.12,16.12,0,0,1-9.6-3.2L93.33,64H40V200h72a8,8,0,0,1,0,16H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H93.33a16.12,16.12,0,0,1,9.6,3.2L130.67,72H216A16,16,0,0,1,232,88Zm0,80v40a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V168a8,8,0,0,1,8-8h8v-4a28,28,0,0,1,56,0v4h8A8,8,0,0,1,232,168Zm-56-8h24v-4a12,12,0,0,0-24,0Zm40,16H160v24h56Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M224,160h-8v-4a28,28,0,0,0-56,0v4h-8a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V168A8,8,0,0,0,224,160Zm-24,0H176v-4a12,12,0,0,1,24,0Zm32-72v16a8,8,0,0,1-16,0V88H130.67a16.12,16.12,0,0,1-9.6-3.2L93.33,64H40V200h72a8,8,0,0,1,0,16H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H93.33a16.12,16.12,0,0,1,9.6,3.2L130.67,72H216A16,16,0,0,1,232,88Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M230,88v16a6,6,0,0,1-12,0V88a2,2,0,0,0-2-2H130.67a14,14,0,0,1-8.4-2.8L94.53,62.4a2,2,0,0,0-1.2-.4H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2h72a6,6,0,0,1,0,12H40a14,14,0,0,1-14-14V64A14,14,0,0,1,40,50H93.33a14,14,0,0,1,8.4,2.8l27.74,20.8a2,2,0,0,0,1.2.4H216A14,14,0,0,1,230,88Zm0,80v40a6,6,0,0,1-6,6H152a6,6,0,0,1-6-6V168a6,6,0,0,1,6-6h10v-6a26,26,0,0,1,52,0v6h10A6,6,0,0,1,230,168Zm-56-6h28v-6a14,14,0,0,0-28,0Zm44,12H158v28h60Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M232,88v16a8,8,0,0,1-16,0V88H130.67a16.12,16.12,0,0,1-9.6-3.2L93.33,64H40V200h72a8,8,0,0,1,0,16H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H93.33a16.12,16.12,0,0,1,9.6,3.2L130.67,72H216A16,16,0,0,1,232,88Zm0,80v40a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V168a8,8,0,0,1,8-8h8v-4a28,28,0,0,1,56,0v4h8A8,8,0,0,1,232,168Zm-56-8h24v-4a12,12,0,0,0-24,0Zm40,16H160v24h56Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M228,88v16a4,4,0,0,1-8,0V88a4,4,0,0,0-4-4H130.67a12.05,12.05,0,0,1-7.2-2.4L95.73,60.8a4,4,0,0,0-2.4-.8H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4h72a4,4,0,0,1,0,8H40a12,12,0,0,1-12-12V64A12,12,0,0,1,40,52H93.33a12.05,12.05,0,0,1,7.2,2.4l27.74,20.8a4,4,0,0,0,2.4.8H216A12,12,0,0,1,228,88Zm0,80v40a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V168a4,4,0,0,1,4-4h12v-8a24,24,0,0,1,48,0v8h12A4,4,0,0,1,228,168Zm-56-4h32v-8a16,16,0,0,0-32,0Zm48,8H156v32h64Z" }))
  ]
]), n = A((t, e) => /* @__PURE__ */ a.createElement(p, v(h({ ref: e }, t), { weights: d })));
n.displayName = "FolderSimpleLock";
const g = n;
export {
  g as default
};
