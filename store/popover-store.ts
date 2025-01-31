interface IPopoverPosition {
  top: number
  left: number
}

interface IPopover {
  isVisible: boolean
  position: IPopoverPosition
}

const defaultValue: IPopover = {
  isVisible: false,
  position: { top: 0, left: 0 },
}

export const usePopoverStore = defineStore('popover', {
  state: (): IPopover => defaultValue,
  actions: {
    toggle() {
      this.isVisible = !this.isVisible
    },
    show(top: number, left: number) {
      this.position = { top, left }
      this.isVisible = true
    },
    hide() {
      this.isVisible = false
    },
  },
})
