import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "ArrowGoForward"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("path", {
  d: "M18.172 7.00005H11C9.4087 7.00005 7.88258 7.63219 6.75736 8.75741C5.63214 9.88263 5 11.4087 5 13C5 14.5913 5.63214 16.1175 6.75736 17.2427C7.88258 18.3679 9.4087 19 11 19H20V21H11C8.87827 21 6.84344 20.1572 5.34315 18.6569C3.84285 17.1566 3 15.1218 3 13C3 10.8783 3.84285 8.84349 5.34315 7.34319C6.84344 5.8429 8.87827 5.00005 11 5.00005H18.172L15.636 2.46405L17.05 1.05005L22 6.00005L17.05 10.95L15.636 9.53605L18.172 7.00005Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/arrow-go-forward.vue";

export { script as default };
