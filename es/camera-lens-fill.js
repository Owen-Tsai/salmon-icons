import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "CameraLensFill"
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
    d: "M9.82699 21.763L14.31 14L17.842 20.117C16.1416 21.3443 14.097 22.0033 12 22C11.254 22 10.527 21.918 9.82699 21.763ZM7.88999 21.12C6.60519 20.5391 5.45733 19.6938 4.52134 18.6393C3.58535 17.5847 2.88227 16.3447 2.45799 15H11.423L7.88999 21.119V21.12ZM2.04999 13C1.90688 11.5973 2.06313 10.1801 2.5084 8.84224C2.95366 7.50437 3.67782 6.27623 4.63299 5.23901L9.11199 13H2.04999ZM6.15899 3.88301C7.8591 2.65589 9.90327 1.9969 12 2.00001C12.746 2.00001 13.473 2.08201 14.173 2.23701L9.68999 10L6.15899 3.88301ZM16.11 2.88001C17.3948 3.46089 18.5426 4.30619 19.4786 5.36073C20.4146 6.41527 21.1177 7.65535 21.542 9.00001H12.577L16.11 2.88101V2.88001ZM21.95 11C22.0931 12.4028 21.9368 13.8199 21.4916 15.1578C21.0463 16.4957 20.3222 17.7238 19.367 18.761L14.888 11H21.952H21.95Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/camera-lens-fill.vue";

export { script as default };
