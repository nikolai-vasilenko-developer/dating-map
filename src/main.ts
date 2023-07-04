import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import vClickOutside from "click-outside-vue3";
import "@/assets/stylesheet/css/main.css";

createApp(App).use(store).use(router).use(vClickOutside).mount("#app");
