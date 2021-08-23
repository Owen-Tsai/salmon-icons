import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "ShoppingCart"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("path", {
  d: "M3.99999 6.41396L0.756989 3.17196L2.17199 1.75696L5.41399 4.99996H20.656C20.8119 4.99995 20.9656 5.03637 21.1049 5.10633C21.2441 5.17628 21.3652 5.27782 21.4582 5.40285C21.5513 5.52789 21.6138 5.67294 21.6409 5.82644C21.6679 5.97995 21.6587 6.13765 21.614 6.28696L19.214 14.287C19.1522 14.493 19.0257 14.6737 18.8531 14.8022C18.6805 14.9306 18.4711 15 18.256 15H5.99999V17H17V19H4.99999C4.73477 19 4.48042 18.8946 4.29288 18.7071C4.10535 18.5195 3.99999 18.2652 3.99999 18V6.41396ZM5.99999 6.99996V13H17.512L19.312 6.99996H5.99999ZM5.49999 23C5.10216 23 4.72063 22.8419 4.43933 22.5606C4.15802 22.2793 3.99999 21.8978 3.99999 21.5C3.99999 21.1021 4.15802 20.7206 4.43933 20.4393C4.72063 20.158 5.10216 20 5.49999 20C5.89781 20 6.27934 20.158 6.56065 20.4393C6.84195 20.7206 6.99999 21.1021 6.99999 21.5C6.99999 21.8978 6.84195 22.2793 6.56065 22.5606C6.27934 22.8419 5.89781 23 5.49999 23ZM17.5 23C17.1022 23 16.7206 22.8419 16.4393 22.5606C16.158 22.2793 16 21.8978 16 21.5C16 21.1021 16.158 20.7206 16.4393 20.4393C16.7206 20.158 17.1022 20 17.5 20C17.8978 20 18.2793 20.158 18.5606 20.4393C18.842 20.7206 19 21.1021 19 21.5C19 21.8978 18.842 22.2793 18.5606 22.5606C18.2793 22.8419 17.8978 23 17.5 23Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/shopping-cart.vue";

export { script as default };
