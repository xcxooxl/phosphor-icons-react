var c = Object.defineProperty, o = Object.defineProperties;
var M = Object.getOwnPropertyDescriptors;
var A = Object.getOwnPropertySymbols;
var E = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var Z = (m, e, t) => e in m ? c(m, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : m[e] = t, l = (m, e) => {
  for (var t in e || (e = {}))
    E.call(e, t) && Z(m, t, e[t]);
  if (A)
    for (var t of A(e))
      p.call(e, t) && Z(m, t, e[t]);
  return m;
}, r = (m, e) => o(m, M(e));
import a, { forwardRef as d } from "react";
import u from "../lib/IconBase.es.js";
const i = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M78,36a42,42,0,1,0,42,42A42,42,0,0,0,78,36Zm0,60A18,18,0,1,1,96,78,18,18,0,0,1,78,96Zm100,24a42,42,0,1,0-42-42A42,42,0,0,0,178,120Zm0-60a18,18,0,1,1-18,18A18,18,0,0,1,178,60ZM78,136a42,42,0,1,0,42,42A42,42,0,0,0,78,136Zm0,60a18,18,0,1,1,18-18A18,18,0,0,1,78,196Zm100-60a42,42,0,1,0,42,42A42,42,0,0,0,178,136Zm0,60a18,18,0,1,1,18-18A18,18,0,0,1,178,196Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M112,80A32,32,0,1,1,80,48,32,32,0,0,1,112,80Zm64,32a32,32,0,1,0-32-32A32,32,0,0,0,176,112ZM80,144a32,32,0,1,0,32,32A32,32,0,0,0,80,144Zm96,0a32,32,0,1,0,32,32A32,32,0,0,0,176,144Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M80,40a40,40,0,1,0,40,40A40,40,0,0,0,80,40Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,80,104Zm96,16a40,40,0,1,0-40-40A40,40,0,0,0,176,120Zm0-64a24,24,0,1,1-24,24A24,24,0,0,1,176,56ZM80,136a40,40,0,1,0,40,40A40,40,0,0,0,80,136Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,80,200Zm96-64a40,40,0,1,0,40,40A40,40,0,0,0,176,136Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,176,200Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M120,80A40,40,0,1,1,80,40,40,40,0,0,1,120,80Zm56,40a40,40,0,1,0-40-40A40,40,0,0,0,176,120ZM80,136a40,40,0,1,0,40,40A40,40,0,0,0,80,136Zm96,0a40,40,0,1,0,40,40A40,40,0,0,0,176,136Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M80,42a38,38,0,1,0,38,38A38,38,0,0,0,80,42Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,80,106Zm96,12a38,38,0,1,0-38-38A38,38,0,0,0,176,118Zm0-64a26,26,0,1,1-26,26A26,26,0,0,1,176,54ZM80,138a38,38,0,1,0,38,38A38,38,0,0,0,80,138Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,80,202Zm96-64a38,38,0,1,0,38,38A38,38,0,0,0,176,138Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,176,202Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M80,40a40,40,0,1,0,40,40A40,40,0,0,0,80,40Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,80,104Zm96,16a40,40,0,1,0-40-40A40,40,0,0,0,176,120Zm0-64a24,24,0,1,1-24,24A24,24,0,0,1,176,56ZM80,136a40,40,0,1,0,40,40A40,40,0,0,0,80,136Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,80,200Zm96-64a40,40,0,1,0,40,40A40,40,0,0,0,176,136Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,176,200Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M80,44a36,36,0,1,0,36,36A36,36,0,0,0,80,44Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,80,108Zm96,8a36,36,0,1,0-36-36A36,36,0,0,0,176,116Zm0-64a28,28,0,1,1-28,28A28,28,0,0,1,176,52ZM80,140a36,36,0,1,0,36,36A36,36,0,0,0,80,140Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,80,204Zm96-64a36,36,0,1,0,36,36A36,36,0,0,0,176,140Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,176,204Z" }))
  ]
]), n = d((m, e) => /* @__PURE__ */ a.createElement(u, r(l({ ref: e }, m), { weights: i })));
n.displayName = "CirclesFour";
const F = n;
export {
  F as default
};
