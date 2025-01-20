<template>
  <div class="border border-border w-full rounded-3xl overflow-hidden">
    <table class="w-full">
      <thead>
        <tr class="bg-[#F5F7F9] border border-t-transparent border-r-transparent border-l-transparent border-b-[#E8EAEC]">
          <th class="text-start w-52 pl-4 py-[10px]">Дата и время</th>
          <th class="text-start w-40 py-[10px]">Статус</th>
          <th class="text-start w-[517px] py-[10px]">Название учебного модуля</th>
          <th class="text-start w-36 py-[10px]">Тип сессии</th>
          <th class="text-start w-[296px] py-[10px]">Комната</th>
          <th class="text-start w-32 pr-4 py-[10px]">Группа</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in paginatedData"
          :key="item.id"
          class="h-[68px] even:bg-secondary border border-t-transparent border-r-transparent border-l-transparent border-b-[#E8EAEC]"
        >
          <td class="pl-4">{{ item.date }}, {{ item.time }}</td>
          <td>
            <UiBadge :status="item.status">
              {{ item.status }}
            </UiBadge>
          </td>
          <td class="flex-wrap">{{ item.name }}</td>
          <td>{{ item.type }}</td>
          <td>
            {{ item.room.join(', ') }}
          </td>
          <td class="pr-4">{{ item.group }}</td>
        </tr>
      </tbody>
      <tfoot>

      </tfoot>
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
          class="w-[30px] h-[30px] bg-white rounded-lg hover:bg-[#e0e0e0]"
        >
          >
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { TABLE_DATA } from './table.data'
import { usePagination } from '~/hooks/usePagination'

const itemsPerPage = 11

const {
  currentPage,
  totalPages,
  paginatedData,
  visiblePages
} = usePagination(TABLE_DATA, itemsPerPage)
</script>