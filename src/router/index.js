import { createRouter, createWebHistory } from "vue-router";

const route = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Route Home
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/home.vue"),
    },
    {
      path: "/home",
      redirect: "/",
    },
    // .Route Home

    // Route Quis
    {
      path: "/quis",
      name: "quis",
      component: () => import("@/pages/quis.vue"),
    },
    {
      path: "/quis/:id",
      name: "questions",
      component: () => import("@/pages/question.vue"),
    },
    // .Route Quis

    // Route Memo
    {
      path: "/memo",
      name: "memo",
      component: () => import("@/pages/memo.vue"),
    },
    // .Route Memo

    // Route Product
    {
      path: "/product",
      name: "product",
      component: () => import("@/pages/product/index.vue"),
    },
    {
      path: "/produk",
      redirect: "/product",
    },
    {
      path: "/produc",
      redirect: "/product",
    },
    {
      path: "/product/:id",
      name: "productDetail",
      component: () => import("@/pages/product/show.vue"),
      children: [
        {
          path: "owner",
          name: "owner",
          component: () => import("../pages/product/showOwner.vue"),
        },
      ],
    },
    // Route Product

    // Route All 404
    {
      path: "/:catchall(.*)*",
      name: "404",
      component: () => import("../pages/errors/404.vue"),
    },
    // .Route All 404
  ],
});

export default route;
