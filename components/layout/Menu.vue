<script lang="ts" setup>
import { MENU_DATA } from './menu.data'
</script>

<template>
  <div>
    <NuxtLink
      v-for="item in MENU_DATA"
      :key="item.name"
      :to="item.url"
    >
      <Icon :name="item.icon" />
      <span>{{ item.name }}</span>
    </NuxtLink>
  </div>
</template>