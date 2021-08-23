'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "CodeSSlash"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ vue.createVNode("path", {
  d: "M24 12L18.343 17.657L16.929 16.243L21.172 12L16.929 7.757L18.343 6.343L24 12ZM2.828 12L7.071 16.243L5.657 17.657L0 12L5.657 6.343L7.07 7.757L2.828 12ZM9.788 21H7.66L14.212 3H16.34L9.788 21Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/code-s-slash.vue";

exports['default'] = script;
