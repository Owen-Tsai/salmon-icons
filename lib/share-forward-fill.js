'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "ShareForwardFill"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ vue.createVNode("path", {
  d: "M13 14H11C9.3596 13.9994 7.75023 14.4471 6.34588 15.2949C4.94152 16.1427 3.7956 17.3582 3.032 18.81C3.01054 18.5405 2.99986 18.2703 3 18C3 12.477 7.477 8 13 8V3L23 11L13 19V14Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/share-forward-fill.vue";

exports['default'] = script;
