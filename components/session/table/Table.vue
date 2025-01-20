<template>
  <div class="border border-border w-full rounded-3xl overflow-hidden" v-if="filteredData.length > 0">
    <table class="w-full">
      <thead>
      <tr
        class="bg-[#F5F7F9] border border-t-transparent border-r-transparent border-l-transparent border-b-[#E8EAEC]"
      >
        <th
          @click="sortTable('date')"
          class="text-start w-52 pl-4 py-[10px]"
        >
          Дата и время
          <span v-if="sortBy === 'date'">
            {{ sortDirection === 'asc' ? '↑' : '↓' }}
          </span>
        </th>
        <th
          @click="sortTable('status')"
          class="text-start w-40 py-[10px]"
        >
          Статус
          <span v-if="sortBy === 'status'">
            {{ sortDirection === 'asc' ? '↑' : '↓' }}
          </span>
        </th>
        <th
          @click="sortTable('name')"
          class="text-start w-[517px] py-[10px]"
        >
          Название учебного модуля
          <span v-if="sortBy === 'name'">
            {{ sortDirection === 'asc' ? '↑' : '↓' }}
          </span>
        </th>
        <th
          @click="sortTable('type')"
          class="text-start w-36 py-[10px]"
        >
          Тип сессии
          <span v-if="sortBy === 'type'">
            {{ sortDirection === 'asc' ? '↑' : '↓' }}
          </span>
        </th>
        <th
          class="text-start w-[296px] py-[10px]"
        >
          Комната
        </th>
        <th
          class="text-start w-32 pr-4 py-[10px]"
        >
          Группа
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="item in paginatedData"
        :key="item.id"
        class="h-[68px] even:bg-secondary border border-t-transparent border-r-transparent border-l-transparent border-b-[#E8EAEC]"
      >
        <td class="pl-4">
          {{ item.date }}, {{ item.time }}
        </td>
        <td>
          <UiBadge :status="item.status">
            {{ item.status }}
          </UiBadge>
        </td>
        <td class="flex-wrap">
          {{ item.name }}
        </td>
        <td>
          {{ item.type }}
        </td>
        <td class="flex-wrap">
          {{ item.room.join(', ') }}
        </td>
        <td class="pr-4">
          {{ item.group }}
        </td>
      </tr>
      </tbody>
    </table>
    <div class="w-full bg-secondary p-3">
      <div class="wrapper w-[400px] flex justify-between">
        <button
          :disabled="currentPage === 1"
          @click="currentPage--"
          class="w-[30px] h-[30px] rounded-lg bg-white hover:bg-[#e0e0e0]"
        >
          <
        </button>
        <button
          v-for="page in visiblePages"
          :key="page"
          @click="currentPage = page"
          class="w-[30px] h-[30px] bg-white rounded-lg hover:bg-[#e0e0e0]"
          :class="{'border border-primary text-primary': currentPage === page}"
          :disabled="page === -1"
        >
          {{ page === -1 ? '...' : page }}
        </button>
        <button
          :disabled="currentPage === totalPages"
          @click="currentPage++"
          class="w-[30px] h-[30px] bg-white rounded-lg hover:bg-[#e0e0e0]">
          >
        </button>
      </div>
    </div>
  </div>
  <div v-else>
    <p class="text-center py-4 text-gray-600 text-xl">
      Таких данных нет
    </p>
  </div>
</template>

<script setup lang="ts">
import { usePagination } from '~/hooks/usePagination'
import { useSort } from '~/hooks/useSort'
import { useSearchStore } from '~/store/search-store'

const searchStore = useSearchStore()

const { data: tableData } = await useFetch('/api/tableData')

const maxItemsPerPage = 11

const {
  sortBy,
  sortDirection,
  sortTable,
  sortedData
} = useSort(tableData.value)

const filteredData = computed(() => {
  return sortedData.value.filter(item =>
    item.name.toLowerCase().includes(searchStore.searchQuery.toLowerCase()) ||
    item.group.toLowerCase().includes(searchStore.searchQuery.toLowerCase())
  )
})

const {
  currentPage,
  totalPages,
  paginatedData,
  visiblePages
} = usePagination(filteredData, maxItemsPerPage);

watchEffect(() => {
  currentPage.value = 1;
});
</script>
