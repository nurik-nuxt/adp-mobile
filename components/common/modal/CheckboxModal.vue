<template>
  <BasePopup @clickedOutside="closeModal" title="Тип документа">
    <BaseRadioButton
        v-for="(option, index) in document_types"
        :option="option"
        :key="index"
        v-model:modelValue="selected"
        @change="changeSelectValue"
    />
  </BasePopup>
</template>

<script setup>

const options = ref(['Удостоверение личности', 'Паспорт', 'Свидетельство о рождении'])

const document_types = ref([
  {
    id: 1,
    title: 'Удостоверение личности'
  },
  {
    id: 2,
    title: 'Паспорт'
  },
  {
    id: 3,
    title: 'Свидетельство о рождении'
  },
  {
    id: 4,
    title: 'Вид на жительство иностранца'
  },
  {
    id: 5,
    title: 'Дипломатический паспорт'
  },
  {
    id: 6,
    title: 'Справка об отсутствии или наличии судимости'
  },
  {
    id: 7,
    title: 'Свид-тво о гос. регистрации (перерегистрации)'
  },
  {
    id: 8,
    title: 'Сертификат лица без гражданства'
  }

])

const emit = defineEmits(['close-modal', 'change-select'])

const selected = ref({})

function closeModal() {
  emit('close-modal')
}

function changeSelectValue() {
  emit('change-select', selected.value)
}
</script>

