<script setup lang="ts">
import { useSidebarSlideStore } from '~/store/sidebar-slide.store'

const store = useSidebarSlideStore()
</script>

<template>
  <section class="grid" style="min-height: 100vh">
    <LayoutSidebar class="sidebar transition-all" :style="{width: store.isCollapsed ? '114px' : '274px'}" />
    <div class="content">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-areas: "sidebar content";
  grid-template-columns: min-content 1fr;
}

.sidebar {
  grid-area: sidebar;
}

.content {
  grid-area: content;
  max-width: 1600px;
  justify-self: center;
  padding: 24px 16px;
  width: 100%;
}
</style>