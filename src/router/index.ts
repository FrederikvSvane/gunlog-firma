import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BodeKassenView from "../views/BodeKassenView.vue";
import MedlemmerView from "../views/MedlemmerView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/bodekassen",
    name: "bodekassen",
    component: BodeKassenView,
  },
  {
    path: "/medlemmer",
    name: "medlemmer",
    component: MedlemmerView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
