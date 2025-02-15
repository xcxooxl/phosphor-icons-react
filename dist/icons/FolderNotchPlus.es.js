var h = Object.defineProperty, Z = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
var n = (t, e, H) => e in t ? h(t, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : t[e] = H, r = (t, e) => {
  for (var H in e || (e = {}))
    o.call(e, H) && n(t, H, e[H]);
  if (l)
    for (var H of l(e))
      M.call(e, H) && n(t, H, e[H]);
  return t;
}, m = (t, e) => Z(t, c(e));
import a, { forwardRef as A } from "react";
import d from "../lib/IconBase.es.js";
const L = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,68H132L105.33,48a20.12,20.12,0,0,0-12-4H40A20,20,0,0,0,20,64V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V88A20,20,0,0,0,216,68ZM44,68H92l16,12L92,92H44ZM212,196H44V116H93.33a20.12,20.12,0,0,0,12-4L132,92h80Zm-72-72v12h12a12,12,0,0,1,0,24H140v12a12,12,0,0,1-24,0V160H104a12,12,0,0,1,0-24h12V124a12,12,0,0,1,24,0Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M128,80,98.13,102.4a8,8,0,0,1-4.8,1.6H32V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M216,72H130.67L102.93,51.2a16.12,16.12,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM40,64H93.33l21.34,16L93.33,96H40ZM216,200H40V112H93.33a16.12,16.12,0,0,0,9.6-3.2L130.67,88H216Zm-80-72v16h16a8,8,0,0,1,0,16H136v16a8,8,0,0,1-16,0V160H104a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,72H130.66L102.92,51.2A16,16,0,0,0,93.34,48H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM40,96V64H93.34l21.33,16L93.33,96Zm112,64H136v16a8,8,0,0,1-16,0V160H104a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,74H130L101.73,52.8a14,14,0,0,0-8.4-2.8H40A14,14,0,0,0,26,64V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V88A14,14,0,0,0,216,74ZM38,64a2,2,0,0,1,2-2H93.33a2,2,0,0,1,1.2.4L118,80,94.53,97.6a2,2,0,0,1-1.2.4H38ZM218,200a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V110H93.33a14,14,0,0,0,8.4-2.8L130,86h86a2,2,0,0,1,2,2Zm-60-48a6,6,0,0,1-6,6H134v18a6,6,0,0,1-12,0V158H104a6,6,0,0,1,0-12h18V128a6,6,0,0,1,12,0v18h18A6,6,0,0,1,158,152Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M128,120a8,8,0,0,1,8,8v16h16a8,8,0,0,1,0,16H136v16a8,8,0,0,1-16,0V160H104a8,8,0,0,1,0-16h16V128A8,8,0,0,1,128,120ZM232,88V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H93.33a16.12,16.12,0,0,1,9.6,3.2L130.67,72H216A16,16,0,0,1,232,88ZM40,96H93.33l21.34-16L93.33,64H40Zm176-8H130.67l-27.74,20.8a16.12,16.12,0,0,1-9.6,3.2H40v88H216Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,76H129.33l-28.8-21.6a12.05,12.05,0,0,0-7.2-2.4H40A12,12,0,0,0,28,64V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V88A12,12,0,0,0,216,76ZM36,64a4,4,0,0,1,4-4H93.33a4,4,0,0,1,2.4.8L121.33,80,95.73,99.2a4,4,0,0,1-2.4.8H36ZM220,200a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V108H93.33a12.05,12.05,0,0,0,7.2-2.4L129.33,84H216a4,4,0,0,1,4,4Zm-64-48a4,4,0,0,1-4,4H132v20a4,4,0,0,1-8,0V156H104a4,4,0,0,1,0-8h20V128a4,4,0,0,1,8,0v20h20A4,4,0,0,1,156,152Z" }))
  ]
]), V = A((t, e) => /* @__PURE__ */ a.createElement(d, m(r({ ref: e }, t), { weights: L })));
V.displayName = "FolderNotchPlus";
const u = V;
export {
  u as default
};
