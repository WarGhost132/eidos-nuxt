<script setup lang="ts">
import { account } from '~/libs/appwrite'

useSeoMeta({
  title: 'Login',
})

const emailRef = ref('')
const passwordRef = ref('')

const isLoadingStore = useIsLoadingStore()
const authStore = useAuthStore()
const router = useRouter()

const handleError = (error: unknown) => {
  if (error instanceof Error) {
    if (
      error.message ===
      'Invalid credentials. Please check the email and password.'
    ) {
      authStore.setErrorMessage('Неверный email или пароль')
    } else if (
      error.message ===
      'Invalid `password` param: Password must be between 8 and 256 characters long.'
    ) {
      authStore.setErrorMessage('Пароль должен содержать не менее 8 символов')
    } else {
      authStore.setErrorMessage('Произошла ошибка при авторизации')
    }
  } else {
    authStore.setErrorMessage('Произошла неизвестная ошибка')
  }

  authStore.set({
    email: '',
    status: false,
    errorMessage: authStore.errorMessage,
  })
}

const login = async () => {
  isLoadingStore.set(true)

  try {
    await account.createEmailPasswordSession(emailRef.value, passwordRef.value)
    const response = await account.get()
    if (response) {
      authStore.set({
        email: response.email,
        status: response.status,
        errorMessage: null,
      })
    }

    emailRef.value = ''
    passwordRef.value = ''

    await router.push('/')
  } catch (error: unknown) {
    handleError(error)
  } finally {
    isLoadingStore.set(false)
  }
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="bg-card rounded-xl p-10 w-[400px]">
      <h1 class="text-xl font-bold text-center mb-5">Авторизация</h1>

      <p v-if="authStore.errorMessage" class="text-red-500 text-center mb-4">
        {{ authStore.errorMessage }}
      </p>

      <form class="flex flex-col gap-4">
        <input
          v-model="emailRef"
          class="border border-border rounded-lg p-3"
          placeholder="Введите email"
          type="email"
        >

        <input
          v-model="passwordRef"
          class="border border-border rounded-lg p-3"
          placeholder="Введите пароль"
          type="password"
        >

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
