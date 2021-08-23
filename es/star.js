import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "Star"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("path", {
  d: "M12 18.26L4.94701 22.208L6.52201 14.28L0.587006 8.792L8.61401 7.84L12 0.5L15.386 7.84L23.413 8.792L17.478 14.28L19.053 22.208L12 18.26ZM12 15.968L16.247 18.345L15.298 13.572L18.871 10.267L14.038 9.694L12 5.275L9.96201 9.695L5.12901 10.267L8.70201 13.572L7.75301 18.345L12 15.968Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/star.vue";

export { script as default };
