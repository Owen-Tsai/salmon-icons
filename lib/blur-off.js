'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "BlurOff"
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
    d: "M18.154 19.568C16.4501 21.171 14.189 22.0475 11.8498 22.0118C9.5107 21.9761 7.27737 21.031 5.62316 19.3768C3.96894 17.7226 3.02385 15.4893 2.98816 13.1501C2.95248 10.811 3.82902 8.54988 5.43201 6.84597L1.39301 2.80797L2.80801 1.39297L22.607 21.193L21.192 22.607L18.154 19.567V19.568ZM6.84701 8.26197C5.62639 9.5915 4.96649 11.3411 5.00505 13.1456C5.04361 14.95 5.77766 16.6698 7.05395 17.946C8.33025 19.2222 10.0501 19.956 11.8546 19.9944C13.6591 20.0328 15.4086 19.3727 16.738 18.152L6.84801 8.26197H6.84701ZM20.414 16.2L18.815 14.601C19.0879 13.4407 19.0599 12.23 18.7335 11.0837C18.4071 9.93734 17.7932 8.89342 16.95 8.05097L12 3.09997L9.65701 5.44297L8.24301 4.02997L12 0.271973L18.364 6.63597C19.5912 7.86293 20.4376 9.41845 20.8013 11.1153C21.165 12.8121 21.0305 14.5778 20.414 16.2Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/blur-off.vue";

exports['default'] = script;