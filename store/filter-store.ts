type FilterState = {
  date: string
  status: string
  type: string
  group: string
}

const defaultValue: FilterState = {
  date: '',
  status: '',
  type: '',
  group: '',
}

export const useFilterStore = defineStore('filter', {
  state: () => defaultValue,
  actions: {
    setFilter(key: keyof FilterState, value: string) {
      this[key] = value
    },
  },
})
