var c = Object.defineProperty, H = Object.defineProperties;
var M = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var n = (t, a, r) => a in t ? c(t, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[a] = r, m = (t, a) => {
  for (var r in a || (a = {}))
    Z.call(a, r) && n(t, r, a[r]);
  if (l)
    for (var r of l(a))
      o.call(a, r) && n(t, r, a[r]);
  return t;
}, A = (t, a) => H(t, M(a));
import e, { forwardRef as p } from "react";
import d from "../lib/IconBase.es.js";
const E = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M172.29,68.9A84,84,0,0,0,12,104v66a18,18,0,0,0,18,18H84.1A84.18,84.18,0,0,0,160,236h66a18,18,0,0,0,18-18V152A84,84,0,0,0,172.29,68.9ZM36,104a60,60,0,1,1,60,60H36ZM220,212H160a60.14,60.14,0,0,1-49-25.37,83.93,83.93,0,0,0,68.55-91.37A60,60,0,0,1,220,152Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
      "path",
      {
        d: "M232,152v66a6,6,0,0,1-6,6H160a72,72,0,0,1-67.9-48H96a72,72,0,0,0,72-72h0a71.83,71.83,0,0,0-4.07-23.88h0A72,72,0,0,1,232,152Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ e.createElement("path", { d: "M169.57,72.59A80,80,0,0,0,16,104v66a14,14,0,0,0,14,14H86.67A80.15,80.15,0,0,0,160,232h66a14,14,0,0,0,14-14V152A80,80,0,0,0,169.57,72.59ZM32,104a64,64,0,1,1,64,64H32ZM224,216H160a64.14,64.14,0,0,1-55.68-32.43A79.93,79.93,0,0,0,174.7,89.71,64,64,0,0,1,224,152Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M169.57,72.59A80,80,0,0,0,16,104v66a14,14,0,0,0,14,14H86.67A80.15,80.15,0,0,0,160,232h66a14,14,0,0,0,14-14V152A80,80,0,0,0,169.57,72.59ZM224,216H160a64.14,64.14,0,0,1-55.68-32.43A79.93,79.93,0,0,0,174.7,89.71,64,64,0,0,1,224,152Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M168.16,74.42A78,78,0,0,0,18,104v66a12,12,0,0,0,12,12H88a78.15,78.15,0,0,0,72,48h66a12,12,0,0,0,12-12V152A78,78,0,0,0,168.16,74.42ZM30,104a66,66,0,1,1,66,66H30ZM226,218H160a66.13,66.13,0,0,1-58.89-36.19,77.92,77.92,0,0,0,71-94.68A66,66,0,0,1,226,152Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M169.57,72.59A80,80,0,0,0,16,104v66a14,14,0,0,0,14,14H86.67A80.15,80.15,0,0,0,160,232h66a14,14,0,0,0,14-14V152A80,80,0,0,0,169.57,72.59ZM32,104a64,64,0,1,1,64,64H32ZM224,216H160a64.14,64.14,0,0,1-55.68-32.43A79.93,79.93,0,0,0,174.7,89.71,64,64,0,0,1,224,152Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M166.76,76.32A76,76,0,0,0,20,104v66a10,10,0,0,0,10,10H89.33A76.13,76.13,0,0,0,160,228h66a10,10,0,0,0,10-10V152A76,76,0,0,0,166.76,76.32ZM28,170V104a68,68,0,1,1,68,68H30A2,2,0,0,1,28,170Zm200,48a2,2,0,0,1-2,2H160A68.16,68.16,0,0,1,98,180,76,76,0,0,0,169.5,84.67,68,68,0,0,1,228,152Z" }))
  ]
]), h = p((t, a) => /* @__PURE__ */ e.createElement(d, A(m({ ref: a }, t), { weights: E })));
h.displayName = "ChatsTeardrop";
const i = h;
export {
  i as default
};
