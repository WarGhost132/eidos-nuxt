<script setup lang="ts">
import { account } from '~/libs/appwrite'

const store = useSidebarSlideStore()
const authStore = useAuthStore()
const router = useRouter()
const isLoadingStore = useIsLoadingStore()

const logout = async () => {
  isLoadingStore.set(true)
  await account.deleteSession('current')
  authStore.clear()
  await router.push('/login')
  isLoadingStore.set(false)
}
</script>
<template>
  <button
    class="flex items-center p-3 hover:text-black"
    :class="{ 'justify-center w-full': store.isCollapsed }"
    @click="logout"
  >
    <Icon
      name="ph:sign-out"
      size="24"
      class="text-[#999999] transition-all"
      :class="{
        'mr-3': !store.isCollapsed,
      }"
    />
    <span v-if="!store.isCollapsed" class="font-bold">Выйти</span>
  </button>
</template>
