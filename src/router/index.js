import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Categories from "../pages/Category.vue";
import { ROUTES_PATH } from "@/consts/router";

const routes = [
  {
    path: ROUTES_PATH.HOME,
    name: "home",
    component: Home,
  },
  {
    path: ROUTES_PATH.CATEGORIES,
    name: "categories",
    component: Categories,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
