import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "LightbulbFill"
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
    d: "M11 18H7.94096C7.64396 16.727 6.30396 15.686 5.75396 15C4.81215 13.8233 4.22191 12.4044 4.05122 10.9069C3.88054 9.40944 4.13636 7.89418 4.78921 6.53572C5.44207 5.17725 6.46539 4.03085 7.74132 3.22856C9.01724 2.42627 10.4938 2.00074 12.001 2.00098C13.5082 2.00122 14.9847 2.42722 16.2604 3.22992C17.536 4.03262 18.559 5.17935 19.2114 6.53803C19.8638 7.8967 20.1192 9.41204 19.948 10.9095C19.7768 12.4069 19.1861 13.8256 18.244 15.002C17.694 15.687 16.356 16.728 16.059 18H13V13H11V18ZM16 20V21C16 21.5304 15.7892 22.0391 15.4142 22.4142C15.0391 22.7893 14.5304 23 14 23H9.99996C9.46953 23 8.96082 22.7893 8.58575 22.4142C8.21067 22.0391 7.99996 21.5304 7.99996 21V20H16Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/lightbulb-fill.vue";

export { script as default };