<script setup lang="ts">
// 初始化页面
const page = ref(null)
const modal = ref(null)
const presentingElement = ref(null)
function dismiss() {
  (modal.value as any).$el.dismiss()
}
onMounted(() => {
  presentingElement.value = (page.value as any).$el
})
</script>

<template>
  <ion-page ref="page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Inline Modal</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-button id="open-modal" expand="block">
        Open
      </ion-button>

      <ion-modal ref="modal" trigger="open-modal" :presenting-element="presentingElement">
        <ion-header>
          <ion-toolbar>
            <ion-title>Modal</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="dismiss()">
                Close
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <ion-list>
            <ion-button router-link="/detail/dd" @click="dismiss()">
              Default
            </ion-button>
          </ion-list>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<style scoped lang="less">

</style>
