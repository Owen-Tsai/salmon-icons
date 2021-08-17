'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "RefreshFill"
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
    d: "M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM16.82 17.076C18.0271 15.9319 18.7874 14.3953 18.9647 12.7416C19.1419 11.0879 18.7246 9.4251 17.7874 8.05111C16.8503 6.67711 15.4545 5.6817 13.8502 5.24319C12.2458 4.80468 10.5378 4.95173 9.032 5.658L10.007 7.413C10.7679 7.08229 11.5992 6.94613 12.4259 7.01679C13.2525 7.08746 14.0486 7.36273 14.7424 7.81779C15.4361 8.27286 16.0057 8.89341 16.3999 9.62351C16.794 10.3536 17.0002 11.1703 17 12H14L16.82 17.076ZM14.968 18.342L13.993 16.587C13.2321 16.9177 12.4008 17.0539 11.5741 16.9832C10.7475 16.9125 9.95137 16.6373 9.25762 16.1822C8.56386 15.7271 7.99425 15.1066 7.60013 14.3765C7.20601 13.6464 6.99977 12.8297 7 12H10L7.18 6.924C5.97289 8.06814 5.2126 9.60469 5.03532 11.2584C4.85805 12.9121 5.27539 14.5749 6.21256 15.9489C7.14974 17.3229 8.54552 18.3183 10.1498 18.7568C11.7542 19.1953 13.4622 19.0483 14.968 18.342Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/refresh-fill.vue";

exports['default'] = script;