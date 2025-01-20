export function usePagination(data: Ref<any[]>, itemsPerPage: number) {
  const currentPage = ref(1);
  
  const totalPages = computed(() => Math.ceil(data.value.length / itemsPerPage));
  
  const paginatedData = computed(() => {
    const startIdx = (currentPage.value - 1) * itemsPerPage;
    const endIdx = currentPage.value * itemsPerPage;
    return data.value.slice(startIdx, endIdx);
  });
  
  const visiblePages = computed(() => {
    const pages: number[] = [];
    if (currentPage.value > 3) pages.push(1);
    if (currentPage.value > 4) pages.push(-1);
    
    const start = Math.max(1, currentPage.value - 2);
    const end = Math.min(totalPages.value, currentPage.value + 2);
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    if (currentPage.value < totalPages.value - 3) pages.push(-1);
    if (currentPage.value < totalPages.value - 2) pages.push(totalPages.value);
    
    return pages;
  });
  
  return {
    currentPage,
    totalPages,
    paginatedData,
    visiblePages,
  };
}
