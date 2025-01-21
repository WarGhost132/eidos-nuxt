<script setup lang="ts">
import { usePopoverStore } from '~/store/popover-store'

const popoverStore = usePopoverStore()
</script>

<template>
  <div
    v-if="popoverStore.isVisible"
    :style="{ top: `${popoverStore.position.top}px`, left: `${popoverStore.position.left}px` }"
    class="absolute bg-white shadow-lg rounded-lg p-4 z-50 transition-transform transform scale-95 opacity-0 animate-fade-in"
  >
    <slot />
    <button
      @click="popoverStore.hide"
      class="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
    >
      ✕
    </button>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fade-in 0.2s ease-out forwards;
}
</style>