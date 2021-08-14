'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "NavigationFill"
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
    d: "M2.89998 2.30005L21.705 8.56805C21.8023 8.60031 21.8874 8.66172 21.9486 8.74395C22.0099 8.82618 22.0444 8.92526 22.0474 9.02775C22.0505 9.13025 22.022 9.23121 21.9657 9.31694C21.9095 9.40268 21.8282 9.46904 21.733 9.50705L13 13L8.57498 21.85C8.52995 21.9402 8.45875 22.0146 8.37071 22.0635C8.28266 22.1125 8.18188 22.1337 8.08157 22.1244C7.98126 22.1151 7.88609 22.0758 7.80854 22.0114C7.73099 21.9471 7.67468 21.8609 7.64698 21.764L2.25998 2.91105C2.23503 2.82346 2.23447 2.73073 2.25837 2.64285C2.28226 2.55497 2.32971 2.47528 2.39558 2.4124C2.46145 2.34951 2.54325 2.30581 2.63214 2.28601C2.72103 2.26621 2.81364 2.27106 2.89998 2.30005Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/navigation-fill.vue";

exports['default'] = script;
