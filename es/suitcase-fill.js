import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "SuitcaseFill"
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
    d: "M15 3C15.552 3 16 3.448 16 4V6H21C21.552 6 22 6.448 22 7V20C22 20.552 21.552 21 21 21H3C2.448 21 2 20.552 2 20V7C2 6.448 2.448 6 3 6H8V4C8 3.448 8.448 3 9 3H15ZM8 8H6V19H8V8ZM18 8H16V19H18V8ZM14 5H10V6H14V5Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/suitcase-fill.vue";

export { script as default };
