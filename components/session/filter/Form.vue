<script setup lang="ts">
import { useData } from '~/hooks/useData'
import { useUniqueValues } from '~/hooks/useUniqueValues'

interface TableDataItem {
  date: string
  status: string
  type: string
  group: string
}

const data: globalThis.Ref<TableDataItem[]> = await useData()
const filterStore = useFilterStore()

const {
  date: uniqueDatesRaw,
  status: uniqueStatuses,
  type: uniqueTypes,
  group: uniqueGroups
} = useUniqueValues(data, [
  'date',
  'status',
  'type',
  'group'
])

const uniqueDates = computed(() => (
  uniqueDatesRaw?.value ? sortDates(uniqueDatesRaw.value) : []
))

function sortDates(dates: string[]): string[] {
  return dates.sort((a, b) => {
    const aDate = new Date(a.split('.').reverse().join('-'))
    const bDate = new Date(b.split('.').reverse().join('-'))

    return aDate.getTime() - bDate.getTime()
  })
}

function clear() {
  filterStore.date = ''
  filterStore.status = ''
  filterStore.type = ''
  filterStore.group = ''
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <select
      v-model="filterStore.date"
      class="w-full p-2 border rounded-lg bg-white shadow-sm"
    >
      <option selected value="">Все даты</option>
      <option v-for="date in uniqueDates" :key="date" :value="date">
        {{ date }}
      </option>
    </select>
    <select
      v-model="filterStore.status"
      class="w-full p-2 border rounded-lg bg-white shadow-sm"
    >
      <option selected value="">Все статусы</option>
      <option v-for="status in uniqueStatuses" :key="status" :value="status">
        {{ status }}
      </option>
    </select>
    <select
      v-model="filterStore.type"
      class="w-full p-2 border rounded-lg bg-white shadow-sm"
    >
      <option selected value="">Все типы сесии</option>
      <option v-for="type in uniqueTypes" :key="type" :value="type">
        {{ type }}
      </option>
    </select>
    <select
      v-model="filterStore.group"
      class="w-full p-2 border rounded-lg bg-white shadow-sm"
    >
      <option selected value="">Все группы</option>
      <option v-for="group in uniqueGroups" :key="group" :value="group">
        {{ group }}
      </option>
    </select>

    <button class="bg-primary text-white p-3 w-full rounded-xl" @click="clear">
      Сбросить все фильтры
    </button>
  </div>
</template>
