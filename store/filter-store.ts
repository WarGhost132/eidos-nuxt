type FilterState = {
  date: string;
  status: string;
  type: string;
  group: string;
};

export const useFilterStore = defineStore('filter', {
  state: (): FilterState => ({
    date: '',
    status: '',
    type: '',
    group: ''
  }),
  actions: {
    setFilter(key: keyof FilterState, value: string) {
      this[key] = value
    }
  }
})