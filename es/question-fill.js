import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "QuestionFill"
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
    d: "M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 15V17H13V15H11ZM13 13.355C13.8037 13.1128 14.4936 12.59 14.9442 11.8817C15.3947 11.1735 15.5759 10.3271 15.4547 9.49647C15.3336 8.66588 14.9181 7.90644 14.284 7.35646C13.6499 6.80647 12.8394 6.50254 12 6.5C11.1909 6.49994 10.4067 6.78015 9.78079 7.29299C9.15492 7.80583 8.72601 8.51963 8.567 9.313L10.529 9.706C10.5847 9.42743 10.7183 9.1704 10.9144 8.96482C11.1104 8.75923 11.3608 8.61354 11.6364 8.54471C11.912 8.47587 12.2015 8.48671 12.4712 8.57597C12.7409 8.66523 12.9797 8.82924 13.1598 9.04891C13.34 9.26858 13.454 9.53489 13.4887 9.81684C13.5234 10.0988 13.4773 10.3848 13.3558 10.6416C13.2343 10.8984 13.0423 11.1154 12.8023 11.2673C12.5623 11.4193 12.2841 11.5 12 11.5C11.7348 11.5 11.4804 11.6054 11.2929 11.7929C11.1054 11.9804 11 12.2348 11 12.5V14H13V13.355Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/question-fill.vue";

export { script as default };
