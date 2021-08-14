'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "EditCircle"
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
    d: "M12.684 4.029C11.0494 3.88879 9.41122 4.25452 7.99146 5.07662C6.57171 5.89873 5.43903 7.13746 4.74694 8.62494C4.05486 10.1124 3.83683 11.7767 4.1224 13.3923C4.40797 15.0078 5.18334 16.4965 6.34342 17.6566C7.5035 18.8167 8.99219 19.592 10.6077 19.8776C12.2233 20.1632 13.8876 19.9451 15.3751 19.2531C16.8625 18.561 18.1013 17.4283 18.9234 16.0085C19.7455 14.5888 20.1112 12.9506 19.971 11.316C19.9009 10.4758 19.6973 9.65214 19.368 8.876L20.868 7.374C21.6149 8.80139 22.0034 10.389 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C13.6107 1.99857 15.1979 2.38696 16.626 3.132L15.125 4.632C14.3488 4.30275 13.5252 4.0992 12.685 4.029H12.684ZM20.485 2.1L21.9 3.515L12.708 12.707L11.296 12.71L11.294 11.293L20.485 2.1Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/edit-circle.vue";

exports['default'] = script;
