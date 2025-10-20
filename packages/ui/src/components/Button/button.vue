<template>
  <button @click="handleClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { APP_NAME } from '@fang-common/shared'
import { hello } from '@fang-common/utils'

const handleClick = () => {
  hello(APP_NAME)
}
</script>

<style scoped lang="scss">
button {
  color: #000;
  background-color: #fff;
  border: 1px solid #000;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #000;
    color: #fff;
  }
}
</style>
