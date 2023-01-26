<template>
  <div>
    <div class="px-5 py-9 border-b-2 border-gray-50">

      <div class="mb-5">
        <BaseMultipleSelect/>
      </div>

      <div class="mb-5">
        <label class="block font-normal text-sm text-gray-100 mb-0.5">Срок полиса</label>
        <BaseTab :items="policy_terms" :selected-tab="policy_term" @clicked="(value) => onClick(value,'policy_term')"/>
      </div>

      <div class="mb-5">
        <label class="block font-normal text-sm text-gray-100 mb-0.5">Период</label>
        <DatePicker/>
      </div>

      <div class="mb-5">
        <label class="block font-normal text-sm text-gray-100 mb-0.5">Количество застрахованных дней</label>
        <BaseTab :items="days" :selected-tab="day" @clicked="(value) => onClick(value,'day')"/>
      </div>

      <div class="mb-5">
        <Slider/>
      </div>

      <div class="mb-5">
        <label class="block font-normal text-sm text-gray-100 mb-0.5">Возраст застрахованных</label>
        <Tabs/>
      </div>
    </div>
    <div class="py-2.5 px-5 flex justify-around">
      <BaseButton @click="getPremium">Рассчитать</BaseButton>
      <BaseButton class="ml-2.5">Оформить</BaseButton>
    </div>
  </div>
</template>

<script setup>


import Tabs from "~/components/common/Tabs.vue";

const onClick = (value,key) => {
  if (key === 'policy_term') {
    policy_term.value = value
  }
  if (key === 'range') {
    range.value = value
  }
  if (key === 'day') {
    day.value = value
  }
}
const ranges = ref([
  {
    id: 1,
    title: 'до 2'
  },
  {
    id: 2,
    title: '3—65'
  },
  {
    id: 3,
    title: '66—80'
  }
])
const range = ref({
    id: 1
})
const policy_terms = ref([
  {
    id: 1,
    title: 'Разовая'
  },
  {
    id: 2,
    title: 'Полгода'
  },
  {
    id: 3,
    title: 'Год'
  }
])
const policy_term = ref({
  id:1
})
const purposes = ref([
  {
    id: 1,
    title: 'Туризм'
  },
  {
    id: 2,
    title: 'Учёба'
  },
  {
    id: 3,
    title: 'Командировка'
  },
  {
    id: 4,
    title: 'Трудоустройство'
  }
])
const days = ref([
  {
    id: 1,
    title: '30'
  },
  {
    id: 2,
    title: '60'
  },
  {
    id: 3,
    title: '90'
  },
  {
    id: 4,
    title: '180'
  },
])
const day = ref({
  id: 1
})



import { useDictionaryStore } from "~/stores/dictionary";
import DatePicker from "~/components/common/DatePicker";
import Slider from "~/components/common/Slider.vue";

const dictionaryStore = useDictionaryStore()

const dictionary = computed(() => {
  return dictionaryStore.dictionaries
})

onMounted(async () => {
  await dictionaryStore.fetchDictionaries('countries',{where:{alpha_code:{operator: 'IS%20NOT',value:'NULL'},is_excluded:0}},true)
})

function getPremium() {
  console.log("Get Premium")
}
</script>