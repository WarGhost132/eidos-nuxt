const defaultValue: { searchQuery: string } = {
  searchQuery: ''
}

export const useSearchStore = defineStore('search', {
  state: () => defaultValue,
  actions: {
    setSearchQuery(query: string) {
      this.searchQuery = query
    }
  }
})