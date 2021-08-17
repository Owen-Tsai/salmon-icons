'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "SendPlane"
});

const _hoisted_1 = { class: "sui-icon" };
const _hoisted_2 = /* @__PURE__ */ vue.createVNode("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ vue.createVNode("path", {
    d: "M1.92299 9.37004C1.41299 9.16504 1.41899 8.86004 1.95699 8.68104L21.043 2.31904C21.572 2.14304 21.875 2.43904 21.727 2.95704L16.273 22.043C16.123 22.572 15.798 22.596 15.556 22.113L11 13L1.92299 9.37004ZM6.81299 9.17004L12.449 11.425L15.489 17.507L19.035 5.09704L6.81199 9.17004H6.81299Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/send-plane.vue";

exports['default'] = script;