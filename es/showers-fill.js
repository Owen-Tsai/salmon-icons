import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "ShowersFill"
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
    d: "M15 18H9.00004V21H7.00004V17.748C5.67375 17.4048 4.45781 16.7267 3.46874 15.7788C2.47966 14.8309 1.75058 13.6448 1.35136 12.3343C0.952139 11.0238 0.89615 9.63272 1.18876 8.29436C1.48136 6.956 2.11276 5.71521 3.02246 4.69086C3.93216 3.66652 5.08966 2.89295 6.38408 2.44427C7.6785 1.99559 9.06645 1.88684 10.415 2.12843C11.7635 2.37003 13.0273 2.95388 14.0855 3.82403C15.1436 4.69419 15.9605 5.8215 16.458 7.09796C17.2101 6.95406 17.9839 6.96878 18.7299 7.14117C19.4759 7.31356 20.1778 7.63982 20.7904 8.09906C21.4031 8.55831 21.9131 9.14042 22.2879 9.80813C22.6626 10.4758 22.8938 11.2144 22.9667 11.9767C23.0395 12.7389 22.9524 13.5079 22.711 14.2345C22.4695 14.9611 22.0789 15.6293 21.5644 16.1963C21.0498 16.7633 20.4225 17.2166 19.7226 17.5272C19.0227 17.8378 18.2657 17.9988 17.5 18L17 18.001V21.001H15V18.001V18ZM11 20H13V23H11V20Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/showers-fill.vue";

export { script as default };