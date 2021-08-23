'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "Tv"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ vue.createVNode("path", {
  d: "M15.414 5.00005H21.008C21.556 5.00005 22 5.44505 22 6.00005V20C22 20.552 21.545 21 21.008 21H2.99202C2.86115 20.9998 2.73161 20.9737 2.61085 20.9232C2.4901 20.8728 2.38049 20.799 2.28832 20.7061C2.19615 20.6132 2.12324 20.503 2.07376 20.3818C2.02429 20.2607 1.99923 20.1309 2.00002 20V6.00005C2.00002 5.44805 2.45502 5.00005 2.99202 5.00005H8.58602L6.05002 2.46405L7.46402 1.05005L11.414 5.00005H12.586L16.536 1.05005L17.95 2.46405L15.414 5.00005ZM4.00002 7.00005V19H20V7.00005H4.00002Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/tv.vue";

exports['default'] = script;
