import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "ThumbUpFill"
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
    d: "M2 8.99999H5V21H2C1.73478 21 1.48043 20.8946 1.29289 20.7071C1.10536 20.5196 1 20.2652 1 20V9.99999C1 9.73477 1.10536 9.48042 1.29289 9.29288C1.48043 9.10535 1.73478 8.99999 2 8.99999ZM7.293 7.70699L13.693 1.30699C13.7781 1.22168 13.8911 1.16996 14.0112 1.16132C14.1314 1.15269 14.2506 1.18772 14.347 1.25999L15.2 1.89999C15.4369 2.07783 15.6158 2.32184 15.7143 2.60125C15.8127 2.88065 15.8262 3.18293 15.753 3.46999L14.6 7.99999H21C21.5304 7.99999 22.0391 8.2107 22.4142 8.58578C22.7893 8.96085 23 9.46956 23 9.99999V12.104C23.0003 12.3654 22.9493 12.6242 22.85 12.866L19.755 20.381C19.6795 20.5642 19.5513 20.7209 19.3866 20.8311C19.2219 20.9413 19.0282 21.0001 18.83 21H8C7.73478 21 7.48043 20.8946 7.29289 20.7071C7.10536 20.5196 7 20.2652 7 20V8.41399C7.00006 8.14879 7.10545 7.89448 7.293 7.70699Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/thumb-up-fill.vue";

export { script as default };