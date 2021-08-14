import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "SendPlaneFill"
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
    d: "M1.94596 9.31504C1.42396 9.14104 1.41896 8.86004 1.95596 8.68104L21.043 2.31904C21.572 2.14304 21.875 2.43904 21.727 2.95704L16.273 22.043C16.123 22.572 15.818 22.59 15.594 22.088L12 14L18 6.00004L9.99996 12L1.94596 9.31504Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/send-plane-fill.vue";

export { script as default };
