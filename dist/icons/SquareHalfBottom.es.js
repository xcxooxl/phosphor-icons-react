var V = Object.defineProperty, v = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var H = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var l = (a, t, m) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[t] = m, n = (a, t) => {
  for (var m in t || (t = {}))
    c.call(t, m) && l(a, m, t[m]);
  if (H)
    for (var m of H(t))
      o.call(t, m) && l(a, m, t[m]);
  return a;
}, Z = (a, t) => v(a, h(t));
import e, { forwardRef as A } from "react";
import E from "../lib/IconBase.es.js";
const p = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M200,36H56A20,20,0,0,0,36,56V200a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,24v56H60V60Zm-80,80v56H100V140Zm24,0h16v56H140Zm-80,0H76v56H60Zm120,56V140h16v56Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,16v64H56V56Zm0,144H56V136H200v64Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,16v72H56V56Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M200,42H56A14,14,0,0,0,42,56V200a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42ZM56,54H200a2,2,0,0,1,2,2v66H54V56A2,2,0,0,1,56,54Zm50,80v68H86V134Zm12,0h20v68H118Zm32,0h20v68H150ZM54,200V134H74v68H56A2,2,0,0,1,54,200Zm146,2H182V134h20v66A2,2,0,0,1,200,202Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,16v64H56V56Zm-96,80v64H88V136Zm16,0h16v64H120Zm32,0h16v64H152Zm-96,0H72v64H56Zm144,64H184V136h16v64Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M200,44H56A12,12,0,0,0,44,56V200a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44ZM56,52H200a4,4,0,0,1,4,4v68H52V56A4,4,0,0,1,56,52Zm52,80v72H84V132Zm8,0h24v72H116Zm32,0h24v72H148ZM52,200V132H76v72H56A4,4,0,0,1,52,200Zm148,4H180V132h24v68A4,4,0,0,1,200,204Z" }))
  ]
]), r = A((a, t) => /* @__PURE__ */ e.createElement(E, Z(n({ ref: t }, a), { weights: p })));
r.displayName = "SquareHalfBottom";
const f = r;
export {
  f as default
};
