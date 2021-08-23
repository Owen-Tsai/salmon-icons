import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "EyeFill"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("path", {
  d: "M1.18103 12C2.12103 6.88 6.60803 3 12 3C17.392 3 21.878 6.88 22.819 12C21.879 17.12 17.392 21 12 21C6.60803 21 2.12203 17.12 1.18103 12ZM12 17C13.3261 17 14.5979 16.4732 15.5356 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5356 8.46447C14.5979 7.52678 13.3261 7 12 7C10.6739 7 9.40218 7.52678 8.4645 8.46447C7.52681 9.40215 7.00003 10.6739 7.00003 12C7.00003 13.3261 7.52681 14.5979 8.4645 15.5355C9.40218 16.4732 10.6739 17 12 17ZM12 15C11.2044 15 10.4413 14.6839 9.87871 14.1213C9.3161 13.5587 9.00003 12.7956 9.00003 12C9.00003 11.2044 9.3161 10.4413 9.87871 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7957 9 13.5587 9.31607 14.1214 9.87868C14.684 10.4413 15 11.2044 15 12C15 12.7956 14.684 13.5587 14.1214 14.1213C13.5587 14.6839 12.7957 15 12 15Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/eye-fill.vue";

export { script as default };
