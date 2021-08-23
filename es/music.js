import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "Music"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("path", {
  d: "M20 3V17C19.9998 17.8805 19.7091 18.7363 19.1729 19.4348C18.6368 20.1332 17.8852 20.6352 17.0346 20.863C16.1841 21.0907 15.2822 21.0315 14.4688 20.6944C13.6553 20.3573 12.9758 19.7613 12.5357 18.9987C12.0955 18.2361 11.9193 17.3496 12.0343 16.4767C12.1493 15.6037 12.5491 14.7931 13.1717 14.1705C13.7944 13.5479 14.605 13.1482 15.478 13.0333C16.351 12.9184 17.2375 13.0948 18 13.535V5H9.00001V17C8.99981 17.8805 8.70909 18.7363 8.17294 19.4348C7.63679 20.1332 6.88517 20.6352 6.03463 20.863C5.1841 21.0907 4.28218 21.0315 3.46875 20.6944C2.65533 20.3573 1.97584 19.7613 1.53568 18.9987C1.09552 18.2361 0.919269 17.3496 1.03427 16.4767C1.14927 15.6037 1.5491 14.7931 2.17174 14.1705C2.79438 13.5479 3.60504 13.1482 4.47801 13.0333C5.35098 12.9184 6.23747 13.0948 7.00001 13.535V3H20ZM5.00001 19C5.53044 19 6.03915 18.7893 6.41422 18.4142C6.78929 18.0391 7.00001 17.5304 7.00001 17C7.00001 16.4696 6.78929 15.9609 6.41422 15.5858C6.03915 15.2107 5.53044 15 5.00001 15C4.46957 15 3.96086 15.2107 3.58579 15.5858C3.21072 15.9609 3.00001 16.4696 3.00001 17C3.00001 17.5304 3.21072 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5.00001 19ZM16 19C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17C18 16.4696 17.7893 15.9609 17.4142 15.5858C17.0391 15.2107 16.5304 15 16 15C15.4696 15 14.9609 15.2107 14.5858 15.5858C14.2107 15.9609 14 16.4696 14 17C14 17.5304 14.2107 18.0391 14.5858 18.4142C14.9609 18.7893 15.4696 19 16 19Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/music.vue";

export { script as default };
