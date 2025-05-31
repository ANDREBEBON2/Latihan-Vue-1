<script setup>
import { ref } from "vue";
import { useRoute, useRouter, RouterLink, RouterView } from "vue-router";
import Product from "../../data/product.json";

const route = useRoute();
const router = useRouter();

const id = parseInt(route.params.id);

const product = Product.find((q) => q.id === id);

function showOwner() {
  router.push({ name: "owner", params: { id: id } });
}
</script>

<template>
  <div class="mt-2" v-if="product">
    <div>
      <h1 class="text-3xl font-bold">Detail Product {{ product.name }}</h1>
      <p class="text-2xl">
        <span class="font-bold">{{ product.brand }}</span> in {{ product.year }}
      </p>
      <p class="text-xl font-semibold">
        {{
          product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })
        }}
      </p>
    </div>

    <div class="mt-5">
      <RouterLink to="/product">All Product</RouterLink>

      <div class="mt-2">
        <button
          @click="showOwner"
          type="button"
          class="py-1 px-3 bg-neutral-900 text-white rounded shadow"
        >
          Show Owner
        </button>
      </div>
    </div>
    <RouterView />
  </div>
  <div class="h-screen w-full flex items-center justify-center" v-else>
    <h1 class="text-4xl">Page Not Found.</h1>
  </div>
</template>
