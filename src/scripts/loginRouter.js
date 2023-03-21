import { createRouter, createWebHistory } from "vue-router";

import Login from "@/pages/Login";

const loginRouter = createRouter({
  history: createWebHistory(),
  routes: { path: "/login", component: Login },
});
export default loginRouter;
