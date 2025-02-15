var m = Object.defineProperty, r = Object.defineProperties;
var Z = Object.getOwnPropertyDescriptors;
var V = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var v = (t, e, H) => e in t ? m(t, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : t[e] = H, h = (t, e) => {
  for (var H in e || (e = {}))
    c.call(e, H) && v(t, H, e[H]);
  if (V)
    for (var H of V(e))
      A.call(e, H) && v(t, H, e[H]);
  return t;
}, l = (t, e) => r(t, Z(e));
import a, { forwardRef as M } from "react";
import o from "../lib/IconBase.es.js";
const E = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M244,104V72a20,20,0,0,0-20-20H32A20,20,0,0,0,12,72v32a20,20,0,0,0-8,16v48a20,20,0,0,0,20,20h4v12a12,12,0,0,0,24,0V188H204v12a12,12,0,0,0,24,0V188h4a20,20,0,0,0,20-20V120A20,20,0,0,0,244,104Zm-24-4H208a20,20,0,0,0-20,20v4H140V76h80ZM116,76v48H68v-4a20,20,0,0,0-20-20H36V76Zm112,88H28V124H44v4a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20v-4h16Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M240,120v48a8,8,0,0,1-8,8H24a8,8,0,0,1-8-8V120a8,8,0,0,1,8-8V72a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8v40A8,8,0,0,1,240,120Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M240,106.17V72a16,16,0,0,0-16-16H32A16,16,0,0,0,16,72v34.17A16,16,0,0,0,8,120v48a16,16,0,0,0,16,16h8v16a8,8,0,0,0,16,0V184H208v16a8,8,0,0,0,16,0V184h8a16,16,0,0,0,16-16V120A16,16,0,0,0,240,106.17ZM224,104h-8a16,16,0,0,0-16,16v16H136V72h88ZM120,72v64H56V120a16,16,0,0,0-16-16H32V72Zm112,96H24V120H40v16a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V120h16Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M248,120v48a16,16,0,0,1-16,16h-8v16a8,8,0,0,1-16,0V184H48v16a8,8,0,0,1-16,0V184H24A16,16,0,0,1,8,168V120a16,16,0,0,1,16-16h8a16,16,0,0,1,16,16v16a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V120a16,16,0,0,1,16-16h8A16,16,0,0,1,248,120Zm-56,0a32,32,0,0,1,32-32h12a4,4,0,0,0,4-4V72a16,16,0,0,0-16-16H140a4,4,0,0,0-4,4v68h56ZM20,88H32a32,32,0,0,1,32,32v8h56V60a4,4,0,0,0-4-4H32A16,16,0,0,0,16,72V84A4,4,0,0,0,20,88Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M238,107.37V72a14,14,0,0,0-14-14H32A14,14,0,0,0,18,72v35.37A14,14,0,0,0,10,120v48a14,14,0,0,0,14,14H34v18a6,6,0,0,0,12,0V182H210v18a6,6,0,0,0,12,0V182h10a14,14,0,0,0,14-14V120A14,14,0,0,0,238,107.37ZM226,72v34H216a14,14,0,0,0-14,14v16a2,2,0,0,1-2,2H134V70h90A2,2,0,0,1,226,72ZM32,70h90v68H56a2,2,0,0,1-2-2V120a14,14,0,0,0-14-14H30V72A2,2,0,0,1,32,70Zm202,98a2,2,0,0,1-2,2H24a2,2,0,0,1-2-2V120a2,2,0,0,1,2-2H40a2,2,0,0,1,2,2v16a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V120a2,2,0,0,1,2-2h16a2,2,0,0,1,2,2Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M240,106.17V72a16,16,0,0,0-16-16H32A16,16,0,0,0,16,72v34.17A16,16,0,0,0,8,120v48a16,16,0,0,0,16,16h8v16a8,8,0,0,0,16,0V184H208v16a8,8,0,0,0,16,0V184h8a16,16,0,0,0,16-16V120A16,16,0,0,0,240,106.17ZM224,104h-8a16,16,0,0,0-16,16v16H136V72h88ZM120,72v64H56V120a16,16,0,0,0-16-16H32V72Zm112,96H24V120H40v16a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V120h16Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M236,108.7V72a12,12,0,0,0-12-12H32A12,12,0,0,0,20,72v36.7A12,12,0,0,0,12,120v48a12,12,0,0,0,12,12H36v20a4,4,0,0,0,8,0V180H212v20a4,4,0,0,0,8,0V180h12a12,12,0,0,0,12-12V120A12,12,0,0,0,236,108.7ZM228,72v36H216a12,12,0,0,0-12,12v16a4,4,0,0,1-4,4H132V68h92A4,4,0,0,1,228,72ZM32,68h92v72H56a4,4,0,0,1-4-4V120a12,12,0,0,0-12-12H28V72A4,4,0,0,1,32,68ZM236,168a4,4,0,0,1-4,4H24a4,4,0,0,1-4-4V120a4,4,0,0,1,4-4H40a4,4,0,0,1,4,4v16a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V120a4,4,0,0,1,4-4h16a4,4,0,0,1,4,4Z" }))
  ]
]), n = M((t, e) => /* @__PURE__ */ a.createElement(o, l(h({ ref: e }, t), { weights: E })));
n.displayName = "Couch";
const g = n;
export {
  g as default
};
