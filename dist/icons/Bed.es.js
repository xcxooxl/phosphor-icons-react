var c = Object.defineProperty, Z = Object.defineProperties;
var v = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var V = (t, a, l) => a in t ? c(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[a] = l, m = (t, a) => {
  for (var l in a || (a = {}))
    d.call(a, l) && V(t, l, a[l]);
  if (n)
    for (var l of n(a))
      h.call(a, l) && V(t, l, a[l]);
  return t;
}, r = (t, a) => Z(t, v(a));
import e, { forwardRef as o } from "react";
import E from "../lib/IconBase.es.js";
const M = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M208,68H28V48A12,12,0,0,0,4,48V208a12,12,0,0,0,24,0V180H228v28a12,12,0,0,0,24,0V112A44.05,44.05,0,0,0,208,68ZM92,156H28V92H92Zm136,0H116V92h92a20,20,0,0,1,20,20Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M240,112v56H104V80H208A32,32,0,0,1,240,112Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M208,72H24V48A8,8,0,0,0,8,48V208a8,8,0,0,0,16,0V176H232v32a8,8,0,0,0,16,0V112A40,40,0,0,0,208,72ZM24,88H96v72H24Zm88,72V88h96a24,24,0,0,1,24,24v48Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M208,72H24V48A8,8,0,0,0,8,48V208a8,8,0,0,0,16,0V176H232v32a8,8,0,0,0,16,0V112A40,40,0,0,0,208,72ZM24,88H96v72H24Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M208,74H22V48a6,6,0,0,0-12,0V208a6,6,0,0,0,12,0V174H234v34a6,6,0,0,0,12,0V112A38,38,0,0,0,208,74ZM22,86H98v76H22Zm88,76V86h98a26,26,0,0,1,26,26v50Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M208,72H24V48A8,8,0,0,0,8,48V208a8,8,0,0,0,16,0V176H232v32a8,8,0,0,0,16,0V112A40,40,0,0,0,208,72ZM24,88H96v72H24Zm88,72V88h96a24,24,0,0,1,24,24v48Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M208,76H20V48a4,4,0,0,0-8,0V208a4,4,0,0,0,8,0V172H236v36a4,4,0,0,0,8,0V112A36,36,0,0,0,208,76ZM20,84h80v80H20Zm88,80V84H208a28,28,0,0,1,28,28v52Z" }))
  ]
]), H = o((t, a) => /* @__PURE__ */ e.createElement(E, r(m({ ref: a }, t), { weights: M })));
H.displayName = "Bed";
const u = H;
export {
  u as default
};
