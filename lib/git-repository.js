'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "GitRepository"
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
    d: "M13 21V23.5L10 21.5L7 23.5V21H6.5C5.57174 21 4.6815 20.6313 4.02513 19.9749C3.36875 19.3185 3 18.4283 3 17.5V5C3 4.20435 3.31607 3.44129 3.87868 2.87868C4.44129 2.31607 5.20435 2 6 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H13ZM13 19H19V16H6.5C6.10218 16 5.72064 16.158 5.43934 16.4393C5.15804 16.7206 5 17.1022 5 17.5C5 17.8978 5.15804 18.2794 5.43934 18.5607C5.72064 18.842 6.10218 19 6.5 19H7V17H13V19ZM19 14V4H6V14.035C6.16563 14.0115 6.33271 13.9998 6.5 14H19ZM7 5H9V7H7V5ZM7 8H9V10H7V8ZM7 11H9V13H7V11Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/git-repository.vue";

exports['default'] = script;