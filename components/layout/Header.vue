<script setup lang="ts">
import { useSidebarSlideStore } from '~/store/sidebar-slide.store'

const store = useSidebarSlideStore()
</script>

<template>
  <div class="flex items-center">
    <NuxtLink to="/" class="py-5 px-5 flex items-center justify-center">
      <NuxtImg src="/logo.svg" alt="logo" width="46px" :class="{'mr-4': !store.isCollapsed}" />
      <h1 class="font-extrabold text-xl" v-if="!store.isCollapsed">Сим Центр</h1>
    </NuxtLink>
    <button
      class="w-6 bg-black text-white rounded-3xl absolute -right-3"
      @click="store.toggle()"
    >
      {{ store.isCollapsed ? '>' : '<' }}
    </button>
  </div>
</template>