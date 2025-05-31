<script setup>
import { ref } from "vue";
import { useRoute, RouterLink } from "vue-router";
import Product from "../../data/product.json";

const route = useRoute();
const product = Product.find((q) => q.id === parseInt(route.params.id));
</script>

<template>
  <div class="mt-2">
    <h1 class="text-3xl font-bold">Detail Product {{ product.name }}</h1>
    <p class="text-2xl">
      <span class="font-bold">{{ product.brand }}</span> in {{ product.year }}
    </p>
    <p class="text-xl font-semibold">
      {{
        product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })
      }}
    </p>

    <div class="mt-5">
      <RouterLink to="/product">All Product</RouterLink>
    </div>
  </div>
</template>
