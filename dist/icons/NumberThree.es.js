var A = Object.defineProperty, o = Object.defineProperties;
var E = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var n = (t, a, l) => a in t ? A(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[a] = l, m = (t, a) => {
  for (var l in a || (a = {}))
    p.call(a, l) && n(t, l, a[l]);
  if (r)
    for (var l of r(a))
      d.call(a, l) && n(t, l, a[l]);
  return t;
}, c = (t, a) => o(t, E(a));
import e, { forwardRef as u } from "react";
import H from "../lib/IconBase.es.js";
const g = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M180,160A60,60,0,0,1,80,204.72a12,12,0,1,1,16-17.88A36,36,0,1,0,120,124a12,12,0,0,1-9.6-19.2L144,60H88a12,12,0,0,1,0-24h80a12,12,0,0,1,9.6,19.2l-36.48,48.64A60.11,60.11,0,0,1,180,160Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
      "path",
      {
        d: "M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ e.createElement("path", { d: "M176,160a56,56,0,0,1-93.33,41.74,8,8,0,1,1,10.66-11.92A40,40,0,1,0,120,120a8,8,0,0,1-6.4-12.8L152,56H88a8,8,0,0,1,0-16h80a8,8,0,0,1,6.4,12.8l-39.84,53.12A56.1,56.1,0,0,1,176,160Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM124,192a43.85,43.85,0,0,1-34.22-16.34,8,8,0,0,1,12.44-10.06A28,28,0,1,0,126,120.07a8,8,0,0,1-5.58-13.1l22.48-27H96a8,8,0,0,1,0-16h64a8,8,0,0,1,6.15,13.12l-25.23,30.27A44,44,0,0,1,124,192Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M174,160a54,54,0,0,1-90,40.25,6,6,0,1,1,8-8.94A42,42,0,1,0,120,118a6,6,0,0,1-4.8-9.6L156,54H88a6,6,0,0,1,0-12h80a6,6,0,0,1,4.8,9.6l-41.67,55.55A54.1,54.1,0,0,1,174,160Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M176,160a56,56,0,0,1-93.33,41.74,8,8,0,1,1,10.66-11.92A40,40,0,1,0,120,120a8,8,0,0,1-6.4-12.8L152,56H88a8,8,0,0,1,0-16h80a8,8,0,0,1,6.4,12.8l-39.84,53.12A56.1,56.1,0,0,1,176,160Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M172,160a52,52,0,0,1-86.67,38.76,4,4,0,1,1,5.34-6A44,44,0,1,0,120,116a4,4,0,0,1-3.2-6.4L160,52H88a4,4,0,0,1,0-8h80a4,4,0,0,1,3.2,6.4l-43.61,58.15A52.08,52.08,0,0,1,172,160Z" }))
  ]
]), h = u((t, a) => /* @__PURE__ */ e.createElement(H, c(m({ ref: a }, t), { weights: g })));
h.displayName = "NumberThree";
const s = h;
export {
  s as default
};
