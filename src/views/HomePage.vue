<template>
<ion-page>
  <ion-content :fullscreen="true">
        <ion-grid>
            <ion-row>
                <ion-col class="mb-50" size-xs="12" size-sm="12" size-md="12" size-lg="12">
                    <h1 class="center bold ">We Share</h1>
                </ion-col>
            </ion-row>
        </ion-grid>
        <!-- Swiper -->
        <swiper
            :slidesPerView="3"
            :spaceBetween="30"
            :freeMode="true"
            :loop="true"
            :navigation="true"
            :pagination="{
                clickable: true,
            }"
            :modules="modules"
            class="mySwiper"
        >
            <swiper-slide class="test">
                Name of activity
                <!-- <ion-card>
                    <ion-item href="#" class="ion-activated">
                        <ion-label>Name of Activity</ion-label>
                    </ion-item>
                    <ion-card-content>
                    Country - City - Address
                    </ion-card-content>
                </ion-card> -->
            </swiper-slide>
            <swiper-slide class="test2">
                Name of activity
            </swiper-slide>
            <swiper-slide class="test3">
                Name of activity
            </swiper-slide>
            <swiper-slide class="test">
                Name of activity
            </swiper-slide>
            <swiper-slide class="test2">
                Name of activity
            </swiper-slide>
            <swiper-slide class="test3">
                Name of activity
            </swiper-slide>
      </swiper>

  </ion-content>
</ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
IonContent,
IonPage,
IonCol,
IonGrid,
IonRow
} from '@ionic/vue';
/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/css/pagination";
import { Keyboard, Navigation, Pagination, Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import '@ionic/vue/css/ionic-swiper.css';

export default  defineComponent({
name: 'HomePage',
components: {
    IonContent,
    IonCol,
    IonGrid,
    IonRow,
    IonPage,
    Swiper,
    SwiperSlide
},
setup() {
      return {
        modules: [Keyboard, Pagination, Scrollbar, Navigation],
        
      };
    },
});
</script>