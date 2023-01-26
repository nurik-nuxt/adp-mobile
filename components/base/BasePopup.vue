<template>
  <transition name="checkbox" appear>
    <div class="modal-overlay">
      <div class="modal" v-click-outside="clickOutside">
        <p class="font-bold text-base leading-7 mb-6">{{ title }}</p>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script setup>

defineProps(['title'])

const emit = defineEmits(['clickedOutside'])

function clickOutside() {
  emit('clickedOutside')
}
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
}
.modal {
  background-color: white;
  width: 100%;
  margin-top: 80%;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
}
</style>