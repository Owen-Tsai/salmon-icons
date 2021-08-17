'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "BlurOffFill"
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
    d: "M5.43194 6.84597L1.39294 2.80797L2.80794 1.39297L22.6069 21.193L21.1919 22.607L18.1539 19.567C16.4485 21.1601 14.191 22.0284 11.8576 21.9889C9.5242 21.9493 7.29741 21.0049 5.64701 19.3549C3.99661 17.7049 3.05167 15.4783 3.01155 13.1449C2.97142 10.8115 3.83925 8.55375 5.43194 6.84797V6.84597ZM8.24294 4.02997L11.9999 0.271973L18.3639 6.63597C19.5911 7.86293 20.4375 9.41845 20.8012 11.1153C21.1649 12.8121 21.0304 14.5778 20.4139 16.2L8.24394 4.02997H8.24294Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/blur-off-fill.vue";

exports['default'] = script;