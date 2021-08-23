import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "Home"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("path", {
  d: "M13 19H19V9.97803L12 4.53403L5 9.97803V19H11V13H13V19ZM21 20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8947 20.2652 21 20 21H4C3.73478 21 3.48043 20.8947 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V9.49003C2.99989 9.33764 3.03462 9.18724 3.10152 9.05033C3.16841 8.91341 3.26572 8.79359 3.386 8.70003L11.386 2.47803C11.5615 2.34147 11.7776 2.26733 12 2.26733C12.2224 2.26733 12.4385 2.34147 12.614 2.47803L20.614 8.70003C20.7343 8.79359 20.8316 8.91341 20.8985 9.05033C20.9654 9.18724 21.0001 9.33764 21 9.49003V20Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/home.vue";

export { script as default };
