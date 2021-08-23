import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "MailOpenFill"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("path", {
  d: "M2.243 6.85399L11.49 1.30999C11.6454 1.21674 11.8233 1.16748 12.0045 1.16748C12.1857 1.16748 12.3636 1.21674 12.519 1.30999L21.757 6.85499C21.8311 6.8994 21.8925 6.96227 21.9351 7.03746C21.9776 7.11264 22 7.19758 22 7.28399V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V7.28299C1.99998 7.19658 2.02236 7.11164 2.06495 7.03646C2.10753 6.96127 2.16888 6.8984 2.243 6.85399ZM18.346 8.24399L12.061 13.683L5.647 8.23799L4.353 9.76199L12.073 16.317L19.654 9.75699L18.346 8.24399Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/mail-open-fill.vue";

export { script as default };
