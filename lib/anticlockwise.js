'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "Anticlockwise"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ vue.createVNode("path", {
  d: "M11 9H21C21.2652 9 21.5196 9.10536 21.7071 9.29289C21.8947 9.48043 22 9.73478 22 10V20C22 20.2652 21.8947 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H11C10.7348 21 10.4804 20.8946 10.2929 20.7071C10.1054 20.5196 10 20.2652 10 20V10C10 9.73478 10.1054 9.48043 10.2929 9.29289C10.4804 9.10536 10.7348 9 11 9ZM12 11V19H20V11H12ZM6.00002 10.586L7.82802 8.757L9.24302 10.172L5.00002 14.414L0.757019 10.172L2.17202 8.757L4.00002 10.586V8C4.00002 6.67392 4.5268 5.40215 5.46449 4.46447C6.40217 3.52678 7.67394 3 9.00002 3H13V5H9.00002C8.20437 5 7.44131 5.31607 6.8787 5.87868C6.31609 6.44129 6.00002 7.20435 6.00002 8V10.586Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/anticlockwise.vue";

exports['default'] = script;
