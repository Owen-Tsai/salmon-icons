import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "RadioFill"
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
    d: "M17 10H20V6H4V10H15V8H17V10ZM6 3V1H8V3H21.008C21.556 3 22 3.445 22 3.993V20.007C21.9982 20.2696 21.8931 20.521 21.7075 20.7068C21.5219 20.8926 21.2706 20.9979 21.008 21H2.992C2.72881 20.9997 2.4765 20.895 2.29049 20.7088C2.10448 20.5226 2 20.2702 2 20.007V3.993C2.00183 3.73038 2.1069 3.47902 2.29251 3.29322C2.47813 3.10742 2.72938 3.00209 2.992 3H6ZM7 19C7.79565 19 8.55871 18.6839 9.12132 18.1213C9.68393 17.5587 10 16.7956 10 16C10 15.2044 9.68393 14.4413 9.12132 13.8787C8.55871 13.3161 7.79565 13 7 13C6.20435 13 5.44129 13.3161 4.87868 13.8787C4.31607 14.4413 4 15.2044 4 16C4 16.7956 4.31607 17.5587 4.87868 18.1213C5.44129 18.6839 6.20435 19 7 19Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/radio-fill.vue";

export { script as default };