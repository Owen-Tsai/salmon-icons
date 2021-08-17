import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "Cloudy"
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
    d: "M9.49999 6C7.77608 6 6.12278 6.68482 4.90379 7.90381C3.68481 9.12279 2.99999 10.7761 2.99999 12.5C2.99999 14.2239 3.68481 15.8772 4.90379 17.0962C6.12278 18.3152 7.77608 19 9.49999 19H16.5C17.1312 18.9994 17.7552 18.866 18.3314 18.6085C18.9077 18.351 19.4234 17.9752 19.8449 17.5054C20.2664 17.0357 20.5845 16.4825 20.7783 15.8818C20.9721 15.2811 21.0373 14.6464 20.9699 14.0188C20.9024 13.3912 20.7036 12.7849 20.3865 12.2392C20.0694 11.6934 19.641 11.2205 19.1292 10.8511C18.6174 10.4817 18.0336 10.2241 17.4158 10.0951C16.7979 9.96602 16.1599 9.96838 15.543 10.102C15.0623 8.89174 14.2293 7.8537 13.1519 7.12233C12.0744 6.39096 10.8022 5.99997 9.49999 6ZM16.5 21H9.49999C8.02022 20.9996 6.56618 20.613 5.2817 19.8783C3.99721 19.1436 2.92679 18.0862 2.1763 16.8109C1.42582 15.5356 1.02127 14.0864 1.00268 12.6068C0.984099 11.1271 1.35211 9.66825 2.07033 8.37446C2.78854 7.08068 3.83207 5.99681 5.0977 5.23006C6.36332 4.46331 7.80719 4.04026 9.28648 4.00273C10.7658 3.96521 12.2292 4.31453 13.5321 5.01612C14.835 5.71772 15.9321 6.74729 16.715 8.003C18.4227 8.05468 20.0414 8.77661 21.2208 10.0126C22.4003 11.2486 23.0458 12.8993 23.0175 14.6075C22.9892 16.3158 22.2896 17.9442 21.0698 19.1405C19.8501 20.3368 18.2085 21.0048 16.5 21Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/cloudy.vue";

export { script as default };