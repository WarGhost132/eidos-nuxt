import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt()
  .override('nuxt/typescript/rules', {
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  })

  .override('nuxt/vue/rules', {
    rules: {
      'vue/no-parsing-error': 'off',
    },
  })
