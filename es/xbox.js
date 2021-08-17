import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "Xbox"
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
    d: "M4.797 15.485C5.921 12.965 7.997 10.045 9.284 8.523C8.036 7.277 7.122 6.592 6.466 6.223C5.68539 6.96892 5.06433 7.86555 4.64045 8.85856C4.21657 9.85157 3.99868 10.9203 4 12C4 13.25 4.286 14.432 4.797 15.485ZM8.848 4.645C10.448 5.05 12 5.959 12 5.959V5.954C12 5.954 13.552 5.05 15.151 4.644C14.1553 4.21755 13.0832 3.99843 12 4C10.88 4 9.815 4.23 8.848 4.645ZM17.534 6.223C16.879 6.593 15.966 7.278 14.718 8.523C16.005 10.046 18.08 12.964 19.204 15.484C19.7297 14.3979 20.0019 13.2066 20 12C20 9.73 19.054 7.68 17.534 6.223ZM17.942 17.356C16.539 15.12 13.852 12.412 12 11.013C10.15 12.413 7.461 15.121 6.059 17.358C6.80835 18.1907 7.72463 18.8563 8.74822 19.3115C9.7718 19.7667 10.8798 20.0013 12 20C13.1206 20.0012 14.2288 19.7664 15.2526 19.3108C16.2764 18.8553 17.1927 18.1892 17.942 17.356ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/xbox.vue";

export { script as default };