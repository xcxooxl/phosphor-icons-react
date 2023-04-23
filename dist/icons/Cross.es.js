var m = Object.defineProperty, c = Object.defineProperties;
var v = Object.getOwnPropertyDescriptors;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var h = (t, e, V) => e in t ? m(t, e, { enumerable: !0, configurable: !0, writable: !0, value: V }) : t[e] = V, l = (t, e) => {
  for (var V in e || (e = {}))
    o.call(e, V) && h(t, V, e[V]);
  if (H)
    for (var V of H(e))
      A.call(e, V) && h(t, V, e[V]);
  return t;
}, n = (t, e) => c(t, v(e));
import a, { forwardRef as E } from "react";
import p from "../lib/IconBase.es.js";
const s = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M200,68H164V32a20,20,0,0,0-20-20H112A20,20,0,0,0,92,32V68H56A20,20,0,0,0,36,88v32a20,20,0,0,0,20,20H92v84a20,20,0,0,0,20,20h32a20,20,0,0,0,20-20V140h36a20,20,0,0,0,20-20V88A20,20,0,0,0,200,68Zm-4,48H160a20,20,0,0,0-20,20v84H116V136a20,20,0,0,0-20-20H60V92H96a20,20,0,0,0,20-20V36h24V72a20,20,0,0,0,20,20h36Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M208,88v32a8,8,0,0,1-8,8H160a8,8,0,0,0-8,8v88a8,8,0,0,1-8,8H112a8,8,0,0,1-8-8V136a8,8,0,0,0-8-8H56a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H96a8,8,0,0,0,8-8V32a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V72a8,8,0,0,0,8,8h40A8,8,0,0,1,208,88Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M200,72H160V32a16,16,0,0,0-16-16H112A16,16,0,0,0,96,32V72H56A16,16,0,0,0,40,88v32a16,16,0,0,0,16,16H96v88a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V136h40a16,16,0,0,0,16-16V88A16,16,0,0,0,200,72Zm0,48H160a16,16,0,0,0-16,16v88H112V136a16,16,0,0,0-16-16H56V88H96a16,16,0,0,0,16-16V32h32V72a16,16,0,0,0,16,16h40Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,92v24a16,16,0,0,1-16,16H156v92a16,16,0,0,1-16,16H116a16,16,0,0,1-16-16V132H56a16,16,0,0,1-16-16V92A16,16,0,0,1,56,76h44V32a16,16,0,0,1,16-16h24a16,16,0,0,1,16,16V76h44A16,16,0,0,1,216,92Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M200,74H160a2,2,0,0,1-2-2V32a14,14,0,0,0-14-14H112A14,14,0,0,0,98,32V72a2,2,0,0,1-2,2H56A14,14,0,0,0,42,88v32a14,14,0,0,0,14,14H96a2,2,0,0,1,2,2v88a14,14,0,0,0,14,14h32a14,14,0,0,0,14-14V136a2,2,0,0,1,2-2h40a14,14,0,0,0,14-14V88A14,14,0,0,0,200,74Zm2,46a2,2,0,0,1-2,2H160a14,14,0,0,0-14,14v88a2,2,0,0,1-2,2H112a2,2,0,0,1-2-2V136a14,14,0,0,0-14-14H56a2,2,0,0,1-2-2V88a2,2,0,0,1,2-2H96a14,14,0,0,0,14-14V32a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2V72a14,14,0,0,0,14,14h40a2,2,0,0,1,2,2Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M200,72H160V32a16,16,0,0,0-16-16H112A16,16,0,0,0,96,32V72H56A16,16,0,0,0,40,88v32a16,16,0,0,0,16,16H96v88a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V136h40a16,16,0,0,0,16-16V88A16,16,0,0,0,200,72Zm0,48H160a16,16,0,0,0-16,16v88H112V136a16,16,0,0,0-16-16H56V88H96a16,16,0,0,0,16-16V32h32V72a16,16,0,0,0,16,16h40Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M200,76H160a4,4,0,0,1-4-4V32a12,12,0,0,0-12-12H112a12,12,0,0,0-12,12V72a4,4,0,0,1-4,4H56A12,12,0,0,0,44,88v32a12,12,0,0,0,12,12H96a4,4,0,0,1,4,4v88a12,12,0,0,0,12,12h32a12,12,0,0,0,12-12V136a4,4,0,0,1,4-4h40a12,12,0,0,0,12-12V88A12,12,0,0,0,200,76Zm4,44a4,4,0,0,1-4,4H160a12,12,0,0,0-12,12v88a4,4,0,0,1-4,4H112a4,4,0,0,1-4-4V136a12,12,0,0,0-12-12H56a4,4,0,0,1-4-4V88a4,4,0,0,1,4-4H96a12,12,0,0,0,12-12V32a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4V72a12,12,0,0,0,12,12h40a4,4,0,0,1,4,4Z" }))
  ]
]), r = E((t, e) => /* @__PURE__ */ a.createElement(p, n(l({ ref: e }, t), { weights: s })));
r.displayName = "Cross";
const u = r;
export {
  u as default
};
