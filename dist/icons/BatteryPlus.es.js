var A = Object.defineProperty, V = Object.defineProperties;
var Z = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var H = (t, e, m) => e in t ? A(t, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : t[e] = m, n = (t, e) => {
  for (var m in e || (e = {}))
    h.call(e, m) && H(t, m, e[m]);
  if (l)
    for (var m of l(e))
      c.call(e, m) && H(t, m, e[m]);
  return t;
}, r = (t, e) => V(t, Z(e));
import a, { forwardRef as o } from "react";
import E from "../lib/IconBase.es.js";
const p = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M152,128a12,12,0,0,1-12,12H128v12a12,12,0,0,1-24,0V140H92a12,12,0,0,1,0-24h12V104a12,12,0,0,1,24,0v12h12A12,12,0,0,1,152,128Zm72-48v96a28,28,0,0,1-28,28H28A28,28,0,0,1,0,176V80A28,28,0,0,1,28,52H196A28,28,0,0,1,224,80Zm-24,0a4,4,0,0,0-4-4H28a4,4,0,0,0-4,4v96a4,4,0,0,0,4,4H196a4,4,0,0,0,4-4Zm44,12a12,12,0,0,0-12,12v48a12,12,0,0,0,24,0V104A12,12,0,0,0,244,92Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M216,80v96a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V80A16,16,0,0,1,32,64H200A16,16,0,0,1,216,80Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M152,128a8,8,0,0,1-8,8H124v20a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h20V100a8,8,0,0,1,16,0v20h20A8,8,0,0,1,152,128Zm72-48v96a24,24,0,0,1-24,24H32A24,24,0,0,1,8,176V80A24,24,0,0,1,32,56H200A24,24,0,0,1,224,80Zm-16,0a8,8,0,0,0-8-8H32a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8Zm40,8a8,8,0,0,0-8,8v64a8,8,0,0,0,16,0V96A8,8,0,0,0,248,88Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M200,56H32A24,24,0,0,0,8,80v96a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V80A24,24,0,0,0,200,56Zm-56,80H124v20a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h20V100a8,8,0,0,1,16,0v20h20a8,8,0,0,1,0,16ZM256,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M150,128a6,6,0,0,1-6,6H122v22a6,6,0,0,1-12,0V134H88a6,6,0,0,1,0-12h22V100a6,6,0,0,1,12,0v22h22A6,6,0,0,1,150,128Zm72-48v96a22,22,0,0,1-22,22H32a22,22,0,0,1-22-22V80A22,22,0,0,1,32,58H200A22,22,0,0,1,222,80Zm-12,0a10,10,0,0,0-10-10H32A10,10,0,0,0,22,80v96a10,10,0,0,0,10,10H200a10,10,0,0,0,10-10Zm38,10a6,6,0,0,0-6,6v64a6,6,0,0,0,12,0V96A6,6,0,0,0,248,90Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M152,128a8,8,0,0,1-8,8H124v20a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h20V100a8,8,0,0,1,16,0v20h20A8,8,0,0,1,152,128Zm72-48v96a24,24,0,0,1-24,24H32A24,24,0,0,1,8,176V80A24,24,0,0,1,32,56H200A24,24,0,0,1,224,80Zm-16,0a8,8,0,0,0-8-8H32a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8Zm40,8a8,8,0,0,0-8,8v64a8,8,0,0,0,16,0V96A8,8,0,0,0,248,88Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M148,128a4,4,0,0,1-4,4H120v24a4,4,0,0,1-8,0V132H88a4,4,0,0,1,0-8h24V100a4,4,0,0,1,8,0v24h24A4,4,0,0,1,148,128Zm72-48v96a20,20,0,0,1-20,20H32a20,20,0,0,1-20-20V80A20,20,0,0,1,32,60H200A20,20,0,0,1,220,80Zm-8,0a12,12,0,0,0-12-12H32A12,12,0,0,0,20,80v96a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm36,12a4,4,0,0,0-4,4v64a4,4,0,0,0,8,0V96A4,4,0,0,0,248,92Z" }))
  ]
]), v = o((t, e) => /* @__PURE__ */ a.createElement(E, r(n({ ref: e }, t), { weights: p })));
v.displayName = "BatteryPlus";
const g = v;
export {
  g as default
};
