var c = Object.defineProperty, h = Object.defineProperties;
var o = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var E = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var n = (t, e, r) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, H = (t, e) => {
  for (var r in e || (e = {}))
    E.call(e, r) && n(t, r, e[r]);
  if (l)
    for (var r of l(e))
      Z.call(e, r) && n(t, r, e[r]);
  return t;
}, m = (t, e) => h(t, o(e));
import a, { forwardRef as p } from "react";
import M from "../lib/IconBase.es.js";
const d = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M52,52V204H80a12,12,0,0,1,0,24H40a12,12,0,0,1-12-12V40A12,12,0,0,1,40,28H80a12,12,0,0,1,0,24ZM216,28H176a12,12,0,0,0,0,24h28V204H176a12,12,0,0,0,0,24h40a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,40V216H40V40Z", opacity: "0.2" }), /* @__PURE__ */ a.createElement("path", { d: "M48,48V208H80a8,8,0,0,1,0,16H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16ZM216,32H176a8,8,0,0,0,0,16h32V208H176a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM104,176a8,8,0,0,1,0,16H72a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H80v96Zm88,8a8,8,0,0,1-8,8H152a8,8,0,0,1,0-16h24V80H152a8,8,0,0,1,0-16h32a8,8,0,0,1,8,8Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M46,46V210H80a6,6,0,0,1,0,12H40a6,6,0,0,1-6-6V40a6,6,0,0,1,6-6H80a6,6,0,0,1,0,12ZM216,34H176a6,6,0,0,0,0,12h34V210H176a6,6,0,0,0,0,12h40a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M48,48V208H80a8,8,0,0,1,0,16H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16ZM216,32H176a8,8,0,0,0,0,16h32V208H176a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M44,44V212H80a4,4,0,0,1,0,8H40a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H80a4,4,0,0,1,0,8Zm172-8H176a4,4,0,0,0,0,8h36V212H176a4,4,0,0,0,0,8h40a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36Z" }))
  ]
]), V = p((t, e) => /* @__PURE__ */ a.createElement(M, m(H({ ref: e }, t), { weights: d })));
V.displayName = "BracketsSquare";
const i = V;
export {
  i as default
};
