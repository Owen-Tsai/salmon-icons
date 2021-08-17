'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "PlayCircleFill"
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
    d: "M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM10.622 8.415C10.5618 8.37485 10.4919 8.35177 10.4196 8.34822C10.3473 8.34467 10.2755 8.36079 10.2116 8.39486C10.1478 8.42893 10.0944 8.47967 10.0572 8.54168C10.0199 8.60369 10.0001 8.67465 10 8.747V15.253C10.0001 15.3253 10.0199 15.3963 10.0572 15.4583C10.0944 15.5203 10.1478 15.5711 10.2116 15.6051C10.2755 15.6392 10.3473 15.6553 10.4196 15.6518C10.4919 15.6482 10.5618 15.6252 10.622 15.585L15.501 12.333C15.5559 12.2965 15.6009 12.247 15.632 12.1889C15.6631 12.1308 15.6794 12.0659 15.6794 12C15.6794 11.9341 15.6631 11.8692 15.632 11.8111C15.6009 11.753 15.5559 11.7035 15.501 11.667L10.621 8.415H10.622Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/play-circle-fill.vue";

exports['default'] = script;