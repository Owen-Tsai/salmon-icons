'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "ShutDown"
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
    d: "M6.265 3.807L7.412 5.446C6.01818 6.42177 4.97176 7.8165 4.42474 9.4276C3.87772 11.0387 3.8586 12.7822 4.37015 14.4049C4.88171 16.0276 5.89729 17.445 7.26937 18.4511C8.64146 19.4572 10.2986 19.9996 12 19.9996C13.7014 19.9996 15.3585 19.4572 16.7306 18.4511C18.1027 17.445 19.1183 16.0276 19.6299 14.4049C20.1414 12.7822 20.1223 11.0387 19.5753 9.4276C19.0282 7.8165 17.9818 6.42177 16.588 5.446L17.735 3.807C19.053 4.72843 20.1289 5.95446 20.8715 7.38087C21.614 8.80728 22.0012 10.3919 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C1.99884 10.3919 2.38599 8.80728 3.12853 7.38087C3.87107 5.95446 4.94705 4.72843 6.265 3.807ZM11 12V2H13V12H11Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/shut-down.vue";

exports['default'] = script;
