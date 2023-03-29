import { createApp } from "vue";
import App from "./App.vue";
import router from "@/scripts/router";
import store from "./scripts/store";
import api from "@/scripts/api";

createApp(App).use(store).use(router).use(api).mount("#app");
