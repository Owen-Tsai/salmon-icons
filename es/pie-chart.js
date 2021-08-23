import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "PieChart"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("path", {
  d: "M11 0.543C11.33 0.514 11.663 0.5 12 0.5C18.351 0.5 23.5 5.649 23.5 12C23.5 12.337 23.486 12.67 23.457 13H21.951C21.449 18.053 17.185 22 12 22C6.477 22 2 17.523 2 12C2 6.815 5.947 2.551 11 2.05V0.542V0.543ZM11 13V4.062C8.98271 4.31868 7.13885 5.33387 5.84319 6.90122C4.54752 8.46857 3.89728 10.4705 4.02462 12.5C4.15196 14.5296 5.04733 16.4345 6.52874 17.8276C8.01016 19.2207 9.96645 19.9975 12 20C13.9486 20 15.8302 19.2888 17.2917 18C18.7533 16.7112 19.6942 14.9333 19.938 13H11ZM21.448 11C21.2187 8.8379 20.255 6.81979 18.7176 5.28239C17.1802 3.74498 15.1621 2.78126 13 2.552V11H21.448Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/pie-chart.vue";

export { script as default };
