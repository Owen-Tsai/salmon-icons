import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "Cursor"
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
    d: "M15.388 13.4981L17.94 20.5121L13.242 22.2221L10.689 15.2081L6.78998 17.6531L8.40998 1.63306L19.947 12.8651L15.389 13.4981H15.388ZM15.377 19.3161L12.662 11.8561L15.622 11.4461L9.98198 5.95606L9.19198 13.7861L11.722 12.1991L14.437 19.6591L15.377 19.3161Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/cursor.vue";

export { script as default };