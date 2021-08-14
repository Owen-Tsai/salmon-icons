import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "DiscFill"
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
    d: "M13 9.17C12.3997 8.95775 11.7473 8.94202 11.1375 9.12509C10.5276 9.30817 9.99179 9.68055 9.60759 10.1883C9.2234 10.6961 9.01074 11.313 9.0004 11.9497C8.99005 12.5864 9.18256 13.2098 9.55006 13.7298C9.91755 14.2498 10.441 14.6394 11.0446 14.8422C11.6482 15.045 12.3007 15.0505 12.9076 14.8578C13.5145 14.6652 14.0444 14.2844 14.4206 13.7707C14.7967 13.2569 14.9997 12.6368 15 12V2.458C19.057 3.732 22 7.522 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C12.337 2 12.671 2.017 13 2.05V9.17Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/disc-fill.vue";

export { script as default };
