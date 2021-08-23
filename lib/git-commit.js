'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "GitCommit"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ vue.createVNode("path", {
  d: "M15.874 13C15.6516 13.8583 15.1504 14.6183 14.4493 15.1609C13.7481 15.7036 12.8866 15.998 12 15.998C11.1134 15.998 10.2519 15.7036 9.55074 15.1609C8.84957 14.6183 8.34844 13.8583 8.126 13H3V11H8.126C8.34844 10.1418 8.84957 9.3817 9.55074 8.83909C10.2519 8.29649 11.1134 8.00208 12 8.00208C12.8866 8.00208 13.7481 8.29649 14.4493 8.83909C15.1504 9.3817 15.6516 10.1418 15.874 11H21V13H15.874ZM12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0392 14 12.5305 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 12.5305 10.2107 13.0392 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/git-commit.vue";

exports['default'] = script;
