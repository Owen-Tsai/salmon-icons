'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "BubbleChart"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ vue.createVNode("path", {
  d: "M16 16C17.657 16 19 17.343 19 19C19 20.657 17.657 22 16 22C14.343 22 13 20.657 13 19C13 17.343 14.343 16 16 16ZM6 12C8.21 12 10 13.79 10 16C10 18.21 8.21 20 6 20C3.79 20 2 18.21 2 16C2 13.79 3.79 12 6 12ZM16 18C15.448 18 15 18.448 15 19C15 19.552 15.448 20 16 20C16.552 20 17 19.552 17 19C17 18.448 16.552 18 16 18ZM6 14C4.895 14 4 14.895 4 16C4 17.105 4.895 18 6 18C7.105 18 8 17.105 8 16C8 14.895 7.105 14 6 14ZM14.5 2C17.538 2 20 4.462 20 7.5C20 10.538 17.538 13 14.5 13C11.462 13 9 10.538 9 7.5C9 4.462 11.462 2 14.5 2ZM14.5 4C12.567 4 11 5.567 11 7.5C11 9.433 12.567 11 14.5 11C16.433 11 18 9.433 18 7.5C18 5.567 16.433 4 14.5 4Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/bubble-chart.vue";

exports['default'] = script;
