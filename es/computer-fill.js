import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "ComputerFill"
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
    d: "M13 18V20H17V22H7.00004V20H11V18H2.99204C2.86073 17.9992 2.73086 17.9725 2.60988 17.9215C2.4889 17.8704 2.37919 17.7959 2.28703 17.7024C2.19488 17.6088 2.12209 17.498 2.07284 17.3763C2.02359 17.2546 1.99885 17.1243 2.00004 16.993V4.007C2.00004 3.451 2.45504 3 2.99204 3H21.008C21.556 3 22 3.449 22 4.007V16.993C22 17.549 21.545 18 21.008 18H13Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/computer-fill.vue";

export { script as default };