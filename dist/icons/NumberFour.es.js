var h = Object.defineProperty, o = Object.defineProperties;
var V = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var u = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
var n = (t, a, l) => a in t ? h(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[a] = l, m = (t, a) => {
  for (var l in a || (a = {}))
    u.call(a, l) && n(t, l, a[l]);
  if (r)
    for (var l of r(a))
      E.call(a, l) && n(t, l, a[l]);
  return t;
}, c = (t, a) => o(t, V(a));
import e, { forwardRef as p } from "react";
import d from "../lib/IconBase.es.js";
const v = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M188,152a12,12,0,0,1-12,12H164v44a12,12,0,0,1-24,0V164H72a12,12,0,0,1-11.3-16l40-112A12,12,0,1,1,123.3,44L89,140h51V96a12,12,0,0,1,24,0v44h12A12,12,0,0,1,188,152Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
      "path",
      {
        d: "M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ e.createElement("path", { d: "M184,152a8,8,0,0,1-8,8H160v48a8,8,0,0,1-16,0V160H72a8,8,0,0,1-7.53-10.69l40-112a8,8,0,0,1,15.06,5.38L83.35,144H144V96a8,8,0,0,1,16,0v48h16A8,8,0,0,1,184,152Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM168,152h-8v32a8,8,0,0,1-16,0V152H88a8,8,0,0,1-7.43-11l32-80A8,8,0,0,1,127.43,67L99.82,136H144V104a8,8,0,0,1,16,0v32h8a8,8,0,0,1,0,16Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M182,152a6,6,0,0,1-6,6H158v50a6,6,0,0,1-12,0V158H72a6,6,0,0,1-5.65-8l40-112a6,6,0,0,1,11.3,4L80.51,146H146V96a6,6,0,0,1,12,0v50h18A6,6,0,0,1,182,152Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M184,152a8,8,0,0,1-8,8H160v48a8,8,0,0,1-16,0V160H72a8,8,0,0,1-7.53-10.69l40-112a8,8,0,0,1,15.06,5.38L83.35,144H144V96a8,8,0,0,1,16,0v48h16A8,8,0,0,1,184,152Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M180,152a4,4,0,0,1-4,4H156v52a4,4,0,0,1-8,0V156H72a4,4,0,0,1-3.77-5.35l40-112a4,4,0,1,1,7.54,2.69L77.68,148H148V96a4,4,0,0,1,8,0v52h20A4,4,0,0,1,180,152Z" }))
  ]
]), H = p((t, a) => /* @__PURE__ */ e.createElement(d, c(m({ ref: a }, t), { weights: v })));
H.displayName = "NumberFour";
const M = H;
export {
  M as default
};
