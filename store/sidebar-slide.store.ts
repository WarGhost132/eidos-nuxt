const defaultValue: { isCollapsed: boolean } = {
  isCollapsed: false,
}

export const useSidebarSlideStore = defineStore('sidebar-slide', {
  state: () => defaultValue,
  actions: {
    toggle() {
      this.isCollapsed = !this.isCollapsed
    },
  },
})
