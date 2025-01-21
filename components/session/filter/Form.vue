<script setup lang="ts">
import { useData } from '~/hooks/useData'

interface TableDataItem {
  date: string;
  status: string;
  type: string;
  group: string;
}

const data: globalThis.Ref<TableDataItem[]> = await useData()

const uniqueDates = computed(() =>
  data.value
    ? [...new Set(data.value.map((item) => item.date))]
      .sort((a, b) => {
        const aDate = new Date(a.split('.').reverse().join('-'))
        const bDate = new Date(b.split('.').reverse().join('-'))
        return aDate.getTime() - bDate.getTime()
      })
    : []
)
const uniqueStatuses = computed(() =>
  data.value ? [...new Set(data.value.map((item) => item.status))] : []
)
const uniqueTypes = computed(() =>
  data.value ? [...new Set(data.value.map((item) => item.type))] : []
)
const uniqueGroups = computed(() =>
  data.value ? [...new Set(data.value.map((item) => item.group))] : []
)

</script>

<template>
  <div class="flex flex-col gap-4">
    <select class="w-full p-2 border rounded-lg bg-white shadow-sm">
      <option selected value="">Все даты</option>
      <option v-for="date in uniqueDates" :key="date">{{ date }}</option>
    </select>
    <select class="w-full p-2 border rounded-lg bg-white shadow-sm">
      <option selected value="">Все статусы</option>
      <option v-for="status in uniqueStatuses" :key="status">{{ status }}</option>
    </select>
    <select class="w-full p-2 border rounded-lg bg-white shadow-sm">
      <option selected value="">Все типы сесии</option>
      <option v-for="type in uniqueTypes" :key="type">{{ type }}</option>
    </select>
    <select class="w-full p-2 border rounded-lg bg-white shadow-sm">
      <option selected value="">Все группы</option>
      <option v-for="group in uniqueGroups" :key="group">{{ group }}</option>
    </select>
  </div>
</template>