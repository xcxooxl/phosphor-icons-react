var Z = Object.defineProperty, p = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (t, a, n) => a in t ? Z(t, a, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[a] = n, l = (t, a) => {
  for (var n in a || (a = {}))
    A.call(a, n) && V(t, n, a[n]);
  if (m)
    for (var n of m(a))
      o.call(a, n) && V(t, n, a[n]);
  return t;
}, H = (t, a) => p(t, c(a));
import e, { forwardRef as g } from "react";
import M from "../lib/IconBase.es.js";
const E = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36Zm-4,24V76H44V60ZM44,196V100H212v96Zm136-72a52,52,0,0,1-104,0,12,12,0,0,1,24,0,28,28,0,0,0,56,0,12,12,0,0,1,24,0Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
      "path",
      {
        d: "M224,56V80H32V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ e.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V72H40V56Zm0,144H40V88H216V200Zm-40-88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM128,160a48.05,48.05,0,0,1-48-48,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0A48.05,48.05,0,0,1,128,160ZM40,72V56H216V72Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V74H38V56A2,2,0,0,1,40,54ZM216,202H40a2,2,0,0,1-2-2V86H218V200A2,2,0,0,1,216,202Zm-42-90a46,46,0,0,1-92,0,6,6,0,0,1,12,0,34,34,0,0,0,68,0,6,6,0,0,1,12,0Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V72H40V56Zm0,144H40V88H216V200Zm-40-88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,52H216a4,4,0,0,1,4,4V76H36V56A4,4,0,0,1,40,52ZM216,204H40a4,4,0,0,1-4-4V84H220V200A4,4,0,0,1,216,204Zm-44-92a44,44,0,0,1-88,0,4,4,0,0,1,8,0,36,36,0,0,0,72,0,4,4,0,0,1,8,0Z" }))
  ]
]), r = g((t, a) => /* @__PURE__ */ e.createElement(M, H(l({ ref: a }, t), { weights: E })));
r.displayName = "ShoppingBagOpen";
const u = r;
export {
  u as default
};
