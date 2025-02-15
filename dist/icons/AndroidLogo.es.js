var Z = Object.defineProperty, o = Object.defineProperties;
var d = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var n = (t, e, l) => e in t ? Z(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l, A = (t, e) => {
  for (var l in e || (e = {}))
    L.call(e, l) && n(t, l, e[l]);
  if (m)
    for (var l of m(e))
      H.call(e, l) && n(t, l, e[l]);
  return t;
}, r = (t, e) => o(t, d(e));
import a, { forwardRef as h } from "react";
import E from "../lib/IconBase.es.js";
const p = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M180,156a16,16,0,1,1-16-16A16,16,0,0,1,180,156ZM92,140a16,16,0,1,0,16,16A16,16,0,0,0,92,140Zm152,28v24a20,20,0,0,1-20,20H32a20,20,0,0,1-20-20V169.13A117.35,117.35,0,0,1,45.72,86.69L23.51,64.49a12,12,0,0,1,17-17L64.3,71.33A114.35,114.35,0,0,1,127.59,52H128a115.15,115.15,0,0,1,63.89,19.14l23.62-23.63a12,12,0,0,1,17,17l-22,22A115.18,115.18,0,0,1,244,168Zm-24,0a92,92,0,0,0-92.33-92C77.12,76.18,36,118,36,169.13V188H220Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M232,168v24a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V169.13C24,111.65,70.15,64.2,127.63,64A104,104,0,0,1,232,168Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M176,156a12,12,0,1,1-12-12A12,12,0,0,1,176,156ZM92,144a12,12,0,1,0,12,12A12,12,0,0,0,92,144Zm148,24v24a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V169.13A113.38,113.38,0,0,1,51.4,86.72L26.34,61.66A8,8,0,0,1,37.66,50.34L63.82,76.5a111.4,111.4,0,0,1,128.55-.18l26-26a8,8,0,0,1,11.32,11.32L204.82,86.5c.75.71,1.5,1.43,2.24,2.17A111.25,111.25,0,0,1,240,168Zm-16,0a96,96,0,0,0-96-96h-.34C74.91,72.18,32,115.75,32,169.13V192H224Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M207.06,88.67c-.74-.74-1.49-1.46-2.24-2.17l24.84-24.84a8,8,0,0,0-11.32-11.32l-26,26a111.43,111.43,0,0,0-128.55.19L37.66,50.34A8,8,0,0,0,26.34,61.66L51.4,86.72A113.38,113.38,0,0,0,16,169.13V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V168A111.25,111.25,0,0,0,207.06,88.67ZM92,168a12,12,0,1,1,12-12A12,12,0,0,1,92,168Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,168Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M174,156a10,10,0,1,1-10-10A10,10,0,0,1,174,156ZM92,146a10,10,0,1,0,10,10A10,10,0,0,0,92,146Zm146,22v24a14,14,0,0,1-14,14H32a14,14,0,0,1-14-14V169.13A111.44,111.44,0,0,1,54.28,86.76L27.76,60.24a6,6,0,1,1,8.48-8.48L63.61,79.12a108.59,108.59,0,0,1,64-21.12H128a109.17,109.17,0,0,1,64.58,20.93l27.18-27.17a6,6,0,0,1,8.48,8.48L201.93,86.55c1.26,1.15,2.5,2.32,3.72,3.53A109.29,109.29,0,0,1,238,168Zm-12,0a98,98,0,0,0-98-98h-.35C73.81,70.19,30,114.66,30,169.13V192a2,2,0,0,0,2,2H224a2,2,0,0,0,2-2Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M176,156a12,12,0,1,1-12-12A12,12,0,0,1,176,156ZM92,144a12,12,0,1,0,12,12A12,12,0,0,0,92,144Zm148,24v24a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V169.13A113.38,113.38,0,0,1,51.4,86.72L26.34,61.66A8,8,0,0,1,37.66,50.34L63.82,76.5a111.43,111.43,0,0,1,128.55-.19l26-26a8,8,0,0,1,11.32,11.32L204.82,86.5c.75.71,1.5,1.43,2.24,2.17A111.25,111.25,0,0,1,240,168Zm-16,0a96,96,0,0,0-96-96h-.34C74.91,72.18,32,115.75,32,169.13V192H224Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M172,156a8,8,0,1,1-8-8A8,8,0,0,1,172,156Zm-80-8a8,8,0,1,0,8,8A8,8,0,0,0,92,148Zm144,20v24a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V169.13A109.43,109.43,0,0,1,57.18,86.84l-28-28a4,4,0,0,1,5.66-5.66L63.41,81.75A106.63,106.63,0,0,1,127.62,60H128a107.16,107.16,0,0,1,64.78,21.57l28.39-28.4a4,4,0,1,1,5.66,5.66L199,86.64c1.78,1.56,3.52,3.17,5.21,4.86A107.25,107.25,0,0,1,236,168Zm-8,0A100,100,0,0,0,128,68h-.35C72.7,68.19,28,113.56,28,169.13V192a4,4,0,0,0,4,4H224a4,4,0,0,0,4-4Z" }))
  ]
]), c = h((t, e) => /* @__PURE__ */ a.createElement(E, r(A({ ref: e }, t), { weights: p })));
c.displayName = "AndroidLogo";
const i = c;
export {
  i as default
};
