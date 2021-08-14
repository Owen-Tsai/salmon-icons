'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "OrderPlay"
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
    d: "M17 3.99995V2.06795C16.9998 1.97286 17.0268 1.8797 17.0777 1.79939C17.1287 1.71908 17.2014 1.65496 17.2875 1.61454C17.3736 1.57413 17.4694 1.5591 17.5637 1.57121C17.658 1.58333 17.7469 1.62209 17.82 1.68295L21.94 5.11595C22.019 5.18179 22.0757 5.27037 22.1025 5.36963C22.1293 5.46888 22.1248 5.57398 22.0898 5.67061C22.0547 5.76724 21.9906 5.85071 21.9064 5.90964C21.8222 5.96858 21.7218 6.00011 21.619 5.99995H2V3.99995H17ZM2 18H22V20H2V18ZM2 11H22V13H2V11Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/order-play.vue";

exports['default'] = script;
