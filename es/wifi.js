import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "Wifi"
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
    d: "M0.690002 6.99702C3.88909 4.40534 7.88285 2.99393 12 3.00002C16.285 3.00002 20.22 4.49702 23.31 6.99702L22.054 8.55302C19.2102 6.24909 15.6599 4.99446 12 5.00002C8.191 5.00002 4.694 6.33002 1.946 8.55302L0.690002 6.99702ZM3.831 10.887C6.1416 9.01502 9.02624 7.99556 12 8.00002C15.094 8.00002 17.936 9.08102 20.169 10.886L18.912 12.442C16.9568 10.8584 14.5161 9.99603 12 10C9.382 10 6.977 10.915 5.088 12.442L3.831 10.886V10.887ZM6.973 14.777C8.39485 13.6249 10.17 12.9974 12 13C13.904 13 15.653 13.665 17.027 14.776L15.77 16.332C14.7036 15.4682 13.3723 14.9979 12 15C10.572 15 9.26 15.499 8.23 16.332L6.973 14.776V14.777ZM10.115 18.667C10.6481 18.2347 11.3137 17.9992 12 18C12.714 18 13.37 18.25 13.885 18.666L12 21L10.115 18.666V18.667Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/wifi.vue";

export { script as default };