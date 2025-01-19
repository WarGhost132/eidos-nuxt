<script setup lang="ts">
import { useSidebarSlideStore } from '~/store/sidebar-slide.store'

const store = useSidebarSlideStore()
</script>
<template>
  <button
    class="flex items-center p-3 hover:text-black"
    :class="{'justify-center w-full': store.isCollapsed}"
  >
    <Icon
      name="ph:sign-out"
      size="24"
      class="text-[#999999] transition-all"
      :class="{
        'mr-3': !store.isCollapsed,
      }"
    />
    <span class="font-bold" v-if="!store.isCollapsed">Выйти</span>
  </button>
</template>