var A = Object.defineProperty, o = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var E = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var n = (l, e, t) => e in l ? A(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, r = (l, e) => {
  for (var t in e || (e = {}))
    E.call(e, t) && n(l, t, e[t]);
  if (m)
    for (var t of m(e))
      d.call(e, t) && n(l, t, e[t]);
  return l;
}, Z = (l, e) => o(l, p(e));
import a, { forwardRef as L } from "react";
import M from "../lib/IconBase.es.js";
const i = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212ZM168.49,95.51a12,12,0,0,1-17,17L128,89l-23.51,23.52a12,12,0,0,1-17-17l32-32a12,12,0,0,1,17,0Zm0,48a12,12,0,0,1,0,17l-32,32a12,12,0,0,1-17,0l-32-32a12,12,0,0,1,17-17L128,167l23.51-23.52A12,12,0,0,1,168.49,143.51Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ a.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM165.66,98.34a8,8,0,0,1-11.32,11.32L128,83.31l-26.34,26.35A8,8,0,0,1,90.34,98.34l32-32a8,8,0,0,1,11.32,0Zm0,48a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L128,172.69l26.34-26.35A8,8,0,0,1,165.66,146.34Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,133.66-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L128,172.69l26.34-26.35a8,8,0,0,1,11.32,11.32Zm0-48a8,8,0,0,1-11.32,0L128,83.31l-26.34,26.35A8,8,0,0,1,90.34,98.34l32-32a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,165.66,109.66Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM164.24,99.76a6,6,0,1,1-8.48,8.48L128,80.49l-27.76,27.75a6,6,0,0,1-8.48-8.48l32-32a6,6,0,0,1,8.48,0Zm0,48a6,6,0,0,1,0,8.48l-32,32a6,6,0,0,1-8.48,0l-32-32a6,6,0,0,1,8.48-8.48L128,175.51l27.76-27.75A6,6,0,0,1,164.24,147.76Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM165.66,98.34a8,8,0,0,1-11.32,11.32L128,83.31l-26.34,26.35A8,8,0,0,1,90.34,98.34l32-32a8,8,0,0,1,11.32,0Zm0,48a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L128,172.69l26.34-26.35A8,8,0,0,1,165.66,146.34Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm34.83-118.83a4,4,0,0,1-5.66,5.66L128,77.66,98.83,106.83a4,4,0,0,1-5.66-5.66l32-32a4,4,0,0,1,5.66,0Zm0,48a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66,0l-32-32a4,4,0,0,1,5.66-5.66L128,178.34l29.17-29.17A4,4,0,0,1,162.83,149.17Z" }))
  ]
]), c = L((l, e) => /* @__PURE__ */ a.createElement(M, Z(r({ ref: e }, l), { weights: i })));
c.displayName = "CaretCircleUpDown";
const s = c;
export {
  s as default
};
