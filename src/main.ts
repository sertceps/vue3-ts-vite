import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import ElementPlus from "element-plus";
import router from "./router";
import { createPinia } from "pinia";
import "virtual:svg-icons-register";

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
