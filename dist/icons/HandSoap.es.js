var r = Object.defineProperty, A = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var V = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var n = (t, e, H) => e in t ? r(t, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : t[e] = H, h = (t, e) => {
  for (var H in e || (e = {}))
    v.call(e, H) && n(t, H, e[H]);
  if (V)
    for (var H of V(e))
      Z.call(e, H) && n(t, H, e[H]);
  return t;
}, l = (t, e) => A(t, c(e));
import a, { forwardRef as o } from "react";
import p from "../lib/IconBase.es.js";
const d = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M188,97.68V92a36,36,0,0,0-36-36H140V36h28a4,4,0,0,1,4,4,12,12,0,0,0,24,0,28,28,0,0,0-28-28H104a12,12,0,0,0,0,24h12V56H104A36,36,0,0,0,68,92v5.68A44.06,44.06,0,0,0,36,140v76a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V140A44.06,44.06,0,0,0,188,97.68ZM104,80h48a12,12,0,0,1,12,12v4H92V92A12,12,0,0,1,104,80Zm92,132H60V140a20,20,0,0,1,20-20h96a20,20,0,0,1,20,20Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M208,136v80a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V136a32,32,0,0,1,32-32h96A32,32,0,0,1,208,136Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M184,96.8V88a32,32,0,0,0-32-32H136V32h32a8,8,0,0,1,8,8,8,8,0,0,0,16,0,24,24,0,0,0-24-24H104a8,8,0,0,0,0,16h16V56H104A32,32,0,0,0,72,88v8.8A40.07,40.07,0,0,0,40,136v80a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V136A40.07,40.07,0,0,0,184,96.8ZM104,72h48a16,16,0,0,1,16,16v8H88V88A16,16,0,0,1,104,72Zm96,144H56V136a24,24,0,0,1,24-24h96a24,24,0,0,1,24,24v80Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M184,96.8V88a32,32,0,0,0-32-32H136V32h32a8,8,0,0,1,8,8,8,8,0,0,0,16,0,24,24,0,0,0-24-24H104a8,8,0,0,0,0,16h16V56H104A32,32,0,0,0,72,88v8.8A40.07,40.07,0,0,0,40,136v80a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V136A40.07,40.07,0,0,0,184,96.8ZM104,72h48a16,16,0,0,1,16,16v8H88V88A16,16,0,0,1,104,72Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M182,98.48V88a30,30,0,0,0-30-30H134V30h34a10,10,0,0,1,10,10,6,6,0,0,0,12,0,22,22,0,0,0-22-22H104a6,6,0,0,0,0,12h18V58H104A30,30,0,0,0,74,88V98.48A38.05,38.05,0,0,0,42,136v80a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V136A38.05,38.05,0,0,0,182,98.48ZM104,70h48a18,18,0,0,1,18,18V98H86V88A18,18,0,0,1,104,70Zm98,146a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V136a26,26,0,0,1,26-26h96a26,26,0,0,1,26,26Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M184,96.8V88a32,32,0,0,0-32-32H136V32h32a8,8,0,0,1,8,8,8,8,0,0,0,16,0,24,24,0,0,0-24-24H104a8,8,0,0,0,0,16h16V56H104A32,32,0,0,0,72,88v8.8A40.07,40.07,0,0,0,40,136v80a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V136A40.07,40.07,0,0,0,184,96.8ZM104,72h48a16,16,0,0,1,16,16v8H88V88A16,16,0,0,1,104,72Zm96,144H56V136a24,24,0,0,1,24-24h96a24,24,0,0,1,24,24v80Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M180,100.23V88a28,28,0,0,0-28-28H132V28h36a12,12,0,0,1,12,12,4,4,0,0,0,8,0,20,20,0,0,0-20-20H104a4,4,0,0,0,0,8h20V60H104A28,28,0,0,0,76,88v12.23A36,36,0,0,0,44,136v80a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V136A36,36,0,0,0,180,100.23ZM104,68h48a20,20,0,0,1,20,20v12H84V88A20,20,0,0,1,104,68ZM204,216a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V136a28,28,0,0,1,28-28h96a28,28,0,0,1,28,28Z" }))
  ]
]), m = o((t, e) => /* @__PURE__ */ a.createElement(p, l(h({ ref: e }, t), { weights: d })));
m.displayName = "HandSoap";
const u = m;
export {
  u as default
};
