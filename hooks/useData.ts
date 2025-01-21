export async function useData() {
  const { data: tableData } = await useFetch('/api/tableData')

  return tableData
}
