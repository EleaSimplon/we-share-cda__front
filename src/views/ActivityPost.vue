<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <section class="sec-activity-post">
                <!-- Header -->
                <div class="sec-activity-post__header relative d-flex justify-between flex-no-wrap p-20">
                    <!-- Back To List Button -->
                    <div class="sec-activity-post__header__btn-back">
                        <a href="">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </a>
                    </div>
                    <!-- Like Button -->
                    <div class="sec-activity-post__header__btn-like">
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                </div>
                <!-- Content -->
                <div class="sec-activity-post__content">
                    <!-- Heading -->
                    <div class="sec-activity-post__content__heading d-flex align-center justify-">
                        <div class="sec-activity-post__content__heading__name">
                            <div class="h2 bold">Activity Name</div>
                        </div>
                        <div class="sec-activity-post__content__heading__duration">
                            <div class="h5 bold">1 Day</div>
                        </div>
                    </div>
                    <!-- Address -->
                    <div class="sec-activity-post__content__address mt-50">
                        519 Colombus Ave - New York - USA
                    </div>
                    <!-- Company -->
                    <div class="sec-activity-post__content__infos mt-50 d-flex flex-wrap justify-between">
                        <div class="sec-activity-post__content__infos__phone-number">
                            <!-- href="tel:+496170961709" -->
                            <!-- Company Phone Number -->
                            <a href="">Call Company</a>
                        </div>
                        <!-- Budget -->
                        <div class="sec-activity-post__content__infos__budget">
                            $$
                        </div>
                        <!-- Schedule -->
                        <div class="sec-activity-post__content__infos__schedule">
                            <a href="">Schedule</a>
                        </div>
                    </div>
                    <!-- Description -->
                    <div class="sec-activity-post__content__description mt-50">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                </div>
                <!-- Reviews -->
                <div class="sec-activity-post__reviews">
                    <!-- Rating -->
                    <div class="sec-activity-post__reviews__rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                    </div>
                    <!-- Title -->
                    <div class="sec-activity-post__reviews__title mt-20 bold">
                        Amazing experience !
                    </div>
                    <div class="d-flex justify-between flex-no-wrap">
                        <!-- User Name -->
                        <div class="sec-activity-post__reviews__by small mt-20">
                            UserName
                        </div>
                        <!-- Published at -->
                        <div class="sec-activity-post__reviews__published small mt-20">
                            Wen 3 April 2022
                        </div>
                    </div>
                    <!-- Description -->
                    <div class="sec-activity-post__reviews__description mt-20">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </div>
                </div>
            
            </section>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
    IonContent,
    IonPage,
    IonIcon
} from '@ionic/vue';

export default defineComponent({
  name: 'activity-post',
//   props: {
//     name: String,
//     shortDescription: String,
//     country: String,
//     image: String
//   },
    components: {
        IonContent,
        IonPage,
        IonIcon,
    }
});
</script>