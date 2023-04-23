var r = Object.defineProperty, M = Object.defineProperties;
var H = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var A = (t, e, l) => e in t ? r(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l, m = (t, e) => {
  for (var l in e || (e = {}))
    g.call(e, l) && A(t, l, e[l]);
  if (n)
    for (var l of n(e))
      i.call(e, l) && A(t, l, e[l]);
  return t;
}, c = (t, e) => M(t, H(e));
import a, { forwardRef as o } from "react";
import C from "../lib/IconBase.es.js";
const E = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M35.7,76a11.86,11.86,0,0,1-5.51-1.35,12,12,0,0,1-5.13-16.17A115.25,115.25,0,0,1,65.6,13.86,12,12,0,1,1,78.4,34.15a90.1,90.1,0,0,0-32,35.38A12,12,0,0,1,35.7,76ZM230.94,58.48A115.25,115.25,0,0,0,190.4,13.86a12,12,0,1,0-12.8,20.29,90.1,90.1,0,0,1,32,35.38A12,12,0,0,0,220.3,76a11.86,11.86,0,0,0,5.51-1.35A12,12,0,0,0,230.94,58.48Zm-11.06,109.4A20,20,0,0,1,204,200H171.26a44,44,0,0,1-86.52,0H52a20,20,0,0,1-15.91-32.12c7.17-9.33,15.73-26.62,15.88-55.94A76,76,0,0,1,204,112C204.15,141.26,212.71,158.55,219.88,167.88ZM146.32,200H109.68a20,20,0,0,0,36.64,0Zm50-24c-8.16-13-16.19-33.57-16.34-63.94A52,52,0,1,0,76,112c-.15,30.42-8.18,51-16.34,64Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,147.81,56,112a72,72,0,0,1,144,0c0,35.82,8.3,56.6,14.9,68A8,8,0,0,1,208,192Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M224,71.1a8,8,0,0,1-10.78-3.42,94.13,94.13,0,0,0-33.46-36.91,8,8,0,1,1,8.54-13.54,111.46,111.46,0,0,1,39.12,43.09A8,8,0,0,1,224,71.1ZM35.71,72a8,8,0,0,0,7.1-4.32A94.13,94.13,0,0,1,76.27,30.77a8,8,0,1,0-8.54-13.54A111.46,111.46,0,0,0,28.61,60.32,8,8,0,0,0,35.71,72Zm186.1,103.94A16,16,0,0,1,208,200H167.2a40,40,0,0,1-78.4,0H48a16,16,0,0,1-13.79-24.06C43.22,160.39,48,138.28,48,112a80,80,0,0,1,160,0C208,138.27,212.78,160.38,221.81,175.94ZM150.62,200H105.38a24,24,0,0,0,45.24,0ZM208,184c-10.64-18.27-16-42.49-16-72a64,64,0,0,0-128,0c0,29.52-5.38,53.74-16,72Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M224,71.1a8,8,0,0,1-10.78-3.42,94.13,94.13,0,0,0-33.46-36.91,8,8,0,1,1,8.54-13.54,111.46,111.46,0,0,1,39.12,43.09A8,8,0,0,1,224,71.1ZM35.71,72a8,8,0,0,0,7.1-4.32A94.13,94.13,0,0,1,76.27,30.77a8,8,0,1,0-8.54-13.54A111.46,111.46,0,0,0,28.61,60.32,8,8,0,0,0,35.71,72Zm186.1,103.94A16,16,0,0,1,208,200H167.2a40,40,0,0,1-78.4,0H48a16,16,0,0,1-13.79-24.06C43.22,160.39,48,138.28,48,112a80,80,0,0,1,160,0C208,138.27,212.78,160.38,221.81,175.94ZM150.62,200H105.38a24,24,0,0,0,45.24,0Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M223.05,69.33A6,6,0,0,1,215,66.76,96,96,0,0,0,180.8,29.08a6,6,0,0,1,6.4-10.15,109.26,109.26,0,0,1,38.41,42.31A6,6,0,0,1,223.05,69.33ZM41,66.76A96,96,0,0,1,75.2,29.08a6,6,0,0,0-6.4-10.15A109.26,109.26,0,0,0,30.39,61.24,6,6,0,1,0,41,66.76Zm179,110.18A14,14,0,0,1,208,198h-42.5a38,38,0,0,1-75,0H48a14,14,0,0,1-12.06-21.06C45.13,161.09,50,138.63,50,112a78,78,0,0,1,156,0C206,139,210.74,160.86,220.08,176.94ZM153.29,198H102.71a26,26,0,0,0,50.58,0Zm56.42-15C199.29,165,194,141.15,194,112a66,66,0,0,0-132,0c0,29.16-5.29,53-15.71,71a2,2,0,0,0,0,2,1.9,1.9,0,0,0,1.7,1H208a1.9,1.9,0,0,0,1.7-1A2,2,0,0,0,209.71,183Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M224,71.1a8,8,0,0,1-10.78-3.42,94.13,94.13,0,0,0-33.46-36.91,8,8,0,1,1,8.54-13.54,111.46,111.46,0,0,1,39.12,43.09A8,8,0,0,1,224,71.1ZM35.71,72a8,8,0,0,0,7.1-4.32A94.13,94.13,0,0,1,76.27,30.77a8,8,0,1,0-8.54-13.54A111.46,111.46,0,0,0,28.61,60.32,8,8,0,0,0,35.71,72Zm186.1,103.94A16,16,0,0,1,208,200H167.2a40,40,0,0,1-78.4,0H48a16,16,0,0,1-13.79-24.06C43.22,160.39,48,138.28,48,112a80,80,0,0,1,160,0C208,138.27,212.78,160.38,221.81,175.94ZM150.62,200H105.38a24,24,0,0,0,45.24,0ZM208,184c-10.64-18.27-16-42.49-16-72a64,64,0,0,0-128,0c0,29.52-5.38,53.74-16,72Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M222.13,67.55a3.94,3.94,0,0,1-1.84.45,4,4,0,0,1-3.55-2.16,99.41,99.41,0,0,0-34.87-38.46,4,4,0,1,1,4.26-6.76,107.34,107.34,0,0,1,37.71,41.54A4,4,0,0,1,222.13,67.55ZM39.26,65.84A99.41,99.41,0,0,1,74.13,27.38a4,4,0,0,0-4.26-6.76A107.34,107.34,0,0,0,32.16,62.16a4,4,0,0,0,1.71,5.39,3.94,3.94,0,0,0,1.84.45A4,4,0,0,0,39.26,65.84ZM218.36,178A12,12,0,0,1,208,196H163.77a36,36,0,0,1-71.54,0H48A12,12,0,0,1,37.64,178C47.17,161.56,52,139.37,52,112a76,76,0,0,1,152,0C204,139.36,208.83,161.55,218.36,178ZM155.71,196H100.29a28,28,0,0,0,55.42,0Zm55.73-14C201.19,164.34,196,140.79,196,112a68,68,0,0,0-136,0c0,28.8-5.19,52.34-15.44,70a4,4,0,0,0,0,4A3.89,3.89,0,0,0,48,188H208a3.89,3.89,0,0,0,3.43-2A4,4,0,0,0,211.44,182Z" }))
  ]
]), Z = o((t, e) => /* @__PURE__ */ a.createElement(C, c(m({ ref: e }, t), { weights: E })));
Z.displayName = "BellRinging";
const u = Z;
export {
  u as default
};
