<script setup>
const { data } = defineProps(["data"]);
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();

function gotoQuestions() {
  router.push({ name: "questions", params: { id: data.id } });
}
</script>

<template>
  <div
    @click="gotoQuestions"
    class="shadow bg-neutral-900 text-white flex flex-col rounded-sm"
  >
    <div class="rounded-t overflow-hidden">
      <img class="object-cover h-52" :src="data.image" :alt="data.title" />
    </div>
    <div class="px-2 py-4">
      <h1 class="text-2xl font-semibold">{{ data.title }}</h1>
      <RouterLink :to="`/quis/${data.id}`"
        >{{ data.questions.length }} question</RouterLink
      >
    </div>
  </div>
</template>
