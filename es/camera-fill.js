import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "CameraFill"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("path", {
  d: "M9 3H15L17 5H21C21.2652 5 21.5196 5.10536 21.7071 5.29289C21.8946 5.48043 22 5.73478 22 6V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V6C2 5.73478 2.10536 5.48043 2.29289 5.29289C2.48043 5.10536 2.73478 5 3 5H7L9 3ZM12 19C13.5913 19 15.1174 18.3679 16.2426 17.2426C17.3679 16.1174 18 14.5913 18 13C18 11.4087 17.3679 9.88258 16.2426 8.75736C15.1174 7.63214 13.5913 7 12 7C10.4087 7 8.88258 7.63214 7.75736 8.75736C6.63214 9.88258 6 11.4087 6 13C6 14.5913 6.63214 16.1174 7.75736 17.2426C8.88258 18.3679 10.4087 19 12 19ZM12 17C10.9391 17 9.92172 16.5786 9.17157 15.8284C8.42143 15.0783 8 14.0609 8 13C8 11.9391 8.42143 10.9217 9.17157 10.1716C9.92172 9.42143 10.9391 9 12 9C13.0609 9 14.0783 9.42143 14.8284 10.1716C15.5786 10.9217 16 11.9391 16 13C16 14.0609 15.5786 15.0783 14.8284 15.8284C14.0783 16.5786 13.0609 17 12 17Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/camera-fill.vue";

export { script as default };
