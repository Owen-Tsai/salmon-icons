import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "XboxFill"
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
    d: "M5.41801 19.527C7.23821 21.1244 9.57826 22.0036 12 22C14.4226 22.0033 16.7635 21.1242 18.585 19.527C20.149 17.934 14.988 12.27 12 10.013C9.01501 12.27 3.85001 17.934 5.41801 19.527ZM14.718 7.522C16.802 9.99 20.955 16.117 19.782 18.282C21.2204 16.5058 22.0036 14.2886 22 12.003C22.0018 10.6791 21.7397 9.36822 21.2288 8.14689C20.718 6.92556 19.9688 5.81834 19.025 4.89C19.025 4.89 19.003 4.872 18.957 4.855C18.8815 4.82873 18.802 4.81587 18.722 4.817C18.229 4.817 17.068 5.179 14.718 7.522ZM5.04501 4.856C4.99701 4.873 4.97701 4.89 4.97301 4.891C4.02991 5.81956 3.28128 6.92672 2.77083 8.14783C2.26037 9.36893 1.99833 10.6795 2.00001 12.003C2.00001 14.382 2.83201 16.564 4.21801 18.281C3.05001 16.11 7.20001 9.988 9.28401 7.523C6.93401 5.178 5.77101 4.818 5.28001 4.818C5.2002 4.8154 5.12066 4.82866 5.04601 4.857V4.855L5.04501 4.856ZM12 4.959C12 4.959 9.54601 3.523 7.63001 3.455C6.87701 3.428 6.41801 3.701 6.36201 3.737C8.14901 2.538 10.049 2 11.987 2H12C13.945 2 15.838 2.538 17.638 3.737C17.582 3.699 17.126 3.427 16.372 3.455C14.455 3.523 12 4.955 12 4.955V4.959Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/xbox-fill.vue";

export { script as default };
