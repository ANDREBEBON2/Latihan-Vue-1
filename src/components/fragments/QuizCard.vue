<script setup>
import { ref, defineProps } from "vue";

const { q } = defineProps(["q"]);
const emit = defineEmits(["selectOption"]);

function emitSelectOption(option) {
  emit("selectOption", option);
}
</script>

<template>
  <div class="p-3 mt-5 shadow">
    <h1 class="text-lg">{{ q.text }}</h1>

    <div
      v-for="option in q.answers"
      :key="option"
      class="space-y-1"
      @click="emitSelectOption(option)"
    >
      <div class="flex w-full h-10 gap-3 py-2 mt-1 cursor-pointer ps-5 group">
        <p
          class="flex items-center justify-center w-10 h-10 text-white rounded bg-neutral-900 group-hover:bg-teal-600"
        >
          {{ option.label }}.
        </p>
        <p
          class="flex items-center justify-start w-full h-10 group-hover:font-bold"
        >
          {{ option.text }}
        </p>
      </div>
    </div>
  </div>
</template>
