<script setup lang="ts">
import { account } from '~/libs/appwrite'

useSeoMeta({
  title: 'Login'
})

const emailRef = ref('')
const passwordRef = ref('')

const isLoadingStore = useIsLoadingStore()
const authStore = useAuthStore()
const router = useRouter()

const login = async () => {
  isLoadingStore.set(true)
  await account.createEmailPasswordSession(emailRef.value, passwordRef.value)
  const response = await account.get()
  if (response) {
    authStore.set({
      email: response.email,
      status: response.status
    })
  }

  emailRef.value = ''
  passwordRef.value = ''

  await router.push('/')
  isLoadingStore.set(false)
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="bg-card rounded-xl p-10 w-[400px]">
      <h1 class="text-xl font-bold text-center mb-5">Авторизация</h1>

      <form class="flex flex-col gap-4">
        <input
          class="border border-border rounded-lg p-3"
          placeholder="Введите email"
          type="email"
          v-model="emailRef"
        />

        <input
          class="border border-border rounded-lg p-3"
          placeholder="Введите пароль"
          type="password"
          v-model="passwordRef"
        />

        <button
          class="w-full bg-primary text-white font-extrabold text-lg p-3 rounded-xl hover:opacity-90"
          @click="login"
        >
          Войти
        </button>
      </form>
    </div>
  </div>
</template>