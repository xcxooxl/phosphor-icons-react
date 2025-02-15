var c = Object.defineProperty, V = Object.defineProperties;
var o = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
var A = (a, t, l) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[t] = l, r = (a, t) => {
  for (var l in t || (t = {}))
    p.call(t, l) && A(a, l, t[l]);
  if (n)
    for (var l of n(t))
      E.call(t, l) && A(a, l, t[l]);
  return a;
}, m = (a, t) => V(a, o(t));
import e, { forwardRef as M } from "react";
import d from "../lib/IconBase.es.js";
const Z = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M200.73,36H55.27A19.3,19.3,0,0,0,36,55.27V200.73A19.3,19.3,0,0,0,55.27,220H200.73A19.3,19.3,0,0,0,220,200.73V55.27A19.3,19.3,0,0,0,200.73,36ZM196,196H60V60H196Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
      "path",
      {
        d: "M208,55.27V200.73a7.28,7.28,0,0,1-7.27,7.27H55.27A7.28,7.28,0,0,1,48,200.73V55.27A7.28,7.28,0,0,1,55.27,48H200.73A7.28,7.28,0,0,1,208,55.27Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ e.createElement("path", { d: "M200.73,40H55.27A15.29,15.29,0,0,0,40,55.27V200.73A15.29,15.29,0,0,0,55.27,216H200.73A15.29,15.29,0,0,0,216,200.73V55.27A15.29,15.29,0,0,0,200.73,40ZM200,200H56V56H200Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M216,55.27V200.73A15.29,15.29,0,0,1,200.73,216H55.27A15.29,15.29,0,0,1,40,200.73V55.27A15.29,15.29,0,0,1,55.27,40H200.73A15.29,15.29,0,0,1,216,55.27Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M200.73,42H55.27A13.28,13.28,0,0,0,42,55.27V200.73A13.28,13.28,0,0,0,55.27,214H200.73A13.28,13.28,0,0,0,214,200.73V55.27A13.28,13.28,0,0,0,200.73,42ZM202,200.73a1.27,1.27,0,0,1-1.27,1.27H55.27A1.27,1.27,0,0,1,54,200.73V55.27A1.27,1.27,0,0,1,55.27,54H200.73A1.27,1.27,0,0,1,202,55.27Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M200.73,40H55.27A15.29,15.29,0,0,0,40,55.27V200.73A15.29,15.29,0,0,0,55.27,216H200.73A15.29,15.29,0,0,0,216,200.73V55.27A15.29,15.29,0,0,0,200.73,40ZM200,200H56V56H200Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M200.73,44H55.27A11.29,11.29,0,0,0,44,55.27V200.73A11.29,11.29,0,0,0,55.27,212H200.73A11.29,11.29,0,0,0,212,200.73V55.27A11.29,11.29,0,0,0,200.73,44ZM204,200.73a3.28,3.28,0,0,1-3.27,3.27H55.27A3.28,3.28,0,0,1,52,200.73V55.27A3.28,3.28,0,0,1,55.27,52H200.73A3.28,3.28,0,0,1,204,55.27Z" }))
  ]
]), H = M((a, t) => /* @__PURE__ */ e.createElement(d, m(r({ ref: t }, a), { weights: Z })));
H.displayName = "Stop";
const i = H;
export {
  i as default
};
