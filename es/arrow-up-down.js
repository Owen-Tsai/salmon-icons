import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "ArrowUpDown"
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
    d: "M11.95 7.95L10.536 9.364L7.99999 6.828V20H5.99999V6.828L3.46499 9.364L2.04999 7.95L6.99999 3L11.95 7.95ZM21.95 16.05L17 21L12.05 16.05L13.464 14.636L16.001 17.172L16 4H18V17.172L20.536 14.636L21.95 16.05Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/arrow-up-down.vue";

export { script as default };
