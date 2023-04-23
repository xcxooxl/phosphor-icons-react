var Z = Object.defineProperty, V = Object.defineProperties;
var H = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
var l = (t, e, m) => e in t ? Z(t, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : t[e] = m, r = (t, e) => {
  for (var m in e || (e = {}))
    h.call(e, m) && l(t, m, e[m]);
  if (n)
    for (var m of n(e))
      M.call(e, m) && l(t, m, e[m]);
  return t;
}, A = (t, e) => V(t, H(e));
import a, { forwardRef as o } from "react";
import E from "../lib/IconBase.es.js";
const p = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M232,60V196a20,20,0,0,1-20,20H172a12,12,0,0,1,0-24h36V64H48v4a12,12,0,0,1-24,0V60A20,20,0,0,1,44,40H212A20,20,0,0,1,232,60ZM36,176a12,12,0,0,0,0,24,4,4,0,0,1,4,4,12,12,0,0,0,24,0A28,28,0,0,0,36,176Zm0-40a12,12,0,0,0,0,24,44.05,44.05,0,0,1,44,44,12,12,0,0,0,24,0A68.07,68.07,0,0,0,36,136Zm0-40a12,12,0,0,0,0,24,84.09,84.09,0,0,1,84,84,12,12,0,0,0,24,0A108.12,108.12,0,0,0,36,96Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M224,56V200a8,8,0,0,1-8,8H48a16,16,0,0,0-16-16V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M232,56V200a16,16,0,0,1-16,16H144a8,8,0,0,1,0-16h72V56H40V96a8,8,0,0,1-16,0V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM32,184a8,8,0,0,0,0,16,8,8,0,0,1,8,8,8,8,0,0,0,16,0A24,24,0,0,0,32,184Zm0-32a8,8,0,0,0,0,16,40,40,0,0,1,40,40,8,8,0,0,0,16,0A56.06,56.06,0,0,0,32,152Zm0-32a8,8,0,0,0,0,16,72.08,72.08,0,0,1,72,72,8,8,0,0,0,16,0A88.1,88.1,0,0,0,32,120Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M56,208a8,8,0,0,1-16,0,8,8,0,0,0-8-8,8,8,0,0,1,0-16A24,24,0,0,1,56,208ZM32,152a8,8,0,0,0,0,16,40,40,0,0,1,40,40,8,8,0,0,0,16,0A56.06,56.06,0,0,0,32,152Zm0-32a8,8,0,0,0,0,16,72.08,72.08,0,0,1,72,72,8,8,0,0,0,16,0A88.1,88.1,0,0,0,32,120ZM216,40H40A16,16,0,0,0,24,56V96a8,8,0,0,0,8,8A104.11,104.11,0,0,1,136,208a8,8,0,0,0,8,8h72a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M230,56V200a14,14,0,0,1-14,14H144a6,6,0,0,1,0-12h72a2,2,0,0,0,2-2V56a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V96a6,6,0,0,1-12,0V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56ZM32,186a6,6,0,0,0,0,12,10,10,0,0,1,10,10,6,6,0,0,0,12,0A22,22,0,0,0,32,186Zm0-32a6,6,0,0,0,0,12,42,42,0,0,1,42,42,6,6,0,0,0,12,0A54.06,54.06,0,0,0,32,154Zm0-32a6,6,0,0,0,0,12,74.09,74.09,0,0,1,74,74,6,6,0,0,0,12,0A86.1,86.1,0,0,0,32,122Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M232,56V200a16,16,0,0,1-16,16H144a8,8,0,0,1,0-16h72V56H40V96a8,8,0,0,1-16,0V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM32,184a8,8,0,0,0,0,16,8,8,0,0,1,8,8,8,8,0,0,0,16,0A24,24,0,0,0,32,184Zm0-32a8,8,0,0,0,0,16,40,40,0,0,1,40,40,8,8,0,0,0,16,0A56.06,56.06,0,0,0,32,152Zm0-32a8,8,0,0,0,0,16,72.08,72.08,0,0,1,72,72,8,8,0,0,0,16,0A88.1,88.1,0,0,0,32,120Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M228,56V200a12,12,0,0,1-12,12H144a4,4,0,0,1,0-8h72a4,4,0,0,0,4-4V56a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V96a4,4,0,0,1-8,0V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56ZM32,188a4,4,0,0,0,0,8,12,12,0,0,1,12,12,4,4,0,0,0,8,0A20,20,0,0,0,32,188Zm0-32a4,4,0,0,0,0,8,44.05,44.05,0,0,1,44,44,4,4,0,0,0,8,0A52.06,52.06,0,0,0,32,156Zm0-32a4,4,0,0,0,0,8,76.08,76.08,0,0,1,76,76,4,4,0,0,0,8,0A84.09,84.09,0,0,0,32,124Z" }))
  ]
]), c = o((t, e) => /* @__PURE__ */ a.createElement(E, A(r({ ref: e }, t), { weights: p })));
c.displayName = "Screencast";
const u = c;
export {
  u as default
};
