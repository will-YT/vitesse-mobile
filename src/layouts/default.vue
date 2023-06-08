<script setup lang="ts">
import { bookmarksOutline, businessOutline } from 'ionicons/icons'
</script>

<template>
  <ion-page>
    <ion-tabs mode="md">
      <ion-router-outlet />
      <ion-tab-bar>
        <ion-tab-button tab="index" href="/index">
          <ion-icon :icon="businessOutline" />
          <ion-label>index</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="detail" href="/detail">
          <ion-icon :icon="bookmarksOutline" />
          <ion-label>detail</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<style lang="less" ccoped>
  ion-tab-bar{
    border-top: 1px solid #f5f5f5;
  }
</style>
