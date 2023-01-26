<template>
  <div>
    <div class="flex flex-row justify-between" v-for="insured in insuredList">
      <div class="w-8 h-7 leading-7 rounded-full bg-gray-50 text-center m-auto">{{insured.id}}</div>
      <BaseTab class="m-auto mx-2.5" :items="ranges" :selected-tab="insured.selectedTab" @clicked="(value,selected) => selectInsuredAge(value,insured.id)"/>
      <div class="m-auto" @click="removeInsuredWithId(insured.id)">
        <svg width="18" height="44" viewBox="0 0 18 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 14L16.9999 29.9999" stroke="#FF4D4D"/>
          <path d="M17 14L1.0001 29.9999" stroke="#FF4D4D"/>
        </svg>
      </div>
    </div>
    <BaseButton class="mt-2" variant="green" @click="addInsured">+ Добавить застрахованного</BaseButton>
  </div>
</template>

<script setup>
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
const insuredList = ref([
  {
    id: 1,
    selectedTab: {
      id:1
    }
  },
  {
    id: 2,
    selectedTab: {
      id:2
    }
  },
  {
    id: 3,
    selectedTab: {
      id:3
    }
  }
])
function addInsured() {
  insuredList.value.push({
    id: insuredList.value.length + 1,
    selectedTab: {
      id: 1
    }
  })
}

function removeInsuredWithId(id) {
  const objWithIdIndex = insuredList.value.findIndex((obj) => obj.id === id);

  if (objWithIdIndex > -1) {
    insuredList.value.splice(objWithIdIndex, 1);
  }

  return insuredList.value;
}

function selectInsuredAge(value,selected) {
  insuredList.value[selected-1].selectedTab.id = value.id
}
</script>