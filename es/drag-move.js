import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "DragMove"
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
    d: "M11 11V5.828L9.172 7.657L7.757 6.243L12 2L16.243 6.243L14.828 7.657L13 5.828V11H18.172L16.343 9.172L17.757 7.757L22 12L17.757 16.243L16.343 14.828L18.172 13H13V18.172L14.828 16.343L16.243 17.757L12 22L7.757 17.757L9.172 16.343L11 18.172V13H5.828L7.657 14.828L6.243 16.243L2 12L6.243 7.757L7.657 9.172L5.828 11H11Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/drag-move.vue";

export { script as default };
