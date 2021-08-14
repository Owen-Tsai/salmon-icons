'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "Twitch"
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
    d: "M4.3 3H21V14.7L16.3 19.4H12.4L9.9 21.8H7V19.4H3V6.2L4.3 3ZM5 17.4H9V19.8H9.095L11.595 17.4H15.472L19 13.872V5H5V17.4ZM15 8H17V12.7H15V8ZM15 8H17V12.7H15V8ZM10 8H12V12.7H10V8Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/twitch.vue";

exports['default'] = script;
