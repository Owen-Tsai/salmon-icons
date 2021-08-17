'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "VolumeMuteFill"
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
    d: "M5.889 16H2C1.73478 16 1.48043 15.8947 1.29289 15.7071C1.10536 15.5196 1 15.2652 1 15V9.00002C1 8.73481 1.10536 8.48045 1.29289 8.29291C1.48043 8.10538 1.73478 8.00002 2 8.00002H5.889L11.183 3.66802C11.2563 3.60797 11.3451 3.56996 11.4391 3.55841C11.5331 3.54687 11.6284 3.56227 11.714 3.60282C11.7996 3.64337 11.872 3.7074 11.9226 3.78745C11.9732 3.86751 12.0001 3.9603 12 4.05502V19.945C12.0001 20.0397 11.9732 20.1325 11.9226 20.2126C11.872 20.2926 11.7996 20.3567 11.714 20.3972C11.6284 20.4378 11.5331 20.4532 11.4391 20.4416C11.3451 20.4301 11.2563 20.3921 11.183 20.332L5.89 16H5.889ZM20.414 12L23.95 15.536L22.536 16.95L19 13.414L15.464 16.95L14.05 15.536L17.586 12L14.05 8.46402L15.464 7.05002L19 10.586L22.536 7.05002L23.95 8.46402L20.414 12Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/volume-mute-fill.vue";

exports['default'] = script;