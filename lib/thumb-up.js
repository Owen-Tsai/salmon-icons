'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "ThumbUp"
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
    d: "M14.6 8.00003H21C21.5304 8.00003 22.0391 8.21074 22.4142 8.58581C22.7893 8.96089 23 9.46959 23 10V12.104C23.0003 12.3654 22.9493 12.6243 22.85 12.866L19.755 20.381C19.6795 20.5642 19.5513 20.7209 19.3866 20.8311C19.2219 20.9413 19.0282 21.0001 18.83 21H2C1.73478 21 1.48043 20.8947 1.29289 20.7071C1.10536 20.5196 1 20.2652 1 20V10C1 9.73481 1.10536 9.48046 1.29289 9.29292C1.48043 9.10538 1.73478 9.00003 2 9.00003H5.482C5.6421 9.00007 5.79986 8.96167 5.94203 8.88806C6.0842 8.81445 6.20662 8.70778 6.299 8.57703L11.752 0.850026C11.8209 0.752339 11.9226 0.682586 12.0385 0.653416C12.1545 0.624246 12.277 0.637589 12.384 0.691026L14.198 1.59803C14.7085 1.85319 15.1163 2.27534 15.3537 2.79434C15.5911 3.31334 15.6438 3.89795 15.503 4.45103L14.6 8.00003ZM7 10.588V19H18.16L21 12.104V10H14.6C14.2954 9.99998 13.9948 9.93036 13.7212 9.79648C13.4476 9.6626 13.2082 9.468 13.0213 9.22751C12.8343 8.98703 12.7048 8.70702 12.6425 8.40885C12.5803 8.11068 12.5869 7.80223 12.662 7.50703L13.565 3.95903C13.5933 3.84835 13.5828 3.73134 13.5353 3.62745C13.4878 3.52357 13.4062 3.43907 13.304 3.38803L12.643 3.05803L7.933 9.73003C7.683 10.084 7.363 10.374 7 10.588ZM5 11H3V19H5V11Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/thumb-up.vue";

exports['default'] = script;