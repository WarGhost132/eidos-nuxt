<template>
  <table>
    <thead>
      <tr>
        <th>Дата и время</th>
        <th>Статус</th>
        <th>Название учебного модуля</th>
        <th>Тип сессии</th>
        <th>Комната</th>
        <th>Группа</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in paginatedData" :key="item.id">
        <td>{{ item.date }}, {{ item.time }}</td>
        <td>{{ item.status }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.type }}</td>
        <td>
          {{ item.room.join(', ') }}
        </td>
        <td>{{ item.group }}</td>
      </tr>
    </tbody>
  </table>

  <div>
    <button
      :disabled="currentPage === 1"
      @click="currentPage--"
    >
      <
    </button>

    <button
      v-for="page in visiblePages"
      :key="page"
      @click="currentPage = page"
      :class="{'bg-primary': currentPage === page}"
      :disabled="page === -1"
    >
      {{ page === -1 ? '...' : page }}
    </button>

    <button
      :disabled="currentPage === totalPages"
      @click="currentPage++"
    >
      >
    </button>
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