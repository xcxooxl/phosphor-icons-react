var c = Object.defineProperty, M = Object.defineProperties;
var d = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (l, a, t) => a in l ? c(l, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[a] = t, r = (l, a) => {
  for (var t in a || (a = {}))
    i.call(a, t) && m(l, t, a[t]);
  if (n)
    for (var t of n(a))
      o.call(a, t) && m(l, t, a[t]);
  return l;
}, Z = (l, a) => M(l, d(a));
import e, { forwardRef as E } from "react";
import p from "../lib/IconBase.es.js";
const h = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm52-112v56a12,12,0,0,1-19.37,9.47l-36-28c-.22-.17-.42-.36-.63-.55V156a12,12,0,0,1-19.37,9.47l-36-28a12,12,0,0,1,0-18.94l36-28A12,12,0,0,1,124,100v19.08c.21-.19.41-.38.63-.55l36-28A12,12,0,0,1,180,100Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
      "path",
      {
        d: "M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32ZM112,160,64,128l48-32Zm64,0-48-32,48-32Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ e.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM179.77,89a8,8,0,0,0-8.21.39l-48,32a8,8,0,0,0,0,13.32l48,32A8,8,0,0,0,176,168a8,8,0,0,0,8-8V96A8,8,0,0,0,179.77,89ZM168,145.05,142.42,128,168,111ZM115.77,89a8,8,0,0,0-8.21.39l-48,32a8,8,0,0,0,0,13.32l48,32A8,8,0,0,0,112,168a8,8,0,0,0,8-8V96A8,8,0,0,0,115.77,89ZM104,145.05,78.42,128,104,111Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm48,132a8,8,0,0,1-12.59,6.55l-40-28A8,8,0,0,1,120,128v28a8,8,0,0,1-12.59,6.55l-40-28a8,8,0,0,1,0-13.1l40-28A8,8,0,0,1,120,100v28a8,8,0,0,1,3.41-6.55l40-28A8,8,0,0,1,176,100Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM174.83,90.71a6,6,0,0,0-6.16.3L122,122.12V96a6,6,0,0,0-9.33-5l-48,32a6,6,0,0,0,0,10l48,32a6,6,0,0,0,9.33-5V133.88L168.67,165a6,6,0,0,0,9.33-5V96A6,6,0,0,0,174.83,90.71ZM110,148.79,78.82,128,110,107.21Zm56,0L134.82,128,166,107.21Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM179.77,89a8,8,0,0,0-8.21.39l-48,32a8,8,0,0,0,0,13.32l48,32A8,8,0,0,0,176,168a8,8,0,0,0,8-8V96A8,8,0,0,0,179.77,89ZM168,145.05,142.42,128,168,111ZM115.77,89a8,8,0,0,0-8.21.39l-48,32a8,8,0,0,0,0,13.32l48,32A8,8,0,0,0,112,168a8,8,0,0,0,8-8V96A8,8,0,0,0,115.77,89ZM104,145.05,78.42,128,104,111Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM173.89,92.47a4,4,0,0,0-4.11.2l-48,32a4,4,0,0,0,0,6.66l48,32A4,4,0,0,0,176,160V96A4,4,0,0,0,173.89,92.47ZM168,152.53,131.21,128,168,103.47ZM117.89,92.47a4,4,0,0,0-4.11.2l-48,32a4,4,0,0,0,0,6.66l48,32A4,4,0,0,0,120,160V96A4,4,0,0,0,117.89,92.47ZM112,152.53,75.21,128,112,103.47Z" }))
  ]
]), A = E((l, a) => /* @__PURE__ */ e.createElement(p, Z(r({ ref: a }, l), { weights: h })));
A.displayName = "RewindCircle";
const s = A;
export {
  s as default
};
