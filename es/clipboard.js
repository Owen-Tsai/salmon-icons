import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "Clipboard"
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
    d: "M7 4V2H17V4H20.007C20.555 4 21 4.445 21 4.993V21.007C20.9997 21.2703 20.895 21.5227 20.7089 21.7089C20.5227 21.895 20.2703 21.9997 20.007 22H3.993C3.72972 21.9997 3.4773 21.895 3.29114 21.7089C3.10497 21.5227 3.00026 21.2703 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7ZM7 6H5V20H19V6H17V8H7V6ZM9 4V6H15V4H9Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/clipboard.vue";

export { script as default };
