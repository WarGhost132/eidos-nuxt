<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void
}>()

const isVisible = ref(false)

watchEffect(() => {
  isVisible.value = props.modelValue
}) 

const closeModal = () => {
  isVisible.value = false
  emit('update:modelValue', false)
}
</script>

<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    @click.self="closeModal"
  >
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-extrabold">{{ title }}</h2>
        <button
          class="text-gray-500 hover:text-black"
          @click="closeModal"
        >
          <Icon name="ph:x-bold" />
        </button>
      </div>

      <div>
        <slot />
      </div>
    </div>
  </div>
</template>
