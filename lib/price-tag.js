'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "PriceTag"
});

const _hoisted_1 = { class: "sui-icon" };
const _hoisted_2 = /* @__PURE__ */ vue.createVNode("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ vue.createVNode("path", {
    d: "M10.9 2.09998L20.799 3.51498L22.213 13.415L13.021 22.607C12.8335 22.7944 12.5792 22.8998 12.314 22.8998C12.0488 22.8998 11.7945 22.7944 11.607 22.607L1.707 12.707C1.51953 12.5194 1.41422 12.2651 1.41422 12C1.41422 11.7348 1.51953 11.4805 1.707 11.293L10.9 2.09998ZM11.607 4.22198L3.828 12L12.314 20.485L20.092 12.707L19.032 5.28198L11.607 4.22198ZM13.727 10.586C13.3519 10.2107 13.1411 9.70176 13.1412 9.17112C13.1413 8.90838 13.1931 8.64822 13.2937 8.40549C13.3943 8.16277 13.5417 7.94223 13.7275 7.75648C13.9133 7.57072 14.1339 7.42338 14.3767 7.32288C14.6194 7.22238 14.8796 7.17067 15.1424 7.17072C15.673 7.17081 16.1819 7.38169 16.557 7.75698C16.9321 8.13226 17.1429 8.6412 17.1428 9.17183C17.1427 9.70246 16.9318 10.2113 16.5565 10.5865C16.1812 10.9616 15.6723 11.1723 15.1416 11.1722C14.611 11.1721 14.1022 10.9613 13.727 10.586Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/price-tag.vue";

exports['default'] = script;
