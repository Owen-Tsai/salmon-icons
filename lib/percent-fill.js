'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "PercentFill"
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
    d: "M17.5 21C16.5717 21 15.6815 20.6313 15.0251 19.9749C14.3687 19.3185 14 18.4283 14 17.5C14 16.5717 14.3687 15.6815 15.0251 15.0251C15.6815 14.3687 16.5717 14 17.5 14C18.4283 14 19.3185 14.3687 19.9749 15.0251C20.6313 15.6815 21 16.5717 21 17.5C21 18.4283 20.6313 19.3185 19.9749 19.9749C19.3185 20.6313 18.4283 21 17.5 21ZM6.5 10C6.04037 10 5.58525 9.90947 5.16061 9.73358C4.73597 9.55769 4.35013 9.29988 4.02513 8.97487C3.70012 8.64987 3.44231 8.26403 3.26642 7.83939C3.09053 7.41475 3 6.95963 3 6.5C3 6.04037 3.09053 5.58525 3.26642 5.16061C3.44231 4.73597 3.70012 4.35013 4.02513 4.02513C4.35013 3.70012 4.73597 3.44231 5.16061 3.26642C5.58525 3.09053 6.04037 3 6.5 3C7.42826 3 8.3185 3.36875 8.97487 4.02513C9.63125 4.6815 10 5.57174 10 6.5C10 7.42826 9.63125 8.3185 8.97487 8.97487C8.3185 9.63125 7.42826 10 6.5 10ZM19.071 3.515L20.485 4.929L4.93 20.485L3.516 19.071L19.07 3.515H19.071Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/percent-fill.vue";

exports['default'] = script;
