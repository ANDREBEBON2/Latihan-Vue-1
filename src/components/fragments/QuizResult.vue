<script setup>
import { defineProps, computed } from "vue";
import { RouterLink } from "vue-router";

const { countQuestion, current } = defineProps(["countQuestion", "current"]);
// hitung nilai
const point = computed(() => {
  return `${((current / countQuestion) * 100).toFixed(0)}`;
});
</script>

<template>
  <div class="flex flex-col items-center justify-center w-full gap-y-3 h-52">
    <h1 class="text-4xl font-bold">Hasil</h1>
    <p class="text-xl font-semibold">
      Benar {{ current }} dari {{ countQuestion }} pertanyaan
    </p>
    <h3 class="text-3xl font-bold">{{ point }}</h3>
  </div>
  <div class="flex items-center justify-center w-full pt-5">
    <RouterLink
      to="/quis"
      class="flex items-center px-5 py-1 text-white rounded bg-neutral-900 hover:bg-neutral-800 w-fit"
    >
      Close
    </RouterLink>
  </div>
</template>
