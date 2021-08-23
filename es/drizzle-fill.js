import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "DrizzleFill"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("path", {
  d: "M11 18V21H9.00005V18C7.54411 17.9995 6.1159 17.6018 4.86933 16.8496C3.62276 16.0973 2.60511 15.0192 1.92604 13.7313C1.24697 12.4434 0.932226 10.9947 1.01574 9.54113C1.09925 8.08759 1.57784 6.6844 2.39994 5.48277C3.22205 4.28114 4.35648 3.32665 5.681 2.72215C7.00551 2.11765 8.46988 1.88606 9.91629 2.05236C11.3627 2.21865 12.7363 2.77651 13.8891 3.66582C15.0419 4.55512 15.9301 5.74216 16.458 7.099C17.2104 6.9543 17.9847 6.96837 18.7313 7.14031C19.4778 7.31225 20.1803 7.63828 20.7935 8.09749C21.4068 8.5567 21.9173 9.13897 22.2925 9.80698C22.6676 10.475 22.899 11.214 22.9719 11.9767C23.0448 12.7393 22.9576 13.5088 22.7158 14.2358C22.474 14.9627 22.083 15.6312 21.5679 16.1983C21.0527 16.7653 20.4248 17.2185 19.7243 17.5288C19.0238 17.8391 18.2662 17.9996 17.5 18H11ZM13 20H15V23H13V20Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/drizzle-fill.vue";

export { script as default };
