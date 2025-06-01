<script setup>
import { ref } from "vue";

const { currentQuis, persentase } = defineProps(["currentQuis", "persentase"]);
</script>

<template>
  <div class="mt-4">
    <h1>Questions {{ currentQuis }}</h1>
    {{ persentase }}
    <div class="w-full h-16 mt-3 border border-teal-400">
      <div class="h-full bg-teal-400" :style="{ width: persentase }"></div>
    </div>
  </div>
</template>
