var h = Object.defineProperty, c = Object.defineProperties;
var Z = Object.getOwnPropertyDescriptors;
var V = Object.getOwnPropertySymbols;
var M = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var l = (H, e, t) => e in H ? h(H, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : H[e] = t, n = (H, e) => {
  for (var t in e || (e = {}))
    M.call(e, t) && l(H, t, e[t]);
  if (V)
    for (var t of V(e))
      o.call(e, t) && l(H, t, e[t]);
  return H;
}, r = (H, e) => c(H, Z(e));
import a, { forwardRef as d } from "react";
import E from "../lib/IconBase.es.js";
const p = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M240,188h-4V56a20,20,0,0,0-20-20H40A20,20,0,0,0,20,56V188H16a12,12,0,0,0,0,24H240a12,12,0,0,0,0-24ZM44,60H212V188H196V160a12,12,0,0,0-12-12H120a12,12,0,0,0-12,12v28H84V100h88v20a12,12,0,0,0,24,0V88a12,12,0,0,0-12-12H72A12,12,0,0,0,60,88V188H44ZM172,188H132V172h40Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M192,80v88H120v32H64V80Z", opacity: "0.2" }), /* @__PURE__ */ a.createElement("path", { d: "M240,192h-8V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,56H216V192H200V168a8,8,0,0,0-8-8H120a8,8,0,0,0-8,8v24H72V88H184v48a8,8,0,0,0,16,0V80a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V192H40ZM184,192H128V176h56Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M240,192h-8V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16Zm-24,0H144V176a8,8,0,0,1,8-8h56a8,8,0,0,1,8,8Zm0-48a8,8,0,0,1-16,0V72H56V184a8,8,0,0,1-16,0V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M240,194H230V56a14,14,0,0,0-14-14H40A14,14,0,0,0,26,56V194H16a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12ZM38,56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2V194H198V168a6,6,0,0,0-6-6H120a6,6,0,0,0-6,6v26H70V86H186v50a6,6,0,0,0,12,0V80a6,6,0,0,0-6-6H64a6,6,0,0,0-6,6V194H38ZM186,194H126V174h60Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M240,192h-8V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,56H216V192H200V168a8,8,0,0,0-8-8H120a8,8,0,0,0-8,8v24H72V88H184v48a8,8,0,0,0,16,0V80a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V192H40ZM184,192H128V176h56Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M240,196H228V56a12,12,0,0,0-12-12H40A12,12,0,0,0,28,56V196H16a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8ZM36,56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4V196H196V168a4,4,0,0,0-4-4H120a4,4,0,0,0-4,4v28H68V84H188v52a4,4,0,0,0,8,0V80a4,4,0,0,0-4-4H64a4,4,0,0,0-4,4V196H36ZM188,196H124V172h64Z" }))
  ]
]), m = d((H, e) => /* @__PURE__ */ a.createElement(E, r(n({ ref: e }, H), { weights: p })));
m.displayName = "Chalkboard";
const i = m;
export {
  i as default
};
