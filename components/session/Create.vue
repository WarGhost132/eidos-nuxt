<script setup lang="ts">
const isModalOpen = ref(false)
</script>

<template>
  <button
    class="bg-primary text-white font-extrabold rounded-xl py-[10px] px-6 hover:opacity-75"
    @click="isModalOpen = true"
  >
    Создать
  </button>

  <UiModal
    :model-value="isModalOpen"
    title="Создание новой сессии"
    @update:model-value="isModalOpen = $event"
  >
    <div class="text-center">
      <p>Hello World!</p>
    </div>
  </UiModal>
</template>
