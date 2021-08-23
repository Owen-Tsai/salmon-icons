import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "Link"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("path", {
  d: "M18.364 15.536L16.95 14.12L18.364 12.706C18.8316 12.2424 19.2031 11.6911 19.4571 11.0836C19.7111 10.4761 19.8425 9.8244 19.844 9.16595C19.8454 8.5075 19.7168 7.85525 19.4655 7.24665C19.2142 6.63804 18.8451 6.08507 18.3795 5.61947C17.9139 5.15387 17.361 4.78483 16.7524 4.53351C16.1437 4.2822 15.4915 4.15357 14.833 4.15502C14.1746 4.15646 13.5229 4.28794 12.9154 4.54192C12.3079 4.79589 11.7566 5.16736 11.293 5.63499L9.87901 7.04999L8.46401 5.63599L9.88001 4.22199C11.1928 2.90917 12.9734 2.17163 14.83 2.17163C16.6866 2.17163 18.4672 2.90917 19.78 4.22199C21.0928 5.53481 21.8304 7.31538 21.8304 9.17199C21.8304 11.0286 21.0928 12.8092 19.78 14.122L18.365 15.536H18.364ZM15.536 18.364L14.121 19.778C12.8082 21.0908 11.0276 21.8283 9.17101 21.8283C7.3144 21.8283 5.53383 21.0908 4.22101 19.778C2.90819 18.4652 2.17065 16.6846 2.17065 14.828C2.17065 12.9714 2.90819 11.1908 4.22101 9.87799L5.63601 8.46399L7.05001 9.87999L5.63601 11.294C5.16838 11.7575 4.79692 12.3089 4.54294 12.9164C4.28896 13.5239 4.15748 14.1756 4.15604 14.834C4.1546 15.4925 4.28323 16.1447 4.53454 16.7533C4.78585 17.3619 5.1549 17.9149 5.62049 18.3805C6.08609 18.8461 6.63906 19.2152 7.24767 19.4665C7.85628 19.7178 8.50853 19.8464 9.16698 19.845C9.82543 19.8435 10.4771 19.712 11.0846 19.4581C11.6921 19.2041 12.2435 18.8326 12.707 18.365L14.121 16.951L15.536 18.365V18.364ZM14.828 7.75699L16.243 9.17199L9.17201 16.242L7.75701 14.828L14.828 7.75799V7.75699Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/link.vue";

export { script as default };
