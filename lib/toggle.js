'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "Toggle"
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
    d: "M8 7C6.67392 7 5.40215 7.52678 4.46447 8.46447C3.52678 9.40215 3 10.6739 3 12C3 13.3261 3.52678 14.5979 4.46447 15.5355C5.40215 16.4732 6.67392 17 8 17H16C17.3261 17 18.5979 16.4732 19.5355 15.5355C20.4732 14.5979 21 13.3261 21 12C21 10.6739 20.4732 9.40215 19.5355 8.46447C18.5979 7.52678 17.3261 7 16 7H8ZM8 5H16C17.8565 5 19.637 5.7375 20.9497 7.05025C22.2625 8.36301 23 10.1435 23 12C23 13.8565 22.2625 15.637 20.9497 16.9497C19.637 18.2625 17.8565 19 16 19H8C6.14348 19 4.36301 18.2625 3.05025 16.9497C1.7375 15.637 1 13.8565 1 12C1 10.1435 1.7375 8.36301 3.05025 7.05025C4.36301 5.7375 6.14348 5 8 5ZM8 15C7.20435 15 6.44129 14.6839 5.87868 14.1213C5.31607 13.5587 5 12.7956 5 12C5 11.2044 5.31607 10.4413 5.87868 9.87868C6.44129 9.31607 7.20435 9 8 9C8.79565 9 9.55871 9.31607 10.1213 9.87868C10.6839 10.4413 11 11.2044 11 12C11 12.7956 10.6839 13.5587 10.1213 14.1213C9.55871 14.6839 8.79565 15 8 15Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/toggle.vue";

exports['default'] = script;