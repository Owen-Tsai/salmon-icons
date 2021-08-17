'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "Umbrella"
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
    d: "M13 2.05C18.053 2.551 22 6.815 22 12V13H13V19C13 19.5304 13.2107 20.0391 13.5858 20.4142C13.9609 20.7893 14.4696 21 15 21C15.5304 21 16.0391 20.7893 16.4142 20.4142C16.7893 20.0391 17 19.5304 17 19V18H19V19C19 20.0609 18.5786 21.0783 17.8284 21.8284C17.0783 22.5786 16.0609 23 15 23C13.9391 23 12.9217 22.5786 12.1716 21.8284C11.4214 21.0783 11 20.0609 11 19V13H2V12C2 6.815 5.947 2.551 11 2.05V2C11 1.73478 11.1054 1.48043 11.2929 1.29289C11.4804 1.10536 11.7348 1 12 1C12.2652 1 12.5196 1.10536 12.7071 1.29289C12.8946 1.48043 13 1.73478 13 2V2.05ZM19.938 11C19.694 9.0669 18.7529 7.28927 17.2914 6.00068C15.8299 4.71208 13.9484 4.00108 12 4.00108C10.0516 4.00108 8.17007 4.71208 6.70857 6.00068C5.24708 7.28927 4.30603 9.0669 4.062 11H19.938Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/umbrella.vue";

exports['default'] = script;