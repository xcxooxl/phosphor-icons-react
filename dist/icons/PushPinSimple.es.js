var c = Object.defineProperty, p = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var h = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
var n = (t, a, l) => a in t ? c(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[a] = l, H = (t, a) => {
  for (var l in a || (a = {}))
    o.call(a, l) && n(t, l, a[l]);
  if (h)
    for (var l of h(a))
      E.call(a, l) && n(t, l, a[l]);
  return t;
}, r = (t, a) => p(t, i(a));
import e, { forwardRef as L } from "react";
import M from "../lib/IconBase.es.js";
const d = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M216,164h-5.93L190.3,52H192a12,12,0,0,0,0-24H64a12,12,0,0,0,0,24h1.7L45.93,164H40a12,12,0,0,0,0,24h76v52a12,12,0,0,0,24,0V188h76a12,12,0,0,0,0-24ZM90.07,52h75.86L185.7,164H70.3Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M200,176H56L80,40h96Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M216,168h-9.29L185.54,48H192a8,8,0,0,0,0-16H64a8,8,0,0,0,0,16h6.46L49.29,168H40a8,8,0,0,0,0,16h80v56a8,8,0,0,0,16,0V184h80a8,8,0,0,0,0-16ZM86.71,48h82.58l21.17,120H65.54Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M224,176a8,8,0,0,1-8,8H136v56a8,8,0,0,1-16,0V184H40a8,8,0,0,1,0-16h9.29L70.46,48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16h-6.46l21.17,120H216A8,8,0,0,1,224,176Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M216,170H205L183.15,46H192a6,6,0,0,0,0-12H64a6,6,0,0,0,0,12h8.85L51,170H40a6,6,0,0,0,0,12h82v58a6,6,0,0,0,12,0V182h82a6,6,0,0,0,0-12ZM85,46H171l21.88,124H63.15Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M216,168h-9.29L185.54,48H192a8,8,0,0,0,0-16H64a8,8,0,0,0,0,16h6.46L49.29,168H40a8,8,0,0,0,0,16h80v56a8,8,0,0,0,16,0V184h80a8,8,0,0,0,0-16ZM86.71,48h82.58l21.17,120H65.54Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M216,172H203.36L180.77,44H192a4,4,0,0,0,0-8H64a4,4,0,0,0,0,8H75.23L52.64,172H40a4,4,0,0,0,0,8h84v60a4,4,0,0,0,8,0V180h84a4,4,0,0,0,0-8ZM83.36,44h89.28l22.59,128H60.77Z" }))
  ]
]), m = L((t, a) => /* @__PURE__ */ e.createElement(M, r(H({ ref: a }, t), { weights: d })));
m.displayName = "PushPinSimple";
const g = m;
export {
  g as default
};
