'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "FoggyFill"
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
    d: "M1.58403 13.007C0.800577 11.0347 0.832702 8.83199 1.67333 6.88339C2.51397 4.93479 4.09424 3.39995 6.06653 2.6165C8.03881 1.83305 10.2415 1.86517 12.1901 2.7058C14.1387 3.54644 15.6736 5.12672 16.457 7.099C17.2952 6.93704 18.1595 6.9724 18.9816 7.20227C19.8037 7.43215 20.561 7.85024 21.1936 8.42344C21.8262 8.99664 22.3167 9.70922 22.6262 10.5048C22.9357 11.3003 23.0559 12.157 22.977 13.007H1.58403ZM4.00003 19H21V21H4.00003V19ZM2.00003 15H23V17H2.00003V15Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/foggy-fill.vue";

exports['default'] = script;