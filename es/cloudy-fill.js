import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "CloudyFill"
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
    d: "M9 20.986C7.54404 20.8997 6.13477 20.4403 4.90773 19.6519C3.68069 18.8635 2.67717 17.7726 1.99368 16.4842C1.31019 15.1957 0.969735 13.7531 1.00506 12.295C1.04038 10.8369 1.45029 9.41247 2.19537 8.15864C2.94044 6.9048 3.99561 5.86378 5.25939 5.1357C6.52317 4.40762 7.95303 4.01698 9.41145 4.00134C10.8699 3.98571 12.3078 4.34561 13.5869 5.04643C14.866 5.74725 15.9432 6.76541 16.715 8.00298C18.3774 8.05609 19.9563 8.74448 21.1265 9.92646C22.2968 11.1084 22.9694 12.6941 23.0059 14.357C23.0424 16.0199 22.4401 17.6335 21.3228 18.8657C20.2056 20.0979 18.6585 20.855 17 20.981V21H9V20.986Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/cloudy-fill.vue";

export { script as default };
