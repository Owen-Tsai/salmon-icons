import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "Shield"
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
    d: "M3.783 2.826L12 1L20.217 2.826C20.4391 2.87536 20.6377 2.99897 20.78 3.1764C20.9224 3.35384 21 3.57452 21 3.802V13.789C20.9999 14.7767 20.756 15.7492 20.2899 16.62C19.8238 17.4908 19.1499 18.2331 18.328 18.781L12 23L5.672 18.781C4.85027 18.2332 4.17646 17.4911 3.71035 16.6205C3.24424 15.7498 3.00024 14.7776 3 13.79V3.802C3.00004 3.57452 3.07764 3.35384 3.21999 3.1764C3.36234 2.99897 3.56094 2.87536 3.783 2.826ZM5 4.604V13.789C5.00001 14.4475 5.16257 15.0957 5.47326 15.6763C5.78395 16.2568 6.23315 16.7517 6.781 17.117L12 20.597L17.219 17.117C17.7667 16.7518 18.2158 16.2571 18.5265 15.6767C18.8372 15.0964 18.9998 14.4483 19 13.79V4.604L12 3.05L5 4.604Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/shield.vue";

export { script as default };
