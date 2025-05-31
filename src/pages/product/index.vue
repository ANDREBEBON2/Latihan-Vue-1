<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

import Product from "../../data/product.json";

const product = ref(Product);
const detail = ref(Product);

function detailProduct(id) {
  detail.value = product.value.filter((p) => p.id === id);
}

function Allproduct() {
  detail.value = product.value;
}
console.log(detail.value.name);
</script>

<template>
  <div class="mt-2">
    <h1 class="text-3xl font-bold">Product Page</h1>
    <div class="flex md:space-x-10 max-sm:space-y-5 max-md:flex-col">
      <ul class="px-10 shadow py-10 space-y-1">
        <p class="cursor-pointer py-2 hover:text-teal-600" @click="Allproduct">
          All Product
        </p>
        <li v-for="p in product" :key="p.id">
          <p
            @click="detailProduct(p.id)"
            class="cursor-pointer py-2 hover:text-teal-600"
          >
            {{ p.name }}
          </p>
        </li>
      </ul>

      <div
        class="shadow px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-3 w-full"
      >
        <div
          v-for="d in detail"
          :key="d.id"
          class="py-2 px-2 shadow bg-neutral-900 text-white rounded h-fit min-h-36 max-h-40"
        >
          <RouterLink :to="`/product/${d.id}`">{{ d.name }}</RouterLink>
          <p>{{ d.brand }} {{ d.year }}</p>
          <h3 class="font-bold mt-3">
            {{
              d.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
            }}
          </h3>
        </div>
      </div>
    </div>
    <!-- <RouterLink to="/product/">Detail</RouterLink> -->
  </div>
</template>
