import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "Strikethrough"
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
    d: "M17.154 14C17.384 14.516 17.5 15.09 17.5 15.72C17.5 17.062 16.976 18.112 15.929 18.867C14.88 19.622 13.433 20 11.586 20C9.946 20 8.323 19.619 6.716 18.856V16.6C8.236 17.477 9.791 17.916 11.382 17.916C13.933 17.916 15.212 17.184 15.221 15.719C15.2263 15.422 15.1716 15.1269 15.0603 14.8515C14.9489 14.5761 14.7832 14.3259 14.573 14.116L14.453 13.999H3V11.999H21V13.999H17.154V14ZM13.076 11H7.629C7.45383 10.8403 7.29289 10.6656 7.148 10.478C6.716 9.92 6.5 9.246 6.5 8.452C6.5 7.216 6.966 6.165 7.897 5.299C8.83 4.433 10.271 4 12.222 4C13.693 4 15.101 4.328 16.444 4.984V7.136C15.244 6.449 13.929 6.106 12.498 6.106C10.018 6.106 8.779 6.888 8.779 8.452C8.779 8.872 8.997 9.238 9.433 9.551C9.869 9.864 10.407 10.113 11.046 10.301C11.666 10.481 12.343 10.715 13.076 11Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/strikethrough.vue";

export { script as default };
