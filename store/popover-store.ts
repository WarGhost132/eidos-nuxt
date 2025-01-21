export const usePopoverStore = defineStore('popover', () => {
  const isVisible = ref(false)
  const position = ref({ top: 0, left: 0 })

  const toggle = () => {
    isVisible.value = !isVisible.value
  }

  const show = (top: number, left: number) => {
    position.value = { top, left }
    isVisible.value = true
  }

  const hide = () => {
    isVisible.value = false
  }

  return {
    isVisible,
    position,
    toggle,
    show,
    hide,
  }
})
