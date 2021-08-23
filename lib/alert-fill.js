'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "AlertFill"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ vue.createVNode("path", {
  d: "M12.866 2.99996L22.392 19.5C22.4797 19.652 22.5259 19.8244 22.5259 20C22.5259 20.1755 22.4797 20.3479 22.392 20.4999C22.3042 20.652 22.178 20.7782 22.026 20.866C21.8739 20.9537 21.7015 21 21.526 21H2.47397C2.29844 21 2.126 20.9537 1.97398 20.866C1.82197 20.7782 1.69573 20.652 1.60797 20.4999C1.5202 20.3479 1.474 20.1755 1.474 20C1.474 19.8244 1.52021 19.652 1.60797 19.5L11.134 2.99996C11.2217 2.84795 11.348 2.72172 11.5 2.63396C11.652 2.5462 11.8244 2.5 12 2.5C12.1755 2.5 12.3479 2.5462 12.5 2.63396C12.652 2.72172 12.7782 2.84795 12.866 2.99996ZM11 16V18H13V16H11ZM11 8.99996V14H13V8.99996H11Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/alert-fill.vue";

exports['default'] = script;
