'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "UserFollowFill"
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
    d: "M13 14.062V22H4C3.99989 20.8649 4.24133 19.7428 4.70827 18.7083C5.1752 17.6737 5.85695 16.7503 6.70822 15.9995C7.55948 15.2487 8.56078 14.6876 9.64557 14.3536C10.7304 14.0195 11.8738 13.9201 13 14.062ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM17.793 19.914L21.328 16.379L22.743 17.793L17.793 22.743L14.257 19.207L15.672 17.793L17.792 19.914H17.793Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/user-follow-fill.vue";

exports['default'] = script;
