'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "CloudFill"
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
    d: "M17 7C15.3713 6.99986 13.7813 7.49666 12.4424 8.42404C11.1035 9.35142 10.0795 10.6652 9.507 12.19L11.381 12.893C11.876 11.5784 12.8164 10.4791 14.0384 9.78642C15.2605 9.09376 16.6868 8.85168 18.0689 9.10232C19.4511 9.35297 20.7016 10.0805 21.6026 11.1581C22.5036 12.2358 22.9981 13.5953 23 15C23 16.5913 22.3679 18.1174 21.2426 19.2426C20.1174 20.3679 18.5913 21 17 21H7C5.58323 21.0009 4.21184 20.5004 3.12868 19.5872C2.04552 18.6739 1.32047 17.4069 1.0819 16.0103C0.843337 14.6138 1.10665 13.1779 1.82523 11.9569C2.5438 10.7358 3.67127 9.80848 5.008 9.339C4.92234 7.61162 5.4792 5.91368 6.57121 4.57252C7.66323 3.23136 9.21308 2.34195 10.922 2.07574C12.6309 1.80954 14.3778 2.1854 15.826 3.13085C17.2742 4.0763 18.3212 5.52441 18.765 7.196C18.1857 7.06559 17.5938 6.99985 17 7Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/cloud-fill.vue";

exports['default'] = script;
