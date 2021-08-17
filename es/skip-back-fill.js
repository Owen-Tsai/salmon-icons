import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "SkipBackFill"
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
    d: "M8 11.333L18.223 4.518C18.2983 4.4679 18.3858 4.43915 18.4761 4.43483C18.5664 4.43051 18.6563 4.45077 18.736 4.49346C18.8157 4.53615 18.8824 4.59966 18.9289 4.67724C18.9754 4.75482 19 4.84356 19 4.934V19.066C19 19.1564 18.9754 19.2452 18.9289 19.3228C18.8824 19.4003 18.8157 19.4639 18.736 19.5065C18.6563 19.5492 18.5664 19.5695 18.4761 19.5652C18.3858 19.5608 18.2983 19.5321 18.223 19.482L8 12.667V19C8 19.2652 7.89464 19.5196 7.70711 19.7071C7.51957 19.8946 7.26522 20 7 20C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V5C6 4.73478 6.10536 4.48043 6.29289 4.29289C6.48043 4.10536 6.73478 4 7 4C7.26522 4 7.51957 4.10536 7.70711 4.29289C7.89464 4.48043 8 4.73478 8 5V11.333Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/skip-back-fill.vue";

export { script as default };