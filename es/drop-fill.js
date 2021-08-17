import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "DropFill"
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
    d: "M5.636 6.63597L12 0.271973L18.364 6.63597C19.6227 7.89465 20.4798 9.4983 20.8271 11.2441C21.1743 12.9899 20.9961 14.7995 20.3149 16.4441C19.6337 18.0886 18.4802 19.4942 17.0001 20.4831C15.5201 21.4721 13.78 21.9999 12 21.9999C10.22 21.9999 8.47992 21.4721 6.99988 20.4831C5.51984 19.4942 4.36629 18.0886 3.6851 16.4441C3.00391 14.7995 2.82567 12.9899 3.17293 11.2441C3.52019 9.4983 4.37734 7.89465 5.636 6.63597Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/drop-fill.vue";

export { script as default };