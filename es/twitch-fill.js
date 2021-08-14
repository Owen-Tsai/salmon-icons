import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "TwitchFill"
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
    d: "M21 3V14.74L16.304 19.435H12.391L9.954 21.783H6.913V19.435H3V6.13L4.227 3H21ZM19.435 4.565H6.13V16.305H9.26V18.652L11.609 16.304H16.304L19.434 13.174V4.565H19.435ZM16.305 7.695V12.391H14.739V7.696H16.304L16.305 7.695ZM12.391 7.695V12.391H10.826V7.696H12.391V7.695Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/twitch-fill.vue";

export { script as default };
