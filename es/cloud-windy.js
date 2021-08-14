import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "CloudWindy"
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
    d: "M14 18.0065V16.0065H17.5C18.077 16.0064 18.6451 15.8637 19.1536 15.591C19.6622 15.3182 20.0954 14.924 20.4147 14.4434C20.734 13.9628 20.9296 13.4107 20.9839 12.8362C21.0383 12.2617 20.9498 11.6827 20.7262 11.1507C20.5027 10.6187 20.1511 10.1503 19.7028 9.78702C19.2544 9.42377 18.7232 9.17701 18.1564 9.06871C17.5896 8.9604 17.0049 8.99391 16.4542 9.16625C15.9035 9.33859 15.4039 9.64442 15 10.0565V10.0065C15 8.4152 14.3679 6.88908 13.2426 5.76386C12.1174 4.63864 10.5913 4.0065 9 4.0065C7.4087 4.0065 5.88258 4.63864 4.75736 5.76386C3.63214 6.88908 3 8.4152 3 10.0065V10.0135H1V10.0065C0.998489 8.13966 1.6499 6.33107 2.84144 4.89393C4.03297 3.45679 5.68959 2.48162 7.5244 2.13728C9.35922 1.79294 11.2567 2.10112 12.8882 3.00846C14.5197 3.91579 15.7826 5.36514 16.458 7.1055C17.2103 6.9608 17.9846 6.97486 18.7312 7.14681C19.4778 7.31875 20.1802 7.64478 20.7935 8.10399C21.4067 8.5632 21.9173 9.14547 22.2924 9.81348C22.6676 10.4815 22.899 11.2205 22.9719 11.9832C23.0448 12.7458 22.9575 13.5153 22.7158 14.2423C22.474 14.9692 22.083 15.6377 21.5678 16.2048C21.0527 16.7718 20.4247 17.225 19.7242 17.5353C19.0237 17.8456 18.2661 18.0061 17.5 18.0065H14ZM6 20.0065H16V22.0065H6V20.0065ZM6 12.0065H14V14.0065H6V12.0065ZM2 16.0065H12V18.0065H2V16.0065Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/cloud-windy.vue";

export { script as default };
