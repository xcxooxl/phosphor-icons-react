var Z = Object.defineProperty, h = Object.defineProperties;
var o = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
var m = (t, e, l) => e in t ? Z(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l, r = (t, e) => {
  for (var l in e || (e = {}))
    A.call(e, l) && m(t, l, e[l]);
  if (n)
    for (var l of n(e))
      E.call(e, l) && m(t, l, e[l]);
  return t;
}, V = (t, e) => h(t, o(e));
import a, { forwardRef as M } from "react";
import p from "../lib/IconBase.es.js";
const v = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M217.06,140.33l13.24-22.18a12,12,0,1,0-20.6-12.3l-32.25,54c-.09.15-.17.31-.25.47a40,40,0,1,0,39.86-20ZM212,196a16,16,0,1,1,16-16A16,16,0,0,1,212,196ZM156,56V176a12,12,0,0,1-24,0V128H52v48a12,12,0,0,1-24,0V56a12,12,0,0,1,24,0v48h80V56a12,12,0,0,1,24,0Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M240,64V200a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V56H232A8,8,0,0,1,240,64Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm96,124a36,36,0,1,1-67.34-17.68c.07-.14.14-.28.22-.42l32.25-54a8,8,0,0,1,13.74,8.2l-16.69,28c.6,0,1.21-.05,1.82-.05A36,36,0,0,1,248,180Zm-16,0a20,20,0,1,0-20,20A20,20,0,0,0,232,180Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M192,152a16,16,0,1,1-16-16A16,16,0,0,1,192,152ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM128,80a8,8,0,0,0-16,0v32H72V80a8,8,0,0,0-16,0v80a8,8,0,0,0,16,0V128h40v32a8,8,0,0,0,16,0Zm80,72a32,32,0,0,0-32-32l11.55-20a8,8,0,0,0-13.86-8l-25.4,44-.14.27A32,32,0,1,0,208,152Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M212,146a34.5,34.5,0,0,0-5.6.47l18.75-31.39a6,6,0,0,0-10.3-6.16l-32.25,54-.22.41A34,34,0,1,0,212,146Zm0,56a22,22,0,1,1,22-22A22,22,0,0,1,212,202ZM150,56V176a6,6,0,0,1-12,0V122H46v54a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0v54h92V56a6,6,0,0,1,12,0Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm96,124a36,36,0,1,1-67.34-17.68c.07-.14.14-.28.22-.42l32.25-54a8,8,0,0,1,13.74,8.2l-16.69,28c.6,0,1.21-.05,1.82-.05A36,36,0,0,1,248,180Zm-16,0a20,20,0,1,0-20,20A20,20,0,0,0,232,180Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M212,148a32.08,32.08,0,0,0-9.75,1.52l21.18-35.47a4,4,0,0,0-6.86-4.1l-32.25,54a.89.89,0,0,0-.08.17A32,32,0,1,0,212,148Zm0,56a24,24,0,1,1,24-24A24,24,0,0,1,212,204ZM148,56V176a4,4,0,0,1-8,0V120H44v56a4,4,0,0,1-8,0V56a4,4,0,0,1,8,0v56h96V56a4,4,0,0,1,8,0Z" }))
  ]
]), c = M((t, e) => /* @__PURE__ */ a.createElement(p, V(r({ ref: e }, t), { weights: v })));
c.displayName = "TextHSix";
const g = c;
export {
  g as default
};
