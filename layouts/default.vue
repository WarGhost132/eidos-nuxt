<script setup lang="ts">

import { account } from '~/libs/appwrite'

const store = useSidebarSlideStore()
const isLoadingStore = useIsLoadingStore()
const authStore = useAuthStore()
const router = useRouter()

onMounted(async() => {
  try {
    const user = await account.get()
    if (user) authStore.set(user)
  } catch (error) {
    await router.push('/login')
  } finally {
    isLoadingStore.set(false)
  }
})
</script>

<template>
  <LayoutLoader v-if="isLoadingStore.isLoading" />
  <section v-else :class="{grid: authStore.isAuth}" style="min-height: 100vh">
    <LayoutSidebar v-if="authStore.isAuth" class="sidebar transition-all" :style="{width: store.isCollapsed ? '114px' : '274px'}" />
    <div class="content">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-areas: "sidebar content";
  grid-template-columns: min-content 1fr;
}

.sidebar {
  grid-area: sidebar;
}

.content {
  grid-area: content;
  max-width: 1780px;
  justify-self: center;
  padding: 8px;
  width: 100%;
}
</style>