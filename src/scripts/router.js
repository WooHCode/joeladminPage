import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Sales from "@/pages/Sales";
import SaleSave from "@/pages/SaleSave";
import Items from "@/pages/Items";
import Emp from "@/pages/Emp";
import Client from "@/pages/Client";
import Store from "@/pages/Store";
import EmpSave from "@/pages/EmpSave";
import EmpDetail from "@/pages/EmpDetail";
import { createRouter, createWebHistory } from "vue-router";
import store from "./store";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/sales", component: Sales },
  { path: "/saleSave", component: SaleSave },
  { path: "/items", component: Items },
  { path: "/emp", name: "Emp", component: Emp },
  { path: "/client", component: Client },
  { path: "/store", component: Store },
  { path: "/empSave", component: EmpSave },
  {
    path: "/empDetail/:name",
    name: "EmpDetail",
    props: true,
    component: EmpDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.account.id === 1;
  if (to.path !== "/login" && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
