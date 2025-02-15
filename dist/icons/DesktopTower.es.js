var l = Object.defineProperty, n = Object.defineProperties;
var r = Object.getOwnPropertyDescriptors;
var H = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (t, e, h) => e in t ? l(t, e, { enumerable: !0, configurable: !0, writable: !0, value: h }) : t[e] = h, Z = (t, e) => {
  for (var h in e || (e = {}))
    c.call(e, h) && m(t, h, e[h]);
  if (H)
    for (var h of H(e))
      o.call(e, h) && m(t, h, e[h]);
  return t;
}, A = (t, e) => n(t, r(e));
import a, { forwardRef as M } from "react";
import p from "../lib/IconBase.es.js";
const E = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M28,96v68a4,4,0,0,0,4,4h76a12,12,0,0,1,0,24h-8v12h8a12,12,0,0,1,0,24H68a12,12,0,0,1,0-24h8V192H32A28,28,0,0,1,4,164V96A28,28,0,0,1,32,68h76a12,12,0,0,1,0,24H32A4,4,0,0,0,28,96Zm152-8h24a12,12,0,0,0,0-24H180a12,12,0,0,0,0,24Zm0,36h24a12,12,0,0,0,0-24H180a12,12,0,0,0,0,24Zm72-76V208a20,20,0,0,1-20,20H152a20,20,0,0,1-20-20V48a20,20,0,0,1,20-20h80A20,20,0,0,1,252,48Zm-24,4H156V204h72ZM192,160a16,16,0,1,0,16,16A16,16,0,0,0,192,160Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M240,48V208a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h80A8,8,0,0,1,240,48Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M24,96v72a8,8,0,0,0,8,8h80a8,8,0,0,1,0,16H96v16h16a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16H80V192H32A24,24,0,0,1,8,168V96A24,24,0,0,1,32,72h80a8,8,0,0,1,0,16H32A8,8,0,0,0,24,96ZM208,64H176a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm0,32H176a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm40-48V208a16,16,0,0,1-16,16H152a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h80A16,16,0,0,1,248,48ZM232,208V48H152V208h80Zm-40-40a12,12,0,1,0,12,12A12,12,0,0,0,192,168Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M120,76V188a4,4,0,0,1-4,4H96v16h15.73a8.18,8.18,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53H64.27A8.18,8.18,0,0,1,56,216.53,8,8,0,0,1,64,208H80V192H32A24,24,0,0,1,8,168V96A24,24,0,0,1,32,72h84A4,4,0,0,1,120,76ZM248,48V208a16,16,0,0,1-16,16H152a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h80A16,16,0,0,1,248,48ZM203.9,181.57a12,12,0,1,0-10.34,10.33A12,12,0,0,0,203.9,181.57ZM224,103.47A8.18,8.18,0,0,0,215.73,96H168.27a8.18,8.18,0,0,0-8.25,7.47,8,8,0,0,0,8,8.53h48A8,8,0,0,0,224,103.47Zm0-32A8.18,8.18,0,0,0,215.73,64H168.27A8.18,8.18,0,0,0,160,71.47,8,8,0,0,0,168,80h48A8,8,0,0,0,224,71.47Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M22,96v72a10,10,0,0,0,10,10h80a6,6,0,0,1,0,12H94v20h18a6,6,0,0,1,0,12H64a6,6,0,0,1,0-12H82V190H32a22,22,0,0,1-22-22V96A22,22,0,0,1,32,74h80a6,6,0,0,1,0,12H32A10,10,0,0,0,22,96ZM208,66H176a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12Zm0,32H176a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12Zm38-50V208a14,14,0,0,1-14,14H152a14,14,0,0,1-14-14V48a14,14,0,0,1,14-14h80A14,14,0,0,1,246,48Zm-12,0a2,2,0,0,0-2-2H152a2,2,0,0,0-2,2V208a2,2,0,0,0,2,2h80a2,2,0,0,0,2-2ZM192,170a10,10,0,1,0,10,10A10,10,0,0,0,192,170Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M24,96v72a8,8,0,0,0,8,8h80a8,8,0,0,1,0,16H96v16h16a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16H80V192H32A24,24,0,0,1,8,168V96A24,24,0,0,1,32,72h80a8,8,0,0,1,0,16H32A8,8,0,0,0,24,96ZM208,64H176a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm0,32H176a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm40-48V208a16,16,0,0,1-16,16H152a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h80A16,16,0,0,1,248,48ZM232,208V48H152V208h80Zm-40-40a12,12,0,1,0,12,12A12,12,0,0,0,192,168Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M20,96v72a12,12,0,0,0,12,12h80a4,4,0,0,1,0,8H92v24h20a4,4,0,0,1,0,8H64a4,4,0,0,1,0-8H84V188H32a20,20,0,0,1-20-20V96A20,20,0,0,1,32,76h80a4,4,0,0,1,0,8H32A12,12,0,0,0,20,96ZM208,68H176a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8Zm0,32H176a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8Zm36-52V208a12,12,0,0,1-12,12H152a12,12,0,0,1-12-12V48a12,12,0,0,1,12-12h80A12,12,0,0,1,244,48Zm-8,0a4,4,0,0,0-4-4H152a4,4,0,0,0-4,4V208a4,4,0,0,0,4,4h80a4,4,0,0,0,4-4ZM192,172a8,8,0,1,0,8,8A8,8,0,0,0,192,172Z" }))
  ]
]), V = M((t, e) => /* @__PURE__ */ a.createElement(p, A(Z({ ref: e }, t), { weights: E })));
V.displayName = "DesktopTower";
const g = V;
export {
  g as default
};
