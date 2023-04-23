var l = Object.defineProperty, n = Object.defineProperties;
var Z = Object.getOwnPropertyDescriptors;
var H = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
var V = (h, e, t) => e in h ? l(h, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : h[e] = t, v = (h, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && V(h, t, e[t]);
  if (H)
    for (var t of H(e))
      u.call(e, t) && V(h, t, e[t]);
  return h;
}, r = (h, e) => n(h, Z(e));
import a, { forwardRef as o } from "react";
import A from "../lib/IconBase.es.js";
const E = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M168,116h48a20,20,0,0,0,20-20V48a20,20,0,0,0-20-20H168a20,20,0,0,0-20,20V60h-4a36,36,0,0,0-36,36v20H84v-4A20,20,0,0,0,64,92H32a20,20,0,0,0-20,20v32a20,20,0,0,0,20,20H64a20,20,0,0,0,20-20v-4h24v20a36,36,0,0,0,36,36h4v12a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V160a20,20,0,0,0-20-20H168a20,20,0,0,0-20,20v12h-4a12,12,0,0,1-12-12V96a12,12,0,0,1,12-12h4V96A20,20,0,0,0,168,116ZM60,140H36V116H60Zm112,24h40v40H172Zm0-112h40V92H172Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M72,112v32a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V112a8,8,0,0,1,8-8H64A8,8,0,0,1,72,112ZM216,40H168a8,8,0,0,0-8,8V96a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V48A8,8,0,0,0,216,40Zm0,112H168a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V160A8,8,0,0,0,216,152Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M168,112h48a16,16,0,0,0,16-16V48a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16V64h-8a32,32,0,0,0-32,32v24H80v-8A16,16,0,0,0,64,96H32a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16v-8h32v24a32,32,0,0,0,32,32h8v16a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V160a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16v16h-8a16,16,0,0,1-16-16V96a16,16,0,0,1,16-16h8V96A16,16,0,0,0,168,112ZM64,144H32V112H64v32Zm104,16h48v48H168Zm0-112h48V96H168Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M152,96V80h-8a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h8V160a16,16,0,0,1,16-16h48a16,16,0,0,1,16,16v48a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V192h-8a32,32,0,0,1-32-32V136H80v8a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V112A16,16,0,0,1,32,96H64a16,16,0,0,1,16,16v8h32V96a32,32,0,0,1,32-32h8V48a16,16,0,0,1,16-16h48a16,16,0,0,1,16,16V96a16,16,0,0,1-16,16H168A16,16,0,0,1,152,96Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M168,110h48a14,14,0,0,0,14-14V48a14,14,0,0,0-14-14H168a14,14,0,0,0-14,14V66H144a30,30,0,0,0-30,30v26H78V112A14,14,0,0,0,64,98H32a14,14,0,0,0-14,14v32a14,14,0,0,0,14,14H64a14,14,0,0,0,14-14V134h36v26a30,30,0,0,0,30,30h10v18a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V160a14,14,0,0,0-14-14H168a14,14,0,0,0-14,14v18H144a18,18,0,0,1-18-18V96a18,18,0,0,1,18-18h10V96A14,14,0,0,0,168,110ZM66,144a2,2,0,0,1-2,2H32a2,2,0,0,1-2-2V112a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2Zm100,16a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2v48a2,2,0,0,1-2,2H168a2,2,0,0,1-2-2Zm0-112a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2V96a2,2,0,0,1-2,2H168a2,2,0,0,1-2-2Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M168,112h48a16,16,0,0,0,16-16V48a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16V64h-8a32,32,0,0,0-32,32v24H80v-8A16,16,0,0,0,64,96H32a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16v-8h32v24a32,32,0,0,0,32,32h8v16a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V160a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16v16h-8a16,16,0,0,1-16-16V96a16,16,0,0,1,16-16h8V96A16,16,0,0,0,168,112ZM64,144H32V112H64v32Zm104,16h48v48H168Zm0-112h48V96H168Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M168,108h48a12,12,0,0,0,12-12V48a12,12,0,0,0-12-12H168a12,12,0,0,0-12,12V68H144a28,28,0,0,0-28,28v28H76V112a12,12,0,0,0-12-12H32a12,12,0,0,0-12,12v32a12,12,0,0,0,12,12H64a12,12,0,0,0,12-12V132h40v28a28,28,0,0,0,28,28h12v20a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V160a12,12,0,0,0-12-12H168a12,12,0,0,0-12,12v20H144a20,20,0,0,1-20-20V96a20,20,0,0,1,20-20h12V96A12,12,0,0,0,168,108ZM68,144a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V112a4,4,0,0,1,4-4H64a4,4,0,0,1,4,4Zm96,16a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4v48a4,4,0,0,1-4,4H168a4,4,0,0,1-4-4Zm0-112a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V96a4,4,0,0,1-4,4H168a4,4,0,0,1-4-4Z" }))
  ]
]), m = o((h, e) => /* @__PURE__ */ a.createElement(A, r(v({ ref: e }, h), { weights: E })));
m.displayName = "TreeStructure";
const g = m;
export {
  g as default
};
