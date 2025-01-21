<script setup lang="ts">
const store = useSidebarSlideStore()
</script>

<template>
  <card class="flex bg-card shadow-lg p-3 rounded-2xl mb-4 h-19">
    <div v-if="!store.isCollapsed" class="flex flex-col w-full">
      <span class="font-bold">Барнаби Мармадюк</span>
      <span class="text-sm text-[#2f3144]/[0.6]">Преподаватель</span>
    </div>
    <div
      class="bg-primary flex items-center justify-center text-white font-extrabold"
      :class="{
        'w-full h-[60px] rounded-full': store.isCollapsed,
        'w-14 rounded-3xl': !store.isCollapsed,
      }"
    >
      БМ
    </div>
  </card>
</template>
