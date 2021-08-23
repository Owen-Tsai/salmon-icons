'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "VolumeDown"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ vue.createVNode("path", {
  d: "M13 7.22002L9.603 10H6V14H9.603L13 16.78V7.22002ZM8.889 16H5C4.73478 16 4.48043 15.8947 4.29289 15.7071C4.10536 15.5196 4 15.2652 4 15V9.00002C4 8.73481 4.10536 8.48045 4.29289 8.29291C4.48043 8.10538 4.73478 8.00002 5 8.00002H8.889L14.183 3.66802C14.2563 3.60797 14.3451 3.56996 14.4391 3.55841C14.5331 3.54687 14.6284 3.56227 14.714 3.60282C14.7996 3.64337 14.872 3.7074 14.9226 3.78745C14.9732 3.86751 15.0001 3.9603 15 4.05502V19.945C15.0001 20.0397 14.9732 20.1325 14.9226 20.2126C14.872 20.2926 14.7996 20.3567 14.714 20.3972C14.6284 20.4378 14.5331 20.4532 14.4391 20.4416C14.3451 20.4301 14.2563 20.3921 14.183 20.332L8.89 16H8.889ZM18.863 16.591L17.441 15.169C17.9265 14.7957 18.3196 14.3158 18.5899 13.7663C18.8602 13.2167 19.0006 12.6124 19 12C19 10.57 18.25 9.31502 17.12 8.60802L18.559 7.16902C19.3165 7.72621 19.9321 8.45387 20.3562 9.29314C20.7802 10.1324 21.0008 11.0597 21 12C21 13.842 20.17 15.49 18.863 16.591Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/volume-down.vue";

exports['default'] = script;
