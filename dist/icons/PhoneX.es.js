var r = Object.defineProperty, Z = Object.defineProperties;
var o = Object.getOwnPropertyDescriptors;
var c = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
var n = (e, l, t) => l in e ? r(e, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[l] = t, m = (e, l) => {
  for (var t in l || (l = {}))
    h.call(l, t) && n(e, t, l[t]);
  if (c)
    for (var t of c(l))
      E.call(l, t) && n(e, t, l[t]);
  return e;
}, L = (e, l) => Z(e, o(l));
import a, { forwardRef as p } from "react";
import d from "../lib/IconBase.es.js";
const g = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M151.52,87.51,167,72,151.52,56.48a12,12,0,1,1,17-17L184,55l15.52-15.52a12,12,0,0,1,17,17L201,72l15.52,15.51a12,12,0,1,1-17,17L184,89l-15.51,15.51a12,12,0,1,1-17-17Zm84.33,88.07A60.27,60.27,0,0,1,176,228C94.39,228,28,161.61,28,80A60.27,60.27,0,0,1,80.42,20.15,20.06,20.06,0,0,1,101.2,32l21.11,47.13a1.42,1.42,0,0,0,.08.18,20,20,0,0,1-1.66,18.83,11.76,11.76,0,0,1-.85,1.15L100.82,122c7.06,12.84,20.5,26.16,33.49,33.21l22.31-19a13.08,13.08,0,0,1,1.12-.84,19.94,19.94,0,0,1,19-1.75l.18.08L224,154.8A20.06,20.06,0,0,1,235.85,175.58Zm-24.31-.06-42-18.81-22.43,19.07a11.63,11.63,0,0,1-1.11.85A20,20,0,0,1,126.31,178c-19.48-9.4-38.89-28.68-48.31-48a20,20,0,0,1,1.28-19.64,12,12,0,0,1,.86-1.16L99.3,86.49l-18.82-42A36.29,36.29,0,0,0,52,80,124.15,124.15,0,0,0,176,204,36.29,36.29,0,0,0,211.54,175.52Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M223.94,174.08A48.33,48.33,0,0,1,176,216,136,136,0,0,1,40,80,48.33,48.33,0,0,1,81.92,32.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L89.32,117a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59l25-21.3a8,8,0,0,1,7.59-.69l47.16,21.13A8,8,0,0,1,223.94,174.08Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M154.34,90.34,172.69,72,154.34,53.66a8,8,0,0,1,11.32-11.32L184,60.69l18.34-18.35a8,8,0,0,1,11.32,11.32L195.32,72l18.34,18.34a8,8,0,0,1-11.32,11.32L184,83.31l-18.34,18.35a8,8,0,0,1-11.32-11.32Zm77.54,84.74A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Zm-15.88-2s-.07,0-.11,0h0l-47-21.05-24.35,20.71a8.44,8.44,0,0,1-.74.56,16,16,0,0,1-15.75,1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16,16,0,0,1,1-15.7,6.13,6.13,0,0,1,.57-.77L104,87.15l-21-47a.61.61,0,0,1,0-.12A40.2,40.2,0,0,0,48,80,128.14,128.14,0,0,0,176,208,40.21,40.21,0,0,0,216,173.07Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M154.34,90.34,172.69,72,154.34,53.66a8,8,0,0,1,11.32-11.32L184,60.69l18.34-18.35a8,8,0,0,1,11.32,11.32L195.32,72l18.34,18.34a8,8,0,0,1-11.32,11.32L184,83.31l-18.34,18.35a8,8,0,0,1-11.32-11.32Zm68,68.12-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M155.76,91.76,175.52,72,155.76,52.24a6,6,0,0,1,8.48-8.48L184,63.51l19.76-19.75a6,6,0,0,1,8.48,8.48L192.48,72l19.76,19.76a6,6,0,1,1-8.48,8.48L184,80.48l-19.76,19.76a6,6,0,0,1-8.48-8.48Zm74.13,83.07A54.25,54.25,0,0,1,176,222C97.7,222,34,158.3,34,80A54.25,54.25,0,0,1,81.17,26.11a14,14,0,0,1,14.56,8.38l21.1,47.11a14,14,0,0,1-1.12,13.28,6,6,0,0,1-.42.57L94.22,120.51a1.89,1.89,0,0,0,0,1.67c7.66,15.68,24.1,32,40,39.65a1.88,1.88,0,0,0,1.68-.06l24.69-21a4.81,4.81,0,0,1,.56-.42,14,14,0,0,1,13.28-1.22l47.24,21.17A14,14,0,0,1,229.89,174.83ZM218,173.32a2,2,0,0,0-1.21-2l-47.25-21.17a1.92,1.92,0,0,0-1.6.1l-24.68,21c-.18.15-.37.29-.56.42a14,14,0,0,1-13.77,1c-18.36-8.87-36.66-27-45.53-45.19a14,14,0,0,1,.91-13.73,4.73,4.73,0,0,1,.43-.57l21.06-25.06a2,2,0,0,0,0-1.67L84.74,39.31A2,2,0,0,0,82.9,38h-.23A42.24,42.24,0,0,0,46,80c0,71.68,58.32,130,130,130A42.24,42.24,0,0,0,218,173.32Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M154.34,90.34,172.69,72,154.34,53.66a8,8,0,0,1,11.32-11.32L184,60.69l18.34-18.35a8,8,0,0,1,11.32,11.32L195.32,72l18.34,18.34a8,8,0,0,1-11.32,11.32L184,83.31l-18.34,18.35a8,8,0,0,1-11.32-11.32Zm77.54,84.74A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Zm-15.88-2s-.07,0-.11,0h0l-47-21.05-24.35,20.71a8.44,8.44,0,0,1-.74.56,16,16,0,0,1-15.75,1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16,16,0,0,1,1-15.7,6.13,6.13,0,0,1,.57-.77L104,87.15l-21-47a.61.61,0,0,1,0-.12A40.2,40.2,0,0,0,48,80,128.14,128.14,0,0,0,176,208,40.21,40.21,0,0,0,216,173.07Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M157.17,93.17,178.34,72,157.17,50.83a4,4,0,0,1,5.66-5.66L184,66.34l21.17-21.17a4,4,0,1,1,5.66,5.66L189.66,72l21.17,21.17a4,4,0,0,1-5.66,5.66L184,77.66,162.83,98.83a4,4,0,0,1-5.66-5.66Zm70.74,81.41A52.25,52.25,0,0,1,176,220C98.8,220,36,157.2,36,80A52.25,52.25,0,0,1,81.42,28.09,12,12,0,0,1,93.9,35.28L115,82.42a12,12,0,0,1-1,11.36c-.09.13-.18.26-.28.38l-21.2,25.21a3.9,3.9,0,0,0-.18,3.69c7.84,16.05,24.65,32.73,40.89,40.57a3.93,3.93,0,0,0,3.7-.21L161.8,142.3a3.37,3.37,0,0,1,.38-.28A12,12,0,0,1,173.56,141l47.22,21.16A12,12,0,0,1,227.91,174.58Zm-10.35-5.12L170.35,148.3a3.93,3.93,0,0,0-3.57.27L142,169.69l-.37.28a12,12,0,0,1-11.79.87c-18-8.69-35.91-26.48-44.6-44.27A12,12,0,0,1,86,114.82c.09-.14.19-.26.29-.39l21.19-25.2a4,4,0,0,0,.23-3.6L86.57,38.49A4,4,0,0,0,82.9,36a3.87,3.87,0,0,0-.48,0A44.23,44.23,0,0,0,44,80c0,72.78,59.22,132,132,132a44.23,44.23,0,0,0,44-38.42A4,4,0,0,0,217.56,169.46Z" }))
  ]
]), A = p((e, l) => /* @__PURE__ */ a.createElement(d, L(m({ ref: l }, e), { weights: g })));
A.displayName = "PhoneX";
const i = A;
export {
  i as default
};
