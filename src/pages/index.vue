<script setup lang="ts">
import { onIonViewDidEnter } from '@ionic/vue'

// 初始化页面
onIonViewDidEnter(() => {
  console.log('Home page did enter')
})
onMounted(() => {
  console.log('onMounted')
})
console.log(2)
</script>

<template>
  <ion-page>
    <ion-content>
      <div class="text-center pt-60px">
        <div i-carbon-campsite text-4xl inline-block />
        <p>
          <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
            Vitesse mobile
          </a>
        </p>
        <p>
          <em text-sm op75>this is index</em>
        </p>

        <div py-4 />
      </div>
    </ion-content>
  </ion-page>
</template>

<route lang="yaml">
name:
  index
path:
  /index
meta:
  layout:
    default
</route>

<style scoped lang="less">

</style>
