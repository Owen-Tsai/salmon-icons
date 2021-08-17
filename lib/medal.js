'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "Medal"
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
    d: "M12 7.00002C14.1217 7.00002 16.1566 7.84288 17.6569 9.34317C19.1571 10.8435 20 12.8783 20 15C20 17.1218 19.1571 19.1566 17.6569 20.6569C16.1566 22.1572 14.1217 23 12 23C9.87827 23 7.84344 22.1572 6.34315 20.6569C4.84285 19.1566 4 17.1218 4 15C4 12.8783 4.84285 10.8435 6.34315 9.34317C7.84344 7.84288 9.87827 7.00002 12 7.00002ZM12 9.00002C10.4087 9.00002 8.88258 9.63216 7.75736 10.7574C6.63214 11.8826 6 13.4087 6 15C6 16.5913 6.63214 18.1174 7.75736 19.2427C8.88258 20.3679 10.4087 21 12 21C13.5913 21 15.1174 20.3679 16.2426 19.2427C17.3679 18.1174 18 16.5913 18 15C18 13.4087 17.3679 11.8826 16.2426 10.7574C15.1174 9.63216 13.5913 9.00002 12 9.00002ZM12 10.5L13.323 13.18L16.28 13.61L14.14 15.695L14.645 18.641L12 17.25L9.355 18.64L9.86 15.695L7.72 13.609L10.677 13.179L12 10.5ZM18 2.00002V5.00002L16.637 6.13802C15.5059 5.54461 14.2711 5.17486 13 5.04902V2.00002H18ZM11 1.99902V5.04902C9.72935 5.17467 8.49482 5.54408 7.364 6.13702L6 5.00002V2.00002L11 1.99902Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/medal.vue";

exports['default'] = script;