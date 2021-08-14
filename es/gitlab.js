import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "Gitlab"
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
    d: "M5.68002 7.31403L3.86002 13.228L12 19.442L20.14 13.228L18.32 7.31403L16.643 11H7.35602L5.68102 7.31403H5.68002ZM15.357 9.00003L18.245 2.64603C18.2785 2.57196 18.3338 2.50986 18.4035 2.46799C18.4732 2.42613 18.554 2.4065 18.6351 2.41171C18.7163 2.41693 18.7939 2.44674 18.8576 2.49717C18.9214 2.54761 18.9683 2.61628 18.992 2.69404L22.359 13.639C22.389 13.7366 22.3884 13.8411 22.3573 13.9383C22.3262 14.0356 22.2661 14.121 22.185 14.183L12 21.958L1.81602 14.183C1.73494 14.121 1.67481 14.0356 1.6437 13.9383C1.6126 13.8411 1.61201 13.7366 1.64202 13.639L5.00902 2.69404C5.03277 2.61628 5.07965 2.54761 5.14341 2.49717C5.20717 2.44674 5.28479 2.41693 5.36592 2.41171C5.44705 2.4065 5.52785 2.42613 5.59754 2.46799C5.66723 2.50986 5.72251 2.57196 5.75602 2.64603L8.64402 9.00003H15.356H15.357Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/gitlab.vue";

export { script as default };
