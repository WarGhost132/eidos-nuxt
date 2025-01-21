<script setup lang="ts">
import { useSidebarSlideStore } from '~/store/sidebar-slide.store'

const store = useSidebarSlideStore()
</script>

<template>
  <aside class="bg-sidebar px-4 h-full relative">
    <LayoutHeader />
    <LayoutMenu />
    <LayoutFooter />
  </aside>
</template>
