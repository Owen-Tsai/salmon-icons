'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "DeleteBack"
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
    d: "M6.53499 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H6.53499C6.3704 21 6.20835 20.9594 6.06321 20.8818C5.91807 20.8042 5.79434 20.6919 5.70299 20.555L0.369993 12.555C0.260354 12.3907 0.201843 12.1975 0.201843 12C0.201843 11.8025 0.260354 11.6093 0.369993 11.445L5.70299 3.445C5.79434 3.30808 5.91807 3.19583 6.06321 3.11821C6.20835 3.04058 6.3704 2.99998 6.53499 3ZM7.06999 5L2.40399 12L7.06999 19H20V5H7.06999ZM13 10.586L15.828 7.757L17.243 9.172L14.414 12L17.243 14.828L15.828 16.243L13 13.414L10.172 16.243L8.75699 14.828L11.586 12L8.75699 9.172L10.172 7.757L13 10.586Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/delete-back.vue";

exports['default'] = script;