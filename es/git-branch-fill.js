import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "GitBranchFill"
});

const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("path", {
  d: "M7.10495 15.21C7.7586 15.4691 8.30051 15.9495 8.63613 16.5674C8.97175 17.1852 9.07975 17.9013 8.9413 18.5907C8.80285 19.2801 8.42673 19.8989 7.87858 20.3393C7.33043 20.7797 6.64505 21.0136 5.94204 21.0002C5.23903 20.9869 4.56303 20.7271 4.032 20.2662C3.50098 19.8053 3.14864 19.1726 3.03648 18.4785C2.92432 17.7844 3.05945 17.0729 3.4183 16.4682C3.77715 15.8635 4.33692 15.4041 4.99995 15.17V8.82998C4.33245 8.59408 3.76985 8.12978 3.41159 7.51918C3.05332 6.90857 2.92246 6.19096 3.04213 5.49319C3.16181 4.79543 3.52431 4.16244 4.06557 3.70611C4.60683 3.24978 5.29199 2.99949 5.99995 2.99949C6.7079 2.99949 7.39306 3.24978 7.93432 3.70611C8.47558 4.16244 8.83808 4.79543 8.95776 5.49319C9.07743 6.19096 8.94657 6.90857 8.58831 7.51918C8.23004 8.12978 7.66744 8.59408 6.99995 8.82998V12C7.83595 11.372 8.87395 11 9.99995 11H13.9999C14.6581 11 15.2979 10.7837 15.821 10.3844C16.3441 9.98504 16.7215 9.42482 16.8949 8.78998C16.2381 8.52989 15.6941 8.04641 15.3587 7.42467C15.0233 6.80294 14.9179 6.0828 15.0612 5.39104C15.2045 4.69928 15.5873 4.08024 16.1421 3.64292C16.6969 3.2056 17.3882 2.97803 18.0943 3.00027C18.8004 3.02251 19.476 3.29313 20.0022 3.7645C20.5284 4.23587 20.8714 4.87776 20.9709 5.57717C21.0704 6.27658 20.92 6.98866 20.5461 7.58806C20.1722 8.18745 19.5988 8.63574 18.9269 8.85398C18.7255 10.0147 18.1209 11.067 17.2195 11.8255C16.3182 12.584 15.178 12.9999 13.9999 13H9.99995C9.34184 13 8.70196 13.2163 8.17885 13.6156C7.65575 14.0149 7.27841 14.5751 7.10495 15.21Z",
  fill: "currentColor"
}, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/git-branch-fill.vue";

export { script as default };
