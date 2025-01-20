<script setup lang="ts">
const badgeStatus = defineProps({
  status: {
    type: String,
    required: true
  }
})

const badgeClass = computed(() => {
  switch (badgeStatus.status) {
    case 'Запланировано':
      return 'bg-[#AFBFF5] px-3 py-1 rounded-3xl'
    case 'Идет':
      return 'bg-[#FFDAA1] px-3 py-1 rounded-3xl'
    case 'Завершено':
      return 'bg-[#91C893] px-3 py-1 rounded-3xl'
    default:
      return 'bg-gray-200 px-3 py-1 rounded-3xl'
  }
})
</script>

<template>
  <span :class="badgeClass">
    <slot />
  </span>
</template>