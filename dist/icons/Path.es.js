var H = Object.defineProperty, o = Object.defineProperties;
var E = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var h = (t, e, l) => e in t ? H(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l, m = (t, e) => {
  for (var l in e || (e = {}))
    p.call(e, l) && h(t, l, e[l]);
  if (n)
    for (var l of n(e))
      d.call(e, l) && h(t, l, e[l]);
  return t;
}, r = (t, e) => o(t, E(e));
import a, { forwardRef as Z } from "react";
import g from "../lib/IconBase.es.js";
const u = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M200,164a36.07,36.07,0,0,0-33.94,24H72a28,28,0,0,1,0-56h96a44,44,0,0,0,0-88H72a12,12,0,0,0,0,24h96a20,20,0,0,1,0,40H72a52,52,0,0,0,0,104h94.06A36,36,0,1,0,200,164Zm0,48a12,12,0,1,1,12-12A12,12,0,0,1,200,212Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M224,200a24,24,0,1,1-24-24A24,24,0,0,1,224,200Z", opacity: "0.2" }), /* @__PURE__ */ a.createElement("path", { d: "M200,168a32.06,32.06,0,0,0-31,24H72a32,32,0,0,1,0-64h96a40,40,0,0,0,0-80H72a8,8,0,0,0,0,16h96a24,24,0,0,1,0,48H72a48,48,0,0,0,0,96h97a32,32,0,1,0,31-40Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,200,216Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M200,168a32.06,32.06,0,0,0-31,24H72a32,32,0,0,1,0-64h96a40,40,0,0,0,0-80H72a8,8,0,0,0,0,16h96a24,24,0,0,1,0,48H72a48,48,0,0,0,0,96h97a32,32,0,1,0,31-40Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M200,170a30.05,30.05,0,0,0-29.4,24H72a34,34,0,0,1,0-68h96a38,38,0,0,0,0-76H72a6,6,0,0,0,0,12h96a26,26,0,0,1,0,52H72a46,46,0,0,0,0,92h98.6A30,30,0,1,0,200,170Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,200,218Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M200,168a32.06,32.06,0,0,0-31,24H72a32,32,0,0,1,0-64h96a40,40,0,0,0,0-80H72a8,8,0,0,0,0,16h96a24,24,0,0,1,0,48H72a48,48,0,0,0,0,96h97a32,32,0,1,0,31-40Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,200,216Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M200,172a28,28,0,0,0-27.71,24H72a36,36,0,0,1,0-72h96a36,36,0,0,0,0-72H72a4,4,0,0,0,0,8h96a28,28,0,0,1,0,56H72a44,44,0,0,0,0,88H172.29A28,28,0,1,0,200,172Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,200,220Z" }))
  ]
]), c = Z((t, e) => /* @__PURE__ */ a.createElement(g, r(m({ ref: e }, t), { weights: u })));
c.displayName = "Path";
const s = c;
export {
  s as default
};
