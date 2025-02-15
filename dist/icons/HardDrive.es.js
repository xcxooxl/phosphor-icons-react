var A = Object.defineProperty, Z = Object.defineProperties;
var d = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
var l = (t, a, m) => a in t ? A(t, a, { enumerable: !0, configurable: !0, writable: !0, value: m }) : t[a] = m, n = (t, a) => {
  for (var m in a || (a = {}))
    o.call(a, m) && l(t, m, a[m]);
  if (r)
    for (var m of r(a))
      E.call(a, m) && l(t, m, a[m]);
  return t;
}, H = (t, a) => Z(t, d(a));
import e, { forwardRef as p } from "react";
import v from "../lib/IconBase.es.js";
const V = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M224,60H32A20,20,0,0,0,12,80v96a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V80A20,20,0,0,0,224,60Zm-4,112H36V84H220Zm-56-44a16,16,0,1,1,16,16A16,16,0,0,1,164,128Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
      "path",
      {
        d: "M232,80v96a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H224A8,8,0,0,1,232,80Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ e.createElement("path", { d: "M224,64H32A16,16,0,0,0,16,80v96a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V80A16,16,0,0,0,224,64Zm0,112H32V80H224v96Zm-24-48a12,12,0,1,1-12-12A12,12,0,0,1,200,128Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M224,64H32A16,16,0,0,0,16,80v96a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V80A16,16,0,0,0,224,64Zm-36,76a12,12,0,1,1,12-12A12,12,0,0,1,188,140Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M224,66H32A14,14,0,0,0,18,80v96a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V80A14,14,0,0,0,224,66Zm2,110a2,2,0,0,1-2,2H32a2,2,0,0,1-2-2V80a2,2,0,0,1,2-2H224a2,2,0,0,1,2,2Zm-28-48a10,10,0,1,1-10-10A10,10,0,0,1,198,128Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M224,64H32A16,16,0,0,0,16,80v96a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V80A16,16,0,0,0,224,64Zm0,112H32V80H224v96Zm-24-48a12,12,0,1,1-12-12A12,12,0,0,1,200,128Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M224,68H32A12,12,0,0,0,20,80v96a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V80A12,12,0,0,0,224,68Zm4,108a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H224a4,4,0,0,1,4,4Zm-32-48a8,8,0,1,1-8-8A8,8,0,0,1,196,128Z" }))
  ]
]), c = p((t, a) => /* @__PURE__ */ e.createElement(v, H(n({ ref: a }, t), { weights: V })));
c.displayName = "HardDrive";
const u = c;
export {
  u as default
};
