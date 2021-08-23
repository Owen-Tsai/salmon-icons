import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "TwitterFill"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("path", {
  d: "M22.1621 5.65605C21.3986 5.99374 20.589 6.21552 19.7601 6.31405C20.6338 5.79148 21.2878 4.96906 21.6001 4.00005C20.7801 4.48805 19.8811 4.83005 18.9441 5.01505C18.3147 4.34163 17.4804 3.89501 16.571 3.74463C15.6616 3.59425 14.728 3.74854 13.9153 4.1835C13.1026 4.61846 12.4564 5.30973 12.0772 6.14984C11.6979 6.98995 11.6068 7.93183 11.8181 8.82905C10.1552 8.7457 8.52838 8.31357 7.04334 7.56071C5.55829 6.80785 4.24818 5.7511 3.19805 4.45905C2.82634 5.0975 2.63101 5.82328 2.63205 6.56205C2.63205 8.01205 3.37005 9.29305 4.49205 10.043C3.82806 10.0221 3.17869 9.84283 2.59805 9.52005V9.57205C2.59825 10.5377 2.93242 11.4737 3.5439 12.2211C4.15538 12.9686 5.00653 13.4815 5.95305 13.673C5.33667 13.8401 4.69036 13.8647 4.06305 13.745C4.32992 14.5763 4.85006 15.3032 5.55064 15.8242C6.25123 16.3451 7.09718 16.6338 7.97005 16.65C7.10253 17.3314 6.10923 17.835 5.04693 18.1322C3.98464 18.4294 2.87418 18.5143 1.77905 18.382C3.69075 19.6115 5.91615 20.2642 8.18905 20.262C15.8821 20.262 20.0891 13.889 20.0891 8.36205C20.0891 8.18205 20.0841 8.00005 20.0761 7.82205C20.8949 7.23022 21.6017 6.49707 22.1631 5.65705L22.1621 5.65605Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/twitter-fill.vue";

export { script as default };
