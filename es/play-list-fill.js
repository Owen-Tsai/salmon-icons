import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "PlayListFill"
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
    d: "M2 18H12V20H2V18ZM2 11H16V13H2V11ZM2 4H22V6H2V4ZM19 15.17V9H24V11H21V18C20.9997 18.6368 20.7967 19.2569 20.4206 19.7707C20.0444 20.2844 19.5145 20.6652 18.9076 20.8578C18.3007 21.0505 17.6482 21.045 17.0446 20.8422C16.441 20.6394 15.9176 20.2498 15.5501 19.7298C15.1826 19.2098 14.9901 18.5864 15.0004 17.9497C15.0107 17.313 15.2234 16.6961 15.6076 16.1883C15.9918 15.6805 16.5276 15.3082 17.1375 15.1251C17.7473 14.942 18.3997 14.9577 19 15.17Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/play-list-fill.vue";

export { script as default };