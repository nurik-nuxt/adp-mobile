<template>
  <div class="flex flex-col">
    <input
        type="file"
        multiple
        ref="file"
        class="hidden"
        @change="handleFileUpload"
    >
    <BaseButton variant="green" @click="handleButtonClick">
      <BaseIcon name="upload-white" class="mr-1"/>
      Загрузить скан/фото документа
    </BaseButton>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const file = ref(null)
function handleFileUpload() {
  console.log("handleFileUpload")
}
// defineExpose({
//   file
// })
function handleButtonClick() {
  console.log(file.value)
}
</script>