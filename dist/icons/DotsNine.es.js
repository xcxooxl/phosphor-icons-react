var c = Object.defineProperty, M = Object.defineProperties;
var o = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var E = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var Z = (m, e, A) => e in m ? c(m, e, { enumerable: !0, configurable: !0, writable: !0, value: A }) : m[e] = A, n = (m, e) => {
  for (var A in e || (e = {}))
    E.call(e, A) && Z(m, A, e[A]);
  if (t)
    for (var A of t(e))
      p.call(e, A) && Z(m, A, e[A]);
  return m;
}, l = (m, e) => M(m, o(e));
import a, { forwardRef as d } from "react";
import i from "../lib/IconBase.es.js";
const h = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M76,60A16,16,0,1,1,60,44,16,16,0,0,1,76,60Zm52-16a16,16,0,1,0,16,16A16,16,0,0,0,128,44Zm68,32a16,16,0,1,0-16-16A16,16,0,0,0,196,76ZM60,112a16,16,0,1,0,16,16A16,16,0,0,0,60,112Zm68,0a16,16,0,1,0,16,16A16,16,0,0,0,128,112Zm68,0a16,16,0,1,0,16,16A16,16,0,0,0,196,112ZM60,180a16,16,0,1,0,16,16A16,16,0,0,0,60,180Zm68,0a16,16,0,1,0,16,16A16,16,0,0,0,128,180Zm68,0a16,16,0,1,0,16,16A16,16,0,0,0,196,180Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M72,60A12,12,0,1,1,60,48,12,12,0,0,1,72,60Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,128,48Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,184a12,12,0,1,0,12,12A12,12,0,0,0,60,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,184Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM76,192a12,12,0,1,1,12-12A12,12,0,0,1,76,192Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,76,140Zm0-52A12,12,0,1,1,88,76,12,12,0,0,1,76,88Zm52,104a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,128,88Zm52,104a12,12,0,1,1,12-12A12,12,0,0,1,180,192Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,180,140Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,180,88Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M70,60A10,10,0,1,1,60,50,10,10,0,0,1,70,60Zm58-10a10,10,0,1,0,10,10A10,10,0,0,0,128,50Zm68,20a10,10,0,1,0-10-10A10,10,0,0,0,196,70ZM60,118a10,10,0,1,0,10,10A10,10,0,0,0,60,118Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,128,118Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,196,118ZM60,186a10,10,0,1,0,10,10A10,10,0,0,0,60,186Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,128,186Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,196,186Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M72,60A12,12,0,1,1,60,48,12,12,0,0,1,72,60Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,128,48Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,184a12,12,0,1,0,12,12A12,12,0,0,0,60,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,184Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M68,60a8,8,0,1,1-8-8A8,8,0,0,1,68,60Zm60-8a8,8,0,1,0,8,8A8,8,0,0,0,128,52Zm68,16a8,8,0,1,0-8-8A8,8,0,0,0,196,68ZM60,120a8,8,0,1,0,8,8A8,8,0,0,0,60,120Zm68,0a8,8,0,1,0,8,8A8,8,0,0,0,128,120Zm68,0a8,8,0,1,0,8,8A8,8,0,0,0,196,120ZM60,188a8,8,0,1,0,8,8A8,8,0,0,0,60,188Zm68,0a8,8,0,1,0,8,8A8,8,0,0,0,128,188Zm68,0a8,8,0,1,0,8,8A8,8,0,0,0,196,188Z" }))
  ]
]), r = d((m, e) => /* @__PURE__ */ a.createElement(i, l(n({ ref: e }, m), { weights: h })));
r.displayName = "DotsNine";
const f = r;
export {
  f as default
};
