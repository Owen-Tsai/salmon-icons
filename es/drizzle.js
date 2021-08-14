import { defineComponent, openBlock, createBlock, createVNode } from 'vue';

var script = defineComponent({
  name: "Drizzle"
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
    d: "M17 18V16H17.5C18.077 15.9999 18.6451 15.8571 19.1536 15.5844C19.6621 15.3117 20.0953 14.9175 20.4147 14.4369C20.734 13.9562 20.9296 13.4041 20.9839 12.8296C21.0383 12.2552 20.9497 11.6762 20.7262 11.1442C20.5027 10.6122 20.1511 10.1437 19.7028 9.78048C19.2544 9.41723 18.7232 9.17047 18.1564 9.06216C17.5896 8.95385 17.0049 8.98736 16.4541 9.1597C15.9034 9.33204 15.4039 9.63787 15 10.05V9.99996C14.9996 8.90005 14.6969 7.82142 14.1249 6.88194C13.5529 5.94246 12.7337 5.17828 11.7568 4.67292C10.7798 4.16756 9.68278 3.94046 8.5855 4.01644C7.48823 4.09242 6.43295 4.46855 5.535 5.10374C4.63705 5.73893 3.93097 6.60873 3.49394 7.61808C3.05691 8.62743 2.90574 9.73749 3.05694 10.8269C3.20815 11.9164 3.65592 12.9433 4.35132 13.7955C5.04671 14.6477 5.96298 15.2923 6.99998 15.659V17.748C5.67369 17.4048 4.45775 16.7267 3.46867 15.7788C2.4796 14.8309 1.75052 13.6448 1.3513 12.3343C0.952078 11.0238 0.896088 9.63272 1.1887 8.29436C1.4813 6.956 2.1127 5.71521 3.0224 4.69086C3.93209 3.66652 5.0896 2.89295 6.38402 2.44427C7.67844 1.99559 9.06639 1.88684 10.4149 2.12843C11.7634 2.37003 13.0273 2.95388 14.0854 3.82403C15.1435 4.69419 15.9605 5.8215 16.458 7.09796C17.21 6.95406 17.9838 6.96878 18.7299 7.14117C19.4759 7.31356 20.1777 7.63982 20.7904 8.09906C21.403 8.55831 21.9131 9.14042 22.2878 9.80813C22.6626 10.4758 22.8938 11.2144 22.9666 11.9767C23.0395 12.7389 22.9524 13.5079 22.7109 14.2345C22.4694 14.9611 22.0789 15.6293 21.5643 16.1963C21.0497 16.7633 20.4224 17.2166 19.7225 17.5272C19.0227 17.8378 18.2657 17.9988 17.5 18L17 18.001V18ZM8.99998 16H11V20H8.99998V16ZM13 19H15V23H13V19Z",
    fill: "black"
  })
], -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1, [
    _hoisted_2
  ]);
}

script.render = render;
script.__file = "src/components/drizzle.vue";

export { script as default };
