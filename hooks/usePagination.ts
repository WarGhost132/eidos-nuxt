import { computed, ref } from 'vue'

export function usePagination(data: any[], itemsPerPage: number) {
  const currentPage = ref(1)
  
  const totalPages = computed(() => Math.ceil(data.length / itemsPerPage))
  
  const paginatedData = computed(() =>
    data.slice(
      (currentPage.value - 1) * itemsPerPage,
      currentPage.value * itemsPerPage
    )
  )
  
  const visiblePages = computed(() => {
    const pages: number[] = []
    
    if (currentPage.value > 3) pages.push(1)
    
    if (currentPage.value > 4) pages.push(-1)
    
    const start = Math.max(1, currentPage.value - 2)
    const end = Math.min(totalPages.value, currentPage.value + 2)
    
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
    
    if (currentPage.value < totalPages.value - 3) pages.push(-1)
    
    if (currentPage.value < totalPages.value - 2) pages.push(totalPages.value)
    
    if (currentPage.value === 1 || currentPage.value === 2) {
      pages.splice(0, pages.length)
      for (let i = 1; i <= Math.min(5, totalPages.value); i++) {
        pages.push(i)
      }
      if (totalPages.value > 5) pages.push(-1, totalPages.value)
    }
    
    return pages
  })
  
  return {
    currentPage,
    totalPages,
    paginatedData,
    visiblePages
  }
}
