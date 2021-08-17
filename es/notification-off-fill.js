import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "NotificationOffFill"
});

const _hoisted_1 = { class: "sui-icon" };
const _hoisted_2 = /* @__PURE__ */ createVNode("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ createVNode("path", {
    d: "M18.5859 19.9999H3.99994C3.90709 19.9999 3.81607 19.9741 3.73708 19.9253C3.65809 19.8765 3.59426 19.8066 3.55273 19.7236C3.5112 19.6405 3.49363 19.5475 3.50196 19.455C3.5103 19.3626 3.54423 19.2742 3.59994 19.1999L3.99994 18.6669V9.99994C3.99994 8.66994 4.32394 7.41594 4.89894 6.31294L1.39294 2.80794L2.80794 1.39294L22.6069 21.1929L21.1919 22.6069L18.5859 19.9999ZM19.9999 15.7859L7.55894 3.34494C8.76369 2.54089 10.1641 2.079 11.6108 2.00855C13.0575 1.9381 14.4962 2.26173 15.7734 2.94492C17.0506 3.62811 18.1183 4.64522 18.8627 5.88773C19.607 7.13024 20.0001 8.55153 19.9999 9.99994V15.7859ZM9.49994 20.9999H14.4999C14.4999 21.663 14.2366 22.2989 13.7677 22.7677C13.2989 23.2366 12.663 23.4999 11.9999 23.4999C11.3369 23.4999 10.701 23.2366 10.2322 22.7677C9.76334 22.2989 9.49994 21.663 9.49994 20.9999Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/notification-off-fill.vue";

export { script as default };