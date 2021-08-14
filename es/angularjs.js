import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "Angularjs"
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
    d: "M17.523 16.65L18.013 16.38L19.131 6.67L12 4.123L4.86901 6.669L5.98801 16.379L6.46101 16.642L12 4.21L17.523 16.65ZM16.424 17.26H15.626L14.457 14.34H9.52301L8.35301 17.26H7.57601L12 19.713L16.424 17.26ZM12 2L21.3 5.32L19.882 17.63L12 22L4.11801 17.63L2.70001 5.32L12 2ZM13.698 12.54L12 8.45L10.302 12.54H13.698Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/angularjs.vue";

export { script as default };
