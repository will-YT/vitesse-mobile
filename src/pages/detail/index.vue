<script setup lang="ts">
// 初始化页面
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
          <em text-sm op75>this is detail</em>
        </p>

        <div py-4 />
        <RouterLink to="/detail/card">
          card
        </RouterLink>
      </div>
    </ion-content>
  </ion-page>
</template>

<route lang="yaml">
meta:
  layout:
    default
</route>

<style scoped lang="less">

</style>
