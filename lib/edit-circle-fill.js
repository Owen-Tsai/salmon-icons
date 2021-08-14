'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "EditCircleFill"
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
    d: "M16.626 3.132L9.29 10.466L9.298 14.713L13.536 14.706L20.867 7.374C21.6133 8.80164 22.0021 10.3891 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C13.669 2 15.242 2.409 16.626 3.132ZM20.486 2.101L21.899 3.515L12.707 12.707L11.295 12.71L11.293 11.293L20.485 2.1L20.486 2.101Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/edit-circle-fill.vue";

exports['default'] = script;
