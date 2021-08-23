import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "BarChart"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("path", {
  d: "M3 12H5V21H3V12ZM19 8H21V21H19V8ZM11 2H13V21H11V2Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/bar-chart.vue";

export { script as default };
