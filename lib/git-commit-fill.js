'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "GitCommitFill"
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
    d: "M15.874 13C15.6516 13.8583 15.1504 14.6183 14.4493 15.1609C13.7481 15.7036 12.8866 15.998 12 15.998C11.1134 15.998 10.2519 15.7036 9.55074 15.1609C8.84957 14.6183 8.34844 13.8583 8.126 13H3V11H8.126C8.34844 10.1418 8.84957 9.3817 9.55074 8.83909C10.2519 8.29649 11.1134 8.00208 12 8.00208C12.8866 8.00208 13.7481 8.29649 14.4493 8.83909C15.1504 9.3817 15.6516 10.1418 15.874 11H21V13H15.874Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/git-commit-fill.vue";

exports['default'] = script;