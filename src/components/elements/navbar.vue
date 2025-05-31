<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const navActive = ref(false);
</script>

<template>
  <nav class="h-16 bg-neutral-900 text-white flex items-center relative">
    <div class="absolute right-3">
      <button
        @click="navActive = !navActive"
        type="button"
        class="px-2 py-1 bg-neutral-700 rounded hover:bg-neutral-600 md:hidden"
      >
        {{ navActive ? "Tutup" : "Buka" }}
      </button>
    </div>
    <!-- md>= -->
    <div class="container mx-auto px-3 md:space-x-5 hidden md:block">
      <RouterLink active-class=" text-teal-500" to="/">Home</RouterLink>
      <RouterLink active-class=" text-teal-500" to="/quis">Quizez</RouterLink>
      <RouterLink active-class=" text-teal-500" to="/memo">Memo</RouterLink>
      <RouterLink active-class=" text-teal-500" to="/product"
        >Product</RouterLink
      >
    </div>
    <!-- ./md>= -->
    <!-- sm>= -->
  </nav>
  <div
    class="overflow-hidden bg-neutral-900 text-white transition-all duration-500 transform ease-in-out"
    :class="navActive ? 'max-h-44' : 'max-h-0'"
  >
    <div class="pb-3 container mx-auto px-3">
      <RouterLink
        active-class=" text-teal-500"
        @click="navActive = false"
        class="block py-2 hover:bg-neutral-700 px-1 rounded-sm duration-100 transition-all"
        to="/"
        >Home</RouterLink
      >
      <RouterLink
        active-class=" text-teal-500"
        @click="navActive = false"
        class="block py-2 hover:bg-neutral-700 px-1 rounded-sm duration-100 transition-all"
        to="/quis"
        >Quizez</RouterLink
      >
      <RouterLink
        active-class=" text-teal-500"
        @click="navActive = false"
        class="block py-2 hover:bg-neutral-700 px-1 rounded-sm duration-100 transition-all"
        to="/memo"
        >Memo</RouterLink
      >
      <RouterLink
        active-class=" text-teal-500"
        @click="navActive = false"
        class="block py-2 hover:bg-neutral-700 px-1 rounded-sm duration-100 transition-all"
        to="/product"
        >Product</RouterLink
      >
    </div>
  </div>
  <!-- ./sm>= -->
</template>
