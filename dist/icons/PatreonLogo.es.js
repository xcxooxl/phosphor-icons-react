var H = Object.defineProperty, Z = Object.defineProperties;
var V = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
var l = (t, e, n) => e in t ? H(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, r = (t, e) => {
  for (var n in e || (e = {}))
    c.call(e, n) && l(t, n, e[n]);
  if (m)
    for (var n of m(e))
      M.call(e, n) && l(t, n, e[n]);
  return t;
}, A = (t, e) => Z(t, V(e));
import a, { forwardRef as E } from "react";
import p from "../lib/IconBase.es.js";
const d = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M170,36a73.68,73.68,0,0,0-50,19.53A20,20,0,0,0,100,36H64A20,20,0,0,0,44,56V208a20,20,0,0,0,20,20h36a20,20,0,0,0,20-20V164.5A74,74,0,1,0,170,36ZM96,204H68V60H96Zm74-44a50,50,0,1,1,50-50A50.06,50.06,0,0,1,170,160Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M232,104a56,56,0,1,1-56-56A56,56,0,0,1,232,104ZM80,48H64a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H80a8,8,0,0,0,8-8V56A8,8,0,0,0,80,48Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M176,40a64,64,0,1,0,64,64A64.07,64.07,0,0,0,176,40Zm0,112a48,48,0,1,1,48-48A48.05,48.05,0,0,1,176,152ZM80,40H64A16,16,0,0,0,48,56V208a16,16,0,0,0,16,16H80a16,16,0,0,0,16-16V56A16,16,0,0,0,80,40Zm0,168H64V56H80V208Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M240,104a64,64,0,1,1-64-64A64.07,64.07,0,0,1,240,104ZM80,40H64A16,16,0,0,0,48,56V208a16,16,0,0,0,16,16H80a16,16,0,0,0,16-16V56A16,16,0,0,0,80,40Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M176,42a62,62,0,1,0,62,62A62.07,62.07,0,0,0,176,42Zm0,112a50,50,0,1,1,50-50A50.06,50.06,0,0,1,176,154ZM80,42H64A14,14,0,0,0,50,56V208a14,14,0,0,0,14,14H80a14,14,0,0,0,14-14V56A14,14,0,0,0,80,42Zm2,166a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H80a2,2,0,0,1,2,2Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M176,40a64,64,0,1,0,64,64A64.07,64.07,0,0,0,176,40Zm0,112a48,48,0,1,1,48-48A48.05,48.05,0,0,1,176,152ZM80,40H64A16,16,0,0,0,48,56V208a16,16,0,0,0,16,16H80a16,16,0,0,0,16-16V56A16,16,0,0,0,80,40Zm0,168H64V56H80V208Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M176,44a60,60,0,1,0,60,60A60.07,60.07,0,0,0,176,44Zm0,112a52,52,0,1,1,52-52A52.06,52.06,0,0,1,176,156ZM80,44H64A12,12,0,0,0,52,56V208a12,12,0,0,0,12,12H80a12,12,0,0,0,12-12V56A12,12,0,0,0,80,44Zm4,164a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H80a4,4,0,0,1,4,4Z" }))
  ]
]), o = E((t, e) => /* @__PURE__ */ a.createElement(p, A(r({ ref: e }, t), { weights: d })));
o.displayName = "PatreonLogo";
const i = o;
export {
  i as default
};
