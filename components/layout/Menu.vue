<script lang="ts" setup>
import { MENU_DATA } from './menu.data'
import { useSidebarSlideStore } from '~/store/sidebar-slide.store'

const route = useRoute()
const store = useSidebarSlideStore()
</script>

<template>
  <div class="pt-6 pb-44">
    <NuxtLink
      class="flex items-center w-full py-3 rounded-2xl hover:shadow mb-1"
      v-for="item in MENU_DATA"
      :key="item.name"
      :to="item.url"
      :class="{
        'bg-primary text-white hover:bg-primary': route.path === item.url,
        'bg-sidebar text-[#2F3144] hover:bg-secondary': route.path !== item.url,
        'px-5': !store.isCollapsed,
        'justify-center': store.isCollapsed
      }"
    >
      <Icon :name="item.icon" :class="{'mr-3': !store.isCollapsed}" size="24" />
      <span v-if="!store.isCollapsed">{{ item.name }}</span>
    </NuxtLink>
  </div>
</template>