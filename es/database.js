import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "Database"
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
    d: "M5 12.5C5 12.813 5.461 13.358 6.53 13.893C7.914 14.585 9.877 15 12 15C14.123 15 16.086 14.585 17.47 13.893C18.539 13.358 19 12.813 19 12.5V10.329C17.35 11.349 14.827 12 12 12C9.173 12 6.65 11.348 5 10.329V12.5ZM19 15.329C17.35 16.349 14.827 17 12 17C9.173 17 6.65 16.348 5 15.329V17.5C5 17.813 5.461 18.358 6.53 18.893C7.914 19.585 9.877 20 12 20C14.123 20 16.086 19.585 17.47 18.893C18.539 18.358 19 17.813 19 17.5V15.329ZM3 17.5V7.5C3 5.015 7.03 3 12 3C16.97 3 21 5.015 21 7.5V17.5C21 19.985 16.97 22 12 22C7.03 22 3 19.985 3 17.5ZM12 10C14.123 10 16.086 9.585 17.47 8.893C18.539 8.358 19 7.813 19 7.5C19 7.187 18.539 6.642 17.47 6.107C16.086 5.415 14.123 5 12 5C9.877 5 7.914 5.415 6.53 6.107C5.461 6.642 5 7.187 5 7.5C5 7.813 5.461 8.358 6.53 8.893C7.914 9.585 9.877 10 12 10Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/database.vue";

export { script as default };