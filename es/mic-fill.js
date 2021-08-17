import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "MicFill"
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
    d: "M12.0001 1C12.6567 1 13.3068 1.12933 13.9135 1.3806C14.5201 1.63188 15.0713 2.00017 15.5356 2.46447C15.9999 2.92876 16.3682 3.47995 16.6195 4.08658C16.8707 4.69321 17.0001 5.34339 17.0001 6V10C17.0001 11.3261 16.4733 12.5979 15.5356 13.5355C14.5979 14.4732 13.3261 15 12.0001 15C10.674 15 9.4022 14.4732 8.46452 13.5355C7.52684 12.5979 7.00005 11.3261 7.00005 10V6C7.00005 4.67392 7.52684 3.40215 8.46452 2.46447C9.4022 1.52678 10.674 1 12.0001 1ZM3.05505 11H5.07005C5.31235 12.6648 6.14592 14.1867 7.41829 15.2873C8.69065 16.3879 10.3167 16.9936 11.9991 16.9936C13.6814 16.9936 15.3075 16.3879 16.5798 15.2873C17.8522 14.1867 18.6858 12.6648 18.9281 11H20.9441C20.7167 13.0287 19.8067 14.9199 18.3633 16.3635C16.9199 17.8071 15.0287 18.7174 13.0001 18.945V23H11.0001V18.945C8.97119 18.7176 7.07984 17.8074 5.63623 16.3638C4.19262 14.9202 3.28247 13.0289 3.05505 11Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/mic-fill.vue";

export { script as default };