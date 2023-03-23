import Home from "@/pages/Home";
import Login from "@/pages/Login";
import EnterMember from "@/pages/EnterMember";
import MyPage from "@/pages/MyPage";
import Sales from "@/pages/Sales";
import SaleSave from "@/pages/SaleSave";
import Items from "@/pages/Items";
import Emp from "@/pages/Emp";
import EmpWork from "@/pages/EmpWork";
import Client from "@/pages/Client";
import Store from "@/pages/Store";
import EmpSave from "@/pages/EmpSave";
import EmpDetail from "@/pages/EmpDetail";
import { createRouter, createWebHistory } from "vue-router";
import store from "./store";
import Cookies from "js-cookie";

const routes = [
  { path: "/", component: Home },
  { path: "/myPage", component: MyPage },
  { path: "/enterMember", component: EnterMember },
  { path: "/login", component: Login },
  { path: "/sales", component: Sales },
  { path: "/saleSave", component: SaleSave },
  { path: "/items", component: Items },
  { path: "/emp", name: "Emp", component: Emp },
  { path: "/empWork", component: EmpWork },
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
  const isAuthenticated = store.state.account.id !== 0;
  const pathInfo = to.path !== "/login" && to.path !== "/enterMember";
  if (pathInfo && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  const isEmpPage = to.path.toLowerCase() === "/emp";
  const memberCode = Cookies.get("memberCode");
  if (isEmpPage && (!memberCode || memberCode !== "0")) {
    next(false);
  } else {
    next();
  }
});

export default router;
