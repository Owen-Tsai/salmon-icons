import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "LockUnlock"
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
    d: "M7 9.99997H20C20.2652 9.99997 20.5196 10.1053 20.7071 10.2929C20.8946 10.4804 21 10.7348 21 11V21C21 21.2652 20.8946 21.5195 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5195 3 21.2652 3 21V11C3 10.7348 3.10536 10.4804 3.29289 10.2929C3.48043 10.1053 3.73478 9.99997 4 9.99997H5V8.99997C4.99943 7.42267 5.53158 5.89141 6.51019 4.6544C7.4888 3.41739 8.8565 2.54715 10.3916 2.18473C11.9267 1.82231 13.5392 1.98897 14.9677 2.65768C16.3963 3.32639 17.5571 4.45796 18.262 5.86897L16.473 6.76297C15.9695 5.75499 15.1403 4.94661 14.1198 4.46891C13.0994 3.99122 11.9475 3.87219 10.8509 4.13115C9.7543 4.3901 8.77733 5.01184 8.07836 5.89558C7.37939 6.77931 6.9994 7.87323 7 8.99997V9.99997ZM5 12V20H19V12H5ZM10 15H14V17H10V15Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/lock-unlock.vue";

export { script as default };