var A = Object.defineProperty, c = Object.defineProperties;
var v = Object.getOwnPropertyDescriptors;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var V = (t, e, l) => e in t ? A(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l, n = (t, e) => {
  for (var l in e || (e = {}))
    o.call(e, l) && V(t, l, e[l]);
  if (H)
    for (var l of H(e))
      h.call(e, l) && V(t, l, e[l]);
  return t;
}, r = (t, e) => c(t, v(e));
import a, { forwardRef as E } from "react";
import p from "../lib/IconBase.es.js";
const d = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M232,84H216V64a20,20,0,0,0-20-20H52A20,20,0,0,0,32,64V84H16a12,12,0,0,0,0,24H32v20a20,20,0,0,0,20,20H196a20,20,0,0,0,20-20V108h12V151L130.5,178.8A20.09,20.09,0,0,0,116,198v34a12,12,0,0,0,24,0V201.05l97.5-27.85A20.09,20.09,0,0,0,252,154V104A20,20,0,0,0,232,84Zm-40,40H56V68H192Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M208,64v64a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H200A8,8,0,0,1,208,64Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M232,88H216V64a16,16,0,0,0-16-16H48A16,16,0,0,0,32,64V88H16a8,8,0,0,0,0,16H32v24a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V104h16v50L131.6,182.65A16.07,16.07,0,0,0,120,198v34a8,8,0,0,0,16,0V198l100.4-28.68A16.07,16.07,0,0,0,248,154V104A16,16,0,0,0,232,88Zm-32,40H48V64H200v64Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M248,104v50a16.07,16.07,0,0,1-11.6,15.38L136,198v34a8,8,0,0,1-16,0V198a16.07,16.07,0,0,1,11.6-15.38L232,154V104H216v24a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V104H16a8,8,0,0,1,0-16H32V64A16,16,0,0,1,48,48H200a16,16,0,0,1,16,16V88h16A16,16,0,0,1,248,104Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M232,90H214V64a14,14,0,0,0-14-14H48A14,14,0,0,0,34,64V90H16a6,6,0,0,0,0,12H34v26a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V102h18a2,2,0,0,1,2,2v50a2,2,0,0,1-1.45,1.92l-100.4,28.68A14.06,14.06,0,0,0,122,198v34a6,6,0,0,0,12,0V198a2,2,0,0,1,1.45-1.92l100.4-28.68A14.06,14.06,0,0,0,246,154V104A14,14,0,0,0,232,90Zm-30,38a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H200a2,2,0,0,1,2,2Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M232,88H216V64a16,16,0,0,0-16-16H48A16,16,0,0,0,32,64V88H16a8,8,0,0,0,0,16H32v24a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V104h16v50L131.6,182.65A16.07,16.07,0,0,0,120,198v34a8,8,0,0,0,16,0V198l100.4-28.68A16.07,16.07,0,0,0,248,154V104A16,16,0,0,0,232,88Zm-32,40H48V64H200v64Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M232,92H212V64a12,12,0,0,0-12-12H48A12,12,0,0,0,36,64V92H16a4,4,0,0,0,0,8H36v28a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V100h20a4,4,0,0,1,4,4v50a4,4,0,0,1-2.9,3.84L132.7,186.5A12,12,0,0,0,124,198v34a4,4,0,0,0,8,0V198a4,4,0,0,1,2.9-3.84L235.3,165.5A12,12,0,0,0,244,154V104A12,12,0,0,0,232,92Zm-28,36a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H200a4,4,0,0,1,4,4Z" }))
  ]
]), m = E((t, e) => /* @__PURE__ */ a.createElement(p, r(n({ ref: e }, t), { weights: d })));
m.displayName = "PaintRoller";
const u = m;
export {
  u as default
};
