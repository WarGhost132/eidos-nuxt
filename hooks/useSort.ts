export function useSort(data: any[], initialSortBy: string = 'date', initialSortDirection: string = 'asc') {
  const sortBy = ref(initialSortBy)
  const sortDirection = ref(initialSortDirection)
  
  const sortTable = (column: string) => {
    if (sortBy.value === column) {
      sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
    } else {
      sortBy.value = column
      sortDirection.value = 'asc'
    }
  }
  
  const sortedData = computed(() => {
    return [...data]
      .filter((item) => item && typeof item[sortBy.value] === 'string')
      .sort((a, b) => {
        const aValue = a[sortBy.value]
        const bValue = b[sortBy.value]
        
        if (sortBy.value === 'date') {
          const aDate = new Date(a.date.split('.').reverse().join('-'))
          const bDate = new Date(b.date.split('.').reverse().join('-'))
          
          if (isNaN(aDate.getTime()) || isNaN(bDate.getTime())) {
            return sortDirection.value === 'asc' ? -1 : 1;
          }
          
          const aTimeStart = parseInt(a.time.split(' - ')[0].split(':')[0])
          const bTimeStart = parseInt(b.time.split(' - ')[0].split(':')[0])
          
          if (aDate.getTime() === bDate.getTime()) {
            if (sortDirection.value === 'asc') {
              return aTimeStart - bTimeStart
            } else {
              return bTimeStart - aTimeStart
            }
          } else {
            if (sortDirection.value === 'asc') {
              return aDate.getTime() - bDate.getTime()
            } else {
              return bDate.getTime() - aDate.getTime()
            }
          }
        }
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection.value === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue)
      }
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection.value === 'asc' ? aValue - bValue : bValue - aValue
      }
      
      return 0
    })
  })
  
  return {
    sortBy,
    sortDirection,
    sortTable,
    sortedData
  }
}
