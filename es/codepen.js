import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "Codepen"
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
    d: "M16.5 13.202L13 15.535V19.131L19.197 15L16.5 13.202ZM14.697 12L12 10.202L9.303 12L12 13.798L14.697 12ZM20 10.869L18.303 12L20 13.131V10.87V10.869ZM19.197 9.00003L13 4.86903V8.46503L16.5 10.798L19.197 9.00003ZM7.5 10.798L11 8.46503V4.86903L4.803 9.00003L7.5 10.798ZM4.803 15L11 19.131V15.535L7.5 13.202L4.803 15ZM4 13.131L5.697 12L4 10.869V13.131ZM2 9.00003C1.99998 8.83544 2.04058 8.67338 2.11821 8.52824C2.19583 8.38311 2.30808 8.25938 2.445 8.16803L11.445 2.16803C11.6093 2.05839 11.8025 1.99988 12 1.99988C12.1975 1.99988 12.3907 2.05839 12.555 2.16803L21.555 8.16803C21.6919 8.25938 21.8042 8.38311 21.8818 8.52824C21.9594 8.67338 22 8.83544 22 9.00003V15C22 15.1646 21.9594 15.3267 21.8818 15.4718C21.8042 15.6169 21.6919 15.7407 21.555 15.832L12.555 21.832C12.3907 21.9417 12.1975 22.0002 12 22.0002C11.8025 22.0002 11.6093 21.9417 11.445 21.832L2.445 15.832C2.30808 15.7407 2.19583 15.6169 2.11821 15.4718C2.04058 15.3267 1.99998 15.1646 2 15V9.00003Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/codepen.vue";

export { script as default };