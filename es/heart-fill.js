import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "HeartFill"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("path", {
  d: "M12.001 4.52898C14.35 2.41998 17.98 2.48998 20.243 4.75698C22.505 7.02498 22.583 10.637 20.479 12.993L11.999 21.485L3.52101 12.993C1.41701 10.637 1.49601 7.01898 3.75701 4.75698C6.02201 2.49298 9.64501 2.41698 12.001 4.52898Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/heart-fill.vue";

export { script as default };
