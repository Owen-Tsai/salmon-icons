'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "AlarmWarningFill"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ vue.createVNode("path", {
  d: "M3.99998 20V14C3.99998 11.8783 4.84284 9.84344 6.34313 8.34315C7.84342 6.84285 9.87825 6 12 6C14.1217 6 16.1565 6.84285 17.6568 8.34315C19.1571 9.84344 20 11.8783 20 14V20H21V22H2.99998V20H3.99998ZM5.99998 14H7.99998C7.99998 12.9391 8.42141 11.9217 9.17156 11.1716C9.9217 10.4214 10.9391 10 12 10V8C10.4087 8 8.88256 8.63214 7.75734 9.75736C6.63212 10.8826 5.99998 12.4087 5.99998 14ZM11 2H13V5H11V2ZM19.778 4.808L21.192 6.222L19.072 8.343L17.657 6.929L19.778 4.808ZM2.80798 6.222L4.22198 4.808L6.34298 6.928L4.92998 8.344L2.80798 6.222Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/alarm-warning-fill.vue";

exports['default'] = script;
