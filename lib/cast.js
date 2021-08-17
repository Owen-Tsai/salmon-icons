'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "Cast"
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
    d: "M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H15C15.0002 20.3304 14.949 19.6618 14.847 19H20V5H4V8.153C3.33822 8.05096 2.6696 7.99981 2 8V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM13 21H11C11 18.6131 10.0518 16.3239 8.36396 14.636C6.67613 12.9482 4.38695 12 2 12V10C8.075 10 13 14.925 13 21ZM9 21H7C7 20.3434 6.87067 19.6932 6.6194 19.0866C6.36812 18.48 5.99983 17.9288 5.53553 17.4645C5.07124 17.0002 4.52005 16.6319 3.91342 16.3806C3.30679 16.1293 2.65661 16 2 16V14C3.85652 14 5.63699 14.7375 6.94975 16.0503C8.2625 17.363 9 19.1435 9 21ZM5 21H2V18C2.79565 18 3.55871 18.3161 4.12132 18.8787C4.68393 19.4413 5 20.2044 5 21Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/cast.vue";

exports['default'] = script;