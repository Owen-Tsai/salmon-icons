import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "AirplayFill"
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
    d: "M12.4 13.533L17.4 20.2C17.4557 20.2743 17.4897 20.3626 17.498 20.4551C17.5063 20.5476 17.4888 20.6406 17.4472 20.7236C17.4057 20.8067 17.3419 20.8765 17.2629 20.9253C17.1839 20.9741 17.0929 21 17 21H7.00002C6.90716 21 6.81614 20.9741 6.73715 20.9253C6.65816 20.8765 6.59433 20.8067 6.5528 20.7236C6.51128 20.6406 6.4937 20.5476 6.50204 20.4551C6.51038 20.3626 6.5443 20.2743 6.60002 20.2L11.6 13.533C11.6466 13.4709 11.707 13.4205 11.7764 13.3858C11.8458 13.3511 11.9224 13.333 12 13.333C12.0776 13.333 12.1542 13.3511 12.2236 13.3858C12.2931 13.4205 12.3534 13.4709 12.4 13.533ZM18 19V17H20V5H4.00002V17H6.00002V19H2.99202C2.86115 18.9997 2.73161 18.9736 2.61085 18.9232C2.4901 18.8727 2.38049 18.7989 2.28832 18.706C2.19615 18.6131 2.12324 18.5029 2.07376 18.3818C2.02429 18.2606 1.99923 18.1309 2.00002 18V4C2.00002 3.448 2.45502 3 2.99202 3H21.008C21.556 3 22 3.445 22 4V18C22 18.552 21.545 19 21.008 19H18Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/airplay-fill.vue";

export { script as default };
