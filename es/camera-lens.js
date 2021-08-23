import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "CameraLens"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("path", {
  d: "M9.858 19.71L12 16H5.07C6.11953 17.8151 7.83831 19.1469 9.858 19.71ZM4.252 14H8.536L5.07 7.999C4.36668 9.21495 3.99753 10.5953 4 12C4 12.69 4.088 13.36 4.252 14ZM6.395 6.292L8.535 10L12 4C9.90297 3.99727 7.88927 4.82071 6.395 6.292ZM14.142 4.29L12 8H18.93C17.8805 6.18487 16.1617 4.85307 14.142 4.29ZM19.748 10H15.464L18.929 16.001C19.6327 14.7852 20.0022 13.4048 20 12C20 11.31 19.912 10.64 19.748 10ZM17.605 17.708L15.465 14L12 20C14.097 20.0027 16.1107 19.1793 17.605 17.708ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM13.155 10H10.845L9.691 12L10.845 14H13.155L14.309 12L13.155 10Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/camera-lens.vue";

export { script as default };
