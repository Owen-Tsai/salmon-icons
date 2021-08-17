'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "ToggleFill"
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
    d: "M8 5H16C17.8565 5 19.637 5.7375 20.9497 7.05025C22.2625 8.36301 23 10.1435 23 12C23 13.8565 22.2625 15.637 20.9497 16.9497C19.637 18.2625 17.8565 19 16 19H8C6.14348 19 4.36301 18.2625 3.05025 16.9497C1.7375 15.637 1 13.8565 1 12C1 10.1435 1.7375 8.36301 3.05025 7.05025C4.36301 5.7375 6.14348 5 8 5ZM16 15C16.7956 15 17.5587 14.6839 18.1213 14.1213C18.6839 13.5587 19 12.7956 19 12C19 11.2044 18.6839 10.4413 18.1213 9.87868C17.5587 9.31607 16.7956 9 16 9C15.2044 9 14.4413 9.31607 13.8787 9.87868C13.3161 10.4413 13 11.2044 13 12C13 12.7956 13.3161 13.5587 13.8787 14.1213C14.4413 14.6839 15.2044 15 16 15Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/toggle-fill.vue";

exports['default'] = script;