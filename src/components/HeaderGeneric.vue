<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <h1 class="center bold">We Share</h1>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
IonContent,
IonPage
} from '@ionic/vue';

export default  defineComponent({
name: 'HeaderGeneric',
components: {
    IonContent,
    IonPage
}
});
</script>