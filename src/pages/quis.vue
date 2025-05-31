<script setup>
import { ref, watch } from "vue";
import Data from "../data/data.json";
import Card from "../components/elements/card.vue";
import contenOne from "../components/fragments/contenOne.vue";
import headingOne from "../components/fragments/title.vue";

const quis = ref(Data);
const cari = ref("");

watch(cari, () => {
  quis.value = Data.filter((q) => {
    return (
      q.title.toLowerCase().includes(cari.value.toLowerCase()) ||
      q.questions.length.toString().includes(cari.value.toLowerCase())
    );
  });
});
</script>

<template>
  <contenOne>
    <div class="flex justify-between items-center">
      <headingOne>Quiz Page</headingOne>
      <input
        v-model="cari"
        type="text"
        class="bg-neutral-100 px-1 py-1 rounded-sm outline-none border-none focus:outline-teal-600"
      />
    </div>
  </contenOne>

  <!-- Konten -->
  <div
    class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2 mt-6 container mx-auto"
  >
    <Card v-for="q in quis" :key="q.id" :data="q" />
  </div>
  <!-- ./Konten -->
</template>
