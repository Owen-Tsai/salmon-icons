import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "QuoteRight"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("path", {
  d: "M19.417 6.679C20.447 7.773 21 9 21 10.989C21 14.489 18.543 17.626 14.97 19.177L14.077 17.799C17.412 15.995 18.064 13.654 18.324 12.178C17.787 12.456 17.084 12.553 16.395 12.489C14.591 12.322 13.169 10.841 13.169 9C13.169 8.07174 13.5378 7.1815 14.1941 6.52513C14.8505 5.86875 15.7408 5.5 16.669 5.5C17.742 5.5 18.768 5.99 19.417 6.679ZM9.41701 6.679C10.447 7.773 11 9 11 10.989C11 14.489 8.54301 17.626 4.97001 19.177L4.07701 17.799C7.41201 15.995 8.06401 13.654 8.32401 12.178C7.78701 12.456 7.08401 12.553 6.39501 12.489C4.59101 12.322 3.17001 10.841 3.17001 9C3.17001 8.07174 3.53876 7.1815 4.19514 6.52513C4.85152 5.86875 5.74176 5.5 6.67001 5.5C7.74301 5.5 8.76901 5.99 9.41801 6.679H9.41701Z",
  fill: "black"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/quote-right.vue";

export { script as default };
