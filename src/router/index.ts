import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthView from "@/views/AuthView.vue";
import RegisterView from "@/views/RegisterView.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/auth",
		name: "auth",
		component: AuthView,
	},
	{
		path: "/register",
		name: "register",
		component: RegisterView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
