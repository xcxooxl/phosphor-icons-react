var Z = Object.defineProperty, c = Object.defineProperties;
var A = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var l = (t, e, H) => e in t ? Z(t, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : t[e] = H, n = (t, e) => {
  for (var H in e || (e = {}))
    v.call(e, H) && l(t, H, e[H]);
  if (m)
    for (var H of m(e))
      o.call(e, H) && l(t, H, e[H]);
  return t;
}, r = (t, e) => c(t, A(e));
import a, { forwardRef as E } from "react";
import p from "../lib/IconBase.es.js";
const d = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,136H48a20,20,0,0,0-20,20v36a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V156A20,20,0,0,0,208,136Zm-4,52H52V160H204Zm4-144H48A20,20,0,0,0,28,64v36a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V64A20,20,0,0,0,208,44Zm-4,52H52V68H204Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M216,152v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8H208A8,8,0,0,1,216,152Zm-8-96H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V64A8,8,0,0,0,208,56Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M208,136H48a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V152A16,16,0,0,0,208,136Zm0,56H48V152H208v40Zm0-144H48A16,16,0,0,0,32,64v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V64A16,16,0,0,0,208,48Zm0,56H48V64H208v40Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M224,152v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a16,16,0,0,1,16-16H208A16,16,0,0,1,224,152ZM208,48H48A16,16,0,0,0,32,64v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V64A16,16,0,0,0,208,48Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,138H48a14,14,0,0,0-14,14v40a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V152A14,14,0,0,0,208,138Zm2,54a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM208,50H48A14,14,0,0,0,34,64v40a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V64A14,14,0,0,0,208,50Zm2,54a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,136H48a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V152A16,16,0,0,0,208,136Zm0,56H48V152H208v40Zm0-144H48A16,16,0,0,0,32,64v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V64A16,16,0,0,0,208,48Zm0,56H48V64H208v40Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,140H48a12,12,0,0,0-12,12v40a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V152A12,12,0,0,0,208,140Zm4,52a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM208,52H48A12,12,0,0,0,36,64v40a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V64A12,12,0,0,0,208,52Zm4,52a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z" }))
  ]
]), V = E((t, e) => /* @__PURE__ */ a.createElement(p, r(n({ ref: e }, t), { weights: d })));
V.displayName = "Rows";
const g = V;
export {
  g as default
};
