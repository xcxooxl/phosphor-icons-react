var Z = Object.defineProperty, c = Object.defineProperties;
var M = Object.getOwnPropertyDescriptors;
var V = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var l = (H, e, t) => e in H ? Z(H, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : H[e] = t, n = (H, e) => {
  for (var t in e || (e = {}))
    d.call(e, t) && l(H, t, e[t]);
  if (V)
    for (var t of V(e))
      o.call(e, t) && l(H, t, e[t]);
  return H;
}, m = (H, e) => c(H, M(e));
import a, { forwardRef as A } from "react";
import E from "../lib/IconBase.es.js";
const p = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36ZM44,100H76v16H44ZM76,60V76H44V60ZM44,140H76v56H44Zm168,56H100V60H212Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M88,48V208H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8Z", opacity: "0.2" }), /* @__PURE__ */ a.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,152H56a8,8,0,0,0,0-16H40V120H56a8,8,0,0,0,0-16H40V88H56a8,8,0,0,0,0-16H40V56H80V200H40Zm176,48H96V56H216V200Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM64,152H48a8,8,0,0,1,0-16H64a8,8,0,0,1,0,16Zm0-32H48a8,8,0,0,1,0-16H64a8,8,0,0,1,0,16Zm0-32H48a8,8,0,0,1,0-16H64a8,8,0,0,1,0,16ZM216,200H88V56H216V200Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM38,200V150H56a6,6,0,0,0,0-12H38V118H56a6,6,0,0,0,0-12H38V86H56a6,6,0,0,0,0-12H38V56a2,2,0,0,1,2-2H82V202H40A2,2,0,0,1,38,200Zm180,0a2,2,0,0,1-2,2H94V54H216a2,2,0,0,1,2,2Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,152H56a8,8,0,0,0,0-16H40V120H56a8,8,0,0,0,0-16H40V88H56a8,8,0,0,0,0-16H40V56H80V200H40Zm176,48H96V56H216V200Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM36,200V148H56a4,4,0,0,0,0-8H36V116H56a4,4,0,0,0,0-8H36V84H56a4,4,0,0,0,0-8H36V56a4,4,0,0,1,4-4H84V204H40A4,4,0,0,1,36,200Zm184,0a4,4,0,0,1-4,4H92V52H216a4,4,0,0,1,4,4Z" }))
  ]
]), r = A((H, e) => /* @__PURE__ */ a.createElement(E, m(n({ ref: e }, H), { weights: p })));
r.displayName = "Sidebar";
const u = r;
export {
  u as default
};
