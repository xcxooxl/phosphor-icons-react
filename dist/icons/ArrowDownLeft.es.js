var E = Object.defineProperty, p = Object.defineProperties;
var d = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var r = (t, a, l) => a in t ? E(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[a] = l, m = (t, a) => {
  for (var l in a || (a = {}))
    h.call(a, l) && r(t, l, a[l]);
  if (n)
    for (var l of n(a))
      L.call(a, l) && r(t, l, a[l]);
  return t;
}, c = (t, a) => p(t, d(a));
import e, { forwardRef as H } from "react";
import f from "../lib/IconBase.es.js";
const g = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M200.49,72.48,93,180h75a12,12,0,0,1,0,24H64a12,12,0,0,1-12-12V88a12,12,0,0,1,24,0v75L183.51,55.51a12,12,0,0,1,17,17Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M168,192H64V88Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M197.66,58.34a8,8,0,0,0-11.32,0L116,128.69,69.66,82.34A8,8,0,0,0,56,88V192a8,8,0,0,0,8,8H168a8,8,0,0,0,5.66-13.66L127.31,140l70.35-70.34A8,8,0,0,0,197.66,58.34ZM72,184V107.31l38.34,38.34h0L148.69,184Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M197.66,69.66,127.31,140l46.35,46.34A8,8,0,0,1,168,200H64a8,8,0,0,1-8-8V88a8,8,0,0,1,13.66-5.66L116,128.69l70.34-70.35a8,8,0,0,1,11.32,11.32Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M196.24,68.24,78.48,186H168a6,6,0,0,1,0,12H64a6,6,0,0,1-6-6V88a6,6,0,0,1,12,0v89.52L187.76,59.76a6,6,0,0,1,8.48,8.48Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M197.66,69.66,83.31,184H168a8,8,0,0,1,0,16H64a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0v84.69L186.34,58.34a8,8,0,0,1,11.32,11.32Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M194.83,66.83,73.66,188H168a4,4,0,0,1,0,8H64a4,4,0,0,1-4-4V88a4,4,0,0,1,8,0v94.34L189.17,61.17a4,4,0,1,1,5.66,5.66Z" }))
  ]
]), o = H((t, a) => /* @__PURE__ */ e.createElement(f, c(m({ ref: a }, t), { weights: g })));
o.displayName = "ArrowDownLeft";
const i = o;
export {
  i as default
};
