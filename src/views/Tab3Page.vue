<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <h1 class="center bold">Prepare</h1>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';

export default defineComponent({
  name: 'Tab3Page',
  components: { IonContent, IonPage }
});
</script>
