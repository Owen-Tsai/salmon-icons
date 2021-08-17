'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "ArchiveFill"
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
    d: "M3 10H21V20.004C21 20.554 20.555 21 20.007 21H3.993C3.86238 20.9999 3.73307 20.974 3.61246 20.9239C3.49184 20.8737 3.3823 20.8003 3.29007 20.7078C3.19785 20.6153 3.12477 20.5055 3.07499 20.3848C3.02522 20.264 2.99974 20.1346 3 20.004V10ZM9 12V14H15V12H9ZM2 4C2 3.448 2.455 3 2.992 3H21.008C21.556 3 22 3.444 22 4V8H2V4Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/archive-fill.vue";

exports['default'] = script;