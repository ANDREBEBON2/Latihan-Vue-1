<script setup>
import { useRoute } from "vue-router";
import Product from "../../data/product";
const route = useRoute();
const { owner } = Product.find((q) => q.id === parseInt(route.params.id));
</script>

<template>
  <div class="mt-3">
    <h1 class="text-2xl font-semibold">Owner</h1>
    <h1>{{ owner.name }}</h1>
    <h1>{{ owner.email }}</h1>
  </div>
</template>
