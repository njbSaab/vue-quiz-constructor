import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Categories from "../pages/Category.vue";
import { ROUTES_PATH } from "@/consts/router";
import Quiz from "@/pages/QuizEdit.vue";

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
  {
    path: ROUTES_PATH.QUIZ,
    name: "quiz",
    component: Quiz,
    props: (route) => ({ name: route.params.name }),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
