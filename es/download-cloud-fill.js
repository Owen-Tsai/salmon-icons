import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "DownloadCloudFill"
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
    d: "M7.00006 20.981C5.63411 20.8761 4.33622 20.3423 3.29171 19.4559C2.24721 18.5694 1.5095 17.3756 1.18391 16.0449C0.85833 14.7141 0.961525 13.3146 1.47876 12.046C1.996 10.7774 2.90083 9.7047 4.06406 8.98101C4.31157 7.0511 5.25385 5.27751 6.71457 3.99217C8.17529 2.70682 10.0543 1.9978 12.0001 1.9978C13.9458 1.9978 15.8248 2.70682 17.2855 3.99217C18.7463 5.27751 19.6885 7.0511 19.9361 8.98101C21.0993 9.7047 22.0041 10.7774 22.5213 12.046C23.0386 13.3146 23.1418 14.7141 22.8162 16.0449C22.4906 17.3756 21.7529 18.5694 20.7084 19.4559C19.6639 20.3423 18.366 20.8761 17.0001 20.981V21H7.00006V20.981ZM13.0001 12V8.00001H11.0001V12H8.00006L12.0001 17L16.0001 12H13.0001Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/download-cloud-fill.vue";

export { script as default };
