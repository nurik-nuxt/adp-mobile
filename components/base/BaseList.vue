<template>
  <div class="">
    <ul :class="`list ${bordered ? 'divide-y' : ''}`">
      <li class="list-item p-3" v-for="(item, index) in data" :key="index">
        <slot name="item" v-bind="{item}">
          <p class="mb-2 text-2xl">{{ item.title }}</p>
          <p class="text-xl">
            {{ item.content }}
          </p>
        </slot>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Array,
    required: false,
    default: []
  },
  bordered: {
    type: Boolean,
    default: true
  }
})


</script>

<style scoped lang="scss">
.list{
  &-item{

  }
}
</style>