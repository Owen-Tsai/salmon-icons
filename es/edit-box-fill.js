import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "EditBoxFill"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("path", {
  d: "M16.757 2.99998L9.291 10.466L9.299 14.713L13.537 14.706L21 7.24298V20C21 20.2652 20.8946 20.5195 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5195 3 20.2652 3 20V3.99998C3 3.73476 3.10536 3.48041 3.29289 3.29287C3.48043 3.10533 3.73478 2.99998 4 2.99998H16.757ZM20.485 2.09998L21.9 3.51598L12.708 12.708L11.296 12.711L11.294 11.294L20.485 2.09998Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/edit-box-fill.vue";

export { script as default };
