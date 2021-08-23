import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "Archive"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("path", {
  d: "M3 10H2V4.003C2 3.449 2.455 3 2.992 3H21.008C21.1393 2.99973 21.2693 3.02556 21.3905 3.07601C21.5117 3.12645 21.6217 3.2005 21.714 3.29383C21.8063 3.38717 21.8791 3.49794 21.9282 3.61969C21.9773 3.74144 22.0017 3.87173 22 4.003V10H21V20.001C21.0004 20.1318 20.975 20.2614 20.9253 20.3824C20.8756 20.5034 20.8026 20.6134 20.7104 20.7062C20.6182 20.7989 20.5086 20.8726 20.3879 20.923C20.2672 20.9735 20.1378 20.9996 20.007 21H3.993C3.8622 20.9996 3.73276 20.9735 3.61207 20.923C3.49139 20.8726 3.38181 20.7989 3.2896 20.7062C3.19739 20.6134 3.12436 20.5034 3.07467 20.3824C3.02498 20.2614 2.99961 20.1318 3 20.001V10ZM19 10H5V19H19V10ZM4 5V8H20V5H4ZM9 12H15V14H9V12Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/archive.vue";

export { script as default };
