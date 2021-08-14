'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "ShieldCheckFill"
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
    d: "M12 1L20.217 2.826C20.674 2.928 21 3.333 21 3.802V13.789C21 15.795 19.997 17.669 18.328 18.781L12 23L5.672 18.781C4.002 17.668 3 15.795 3 13.79V3.802C3 3.333 3.326 2.928 3.783 2.826L12 1ZM16.452 8.222L11.502 13.171L8.674 10.343L7.26 11.757L11.503 16L17.867 9.636L16.452 8.222Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/shield-check-fill.vue";

exports['default'] = script;
