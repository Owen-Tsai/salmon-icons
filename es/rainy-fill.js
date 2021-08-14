import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "RainyFill"
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
    d: "M15.86 18L12.707 14.847C12.5194 14.6596 12.2651 14.5543 12 14.5543C11.7348 14.5543 11.4805 14.6596 11.293 14.847L8.17997 17.96C6.81345 17.8189 5.50629 17.3283 4.38437 16.5355C3.26245 15.7427 2.36357 14.6743 1.7743 13.4333C1.18503 12.1924 0.92521 10.8206 1.01987 9.45004C1.11454 8.07952 1.56049 6.75646 2.31479 5.60828C3.06909 4.4601 4.10632 3.52549 5.32659 2.89444C6.54686 2.26339 7.90906 1.95717 9.282 2.00527C10.6549 2.05337 11.9924 2.45417 13.1655 3.16907C14.3386 3.88397 15.3079 4.88889 15.98 6.08704C16.7988 5.94606 17.6381 5.97669 18.4445 6.177C19.2509 6.37731 20.0069 6.74293 20.6646 7.25069C21.3223 7.75846 21.8674 8.3973 22.2653 9.12674C22.6632 9.85617 22.9053 10.6603 22.9761 11.4882C23.047 12.3161 22.9452 13.1497 22.6771 13.9361C22.409 14.7226 21.9804 15.4448 21.4186 16.057C20.8568 16.6691 20.1739 17.158 19.4133 17.4924C18.6527 17.8269 17.8309 17.9998 17 18H15.861H15.86ZM10.232 18.732L12 16.964L13.768 18.732C14.1175 19.0817 14.3556 19.5272 14.452 20.0121C14.5484 20.497 14.4988 20.9997 14.3096 21.4564C14.1204 21.9132 13.7999 22.3036 13.3888 22.5783C12.9777 22.853 12.4944 22.9996 12 22.9996C11.5055 22.9996 11.0222 22.853 10.6111 22.5783C10.2 22.3036 9.87957 21.9132 9.69033 21.4564C9.50109 20.9997 9.45155 20.497 9.54796 20.0121C9.64437 19.5272 9.8824 19.0817 10.232 18.732Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/rainy-fill.vue";

export { script as default };
