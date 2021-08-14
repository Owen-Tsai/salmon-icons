'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "Pencil"
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
    d: "M15.728 9.68596L14.314 8.27196L5 17.586V19H6.414L15.728 9.68596ZM17.142 8.27196L18.556 6.85796L17.142 5.44396L15.728 6.85796L17.142 8.27196ZM7.242 21H3V16.757L16.435 3.32196C16.6225 3.13449 16.8768 3.02917 17.142 3.02917C17.4072 3.02917 17.6615 3.13449 17.849 3.32196L20.678 6.15096C20.8655 6.33849 20.9708 6.5928 20.9708 6.85796C20.9708 7.12313 20.8655 7.37743 20.678 7.56496L7.243 21H7.242Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/pencil.vue";

exports['default'] = script;
