'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "PlayFill"
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
    d: "M19.376 12.4159L8.777 19.4819C8.70171 19.5321 8.61423 19.5608 8.52389 19.5651C8.43355 19.5694 8.34373 19.5492 8.264 19.5065C8.18427 19.4638 8.1176 19.4003 8.07111 19.3227C8.02462 19.2451 8.00005 19.1564 8 19.0659V4.93395C8.00005 4.8435 8.02462 4.75477 8.07111 4.67719C8.1176 4.59961 8.18427 4.53609 8.264 4.49341C8.34373 4.45072 8.43355 4.43045 8.52389 4.43478C8.61423 4.4391 8.70171 4.46784 8.777 4.51795L19.376 11.5839C19.4445 11.6296 19.5006 11.6915 19.5395 11.764C19.5783 11.8366 19.5986 11.9176 19.5986 11.9999C19.5986 12.0823 19.5783 12.1633 19.5395 12.2359C19.5006 12.3084 19.4445 12.3703 19.376 12.4159Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/play-fill.vue";

exports['default'] = script;
