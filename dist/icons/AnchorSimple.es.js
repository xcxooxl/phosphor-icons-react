var h = Object.defineProperty, H = Object.defineProperties;
var o = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
var r = (t, a, l) => a in t ? h(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[a] = l, m = (t, a) => {
  for (var l in a || (a = {}))
    p.call(a, l) && r(t, l, a[l]);
  if (n)
    for (var l of n(a))
      E.call(a, l) && r(t, l, a[l]);
  return t;
}, A = (t, a) => H(t, o(a));
import e, { forwardRef as M } from "react";
import d from "../lib/IconBase.es.js";
const Z = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M224,108H200a12,12,0,0,0,0,24h11.15A84.21,84.21,0,0,1,140,203.14V97.94a36,36,0,1,0-24,0v105.2A84.21,84.21,0,0,1,44.85,132H56a12,12,0,0,0,0-24H32a12,12,0,0,0-12,12,108,108,0,0,0,216,0A12,12,0,0,0,224,108ZM128,52a12,12,0,1,1-12,12A12,12,0,0,1,128,52Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M152,64a24,24,0,1,1-24-24A24,24,0,0,1,152,64Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M224,112H200a8,8,0,0,0,0,16h15.64A88.15,88.15,0,0,1,136,207.63V95a32,32,0,1,0-16,0V207.63A88.15,88.15,0,0,1,40.36,128H56a8,8,0,0,0,0-16H32a8,8,0,0,0-8,8,104,104,0,0,0,208,0A8,8,0,0,0,224,112ZM112,64a16,16,0,1,1,16,16A16,16,0,0,1,112,64Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M232,120a104,104,0,0,1-208,0,8,8,0,0,1,8-8H56a8,8,0,0,1,0,16H40.36A88.15,88.15,0,0,0,120,207.63V90.83a28,28,0,1,1,16,0v116.8A88.15,88.15,0,0,0,215.64,128H200a8,8,0,0,1,0-16h24A8,8,0,0,1,232,120Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M224,114H200a6,6,0,0,0,0,12h17.8A90.13,90.13,0,0,1,134,209.78V93.4a30,30,0,1,0-12,0V209.78A90.13,90.13,0,0,1,38.2,126H56a6,6,0,0,0,0-12H32a6,6,0,0,0-6,6,102,102,0,0,0,204,0A6,6,0,0,0,224,114ZM110,64a18,18,0,1,1,18,18A18,18,0,0,1,110,64Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M224,112H200a8,8,0,0,0,0,16h15.64A88.15,88.15,0,0,1,136,207.63V95a32,32,0,1,0-16,0V207.63A88.15,88.15,0,0,1,40.36,128H56a8,8,0,0,0,0-16H32a8,8,0,0,0-8,8,104,104,0,0,0,208,0A8,8,0,0,0,224,112ZM112,64a16,16,0,1,1,16,16A16,16,0,0,1,112,64Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M224,116H200a4,4,0,0,0,0,8h19.91A92.13,92.13,0,0,1,132,211.91V91.71a28,28,0,1,0-8,0v120.2A92.13,92.13,0,0,1,36.09,124H56a4,4,0,0,0,0-8H32a4,4,0,0,0-4,4,100,100,0,0,0,200,0A4,4,0,0,0,224,116ZM108,64a20,20,0,1,1,20,20A20,20,0,0,1,108,64Z" }))
  ]
]), c = M((t, a) => /* @__PURE__ */ e.createElement(d, A(m({ ref: a }, t), { weights: Z })));
c.displayName = "AnchorSimple";
const V = c;
export {
  V as default
};
