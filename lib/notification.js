'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "Notification"
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
    d: "M18 10C18 8.4087 17.3679 6.88258 16.2426 5.75736C15.1174 4.63214 13.5913 4 12 4C10.4087 4 8.88258 4.63214 7.75736 5.75736C6.63214 6.88258 6 8.4087 6 10V18H18V10ZM20 18.667L20.4 19.2C20.4557 19.2743 20.4896 19.3626 20.498 19.4551C20.5063 19.5476 20.4887 19.6406 20.4472 19.7236C20.4057 19.8067 20.3419 19.8765 20.2629 19.9253C20.1839 19.9741 20.0929 20 20 20H4C3.90714 20 3.81612 19.9741 3.73713 19.9253C3.65815 19.8765 3.59431 19.8067 3.55279 19.7236C3.51126 19.6406 3.49368 19.5476 3.50202 19.4551C3.51036 19.3626 3.54429 19.2743 3.6 19.2L4 18.667V10C4 7.87827 4.84286 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10V18.667ZM9.5 21H14.5C14.5 21.663 14.2366 22.2989 13.7678 22.7678C13.2989 23.2366 12.663 23.5 12 23.5C11.337 23.5 10.7011 23.2366 10.2322 22.7678C9.76339 22.2989 9.5 21.663 9.5 21Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/notification.vue";

exports['default'] = script;