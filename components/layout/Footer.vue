<template>
  <div class="relative">
    <LayoutAccount />
    <LayoutLogout />
    <LayoutLanguageSwitcher />
    <span
      class="text-sm text-[#2f3144]/[0.6]"
      :class="{ 'flex justify-center': store.isCollapsed }"
    >
      Версия 1.02
    </span>
  </div>
</template>
<script setup lang="ts">
const store = useSidebarSlideStore()
</script>
