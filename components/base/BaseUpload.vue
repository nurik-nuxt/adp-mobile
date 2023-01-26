<template>
  <div class="relative">
    <label :for="type" class="block not-italic text-sm font-normal invalid:border-rose-50" :class="isError ? 'text-rose-50' : 'text-gray-100'">
      {{ label }}
    </label>
    <label
        class="block bg-gray-150 w-full px-2.5 py-3 rounded-md outline-0 h-11 relative"
        :class="isError ? 'border border-rose-50 placeholder-rose-50 ' : 'border-none'"
    >
      <input
          type="file"
          :id="type"
          class="hidden"
          :placeholder="placeholder"
          @change="onChanged"
      />
    </label>
    <BaseIcon name="upload" class="absolute bottom-1 right-2.5"/>
    <a v-if="!link" class="egov-link" href="https://egov.kz/cms/ru/services/e_004" target="_blank">Как получить справку</a>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  placeholder: String,
  isError: Boolean,
  type: String,
  isRequired: Boolean,
  link: Boolean,
})

const emit = defineEmits(['changed'])
function onChanged(event) {
  if(event.target.files[0]) {
    event.target.classList.remove('hidden')
  } else {
    event.target.classList.add('hidden')
  }
  emit('changed',event)
}

</script>

<style lang="scss">
input[type=file]::file-selector-button {
  display: none;
}

.egov-link {
  color: #376FFF;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  border-bottom: 1px solid #376FFF;
}
</style>