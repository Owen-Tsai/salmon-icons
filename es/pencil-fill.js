import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "PencilFill"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("path", {
  d: "M12.9 6.85796L17.142 11.101L7.242 21H3V16.757L12.9 6.85696V6.85796ZM14.314 5.44396L16.435 3.32196C16.6225 3.13449 16.8768 3.02917 17.142 3.02917C17.4072 3.02917 17.6615 3.13449 17.849 3.32196L20.678 6.15096C20.8655 6.33849 20.9708 6.5928 20.9708 6.85796C20.9708 7.12313 20.8655 7.37743 20.678 7.56496L18.556 9.68596L14.314 5.44396Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/pencil-fill.vue";

export { script as default };
