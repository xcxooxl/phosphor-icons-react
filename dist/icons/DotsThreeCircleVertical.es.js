var c = Object.defineProperty, o = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var E = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var r = (t, a, m) => a in t ? c(t, a, { enumerable: !0, configurable: !0, writable: !0, value: m }) : t[a] = m, n = (t, a) => {
  for (var m in a || (a = {}))
    E.call(a, m) && r(t, m, a[m]);
  if (l)
    for (var m of l(a))
      h.call(a, m) && r(t, m, a[m]);
  return t;
}, A = (t, a) => o(t, i(a));
import e, { forwardRef as p } from "react";
import d from "../lib/IconBase.es.js";
const M = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212ZM144,96a16,16,0,1,1-16-16A16,16,0,0,1,144,96Zm0,64a16,16,0,1,1-16-16A16,16,0,0,1,144,160Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm12-88a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm0-44a12,12,0,1,1-12-12A12,12,0,0,1,140,84Zm0,88a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M232,128A104,104,0,1,0,128,232,104.13,104.13,0,0,0,232,128ZM116,84a12,12,0,1,1,12,12A12,12,0,0,1,116,84Zm0,44a12,12,0,1,1,12,12A12,12,0,0,1,116,128Zm0,44a12,12,0,1,1,12,12A12,12,0,0,1,116,172Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM138,84a10,10,0,1,1-10-10A10,10,0,0,1,138,84Zm0,44a10,10,0,1,1-10-10A10,10,0,0,1,138,128Zm0,44a10,10,0,1,1-10-10A10,10,0,0,1,138,172Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm12-88a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm0-44a12,12,0,1,1-12-12A12,12,0,0,1,140,84Zm0,88a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm8-136a8,8,0,1,1-8-8A8,8,0,0,1,136,84Zm0,44a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm0,44a8,8,0,1,1-8-8A8,8,0,0,1,136,172Z" }))
  ]
]), Z = p((t, a) => /* @__PURE__ */ e.createElement(d, A(n({ ref: a }, t), { weights: M })));
Z.displayName = "DotsThreeCircleVertical";
const f = Z;
export {
  f as default
};
