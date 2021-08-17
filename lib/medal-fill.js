'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "MedalFill"
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
    d: "M12 7.00002C14.1217 7.00002 16.1566 7.84288 17.6569 9.34317C19.1571 10.8435 20 12.8783 20 15C20 17.1218 19.1571 19.1566 17.6569 20.6569C16.1566 22.1572 14.1217 23 12 23C9.87827 23 7.84344 22.1572 6.34315 20.6569C4.84285 19.1566 4 17.1218 4 15C4 12.8783 4.84285 10.8435 6.34315 9.34317C7.84344 7.84288 9.87827 7.00002 12 7.00002ZM12 10.5L10.677 13.18L7.72 13.61L9.86 15.695L9.355 18.641L12 17.25L14.645 18.64L14.14 15.695L16.28 13.609L13.323 13.179L12 10.5ZM13 1.99902L18 2.00002V5.00002L16.637 6.13802C15.5059 5.54461 14.2711 5.17486 13 5.04902V2.00002V1.99902ZM11 1.99902V5.04902C9.72935 5.17467 8.49482 5.54408 7.364 6.13702L6 5.00002V2.00002L11 1.99902Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/medal-fill.vue";

exports['default'] = script;