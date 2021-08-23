import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "FilterOffFill"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("path", {
  d: "M6.929 0.515015L21.07 14.657L19.656 16.071L15.833 12.249L14 15V22H10V15L4 6.00001H3V4.00001H7.585L5.515 1.92901L6.929 0.515015ZM21 4.00001V6.00001H20L18.085 8.87201L13.213 4.00001H21Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/filter-off-fill.vue";

export { script as default };
