'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "CheckboxMultipleFill"
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
    d: "M7 7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H21C21.2652 2 21.5196 2.10536 21.7071 2.29289C21.8946 2.48043 22 2.73478 22 3V16C22 16.2652 21.8946 16.5196 21.7071 16.7071C21.5196 16.8946 21.2652 17 21 17H17V20.993C17 21.549 16.551 22 15.993 22H3.007C2.87472 22.0001 2.74372 21.9742 2.62148 21.9236C2.49925 21.8731 2.38819 21.7989 2.29465 21.7053C2.20112 21.6118 2.12695 21.5008 2.07639 21.3785C2.02583 21.2563 1.99987 21.1253 2 20.993L2.003 8.007C2.003 7.451 2.452 7 3.01 7H7ZM9 7H15.993C16.549 7 17 7.449 17 8.007V15H20V4H9V7ZM8.503 18L14.159 12.343L12.745 10.929L8.503 15.172L6.38 13.05L4.966 14.464L8.503 18Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/checkbox-multiple-fill.vue";

exports['default'] = script;