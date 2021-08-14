'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "Bluetooth"
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
    d: "M14.341 12.0301L18.684 16.3731L13.028 22.0291H11.028V15.3431L6.66402 19.7071L5.24902 18.2931L11.028 12.5151V11.5451L5.24902 5.76505L6.66402 4.35105L11.028 8.71505V2.02905H13.028L18.684 7.68605L14.341 12.0291V12.0301ZM13.028 13.5441V19.2011L15.856 16.3731L13.028 13.5441ZM13.028 10.5141L15.856 7.68605L13.028 4.85805V10.5151V10.5141Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/bluetooth.vue";

exports['default'] = script;
