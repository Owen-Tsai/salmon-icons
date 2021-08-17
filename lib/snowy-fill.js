'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "SnowyFill"
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
    d: "M6.02705 17.43C4.30243 16.7377 2.87248 15.4669 1.98255 13.8354C1.09262 12.204 0.798204 10.3137 1.1498 8.48885C1.5014 6.66404 2.4771 5.01847 3.90949 3.83448C5.34189 2.65049 7.14167 2.00191 9.00005 2C10.6121 1.99991 12.1866 2.48665 13.5174 3.39648C14.8481 4.30631 15.8731 5.59682 16.4581 7.099C17.8656 6.96689 19.27 7.38187 20.3797 8.25779C21.4894 9.13372 22.2192 10.4033 22.4176 11.8031C22.616 13.2028 22.2678 14.6252 21.4452 15.775C20.6226 16.9248 19.3889 17.7137 18.0001 17.978C17.9951 16.4376 17.3979 14.9581 16.3321 13.846C15.2664 12.7338 13.8137 12.0741 12.2749 12.0035C10.7361 11.933 9.22917 12.457 8.06609 13.4669C6.90302 14.4769 6.17294 15.8955 6.02705 17.429V17.43ZM13.0001 16.267L14.9641 15.133L15.9641 16.865L14.0001 18L15.9641 19.134L14.9641 20.866L13.0001 19.732V22H11.0001V19.732L9.03605 20.866L8.03605 19.134L10.0001 18L8.03605 16.866L9.03605 15.134L11.0001 16.268V14H13.0001V16.268V16.267Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/snowy-fill.vue";

exports['default'] = script;