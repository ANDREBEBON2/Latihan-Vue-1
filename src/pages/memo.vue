<script setup>
import { ref } from "vue";

const ShowModal = ref(false);
const memo = ref("");
const Memos = ref([]);
const validasi = ref("");

function saveMemos() {
  if (!memo.value) {
    validasi.value = "Memos is required.";
    return;
  }
  Memos.value.push({
    id: Date.now(),
    title: memo.value,
    tanggal: new Date().toLocaleDateString("id-ID"),
  });
  memo.value = "";
  validasi.value = "";
  ShowModal.value = false;
}

function closeButton() {
  ShowModal.value = false;
  validasi.value = "";
}

function DeleteMemos(id) {
  Memos.value = Memos.value.filter((m) => m.id !== id);
}
</script>

<template>
  <div class="mt-2">
    <!-- heading -->
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold">Memo Page</h1>
      <button
        @click="ShowModal = true"
        class="h-7 w-7 rounded-full bg-teal-600 flex justify-center inset-3 text-white font-extrabold"
      >
        &plus;
      </button>
    </div>
    <!-- ./heading -->

    <!-- Konten -->
    <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2 mt-2">
      <div
        v-for="data in Memos"
        :key="data.id"
        class="shadow w-full p-2 bg-neutral-900 text-white rounded-sm h-40 flex flex-col justify-between"
      >
        <div>
          <h1 class="text-3xl font-semibold">{{ data.title }}</h1>
        </div>

        <div class="flex justify-between items-center">
          <h1 class="">{{ data.tanggal }}</h1>
          <button
            @click="DeleteMemos(data.id)"
            class="py-1 px-3 bg-teal-600 hover:bg-red-600 rounded hover:scale-95 transition-all duration-150 transform"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
    <!-- ./Konten -->

    <!-- Modal -->
    <div
      v-if="ShowModal"
      class="fixed w-screen h-screen bg-neutral-950 z-10 top-0 left-0 bg-opacity-50 flex items-center justify-center text-white"
    >
      <div
        class="md:w-1/2 max-w-md bg-neutral-700 py-3 px-4 rounded-sm relative pt-10"
      >
        <label for="">Your Memo</label>
        <!-- input -->
        <textarea
          v-model.trim="memo"
          class="w-full rounded ps-1 pe-1 text-neutral-950 outline-none focus:outline-teal-600 mt-2 border-none"
        ></textarea>
        <!-- ./input -->

        <!-- Validasi -->
        <div class="mt-1">
          <p class="text-xs text-red-500">{{ validasi }}</p>
        </div>
        <!-- ./Validasi -->

        <!-- Button Save -->
        <div class="mt-5 flex justify-center">
          <button
            @click="saveMemos"
            type="button"
            class="py-1 px-3 bg-teal-600 hover:bg-teal-700 active:scale-95 w-1/2 rounded-sm font-semibold"
          >
            Save
          </button>
        </div>
        <!-- Button Save -->

        <!-- Button Close -->
        <div class="flex justify-center absolute top-1 right-1">
          <button
            @click="closeButton"
            type="button"
            class="h-7 w-7 bg-teal-600 hover:bg-red-600 rounded-sm font-semibold"
          >
            &times;
          </button>
        </div>
        <!-- Button Close -->
      </div>
    </div>
    <!-- ./Modal -->
  </div>
</template>
