var h = Object.defineProperty, c = Object.defineProperties;
var o = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (t, a, l) => a in t ? h(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[a] = l, V = (t, a) => {
  for (var l in a || (a = {}))
    Z.call(a, l) && r(t, l, a[l]);
  if (n)
    for (var l of n(a))
      p.call(a, l) && r(t, l, a[l]);
  return t;
}, m = (t, a) => c(t, o(a));
import e, { forwardRef as A } from "react";
import M from "../lib/IconBase.es.js";
const i = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M200,36H56A20,20,0,0,0,36,56V200a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36ZM60,60h56V196H60ZM196,196H140V60h56Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
      "path",
      {
        d: "M208,56V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H200A8,8,0,0,1,208,56Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ e.createElement("path", { d: "M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40ZM56,56h64V200H56ZM200,200H136V56h64V200Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M120,44V212a4,4,0,0,1-4,4H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40h60A4,4,0,0,1,120,44Zm80-4H140a4,4,0,0,0-4,4V212a4,4,0,0,0,4,4h60a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M200,42H56A14,14,0,0,0,42,56V200a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42ZM54,200V56a2,2,0,0,1,2-2h66V202H56A2,2,0,0,1,54,200Zm148,0a2,2,0,0,1-2,2H134V54h66a2,2,0,0,1,2,2Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40ZM56,56h64V200H56ZM200,200H136V56h64V200Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M200,44H56A12,12,0,0,0,44,56V200a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44ZM52,200V56a4,4,0,0,1,4-4h68V204H56A4,4,0,0,1,52,200Zm152,0a4,4,0,0,1-4,4H132V52h68a4,4,0,0,1,4,4Z" }))
  ]
]), H = A((t, a) => /* @__PURE__ */ e.createElement(M, m(V({ ref: a }, t), { weights: i })));
H.displayName = "SquareSplitHorizontal";
const g = H;
export {
  g as default
};
