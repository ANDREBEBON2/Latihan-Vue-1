import { createRouter, createWebHistory } from "vue-router";

const route = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/home.vue"),
    },
    {
      path: "/quis",
      name: "quis",
      component: () => import("@/pages/quis.vue"),
    },
    {
      path: "/memo",
      name: "memo",
      component: () => import("@/pages/memo.vue"),
    },
    {
      path: "/product",
      name: "product",
      component: () => import("@/pages/product/index.vue"),
    },
    {
      path: "/product/:id",
      name: "productDetail",
      component: () => import("@/pages/product/show.vue"),
    },
  ],
});

export default route;
