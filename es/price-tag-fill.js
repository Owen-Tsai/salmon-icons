import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "PriceTagFill"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("path", {
  d: "M10.9 2.09998L20.799 3.51498L22.213 13.415L13.021 22.607C12.8334 22.7944 12.5791 22.8998 12.314 22.8998C12.0488 22.8998 11.7945 22.7944 11.607 22.607L1.70697 12.707C1.5195 12.5194 1.41418 12.2651 1.41418 12C1.41418 11.7348 1.5195 11.4805 1.70697 11.293L10.9 2.09998ZM13.728 10.586C13.9137 10.7717 14.1342 10.9189 14.3769 11.0194C14.6196 11.1199 14.8797 11.1716 15.1423 11.1715C15.405 11.1715 15.665 11.1197 15.9077 11.0191C16.1503 10.9186 16.3708 10.7712 16.5565 10.5855C16.7422 10.3997 16.8894 10.1792 16.9899 9.93654C17.0904 9.69386 17.1421 9.43377 17.142 9.17112C17.142 8.90847 17.0902 8.6484 16.9896 8.40576C16.8891 8.16312 16.7417 7.94266 16.556 7.75698C16.3702 7.57129 16.1497 7.424 15.907 7.32353C15.6644 7.22306 15.4043 7.17138 15.1416 7.17142C14.6112 7.17152 14.1025 7.38233 13.7275 7.75748C13.3525 8.13262 13.1418 8.64138 13.1419 9.17183C13.142 9.70228 13.3528 10.211 13.728 10.586Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/price-tag-fill.vue";

export { script as default };
