import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "CodeSSlash"
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
    d: "M24 12L18.343 17.657L16.929 16.243L21.172 12L16.929 7.757L18.343 6.343L24 12ZM2.828 12L7.071 16.243L5.657 17.657L0 12L5.657 6.343L7.07 7.757L2.828 12ZM9.788 21H7.66L14.212 3H16.34L9.788 21Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/code-s-slash.vue";

export { script as default };
