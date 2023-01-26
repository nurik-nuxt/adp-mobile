<template>
  <div class="flex flex-col justify-between h-full">
    <div class="px-5 pt-5 h-9/12 border-b-2 border-gray-50">
      <h2 class="text-2xl font-bold leading-6 mb-2.5">Застрахованные</h2>
      <HolderList :holders="holders" @deleteCard="deleteHolderCard"/>
    </div>
    <div class="px-2.5 pt-2.5 pb-5 h-3/12">
      <div class="flex w-full">
        <BaseButton class="mr-2.5 w-9/12" variant="light" @click="addHolder">+ Добавить застрахованного</BaseButton>
        <BaseButton class="w-3/12">Выписать</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>

import HolderList from "~/components/common/HolderList.vue";

useHead({
  title: "Новый полис МСТ"
})

const holders = ref([
  {
    isHolder: true,
    isResident: true,
    fio: 'Константинопольский Константин\n',
    iin: '123 456 789 123',
    insurance_sum: "16 216",
    isComplete: true
  },
  {
    isHolder: false,
    isResident: true,
    fio:"Аюбаев Мэлс",
    iin: "123 456 789 123",
    insurance_sum: "16 216",
    isComplete: false
  },
  {
    isHolder: false,
    isResident: true,
    fio:"Преображенская Екатерина",
    iin: "123 456 789 123",
    insurance_sum: "11 856",
    isComplete: true
  },
  {
    isHolder: false,
    isResident: false,
    fio:"Есмагамбетова Раушан",
    iin: "123 456 789 123",
    insurance_sum: "11 856",
    isComplete: true
  },
  {
    isHolder: false,
    isResident: true,
    fio:"Омаркулбеков Нурислам",
    iin: "123 456 789 123",
    insurance_sum: "16 216",
    isComplete: false
  },
])
function addHolder() {
  holders.value.push({
    isHolder: false,
    isResident: true,
  })
}

function deleteHolderCard(id) {
  if (id > -1) {
    holders.value.splice(id, 1);
  }
  return holders.value;
}
</script>