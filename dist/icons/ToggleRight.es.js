var c = Object.defineProperty, g = Object.defineProperties;
var o = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
var n = (t, a, m) => a in t ? c(t, a, { enumerable: !0, configurable: !0, writable: !0, value: m }) : t[a] = m, r = (t, a) => {
  for (var m in a || (a = {}))
    A.call(a, m) && n(t, m, a[m]);
  if (l)
    for (var m of l(a))
      E.call(a, m) && n(t, m, a[m]);
  return t;
}, h = (t, a) => g(t, o(a));
import e, { forwardRef as p } from "react";
import d from "../lib/IconBase.es.js";
const i = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M176,52H80a76,76,0,0,0,0,152h96a76,76,0,0,0,0-152Zm0,128H80A52,52,0,0,1,80,76h96a52,52,0,0,1,0,104Zm0-88a36,36,0,1,0,36,36A36,36,0,0,0,176,92Zm0,48a12,12,0,1,1,12-12A12,12,0,0,1,176,140Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M208,128a32,32,0,1,1-32-32A32,32,0,0,1,208,128Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M176,56H80a72,72,0,0,0,0,144h96a72,72,0,0,0,0-144Zm0,128H80A56,56,0,0,1,80,72h96a56,56,0,0,1,0,112Zm0-96a40,40,0,1,0,40,40A40,40,0,0,0,176,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,176,152Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M176,56H80a72,72,0,0,0,0,144h96a72,72,0,0,0,0-144Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,176,168Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M176,58H80a70,70,0,0,0,0,140h96a70,70,0,0,0,0-140Zm0,128H80A58,58,0,0,1,80,70h96a58,58,0,0,1,0,116Zm0-96a38,38,0,1,0,38,38A38,38,0,0,0,176,90Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,176,154Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M176,56H80a72,72,0,0,0,0,144h96a72,72,0,0,0,0-144Zm0,128H80A56,56,0,0,1,80,72h96a56,56,0,0,1,0,112Zm0-96a40,40,0,1,0,40,40A40,40,0,0,0,176,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,176,152Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M176,60H80a68,68,0,0,0,0,136h96a68,68,0,0,0,0-136Zm0,128H80A60,60,0,0,1,80,68h96a60,60,0,0,1,0,120Zm0-96a36,36,0,1,0,36,36A36,36,0,0,0,176,92Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,176,156Z" }))
  ]
]), Z = p((t, a) => /* @__PURE__ */ e.createElement(d, h(r({ ref: a }, t), { weights: i })));
Z.displayName = "ToggleRight";
const s = Z;
export {
  s as default
};
