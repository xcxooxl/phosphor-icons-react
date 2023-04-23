var Z = Object.defineProperty, E = Object.defineProperties;
var M = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var n = (t, e, l) => e in t ? Z(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l, m = (t, e) => {
  for (var l in e || (e = {}))
    o.call(e, l) && n(t, l, e[l]);
  if (r)
    for (var l of r(e))
      H.call(e, l) && n(t, l, e[l]);
  return t;
}, L = (t, e) => E(t, M(e));
import a, { forwardRef as h } from "react";
import p from "../lib/IconBase.es.js";
const A = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,204H141l86.84-86.84a28,28,0,0,0,0-39.6L186.43,36.19a28,28,0,0,0-39.6,0L28.19,154.82a28,28,0,0,0,0,39.6l30.06,30.07A12,12,0,0,0,66.74,228H216a12,12,0,0,0,0-24ZM163.8,53.16a4,4,0,0,1,5.66,0l41.38,41.38a4,4,0,0,1,0,5.65L160,151l-47-47ZM71.71,204,45.16,177.45a4,4,0,0,1,0-5.65L96,121l47,47-36,36Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M160,168l-48,48H66.75L36.69,185.94a16,16,0,0,1,0-22.63L96,104Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M225,80.4,183.6,39a24,24,0,0,0-33.94,0L31,157.66a24,24,0,0,0,0,33.94l30.06,30.06A8,8,0,0,0,66.74,224H216a8,8,0,0,0,0-16h-84.7L225,114.34A24,24,0,0,0,225,80.4ZM108.68,208H70.05L42.33,180.28a8,8,0,0,1,0-11.31L96,115.31,148.69,168Zm105-105L160,156.69,107.31,104,161,50.34a8,8,0,0,1,11.32,0l41.38,41.38a8,8,0,0,1,0,11.31Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M225,80.4,183.6,39a24,24,0,0,0-33.94,0L31,157.66a24,24,0,0,0,0,33.94l30.06,30.06A8,8,0,0,0,66.74,224H216a8,8,0,0,0,0-16h-84.7L225,114.34A24,24,0,0,0,225,80.4ZM213.67,103,160,156.69,107.31,104,161,50.34a8,8,0,0,1,11.32,0l41.38,41.38a8,8,0,0,1,0,11.31Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M223.57,81.81,182.19,40.43a22,22,0,0,0-31.12,0L32.43,159.07a22,22,0,0,0,0,31.11L62.5,220.24A6,6,0,0,0,66.74,222H216a6,6,0,0,0,0-12H126.49l97.08-97.08A22,22,0,0,0,223.57,81.81ZM109.51,210H69.22l-28.3-28.3a10,10,0,0,1,0-14.15L96,112.48,151.52,168ZM215.08,104.44,160,159.51,104.48,104l55.08-55.07a10,10,0,0,1,14.14,0l41.38,41.37A10,10,0,0,1,215.08,104.44Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M225,80.4,183.6,39a24,24,0,0,0-33.94,0L31,157.66a24,24,0,0,0,0,33.94l30.06,30.06A8,8,0,0,0,66.74,224H216a8,8,0,0,0,0-16h-84.7L225,114.34A24,24,0,0,0,225,80.4ZM108.68,208H70.05L42.33,180.28a8,8,0,0,1,0-11.31L96,115.31,148.69,168Zm105-105L160,156.69,107.31,104,161,50.34a8,8,0,0,1,11.32,0l41.38,41.38a8,8,0,0,1,0,11.31Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M222.15,83.22,180.77,41.85a20,20,0,0,0-28.28,0L33.85,160.48a20,20,0,0,0,0,28.29l30.06,30.06A4,4,0,0,0,66.74,220H216a4,4,0,0,0,0-8H121.66L222.15,111.51A20,20,0,0,0,222.15,83.22ZM110.34,212H68.4L39.51,183.11a12,12,0,0,1,0-17L96,109.65,154.35,168ZM216.49,105.85,160,162.34,101.65,104l56.49-56.48a12,12,0,0,1,17,0l41.37,41.37A12,12,0,0,1,216.49,105.85Z" }))
  ]
]), c = h((t, e) => /* @__PURE__ */ a.createElement(p, L(m({ ref: e }, t), { weights: A })));
c.displayName = "Eraser";
const u = c;
export {
  u as default
};
