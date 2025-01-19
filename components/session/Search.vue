<script setup lang="ts">
const value = ''
</script>

<template>
  <div class="relative">
    <input
      v-model="value"
      class="border border-border rounded-xl w-[260px] h-[44px] pr-2 py-3 pl-12"
      placeholder="Поиск"
    />
    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
      <Icon name="ph:magnifying-glass" size="24" class="text-[#999999]" />
    </div>
  </div>
</template>