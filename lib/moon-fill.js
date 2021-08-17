'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "MoonFill"
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
    d: "M11.38 2.01904C10.6431 2.70566 10.0521 3.53367 9.64219 4.45366C9.23227 5.37366 9.01185 6.36679 8.99408 7.37382C8.97632 8.38085 9.16156 9.38114 9.53877 10.315C9.91598 11.2489 10.4774 12.0972 11.1896 12.8094C11.9018 13.5216 12.7501 14.0831 13.684 14.4603C14.6179 14.8375 15.6182 15.0227 16.6252 15.005C17.6323 14.9872 18.6254 14.7668 19.5454 14.3569C20.4654 13.9469 21.2934 13.3559 21.98 12.619C21.662 17.854 17.316 22 12.001 22C6.477 22 2 17.523 2 12C2 6.68504 6.146 2.33904 11.38 2.01904Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/moon-fill.vue";

exports['default'] = script;