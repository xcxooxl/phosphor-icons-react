var c = Object.defineProperty, H = Object.defineProperties;
var v = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (h, e, t) => e in h ? c(h, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : h[e] = t, r = (h, e) => {
  for (var t in e || (e = {}))
    Z.call(e, t) && m(h, t, e[t]);
  if (l)
    for (var t of l(e))
      o.call(e, t) && m(h, t, e[t]);
  return h;
}, n = (h, e) => H(h, v(e));
import a, { forwardRef as E } from "react";
import p from "../lib/IconBase.es.js";
const d = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M152,116H140V60h4a28,28,0,0,1,28,28,12,12,0,0,0,24,0,52.06,52.06,0,0,0-52-52h-4V24a12,12,0,0,0-24,0V36h-4a52,52,0,0,0,0,104h4v56H104a28,28,0,0,1-28-28,12,12,0,0,0-24,0,52.06,52.06,0,0,0,52,52h12v12a12,12,0,0,0,24,0V220h12a52,52,0,0,0,0-104Zm-40,0a28,28,0,0,1,0-56h4v56Zm40,80H140V140h12a28,28,0,0,1,0,56Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M192,168a40,40,0,0,1-40,40H128V128h24A40,40,0,0,1,192,168ZM112,48a40,40,0,0,0,0,80h16V48Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M116,80h4v40h-4a20,20,0,0,1,0-40Zm32,56H136v40h12a20,20,0,0,0,0-40Zm84-8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-48,28a36,36,0,0,0-36-36H136V80h4a20,20,0,0,1,20,20,8,8,0,0,0,16,0,36,36,0,0,0-36-36h-4V56a8,8,0,0,0-16,0v8h-4a36,36,0,0,0,0,72h4v40h-8a20,20,0,0,1-20-20,8,8,0,0,0-16,0,36,36,0,0,0,36,36h8v8a8,8,0,0,0,16,0v-8h12A36,36,0,0,0,184,156Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M152,122H134V54h10a34,34,0,0,1,34,34,6,6,0,0,0,12,0,46.06,46.06,0,0,0-46-46H134V24a6,6,0,0,0-12,0V42H112a46,46,0,0,0,0,92h10v68H104a34,34,0,0,1-34-34,6,6,0,0,0-12,0,46.06,46.06,0,0,0,46,46h18v18a6,6,0,0,0,12,0V214h18a46,46,0,0,0,0-92Zm-40,0a34,34,0,0,1,0-68h10v68Zm40,80H134V134h18a34,34,0,0,1,0,68Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M152,124H132V52h12a36,36,0,0,1,36,36,4,4,0,0,0,8,0,44.05,44.05,0,0,0-44-44H132V24a4,4,0,0,0-8,0V44H112a44,44,0,0,0,0,88h12v72H104a36,36,0,0,1-36-36,4,4,0,0,0-8,0,44.05,44.05,0,0,0,44,44h20v20a4,4,0,0,0,8,0V212h20a44,44,0,0,0,0-88Zm-40,0a36,36,0,0,1,0-72h12v72Zm40,80H132V132h20a36,36,0,0,1,0,72Z" }))
  ]
]), V = E((h, e) => /* @__PURE__ */ a.createElement(p, n(r({ ref: e }, h), { weights: d })));
V.displayName = "CurrencyDollar";
const i = V;
export {
  i as default
};
