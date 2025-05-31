<script setup>
import { useRoute } from "vue-router";
import Quis from "../data/data";

const route = useRoute();

const question = Quis.filter((q) => q.id === parseInt(route.params.id));

console.log(question.data.questions);
</script>

<template>
  <div>questionS</div>
</template>
