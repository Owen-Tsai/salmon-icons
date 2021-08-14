import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "Computer"
});

const _hoisted_1 = { class: "sui-icon" };
const _hoisted_2 = /* @__PURE__ */ createVNode("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ createVNode("path", {
    d: "M3.99998 16H20V5H3.99998V16ZM13 18V20H17V22H6.99998V20H11V18H2.99198C2.86067 17.9992 2.7308 17.9725 2.60982 17.9215C2.48884 17.8704 2.37913 17.7959 2.28697 17.7024C2.19482 17.6088 2.12203 17.498 2.07278 17.3763C2.02353 17.2546 1.99879 17.1243 1.99998 16.993V4.007C1.99998 3.451 2.45498 3 2.99198 3H21.008C21.556 3 22 3.449 22 4.007V16.993C22 17.549 21.545 18 21.008 18H13Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/computer.vue";

export { script as default };
