var A = Object.defineProperty, r = Object.defineProperties;
var V = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var M = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, e, Z) => e in t ? A(t, e, { enumerable: !0, configurable: !0, writable: !0, value: Z }) : t[e] = Z, h = (t, e) => {
  for (var Z in e || (e = {}))
    M.call(e, Z) && m(t, Z, e[Z]);
  if (l)
    for (var Z of l(e))
      c.call(e, Z) && m(t, Z, e[Z]);
  return t;
}, n = (t, e) => r(t, V(e));
import a, { forwardRef as v } from "react";
import L from "../lib/IconBase.es.js";
const o = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M184,20H72A36,36,0,0,0,36,56V184a36,36,0,0,0,36,36h0l-9.6,12.8a12,12,0,1,0,19.2,14.4L102,220h52l20.4,27.2a12,12,0,0,0,19.2-14.4L184,220h0a36,36,0,0,0,36-36V56A36,36,0,0,0,184,20ZM60,116V84h56v32Zm80-32h56v32H140ZM72,44H184a12,12,0,0,1,12,12v4H60V56A12,12,0,0,1,72,44ZM184,196H72a12,12,0,0,1-12-12V140H196v44A12,12,0,0,1,184,196Zm-80-28a16,16,0,1,1-16-16A16,16,0,0,1,104,168Zm80,0a16,16,0,1,1-16-16A16,16,0,0,1,184,168Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,72v56H48V72Z", opacity: "0.2" }), /* @__PURE__ */ a.createElement("path", { d: "M184,24H72A32,32,0,0,0,40,56V184a32,32,0,0,0,32,32h8L65.6,235.2a8,8,0,1,0,12.8,9.6L100,216h56l21.6,28.8a8,8,0,1,0,12.8-9.6L176,216h8a32,32,0,0,0,32-32V56A32,32,0,0,0,184,24ZM56,120V80h64v40Zm80-40h64v40H136ZM72,40H184a16,16,0,0,1,16,16v8H56V56A16,16,0,0,1,72,40ZM184,200H72a16,16,0,0,1-16-16V136H200v48A16,16,0,0,1,184,200ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm88,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M184,24H72A32,32,0,0,0,40,56V184a32,32,0,0,0,32,32h8L65.6,235.2a8,8,0,1,0,12.8,9.6L100,216h56l21.6,28.8a8,8,0,1,0,12.8-9.6L176,216h8a32,32,0,0,0,32-32V56A32,32,0,0,0,184,24ZM84,184a12,12,0,1,1,12-12A12,12,0,0,1,84,184Zm36-64H56V80h64Zm52,64a12,12,0,1,1,12-12A12,12,0,0,1,172,184Zm28-64H136V80h64Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M184,26H72A30,30,0,0,0,42,56V184a30,30,0,0,0,30,30H84L67.2,236.4a6,6,0,1,0,9.6,7.2L99,214h58l22.2,29.6a6,6,0,0,0,9.6-7.2L172,214h12a30,30,0,0,0,30-30V56A30,30,0,0,0,184,26ZM54,122V78h68v44Zm80-44h68v44H134ZM72,38H184a18,18,0,0,1,18,18V66H54V56A18,18,0,0,1,72,38ZM184,202H72a18,18,0,0,1-18-18V134H202v50A18,18,0,0,1,184,202Zm-2-30a10,10,0,1,1-10-10A10,10,0,0,1,182,172Zm-88,0a10,10,0,1,1-10-10A10,10,0,0,1,94,172Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M184,24H72A32,32,0,0,0,40,56V184a32,32,0,0,0,32,32h8L65.6,235.2a8,8,0,1,0,12.8,9.6L100,216h56l21.6,28.8a8,8,0,1,0,12.8-9.6L176,216h8a32,32,0,0,0,32-32V56A32,32,0,0,0,184,24ZM56,120V80h64v40Zm80-40h64v40H136ZM72,40H184a16,16,0,0,1,16,16v8H56V56A16,16,0,0,1,72,40ZM184,200H72a16,16,0,0,1-16-16V136H200v48A16,16,0,0,1,184,200ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm88,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M184,28H72A28,28,0,0,0,44,56V184a28,28,0,0,0,28,28H88L68.8,237.6a4,4,0,1,0,6.4,4.8L98,212h60l22.8,30.4a4,4,0,0,0,6.4-4.8L168,212h16a28,28,0,0,0,28-28V56A28,28,0,0,0,184,28ZM52,124V76h72v48Zm80-48h72v48H132ZM72,36H184a20,20,0,0,1,20,20V68H52V56A20,20,0,0,1,72,36ZM184,204H72a20,20,0,0,1-20-20V132H204v52A20,20,0,0,1,184,204ZM92,172a8,8,0,1,1-8-8A8,8,0,0,1,92,172Zm88,0a8,8,0,1,1-8-8A8,8,0,0,1,180,172Z" }))
  ]
]), H = v((t, e) => /* @__PURE__ */ a.createElement(L, n(h({ ref: e }, t), { weights: o })));
H.displayName = "Train";
const i = H;
export {
  i as default
};
