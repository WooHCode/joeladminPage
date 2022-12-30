import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Sales from "@/pages/Sales"
import Items from "@/pages/Items"
import Emp from "@/pages/Emp"
import Client from "@/pages/Client"
import Store from "@/pages/Store"
import { createRouter, createWebHistory } from "vue-router"

const routes =[
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/sales', component: Sales},
    {path: '/items', component: Items},
    {path: '/emp', component: Emp},
    {path: '/client', component: Client},
    {path: '/store', component: Store},
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;