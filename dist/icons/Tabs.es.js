var m = Object.defineProperty, L = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
var h = (l, e, t) => e in l ? m(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, n = (l, e) => {
  for (var t in e || (e = {}))
    o.call(e, t) && h(l, t, e[t]);
  if (H)
    for (var t of H(e))
      E.call(e, t) && h(l, t, e[t]);
  return l;
}, A = (l, e) => L(l, c(e));
import a, { forwardRef as p } from "react";
import d from "../lib/IconBase.es.js";
const s = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M255.49,164.55h0l0-.06a.29.29,0,0,0,0-.09L233.2,90.25A19.87,19.87,0,0,0,214.05,76H204a12,12,0,0,0,0,24h7.07l16.8,56H196.93L177.2,90.25A19.87,19.87,0,0,0,158.05,76H148a12,12,0,0,0,0,24h7.07l16.8,56H140.93L121.2,90.25A19.87,19.87,0,0,0,102.05,76H42A19.87,19.87,0,0,0,22.8,90.25L.55,164.4a.29.29,0,0,0,0,.09l0,.06a5.68,5.68,0,0,0-.16.62A12,12,0,0,0,12,180H244a12,12,0,0,0,11.49-15.45ZM44.93,100H99.07l16.8,56H28.13Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M152,168H8L30.29,93.7A8,8,0,0,1,38,88h84.1a8,8,0,0,1,7.66,5.7Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M255.66,165.7h0v0a.24.24,0,0,0,0-.08L233.37,91.4A15.89,15.89,0,0,0,218.05,80H208a8,8,0,0,0,0,16h10.05l19.2,64H206L185.37,91.4A15.89,15.89,0,0,0,170.05,80H160a8,8,0,0,0,0,16h10.05l19.2,64H158L137.37,91.4A15.89,15.89,0,0,0,122.05,80H38A15.89,15.89,0,0,0,22.63,91.4L.37,165.6l0,.05v0s0,.05,0,.08A8.1,8.1,0,0,0,0,168a8,8,0,0,0,8,8H248a8,8,0,0,0,7.66-10.3ZM38,96h84.1l19.2,64H18.75Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M256,168a8,8,0,0,1-8,8H8A8,8,0,0,1,.34,165.7h0v0l0-.05L22.63,91.4A15.89,15.89,0,0,1,38,80h84.1a15.89,15.89,0,0,1,15.32,11.4L158,160h31.3l-19.2-64H160a8,8,0,0,1,0-16h10.05a15.89,15.89,0,0,1,15.32,11.4L206,160h31.3l-19.2-64H208a8,8,0,0,1,0-16h10.05a15.89,15.89,0,0,1,15.32,11.4l22.26,74.19a.24.24,0,0,1,0,.08v0h0A8,8,0,0,1,256,168Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M253.75,166.28h0v0l0,0L231.46,92a13.91,13.91,0,0,0-13.41-10H208a6,6,0,0,0,0,12h10.05A2,2,0,0,1,220,95.42l20,66.58H204.46l-21-70a13.91,13.91,0,0,0-13.41-10H160a6,6,0,0,0,0,12h10.05A2,2,0,0,1,172,95.42l20,66.58H156.46l-21-70a13.91,13.91,0,0,0-13.41-10H38A13.91,13.91,0,0,0,24.54,92L2.28,166.2l0,.05v0l0,.15a2.79,2.79,0,0,0-.1.39.11.11,0,0,0,0,.05A6,6,0,0,0,8,174H248a6,6,0,0,0,5.75-7.72ZM36,95.42A2,2,0,0,1,38,94h84.1A2,2,0,0,1,124,95.43l20,66.57H16.06Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M255.66,165.7h0v0a.24.24,0,0,0,0-.08L233.37,91.4A15.89,15.89,0,0,0,218.05,80H208a8,8,0,0,0,0,16h10.05l19.2,64H206L185.37,91.4A15.89,15.89,0,0,0,170.05,80H160a8,8,0,0,0,0,16h10.05l19.2,64H158L137.37,91.4A15.89,15.89,0,0,0,122.05,80H38A15.89,15.89,0,0,0,22.63,91.4L.37,165.6l0,.05v0s0,.05,0,.08A8.1,8.1,0,0,0,0,168a8,8,0,0,0,8,8H248a8,8,0,0,0,7.66-10.3ZM38,96h84.1l19.2,64H18.75Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M251.81,166.86h0l-22.29-74.3A11.92,11.92,0,0,0,218.05,84H208a4,4,0,0,0,0,8h10.05a4,4,0,0,1,3.83,2.85L242.62,164H203L181.54,92.55A11.92,11.92,0,0,0,170.05,84H160a4,4,0,0,0,0,8h10.05a4,4,0,0,1,3.83,2.85L194.62,164H155L133.54,92.55A11.92,11.92,0,0,0,122.05,84H38a11.92,11.92,0,0,0-11.49,8.55L4.17,166.85c0,.06,0,.12,0,.17A4,4,0,0,0,8,172H248a4,4,0,0,0,4-4A3.89,3.89,0,0,0,251.81,166.86Zm-217.69-72A4,4,0,0,1,38,92h84.1a4,4,0,0,1,3.83,2.85L146.62,164H13.38Z" }))
  ]
]), r = p((l, e) => /* @__PURE__ */ a.createElement(d, A(n({ ref: e }, l), { weights: s })));
r.displayName = "Tabs";
const u = r;
export {
  u as default
};
