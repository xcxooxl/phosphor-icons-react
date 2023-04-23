var A = Object.defineProperty, c = Object.defineProperties;
var v = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var M = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (l, e, t) => e in l ? A(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, V = (l, e) => {
  for (var t in e || (e = {}))
    M.call(e, t) && m(l, t, e[t]);
  if (n)
    for (var t of n(e))
      o.call(e, t) && m(l, t, e[t]);
  return l;
}, r = (l, e) => c(l, v(e));
import a, { forwardRef as E } from "react";
import h from "../lib/IconBase.es.js";
const p = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M92,152v48a12,12,0,0,1-24,0V152a12,12,0,0,1,24,0ZM40,180a12,12,0,0,0-12,12v8a12,12,0,0,0,24,0v-8A12,12,0,0,0,40,180Zm176.88,27.93-160-176A12,12,0,1,0,39.12,48.07L108,123.84V200a12,12,0,0,0,24,0V150.24l16,17.6V200a12,12,0,0,0,24,0v-5.76l27.12,29.83a12,12,0,0,0,17.76-16.14ZM160,115.74a12,12,0,0,0,12-12V72a12,12,0,0,0-24,0v31.74A12,12,0,0,0,160,115.74Zm40,44a12,12,0,0,0,12-12V32a12,12,0,0,0-24,0V147.74A12,12,0,0,0,200,159.74Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M200,40V200a8,8,0,0,1-8,8H32a8,8,0,0,1-5.66-13.66l160-160A8,8,0,0,1,200,40Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M213.92,210.62l-160-176A8,8,0,1,0,42.07,45.38l58.07,63.86L20.69,188.68A16,16,0,0,0,32,216H192a16.13,16.13,0,0,0,4.56-.68l5.52,6.06a8,8,0,1,0,11.84-10.76ZM32,200l78.9-78.89L182.64,200ZM128.18,92.51a8,8,0,0,1,0-11.31l52.51-52.5A16,16,0,0,1,208,40V159.63a8,8,0,0,1-16,0V40L139.5,92.51A8,8,0,0,1,128.18,92.51Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M213.38,221.92a8,8,0,0,1-11.3-.54L197.19,216H32a16,16,0,0,1-11.32-27.32l79.45-79.44L42.07,45.38A8,8,0,1,1,53.91,34.61l160,176A8,8,0,0,1,213.38,221.92ZM194.08,165A8,8,0,0,0,208,159.63V40A16,16,0,0,0,180.69,28.7L128.18,81.2a8,8,0,0,0-.26,11Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M86,152v48a6,6,0,0,1-12,0V152a6,6,0,0,1,12,0ZM40,186a6,6,0,0,0-6,6v8a6,6,0,0,0,12,0v-8A6,6,0,0,0,40,186Zm172.44,26L52.44,36A6,6,0,0,0,43.56,44L114,121.52V200a6,6,0,0,0,12,0V134.72l28,30.8V200a6,6,0,0,0,12,0V178.72L203.56,220a6,6,0,0,0,8.88-8.08ZM160,121.63a6,6,0,0,0,6-6V72a6,6,0,0,0-12,0v43.63A6,6,0,0,0,160,121.63Zm40,44a6,6,0,0,0,6-6V32a6,6,0,0,0-12,0V159.63A6,6,0,0,0,200,165.63Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M88,152v48a8,8,0,0,1-16,0V152a8,8,0,0,1,16,0ZM40,184a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A8,8,0,0,0,40,184Zm173.92,26.62-160-176A8,8,0,1,0,42.08,45.38L112,122.29V200a8,8,0,0,0,16,0V139.89l24,26.4V200a8,8,0,0,0,16,0V183.89l34.08,37.49a8,8,0,1,0,11.84-10.76Zm-53.92-87a8,8,0,0,0,8-8V72a8,8,0,0,0-16,0v43.63A8,8,0,0,0,160,123.63Zm40,44a8,8,0,0,0,8-8V32a8,8,0,0,0-16,0V159.63A8,8,0,0,0,200,167.63Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M84,152v48a4,4,0,0,1-8,0V152a4,4,0,0,1,8,0ZM40,188a4,4,0,0,0-4,4v8a4,4,0,0,0,8,0v-8A4,4,0,0,0,40,188Zm171,25.31L51,37.31A4,4,0,0,0,45,42.69l71,78.06V200a4,4,0,0,0,8,0V129.55l32,35.2V200a4,4,0,0,0,8,0V173.55l41,45.14a4,4,0,1,0,5.92-5.38Zm-51-93.68a4,4,0,0,0,4-4V72a4,4,0,0,0-8,0v43.63A4,4,0,0,0,160,119.63Zm40,44a4,4,0,0,0,4-4V32a4,4,0,0,0-8,0V159.63A4,4,0,0,0,200,163.63Z" }))
  ]
]), Z = E((l, e) => /* @__PURE__ */ a.createElement(h, r(V({ ref: e }, l), { weights: p })));
Z.displayName = "CellSignalSlash";
const i = Z;
export {
  i as default
};
