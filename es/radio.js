import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "Radio"
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
    d: "M17 10V8H15V10H5V6H19V10H17ZM6 3V1H8V3H21.008C21.556 3 22 3.445 22 3.993V20.007C21.9982 20.2696 21.8931 20.521 21.7075 20.7068C21.5219 20.8926 21.2706 20.9979 21.008 21H2.992C2.72881 20.9997 2.4765 20.895 2.29049 20.7088C2.10448 20.5226 2 20.2702 2 20.007V3.993C2.00183 3.73038 2.1069 3.47902 2.29251 3.29322C2.47813 3.10742 2.72938 3.00209 2.992 3H6ZM4 5V19H20V5H4ZM8 18C7.20435 18 6.44129 17.6839 5.87868 17.1213C5.31607 16.5587 5 15.7956 5 15C5 14.2044 5.31607 13.4413 5.87868 12.8787C6.44129 12.3161 7.20435 12 8 12C8.79565 12 9.55871 12.3161 10.1213 12.8787C10.6839 13.4413 11 14.2044 11 15C11 15.7956 10.6839 16.5587 10.1213 17.1213C9.55871 17.6839 8.79565 18 8 18Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/radio.vue";

export { script as default };
