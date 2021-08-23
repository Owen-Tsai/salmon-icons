'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "ShareForwardBox"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ vue.createVNode("path", {
  d: "M9 2.99999V4.99999H4V19H20V9.99999H22V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V3.99999C2 3.73477 2.10536 3.48042 2.29289 3.29288C2.48043 3.10534 2.73478 2.99999 3 2.99999H9ZM18.95 4.99999L16 2.04999L17.414 0.635986L22.754 5.97599C22.8378 6.0599 22.8949 6.16676 22.918 6.28308C22.9411 6.3994 22.9292 6.51995 22.8838 6.62953C22.8385 6.7391 22.7616 6.83276 22.6631 6.8987C22.5645 6.96464 22.4486 6.99988 22.33 6.99999H14C13.4696 6.99999 12.9609 7.2107 12.5858 7.58577C12.2107 7.96085 12 8.46955 12 8.99999V15H10V8.99999C10 7.93912 10.4214 6.9217 11.1716 6.17156C11.9217 5.42141 12.9391 4.99999 14 4.99999H18.95Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/share-forward-box.vue";

exports['default'] = script;
