'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "Map"
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
    d: "M2 5L9 2L15 5L21.303 2.299C21.3791 2.26638 21.4621 2.25317 21.5445 2.26054C21.627 2.26792 21.7063 2.29565 21.7754 2.34124C21.8445 2.38684 21.9012 2.44888 21.9404 2.5218C21.9796 2.59471 22.0001 2.67622 22 2.759V19L15 22L9 19L2.697 21.701C2.62091 21.7336 2.53792 21.7468 2.45547 21.7395C2.37301 21.7321 2.29368 21.7044 2.22459 21.6588C2.1555 21.6132 2.09881 21.5511 2.05961 21.4782C2.02041 21.4053 1.99993 21.3238 2 21.241V5ZM16 19.395L20 17.681V5.033L16 6.747V19.395ZM14 19.264V6.736L10 4.736V17.264L14 19.264ZM8 17.253V4.605L4 6.319V18.967L8 17.253Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/map.vue";

exports['default'] = script;
