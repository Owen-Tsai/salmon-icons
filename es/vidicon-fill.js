import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "VidiconFill"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("path", {
  d: "M17 9.2L22.213 5.55C22.288 5.49746 22.3759 5.4665 22.4672 5.4605C22.5586 5.4545 22.6498 5.4737 22.731 5.51599C22.8122 5.55829 22.8802 5.62206 22.9276 5.70035C22.9751 5.77865 23.0001 5.86846 23 5.96V18.04C23.0001 18.1315 22.9751 18.2214 22.9276 18.2996C22.8802 18.3779 22.8122 18.4417 22.731 18.484C22.6498 18.5263 22.5586 18.5455 22.4672 18.5395C22.3759 18.5335 22.288 18.5025 22.213 18.45L17 14.8V19C17 19.2652 16.8946 19.5196 16.7071 19.7071C16.5196 19.8946 16.2652 20 16 20H2C1.73478 20 1.48043 19.8946 1.29289 19.7071C1.10536 19.5196 1 19.2652 1 19V5C1 4.73478 1.10536 4.48043 1.29289 4.29289C1.48043 4.10536 1.73478 4 2 4H16C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5V9.2ZM5 8V10H7V8H5Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/vidicon-fill.vue";

export { script as default };
