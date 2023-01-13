import { createRouter, createWebHistory } from "vue-router";
import FoodListView from "../views/FoodListView.vue";
import FoodDetailView from "../views/FoodDetailView.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/food-list",
      name: "food-list",
      component: FoodListView,
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: FoodDetailView,
    },
  ],
});

export default router;
