import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "Hashtag"
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
    d: "M7.784 14L8.204 10H4V8H8.415L8.94 3H10.951L10.426 8H14.415L14.94 3H16.951L16.426 8H20V10H16.216L15.796 14H20V16H15.585L15.06 21H13.049L13.574 16H9.585L9.06 21H7.049L7.574 16H4V14H7.784ZM9.795 14H13.785L14.205 10H10.215L9.795 14Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/hashtag.vue";

export { script as default };
