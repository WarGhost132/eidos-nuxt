<script lang="ts" setup>
import { MENU_DATA } from './menu.data'

const route = useRoute()
</script>

<template>
  <div class="pt-6 pb-44">
    <NuxtLink
      class="flex items-center py-3 px-5 rounded-2xl w-full hover:shadow mb-1"
      v-for="item in MENU_DATA"
      :key="item.name"
      :to="item.url"
      :class="{
        'bg-primary text-white hover:bg-primary': route.path === item.url,
        'bg-sidebar text-[#2F3144] hover:bg-secondary': route.path !== item.url,
      }"
    >
      <Icon :name="item.icon" class="mr-3" size="24" />
      <span>{{ item.name }}</span>
    </NuxtLink>
  </div>
</template>