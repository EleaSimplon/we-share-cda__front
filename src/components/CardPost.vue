<template>
    <ion-card class="card-activity h-100" href="#" >
        <div class="card-activity__image">
            <img src="https://images.pexels.com/photos/5171018/pexels-photo-5171018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">                            
        </div>
        <ion-card-header>
            <ion-card-subtitle>Country</ion-card-subtitle>
            <ion-card-title>Activity Name</ion-card-title>
        </ion-card-header>
        <ion-card-content>
            Short description short description short description
            <!-- {{ shortDescription }} -->
        </ion-card-content>
    </ion-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, } from '@ionic/vue';

export default defineComponent({
  name: 'CardPost',
  props: {
    name: String,
    shortDescription: String,
    country: String,
    image: String
  },
  components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, }
});
</script>