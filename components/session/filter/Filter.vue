<script setup lang="ts">
import { usePopoverStore } from '~/store/popover-store'

const buttonRef = ref<HTMLElement | null>(null)
const popoverStore = usePopoverStore()

const handleClick = () => {
  if (popoverStore.isVisible) {
    popoverStore.hide()
  } else {
    if (buttonRef.value) {
      const rect = buttonRef.value.getBoundingClientRect()
      console.log(rect.bottom + window.scrollY, rect.left)
      popoverStore.show(rect.bottom + window.scrollY, rect.left)
    }
  }
}
</script>

<template>
  <button
    ref="buttonRef"
    @click="handleClick"
    @keydown.esc="popoverStore.hide()"
    class="flex items-center justify-center p-[10px] rounded-xl hover:opacity-70"
    :class="{
      'bg-secondary': !popoverStore.isVisible,
      'bg-white': popoverStore.isVisible
    }"
  >
    <Icon
      name="tabler:filter"
      size="24"
      :class="{
        'text-[#2F3144]/[0.6]': !popoverStore.isVisible,
        'text-primary': popoverStore.isVisible,
      }"
    />
  </button>
  <button
    class="bg-secondary flex items-center justify-center p-[10px] rounded-xl hover:opacity-70"
  >
    <Icon name="ic:outline-filter-list" size="24" class="text-[#2F3144]/[0.6]" />
  </button>
</template>