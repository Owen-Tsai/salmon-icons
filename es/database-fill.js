import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "DatabaseFill"
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
    d: "M21 9.5V12.5C21 14.985 16.97 17 12 17C7.03 17 3 14.985 3 12.5V9.5C3 11.985 7.03 14 12 14C16.97 14 21 11.985 21 9.5ZM3 14.5C3 16.985 7.03 19 12 19C16.97 19 21 16.985 21 14.5V17.5C21 19.985 16.97 22 12 22C7.03 22 3 19.985 3 17.5V14.5ZM12 12C7.03 12 3 9.985 3 7.5C3 5.015 7.03 3 12 3C16.97 3 21 5.015 21 7.5C21 9.985 16.97 12 12 12Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/database-fill.vue";

export { script as default };
