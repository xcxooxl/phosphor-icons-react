var r = Object.defineProperty, l = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var h = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var V = (t, e, m) => e in t ? r(t, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : t[e] = m, Z = (t, e) => {
  for (var m in e || (e = {}))
    A.call(e, m) && V(t, m, e[m]);
  if (h)
    for (var m of h(e))
      c.call(e, m) && V(t, m, e[m]);
  return t;
}, v = (t, e) => l(t, n(e));
import a, { forwardRef as d } from "react";
import E from "../lib/IconBase.es.js";
const o = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M100,36H56A20,20,0,0,0,36,56v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,100,36ZM96,96H60V60H96Zm4,40H56a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,100,136Zm-4,60H60V160H96ZM200,36H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,60H160V60h36Zm-60,76V148a12,12,0,0,1,24,0v24a12,12,0,0,1-24,0Zm84-8a12,12,0,0,1-12,12H196v32a12,12,0,0,1-12,12H148a12,12,0,0,1,0-24h24V148a12,12,0,0,1,24,0v4h12A12,12,0,0,1,220,164Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M112,56v48a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h48A8,8,0,0,1,112,56Zm-8,88H56a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,104,144Zm96-96H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm0,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48ZM200,40H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-64,72V144a8,8,0,0,1,16,0v32a8,8,0,0,1-16,0Zm80-16a8,8,0,0,1-8,8H184v40a8,8,0,0,1-8,8H144a8,8,0,0,1,0-16h24V144a8,8,0,0,1,16,0v8h24A8,8,0,0,1,216,160Zm0,32v16a8,8,0,0,1-16,0V192a8,8,0,0,1,16,0Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("rect", { x: "40", y: "40", width: "80", height: "80", rx: "16" }), /* @__PURE__ */ a.createElement("rect", { x: "40", y: "136", width: "80", height: "80", rx: "16" }), /* @__PURE__ */ a.createElement("rect", { x: "136", y: "40", width: "80", height: "80", rx: "16" }), /* @__PURE__ */ a.createElement("path", { d: "M144,184a8,8,0,0,0,8-8V144a8,8,0,0,0-16,0v32A8,8,0,0,0,144,184Z" }), /* @__PURE__ */ a.createElement("path", { d: "M208,152H184v-8a8,8,0,0,0-16,0v56H144a8,8,0,0,0,0,16h32a8,8,0,0,0,8-8V168h24a8,8,0,0,0,0-16Z" }), /* @__PURE__ */ a.createElement("path", { d: "M208,184a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V192A8,8,0,0,0,208,184Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M104,42H56A14,14,0,0,0,42,56v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,104,42Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm-2,34H56a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,104,138Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2ZM200,42H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm-64,72V144a6,6,0,0,1,12,0v32a6,6,0,0,1-12,0Zm76-16a6,6,0,0,1-6,6H182v42a6,6,0,0,1-6,6H144a6,6,0,0,1,0-12h26V144a6,6,0,0,1,12,0v10h26A6,6,0,0,1,214,160Zm0,32v16a6,6,0,0,1-12,0V192a6,6,0,0,1,12,0Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm0,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48ZM200,40H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-64,72V144a8,8,0,0,1,16,0v32a8,8,0,0,1-16,0Zm80-16a8,8,0,0,1-8,8H184v40a8,8,0,0,1-8,8H144a8,8,0,0,1,0-16h24V144a8,8,0,0,1,16,0v8h24A8,8,0,0,1,216,160Zm0,32v16a8,8,0,0,1-16,0V192a8,8,0,0,1,16,0Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M104,44H56A12,12,0,0,0,44,56v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,104,44Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm-4,36H56a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,104,140Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4ZM200,44H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm-64,72V144a4,4,0,0,1,8,0v32a4,4,0,0,1-8,0Zm72-16a4,4,0,0,1-4,4H180v44a4,4,0,0,1-4,4H144a4,4,0,0,1,0-8h28V144a4,4,0,0,1,8,0v12h28A4,4,0,0,1,212,160Zm0,32v16a4,4,0,0,1-8,0V192a4,4,0,0,1,8,0Z" }))
  ]
]), H = d((t, e) => /* @__PURE__ */ a.createElement(E, v(Z({ ref: e }, t), { weights: o })));
H.displayName = "QrCode";
const g = H;
export {
  g as default
};
