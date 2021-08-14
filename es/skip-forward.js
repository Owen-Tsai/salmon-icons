import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "SkipForward"
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
    d: "M16 12.667L5.777 19.482C5.70171 19.5321 5.61423 19.5608 5.52389 19.5652C5.43355 19.5695 5.34373 19.5492 5.264 19.5065C5.18427 19.4639 5.1176 19.4003 5.07111 19.3228C5.02462 19.2452 5.00005 19.1564 5 19.066V4.934C5.00005 4.84356 5.02462 4.75482 5.07111 4.67724C5.1176 4.59966 5.18427 4.53615 5.264 4.49346C5.34373 4.45077 5.43355 4.43051 5.52389 4.43483C5.61423 4.43915 5.70171 4.4679 5.777 4.518L16 11.333V5C16 4.73478 16.1054 4.48043 16.2929 4.29289C16.4804 4.10536 16.7348 4 17 4C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20C16.7348 20 16.4804 19.8946 16.2929 19.7071C16.1054 19.5196 16 19.2652 16 19V12.667ZM7 7.737V16.263L13.394 12L7 7.737Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/skip-forward.vue";

export { script as default };
