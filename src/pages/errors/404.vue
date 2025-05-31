<script setup>
import { useRoute } from "vue-router";
const route = useRoute();

const pageName = route.name;
</script>

<template>
  <div class="h-screen w-full flex items-center justify-center">
    <div class="flex items-center justify-center flex-col">
      <h1 class="text-6xl font-extrabold">{{ pageName }}</h1>
      <h1 class="text-3xl font-semibold">Page Not Found.</h1>
    </div>
  </div>
</template>
