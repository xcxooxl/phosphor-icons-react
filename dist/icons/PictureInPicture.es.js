var V = Object.defineProperty, v = Object.defineProperties;
var Z = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
var r = (t, a, H) => a in t ? V(t, a, { enumerable: !0, configurable: !0, writable: !0, value: H }) : t[a] = H, l = (t, a) => {
  for (var H in a || (a = {}))
    A.call(a, H) && r(t, H, a[H]);
  if (n)
    for (var H of n(a))
      M.call(a, H) && r(t, H, a[H]);
  return t;
}, m = (t, a) => v(t, Z(a));
import e, { forwardRef as h } from "react";
import u from "../lib/IconBase.es.js";
const i = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M216,44H40A20,20,0,0,0,20,64V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V64A20,20,0,0,0,216,44ZM44,68H212v48H144a20,20,0,0,0-20,20v52H44ZM148,188V140h64v48Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
      "path",
      {
        d: "M224,64v64H144a8,8,0,0,0-8,8v64H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H216A8,8,0,0,1,224,64Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ e.createElement("path", { d: "M216,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM40,64H216v56H144a16,16,0,0,0-16,16v56H40ZM216,192H144V136h72v56Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M216,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM40,64H216v56H144a16,16,0,0,0-16,16v56H40Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M216,50H40A14,14,0,0,0,26,64V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V64A14,14,0,0,0,216,50ZM38,192V64a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2v58H144a14,14,0,0,0-14,14v58H40A2,2,0,0,1,38,192Zm178,2H142V136a2,2,0,0,1,2-2h74v58A2,2,0,0,1,216,194Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M216,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM40,64H216v56H144a16,16,0,0,0-16,16v56H40ZM216,192H144V136h72v56Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M216,52H40A12,12,0,0,0,28,64V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V64A12,12,0,0,0,216,52ZM36,192V64a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4v60H144a12,12,0,0,0-12,12v60H40A4,4,0,0,1,36,192Zm180,4H140V136a4,4,0,0,1,4-4h76v60A4,4,0,0,1,216,196Z" }))
  ]
]), c = h((t, a) => /* @__PURE__ */ e.createElement(u, m(l({ ref: a }, t), { weights: i })));
c.displayName = "PictureInPicture";
const d = c;
export {
  d as default
};
