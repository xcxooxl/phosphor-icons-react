var A = Object.defineProperty, V = Object.defineProperties;
var Z = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
var r = (t, a, l) => a in t ? A(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[a] = l, m = (t, a) => {
  for (var l in a || (a = {}))
    o.call(a, l) && r(t, l, a[l]);
  if (n)
    for (var l of n(a))
      M.call(a, l) && r(t, l, a[l]);
  return t;
}, c = (t, a) => V(t, Z(a));
import e, { forwardRef as d } from "react";
import E from "../lib/IconBase.es.js";
const h = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,159L69,52H204ZM52,69,187,204H52Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
      "path",
      {
        d: "M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ e.createElement("path", { d: "M224,48a16,16,0,0,0-16-16H48a15.91,15.91,0,0,0-10.66,4.1,9.08,9.08,0,0,0-1.24,1.24A15.91,15.91,0,0,0,32,48V208a16,16,0,0,0,16,16H208a15.91,15.91,0,0,0,10.66-4.1,7.35,7.35,0,0,0,.65-.59,6,6,0,0,0,.58-.65A15.87,15.87,0,0,0,224,208ZM208,196.7,59.31,48H208ZM48,59.31,196.69,208H48Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM187.31,187.31a8,8,0,0,1-11.31,0L68.69,80A8,8,0,0,1,80,68.69L187.31,176A8,8,0,0,1,187.31,187.31Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,14V201.52L54.49,46H208A2,2,0,0,1,210,48ZM46,208V54.48L201.51,210H48A2,2,0,0,1,46,208Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,208V59.31L196.69,208ZM59.31,48H208V196.7Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,12V206.34L49.66,44H208A4,4,0,0,1,212,48ZM44,208V49.66L206.34,212H48A4,4,0,0,1,44,208Z" }))
  ]
]), H = d((t, a) => /* @__PURE__ */ e.createElement(E, c(m({ ref: a }, t), { weights: h })));
H.displayName = "Placeholder";
const i = H;
export {
  i as default
};
