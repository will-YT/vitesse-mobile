<script setup lang="ts">
const color = ref('#0094ff')
const setColor = (newTitle: string) => {
  color.value = newTitle
}
defineExpose({ setColor })
</script>

<template>
  <div class="flex items-center justify-center absolute left-0 right-0 bottom-0 top-0 bg-rgba(255, 255, 255, 0.9) z-2000">
    <van-loading size="24px" :color="color" type="spinner" />
  </div>
</template>

<style lang="less" scoped>

</style>
