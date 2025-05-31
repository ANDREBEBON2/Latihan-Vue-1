<script setup>
import Navbar from "@/components/elements/navbar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <Navbar />
  <main class="container mx-auto px-2">
    <div>
      <RouterView />
    </div>
  </main>
</template>
