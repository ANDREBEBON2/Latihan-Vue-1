<script setup>
import { useRoute } from "vue-router";
import Quis from "../data/data";
import contenOne from "@/components/fragments/contenOne.vue";
import headingOne from "@/components/fragments/title.vue";
import QuizCard from "@/components/fragments/QuizCard.vue";
import QuizHeader from "@/components/fragments/QuizHeader.vue";
import QuizResult from "@/components/fragments/QuizResult.vue";
import { ref, watch, computed } from "vue";

const route = useRoute();
const ques = Quis.find((q) => q.id === parseInt(route.params.id));

const index = ref(0);
const optionCorect = ref(0);
const finish = ref(false);

// untuk dapat panjang data
const length = ques.questions.length;

// computed otomatis melihat jika ada perubahan dari index atau quest.length
const currentQuis = computed(() => {
  return `${index.value + 1} / ${ques.questions.length}`;
});

// untuk dapat persen
const persentase = computed(() => {
  return `${(((index.value + 1) / ques.questions.length) * 100).toFixed(0)}%`;
});

// Tambah Index
function addIndex() {
  if (index.value < parseInt(length) - 1) {
    index.value++;
  }
}
// Kurangi Index
function minIndex() {
  if (index.value >= 1) {
    index.value--;
  }
}

function onSelectOption(option) {
  if (option.correct) {
    optionCorect.value++;
  }
  if (index.value === ques.questions.length - 1) {
    finish.value = true;
  }
  index.value++;
}
</script>

<template>
  <contenOne>
    <headingOne>{{ ques.title }}</headingOne>
  </contenOne>
  <div v-if="!finish">
    <QuizHeader :currentQuis="currentQuis" :persentase="persentase" />
    <QuizCard :q="ques.questions[index]" @selectOption="onSelectOption" />
  </div>
  <QuizResult v-else :current="optionCorect" :countQuestion="length" />

  <!-- <div class="flex items-center justify-between mt-5 text-white">
    <button
      @click="minIndex"
      class="w-20 py-1 transition-all duration-150 transform rounded bg-neutral-900 hover:bg-neutral-800 disabled:bg-neutral-500 disabled:text-neutral-200"
      :disabled="index === 0"
    >
      Back
    </button>
    <button
      @click="addIndex"
      :disabled="index === length - 1"
      class="w-20 py-1 transition-all duration-150 transform rounded bg-neutral-900 hover:bg-neutral-800 disabled:bg-neutral-500 disabled:text-neutral-200"
    >
      Next
    </button>
  </div> -->
</template>
