<template>
  <label :for="option">
    <input
        type="radio"
        :value="option"
        :id="option.id"
        name="radio-input"
        @change="$emit('update:modelValue', option)"
    >
    {{ option.title }}
  </label>
</template>

<script setup>
defineProps({
  option: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
label {
  cursor: pointer;
  margin-bottom: 25px;
  color: #737B8C;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 19px;
}
</style>