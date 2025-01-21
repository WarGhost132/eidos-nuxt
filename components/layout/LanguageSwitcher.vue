<script setup lang="ts">
import { useSidebarSlideStore } from '~/store/sidebar-slide.store'

const store = useSidebarSlideStore()
</script>

<template>
  <div>
    <select class="w-full border border-border rounded-xl p-3 mb-14">
      <option selected value="ru">
        {{ store.isCollapsed ? 'Рус' : 'Русский' }}
      </option>
      <option value="en">
        {{ store.isCollapsed ? 'Eng' : 'English' }}
      </option>
    </select>
  </div>
</template>
