var V = Object.defineProperty, Z = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var m = (t, a, l) => a in t ? V(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[a] = l, r = (t, a) => {
  for (var l in a || (a = {}))
    p.call(a, l) && m(t, l, a[l]);
  if (n)
    for (var l of n(a))
      A.call(a, l) && m(t, l, a[l]);
  return t;
}, H = (t, a) => Z(t, i(a));
import e, { forwardRef as g } from "react";
import o from "../lib/IconBase.es.js";
const E = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M236,56V200a12,12,0,0,1-24,0V56a12,12,0,0,1,24,0ZM196,96v64a20,20,0,0,1-20,20H32a20,20,0,0,1-20-20V96A20,20,0,0,1,32,76H176A20,20,0,0,1,196,96Zm-24,4H36v56H172Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
      "path",
      {
        d: "M192,96v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H184A8,8,0,0,1,192,96Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ e.createElement("path", { d: "M232,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0ZM200,96v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H184A16,16,0,0,1,200,96Zm-16,0H32v64H184Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M232,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0ZM184,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V96A16,16,0,0,0,184,80Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M230,56V200a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0ZM198,96v64a14,14,0,0,1-14,14H32a14,14,0,0,1-14-14V96A14,14,0,0,1,32,82H184A14,14,0,0,1,198,96Zm-12,0a2,2,0,0,0-2-2H32a2,2,0,0,0-2,2v64a2,2,0,0,0,2,2H184a2,2,0,0,0,2-2Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M232,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0ZM200,96v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H184A16,16,0,0,1,200,96Zm-16,0H32v64H184Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M228,56V200a4,4,0,0,1-8,0V56a4,4,0,0,1,8,0ZM196,96v64a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V96A12,12,0,0,1,32,84H184A12,12,0,0,1,196,96Zm-8,0a4,4,0,0,0-4-4H32a4,4,0,0,0-4,4v64a4,4,0,0,0,4,4H184a4,4,0,0,0,4-4Z" }))
  ]
]), c = g((t, a) => /* @__PURE__ */ e.createElement(o, H(r({ ref: a }, t), { weights: E })));
c.displayName = "AlignRightSimple";
const v = c;
export {
  v as default
};
