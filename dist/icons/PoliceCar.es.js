var r = Object.defineProperty, M = Object.defineProperties;
var V = Object.getOwnPropertyDescriptors;
var h = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var Z = (e, H, t) => H in e ? r(e, H, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[H] = t, l = (e, H) => {
  for (var t in H || (H = {}))
    c.call(H, t) && Z(e, t, H[t]);
  if (h)
    for (var t of h(H))
      A.call(H, t) && Z(e, t, H[t]);
  return e;
}, m = (e, H) => M(e, V(H));
import a, { forwardRef as v } from "react";
import o from "../lib/IconBase.es.js";
const E = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M244,112h-9.45L204.46,65.18A19.93,19.93,0,0,0,187.63,56H68.37a19.91,19.91,0,0,0-16.83,9.19L21.45,112H12a12,12,0,0,0,0,24h4v68a20,20,0,0,0,20,20H60a20,20,0,0,0,20-20V184h96v20a20,20,0,0,0,20,20h24a20,20,0,0,0,20-20V136h4a12,12,0,0,0,0-24ZM70.55,80h114.9L206,112H50ZM56,200H40V184H56Zm144,0V184h16v16Zm16-40H40V136H216ZM92,28a12,12,0,0,1,12-12h48a12,12,0,0,1,0,24H104A12,12,0,0,1,92,28Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M184,184h40v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8ZM32,208a8,8,0,0,0,8,8H64a8,8,0,0,0,8-8V184H32ZM194.3,68a8,8,0,0,0-6.94-4H68.64a8,8,0,0,0-6.94,4L32,120H224Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M240,112H228.64L201.25,64.06A16,16,0,0,0,187.36,56H68.64a16,16,0,0,0-13.89,8.06L27.36,112H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V192h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V128h8a8,8,0,0,0,0-16ZM68.64,72H187.36l22.85,40H45.79ZM64,208H40V192H64Zm128,0V192h24v16Zm24-32H40V128H216ZM56,152a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H64A8,8,0,0,1,56,152Zm112,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,152ZM96,32a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,32Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M96,32a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,32Zm152,88a8,8,0,0,1-8,8h-8v80a16,16,0,0,1-16,16H192a16,16,0,0,1-16-16V192H80v16a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V128H16a8,8,0,0,1,0-16H27.36L54.75,64.06A16,16,0,0,1,68.64,56H187.36a16,16,0,0,1,13.89,8.06L228.64,112H240A8,8,0,0,1,248,120ZM88,152a8,8,0,0,0-8-8H64a8,8,0,0,0,0,16H80A8,8,0,0,0,88,152Zm112,0a8,8,0,0,0-8-8H176a8,8,0,0,0,0,16h16A8,8,0,0,0,200,152Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M240,114H227.48l-28-48.95a14,14,0,0,0-12.15-7H68.64a14,14,0,0,0-12.15,7l-28,49H16a6,6,0,0,0,0,12H26v82a14,14,0,0,0,14,14H64a14,14,0,0,0,14-14V190H178v18a14,14,0,0,0,14,14h24a14,14,0,0,0,14-14V126h10a6,6,0,0,0,0-12ZM66.91,71a2,2,0,0,1,1.73-1H187.36a2,2,0,0,1,1.73,1l24.57,43H42.34ZM66,208a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V190H66Zm150,2H192a2,2,0,0,1-2-2V190h28v18A2,2,0,0,1,216,210Zm2-32H38V126H218ZM58,152a6,6,0,0,1,6-6H80a6,6,0,0,1,0,12H64A6,6,0,0,1,58,152Zm112,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H176A6,6,0,0,1,170,152ZM98,32a6,6,0,0,1,6-6h48a6,6,0,0,1,0,12H104A6,6,0,0,1,98,32Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M240,112H228.64L201.25,64.06A16,16,0,0,0,187.36,56H68.64a16,16,0,0,0-13.89,8.06L27.36,112H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V192h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V128h8a8,8,0,0,0,0-16ZM68.64,72H187.36l22.85,40H45.79ZM64,208H40V192H64Zm128,0V192h24v16Zm24-32H40V128H216ZM56,152a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H64A8,8,0,0,1,56,152Zm112,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,152ZM96,32a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,32Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M240,116H226.32L197.78,66.05a12,12,0,0,0-10.42-6H68.64a12,12,0,0,0-10.42,6L29.68,116H16a4,4,0,0,0,0,8H28v84a12,12,0,0,0,12,12H64a12,12,0,0,0,12-12V188H180v20a12,12,0,0,0,12,12h24a12,12,0,0,0,12-12V124h12a4,4,0,0,0,0-8ZM65.17,70a4,4,0,0,1,3.47-2H187.36a4,4,0,0,1,3.47,2l26.28,46H38.89ZM68,208a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V188H68Zm148,4H192a4,4,0,0,1-4-4V188h32v20A4,4,0,0,1,216,212Zm4-32H36V124H220ZM60,152a4,4,0,0,1,4-4H80a4,4,0,0,1,0,8H64A4,4,0,0,1,60,152Zm112,0a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H176A4,4,0,0,1,172,152ZM100,32a4,4,0,0,1,4-4h48a4,4,0,0,1,0,8H104A4,4,0,0,1,100,32Z" }))
  ]
]), n = v((e, H) => /* @__PURE__ */ a.createElement(o, m(l({ ref: H }, e), { weights: E })));
n.displayName = "PoliceCar";
const i = n;
export {
  i as default
};
