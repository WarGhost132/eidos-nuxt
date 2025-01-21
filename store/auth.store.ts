interface IAuthStore {
  email: string
  status: boolean
  errorMessage: string | null
}

const defaultValue: { user: IAuthStore } = {
  user: {
    email: '',
    status: false,
    errorMessage: null,
  },
}

export const useAuthStore = defineStore('auth', {
  state: () => defaultValue,
  getters: {
    isAuth: (state) => state.user.status,
    errorMessage: (state) => state.user.errorMessage,
  },
  actions: {
    clear() {
      this.$patch(defaultValue)
    },
    set(input: IAuthStore) {
      this.$patch({ user: input })
    },
    setErrorMessage(message: string) {
      this.$patch({ user: { ...this.user, errorMessage: message } })
    },
  },
})

export const useIsLoadingStore = defineStore('isLoading', {
  state: () => ({
    isLoading: true,
  }),
  actions: {
    set(data: boolean) {
      this.$patch({ isLoading: data })
    },
  },
})
