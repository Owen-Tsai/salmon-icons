import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "Drop"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("path", {
  d: "M12 3.09997L7.05 8.04997C6.07111 9.02897 5.40449 10.2763 5.13445 11.6341C4.86442 12.9919 5.00308 14.3994 5.53292 15.6784C6.06275 16.9575 6.95996 18.0507 8.11109 18.8198C9.26222 19.5889 10.6156 19.9995 12 19.9995C13.3844 19.9995 14.7378 19.5889 15.8889 18.8198C17.04 18.0507 17.9373 16.9575 18.4671 15.6784C18.9969 14.3994 19.1356 12.9919 18.8656 11.6341C18.5955 10.2763 17.9289 9.02897 16.95 8.04997L12 3.09997ZM12 0.271973L18.364 6.63597C19.6227 7.89465 20.4798 9.4983 20.8271 11.2441C21.1743 12.9899 20.9961 14.7995 20.3149 16.4441C19.6337 18.0886 18.4802 19.4942 17.0001 20.4831C15.5201 21.4721 13.78 21.9999 12 21.9999C10.22 21.9999 8.47992 21.4721 6.99988 20.4831C5.51984 19.4942 4.36629 18.0886 3.6851 16.4441C3.00391 14.7995 2.82567 12.9899 3.17293 11.2441C3.52019 9.4983 4.37734 7.89465 5.636 6.63597L12 0.271973Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/drop.vue";

export { script as default };
