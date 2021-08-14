import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "UploadCloud"
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
    d: "M1 14.5C0.999385 13.3955 1.28042 12.309 1.81655 11.3433C2.35268 10.3776 3.1262 9.56457 4.064 8.98101C4.31151 7.0511 5.2538 5.27751 6.71452 3.99217C8.17524 2.70682 10.0543 1.9978 12 1.9978C13.9457 1.9978 15.8248 2.70682 17.2855 3.99217C18.7462 5.27751 19.6885 7.0511 19.936 8.98101C21.0992 9.7047 22.0041 10.7774 22.5213 12.046C23.0385 13.3146 23.1417 14.7141 22.8161 16.0449C22.4906 17.3756 21.7528 18.5694 20.7083 19.4559C19.6638 20.3423 18.366 20.8761 17 20.981L7 21C3.644 20.726 1 17.922 1 14.5ZM16.848 18.987C17.7938 18.9143 18.6925 18.5445 19.4156 17.9305C20.1387 17.3166 20.6493 16.4898 20.8745 15.5682C21.0996 14.6467 21.0278 13.6776 20.6692 12.7994C20.3107 11.9211 19.6837 11.1787 18.878 10.678L18.071 10.175L17.951 9.23301C17.7641 7.7867 17.0569 6.45795 15.9616 5.4951C14.8663 4.53225 13.4578 4.0012 11.9995 4.0012C10.5412 4.0012 9.13272 4.53225 8.03742 5.4951C6.94213 6.45795 6.23493 7.7867 6.048 9.23301L5.928 10.175L5.123 10.678C4.3173 11.1786 3.69038 11.921 3.3318 12.7992C2.97321 13.6773 2.90129 14.6463 3.12631 15.5678C3.35133 16.4893 3.86177 17.3161 4.58475 17.9302C5.30773 18.5442 6.20625 18.9141 7.152 18.987L7.325 19H16.675L16.848 18.987ZM13 13V17H11V13H8L12 8.00001L16 13H13Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/upload-cloud.vue";

export { script as default };
