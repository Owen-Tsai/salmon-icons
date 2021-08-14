import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "Shuffle"
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
    d: "M18 17.883V16L23 19L18 22V19.91C16.4714 19.6911 15.0249 19.0826 13.7995 18.143C12.5741 17.2034 11.6111 15.9644 11.003 14.545L11 14.54L10.997 14.546C10.3031 16.1647 9.14947 17.5443 7.67909 18.5138C6.20872 19.4833 4.48621 20 2.725 20H2V18H2.725C4.09498 18 5.43484 17.5979 6.57852 16.8437C7.7222 16.0895 8.61942 15.0162 9.159 13.757L9.912 12L9.159 10.243C8.61942 8.98375 7.7222 7.91052 6.57852 7.1563C5.43484 6.40208 4.09498 6.00004 2.725 6H2V4H2.725C4.48632 4.00008 6.20891 4.51698 7.6793 5.48663C9.14968 6.45628 10.3032 7.83607 10.997 9.455L11 9.46L11.003 9.454C11.6112 8.0348 12.5743 6.79594 13.7997 5.85654C15.0251 4.91714 16.4715 4.3088 18 4.09V2L23 5L18 8V6.117C16.8669 6.32694 15.8031 6.81339 14.9032 7.53315C14.0032 8.25292 13.2949 9.18374 12.841 10.243L12.088 12L12.841 13.757C13.2949 14.8163 14.0032 15.7471 14.9032 16.4668C15.8031 17.1866 16.8669 17.6731 18 17.883Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/shuffle.vue";

export { script as default };
