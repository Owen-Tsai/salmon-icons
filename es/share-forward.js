import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "ShareForward"
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
    d: "M13 14H11C9.3596 13.9994 7.75023 14.4471 6.34588 15.2949C4.94152 16.1427 3.7956 17.3582 3.032 18.81C3.01054 18.5405 2.99986 18.2703 3 18C3 12.477 7.477 8 13 8V2.5L23.5 11L13 19.5V14ZM11 12H15V15.308L20.321 11L15 6.692V10H13C11.8503 9.99871 10.7138 10.2458 9.66839 10.7244C8.62299 11.203 7.69332 11.9018 6.943 12.773C8.23432 12.2612 9.61096 11.9989 11 12Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/share-forward.vue";

export { script as default };