import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "AngularjsFill"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("path", {
  d: "M12 2L21.2999 5.32L19.882 17.63L12 22L4.11795 17.63L2.69995 5.32L12 2ZM12 4.21L6.18595 17.26H8.35395L9.52295 14.34H14.457L15.627 17.26H17.794L12 4.21ZM13.698 12.54H10.302L12 8.45L13.698 12.54Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/angularjs-fill.vue";

export { script as default };
