<script setup>
const { data } = defineProps(["data"]);
</script>

<template>
  <div
    class="shadow w-full bg-neutral-900 text-white flex flex-col justify-between rounded-sm"
  >
    <div class="rounded-t overflow-hidden">
      <img
        class="object-cover w-full h-52"
        :src="data.image"
        :alt="data.title"
      />
    </div>
    <div class="px-2 py-4">
      <h1 class="text-2xl font-semibold">{{ data.title }}</h1>
      <p>{{ data.questions.length }} question</p>
    </div>
  </div>
</template>
