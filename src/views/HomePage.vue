<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <!-- Header -->
            <ion-grid>
                <ion-row>
                    <ion-col class="mb-50" size-xs="12" size-sm="12" size-md="12" size-lg="12">
                        <h1 class="center bold">Discover</h1>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <!-- SEC - TOP RATED -->
            <ion-grid>
                <ion-row>
                    <ion-col class="mb-50" size-xs="12" size-sm="12" size-md="12" size-lg="12">
                        <section class="sec-home-top-rated">
                            <!-- Title -->
                            <div class="sec-home-top-rated__title mb-25">
                                <h4 class="bold">Top Activities</h4>
                            </div>
                            <div class="sec-home-top-rated__cards d-flex">
                                <!-- CP- Card -->
                                <a class="cp-card-activity-home d-flex align-end" style="background-image: url('https://images.pexels.com/photos/5098033/pexels-photo-5098033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');">
                                    <!-- Content -->
                                    <div class="cp-card-activity-home__content">
                                        <!-- Name -->
                                        <div class="cp-card-activity-home__content__location">
                                            Sahara
                                        </div>
                                        <!-- Name -->
                                        <div class="cp-card-activity-home__content__name bold mt-5">
                                            Quad in the desert
                                        </div>
                                        <!-- Rate -->
                                        <div class="cp-card-activity-home__content__rate d-flex align-center mt-10">
                                            <div class="cp-card-activity-home__content__rate__icon">
                                                <ion-icon name="star"></ion-icon>
                                            </div>
                                            <div class="cp-card-activity-home__content__rate__number">
                                                4.8
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <!-- CP- Card -->
                                <a class="cp-card-activity-home d-flex align-end" style="background-image: url('https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');">
                                    <!-- Content -->
                                    <div class="cp-card-activity-home__content">
                                        <!-- Name -->
                                        <div class="cp-card-activity-home__content__location">
                                            France
                                        </div>
                                        <!-- Name -->
                                        <div class="cp-card-activity-home__content__name bold mt-5">
                                            Hot air balloon
                                        </div>
                                        <!-- Rate -->
                                        <div class="cp-card-activity-home__content__rate d-flex align-center mt-10">
                                            <div class="cp-card-activity-home__content__rate__icon">
                                                <ion-icon name="star"></ion-icon>
                                            </div>
                                            <div class="cp-card-activity-home__content__rate__number">
                                                4.3
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <!-- CP- Card -->
                                <a class="cp-card-activity-home d-flex align-end" style="background-image: url('https://images.pexels.com/photos/3702806/pexels-photo-3702806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');">
                                    <!-- Content -->
                                    <div class="cp-card-activity-home__content">
                                        <!-- Name -->
                                        <div class="cp-card-activity-home__content__location">
                                            UK
                                        </div>
                                        <!-- Name -->
                                        <div class="cp-card-activity-home__content__name bold mt-5">
                                            Skydiving
                                        </div>
                                        <!-- Rate -->
                                        <div class="cp-card-activity-home__content__rate d-flex align-center mt-10">
                                            <div class="cp-card-activity-home__content__rate__icon">
                                                <ion-icon name="star"></ion-icon>
                                            </div>
                                            <div class="cp-card-activity-home__content__rate__number">
                                                5
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </section>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <!-- SEC - TOP RATED -->
            <ion-grid>
                <ion-row>
                    <ion-col class="mb-50" size-xs="12" size-sm="12" size-md="12" size-lg="12">
                        <section class="sec-home-top-rated">
                            <!-- Title -->
                            <div class="sec-home-top-rated__title">
                                <h4 class="bold">Popular categories</h4>
                            </div>
                        </section>
                    </ion-col>
                </ion-row>
            </ion-grid>
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

export default  defineComponent({
    name: 'HomePage',
    components: {
        IonContent,
        IonCol,
        IonGrid,
        IonRow,
        IonPage
    },
});

</script>