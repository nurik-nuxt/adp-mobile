<template>
  <div>
    <HolderCard
        v-for="(holder,index) in holders"
        :is-holder="holder.isHolder"
        class="mb-3"
        :fio="holder.fio"
        :iin="holder.iin"
        :id="index+1"
        :is-complete="holder.isComplete"
        :insurance_sum="holder.insurance_sum"
        @click="openCard(index)"
        @deletedFromList="$emit('deleteCard', index)"
    />
  </div>
</template>

<script setup>

import HolderCard from "~/components/common/HolderCard.vue";
const route = useRoute()
defineProps({
  holders: Array
})

function openCard(id) {
  return navigateTo({
    path: `/mst/holder/${id + 1}`
  })
}
</script>