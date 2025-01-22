<script lang="ts" setup>
import { useData } from '~/hooks/useData';
import { useUniqueValues } from '~/hooks/useUniqueValues';

interface TableDataItem {
  status: string
  type: string
  rooms: string
  group: string
}

const data: globalThis.Ref<TableDataItem[]> = await useData()

const { 
  status: uniqueStatuses,
  type: uniqueTypes,
  group: uniqueGroups,
  rooms: uniqueRooms 
} = useUniqueValues(data, [
  'status',
  'type',
  'group',
  'rooms'
])
</script>

<template>
  <form class="flex flex-col gap-2" @submit.prevent="">
    <label for="name">Название учебного модуля</label>
    <input id="name" placeholder="Введите название учебного модуля">

    <label for="type">Тип сессии</label>
    <select id="type" placeholder="Выбрать тип сессии">
      <option v-for="type in uniqueTypes" :key="type" :value="type">
        {{ type }}
      </option>
    </select>

    <label for="type">Статус</label>
    <select id="type" placeholder="Выбрать статус">
      <option v-for="status in uniqueStatuses" :key="status" :value="status">
        {{ status }}
      </option>
    </select>

    <label for="type">Выбрать дату</label>
    <input type="date">
    <div class="flex justify-between">
      <label for="timeStart">Начало</label>
      <input id="timeStart" type="time">

      <label for="timeEnd">Конец</label>
      <input id="timeEnd" type="time">
    </div>

    <label for="type">Группа</label>
    <select id="type" placeholder="Выбрать группу">
      <option v-for="group in uniqueGroups" :key="group" :value="group">
        {{ group }}
      </option>
    </select>

    <button>
      Создать сессию
    </button>
  </form>
</template>
