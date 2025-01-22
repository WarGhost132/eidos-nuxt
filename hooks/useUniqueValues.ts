export function useUniqueValues<T>(
  data: globalThis.Ref<T[]>,
  keys: (keyof T)[]
): { [K in keyof T]?: globalThis.ComputedRef<Array<T[K]>> } {
  const uniqueValues = {} as {
    [K in keyof T]?: globalThis.ComputedRef<Array<T[K]>>
  }

  keys.forEach((key) => {
    uniqueValues[key] = computed(() => {
      return data.value ? [...new Set(data.value.map((item) => item[key]))] : []
    })
  })

  return uniqueValues
}
