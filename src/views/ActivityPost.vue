<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <!-- *** SEC - Header *** -->
            <section class="sec-activity-post__header relative d-flex justify-between flex-no-wrap p-20 fixed" v-bind:style="{ backgroundImage: activity.picture ? 'url(' + activity.picture + ')' : 'url(https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png)' }">
                <!-- Back To List Button -->
                <div class="sec-activity-post__header__btn-back">
                    <a @click="onClickGoBackToList()">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </a>
                </div>
                <!-- Like Button -->
                <div class="sec-activity-post__header__btn-like">
                    <div id="main-content">
                        <div>
                            <label for="checkbox">
                                <svg @click.prevent="toggleFavorite" v-bind:class="{ 'heart-red': isFavoritedAndIsTrue }" id="heart-svg" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group" fill="none" fill-rule="evenodd" transform="translate(467 392)">
                                        <path d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" id="heart" fill="#AAB8C2"/>
                                        <circle id="main-circ" fill="#E2264D" opacity="0" cx="29.5" cy="29.5" r="1.5"/>

                                        <g id="grp7" opacity="0" transform="translate(7 6)">
                                        <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2"/>
                                        <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2"/>
                                        </g>

                                        <g id="grp6" opacity="0" transform="translate(0 28)">
                                        <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2"/>
                                        <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2"/>
                                        </g>

                                        <g id="grp3" opacity="0" transform="translate(52 28)">
                                        <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2"/>
                                        <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2"/>
                                        </g>

                                        <g id="grp2" opacity="0" transform="translate(44 6)">
                                        <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2"/>
                                        <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2"/>
                                        </g>

                                        <g id="grp5" opacity="0" transform="translate(14 50)">
                                        <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2"/>
                                        <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2"/>
                                        </g>

                                        <g id="grp4" opacity="0" transform="translate(35 50)">
                                        <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2"/>
                                        <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2"/>
                                        </g>

                                        <g id="grp1" opacity="0" transform="translate(24)">
                                        <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2"/>
                                        <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2"/>
                                        </g>
                                    </g>
                                </svg>
                            </label>
                        </div>
                    </div>
                </div>
            </section>
            <!-- *** SEC - Content *** -->
            <section class="sec-activity-post__content p-sec relative bck-white z-10">
                <div class="container">
                    <!-- Heading -->
                    <div class="sec-activity-post__content__heading">
                        <div class="sec-activity-post__content__heading__name">
                            <div class="h2 bold">{{ activity.name }}</div>
                        </div>
                    </div>
                    <div class="mt-20">
                        <!-- JavaScript method Math.floor() to round down to the nearest whole number -->
                        <div class="d-flex align-center" v-if="average !== 0">
                            <ion-icon name="star"></ion-icon>
                            <div class="ml-10">{{ Math.round(average.average)}}</div>
                        </div>
                        <div v-else>There is no review yet</div>
                    </div>
                    <!-- Address -->
                    <div class="sec-activity-post__content__address mt-50">
                        {{ activity.address }} - {{ activity.city }} - {{ activity.country }}
                    </div>
                    <div class="sec-activity-post__content__infos mt-50 d-flex">
                        <!-- Duration -->
                        <div class="cp-tag-category d-flex align-center mr-10 mb-20">
                            <div class="cp-tag-category__icon m-0 width-content">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="m245.333 117.333a21.334 21.334 0 0 0 -21.333 21.334v128a21.334 21.334 0 0 0 21.333 21.333h96a21.334 21.334 0 1 0 0-42.667h-74.666v-106.666a21.335 21.335 0 0 0 -21.334-21.334z" fill="#212738" data-original="#000000" class=""/><path d="m421.938 90.068c-91.5-91.5-240.376-91.5-331.876 0a21.331 21.331 0 0 0 30.167 30.166c74.854-74.864 196.667-74.864 271.542 0 74.854 74.86 74.854 196.672 0 271.532-66.024 66.009-169.171 73.576-244.145 22.434l19.041-6.347a21.335 21.335 0 0 0 -13.5-40.479l-55.3 18.437a21.342 21.342 0 0 0 -14.25 24.016l11.383 63.282a21.348 21.348 0 0 0 20.979 17.563 21.6 21.6 0 0 0 3.8-.344 21.334 21.334 0 0 0 17.221-24.771l-1.534-8.528a234.931 234.931 0 0 0 286.472-35.1c91.489-91.491 91.489-240.367 0-331.861z" fill="#212738" data-original="#000000" class=""/><path d="m73.344 143.7a21.319 21.319 0 0 0 -28.521 9.839q-2.593 5.311-4.875 10.718a21.331 21.331 0 1 0 39.271 16.667c1.25-2.927 2.562-5.833 3.958-8.708a21.327 21.327 0 0 0 -9.833-28.516z" fill="#212738" data-original="#000000" class=""/><path d="m42.74 272.083a21.323 21.323 0 0 0 21.312-20.783q.156-6.039.677-12.083a21.329 21.329 0 1 0 -42.5-3.678q-.64 7.322-.823 14.667a21.334 21.334 0 0 0 20.771 21.875c.188.002.375.002.563.002z" fill="#212738" data-original="#000000" class=""/><path d="m71.938 310.8a21.332 21.332 0 1 0 -40.876 12.219c1.115 3.739 2.323 7.469 3.626 11.161a21.333 21.333 0 1 0 40.25-14.156q-1.61-4.583-3-9.224z" fill="#212738" data-original="#000000" class=""/></g></svg>
                            </div>
                            <div class="cp-tag-category__text center ml-20 mr-20">
                                {{ activity.duration }} {{ activity.unit?.type ?? "" }}
                            </div>
                        </div>
                        <!-- budget -->
                        <div class="cp-tag-category d-flex align-center mr-10 mb-20" id="open-modal" expand="block">
                            <div class="cp-tag-category__icon m-0 width-content">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 339.004 339.004" style="enable-background:new 0 0 339.004 339.004;" xml:space="preserve"><path d="M262.122,232.344c0.197-26.82-10.405-48.031-31.552-63.01c-16.333-11.533-36.154-17.549-55.325-23.33  c-39.936-12.107-51.521-18.484-51.521-37.582c0-21.273,27.646-28.842,51.313-28.842c17.236,0,37.066,5.359,49.381,13.301  l24.415-37.812c-16.095-10.434-38.123-17.551-59.875-19.76V0H143.92v37.785c-40.035,8.807-65.255,34.973-65.255,70.637  c0,24.977,10.379,44.785,30.79,58.756c15.524,10.666,34.457,16.393,52.746,21.938c39.172,11.84,55.079,19.055,54.898,42.949  l-0.001,0.176c0,20.055-26.577,27.184-49.346,27.184c-21.508,0-44.897-9.426-58.155-23.441l-32.719,30.949  c16.79,17.758,41.184,30.313,67.041,35.234v36.838h45.039v-36.045C233.445,296.592,262.078,269.809,262.122,232.344z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                            </div>
                            <div class="cp-tag-category__text center ml-20 mr-20">
                                {{ activity.price }}
                            </div>
                        </div>
                        <!-- call company -->
                        <div class="cp-tag-category d-flex align-center mr-10 mb-20">
                            <div class="cp-tag-category__icon m-0 width-content">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 473.806 473.806" style="enable-background:new 0 0 473.806 473.806;" xml:space="preserve"><g><g><path d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4    c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8    c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6    c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5    c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26    c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9    c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806    C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20    c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6    c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1    c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3    c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5    c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8    c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9    l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1    C420.456,377.706,420.456,388.206,410.256,398.806z"/><path d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2    c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11    S248.656,111.506,256.056,112.706z"/><path d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11    c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2    c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                </svg>
                            </div>
                            <!-- href="tel:+496170961709" -->
                            <div class="cp-tag-category__text center ml-20 mr-20">
                                <a :href="`tel:${activity.phone_number}`" class="text-no-decoration">
                                    Call Company
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- Description -->
                    <div class="sec-activity-post__content__description mt-50 justify">
                        {{ activity.description}}
                    </div>
                </div>
                
            </section>
            <!-- *** SEC - Reviews *** -->
            <section class="sec-activity-post__reviews mb-30 relative bck-white z-10" v-if="activity.reviews">
                <div class="container">
                    <!-- Reviews header -->
                    <div class="sec-activity-post__reviews__header relative m-0 mb-30">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="40" height="40" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="m4.7 17.7c-1-1.1-1.6-2.3-1.6-4.3 0-3.5 2.5-6.6 6-8.2l.9 1.3c-3.3 1.8-4 4.1-4.2 5.6.5-.3 1.2-.4 1.9-.3 1.8.2 3.2 1.6 3.2 3.5 0 .9-.4 1.8-1 2.5-.7.7-1.5 1-2.5 1-1.1 0-2.1-.5-2.7-1.1zm10 0c-1-1.1-1.6-2.3-1.6-4.3 0-3.5 2.5-6.6 6-8.2l.9 1.3c-3.3 1.8-4 4.1-4.2 5.6.5-.3 1.2-.4 1.9-.3 1.8.2 3.2 1.6 3.2 3.5 0 .9-.4 1.8-1 2.5s-1.5 1-2.5 1c-1.1 0-2.1-.5-2.7-1.1z" fill="#212738" data-original="#000000"/></g></svg>
                    </div>
                    <div>
                        <h2 class="center">
                            Reviews
                        </h2>
                    </div>
                    <!-- Reviews List -->
                    <div class="sec-activity-post__reviews__content mt-50 mb-30"
                        v-for="review in activity.reviews"
                        :key="review.id"
                    >
                        <!-- Rating -->
                        <div class="sec-activity-post__reviews__content__rating">
                            <!-- IF RATE === 0 -->
                            <div v-if="review.rate === 0">
                                <ion-icon
                                    name="star-outline"
                                    v-for="star in 5"
                                    v-bind:key="star"
                                ></ion-icon>
                            </div>
                            <!-- IF RATE === 1 -->
                            <div v-if="review.rate === 1">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon
                                    name="star-outline"
                                    v-for="star in 4"
                                    v-bind:key="star"
                                ></ion-icon>
                            </div>
                            <!-- IF RATE === 2 -->
                            <div v-if="review.rate === 2">
                                <ion-icon
                                    name="star"
                                    v-for="star in 2"
                                    v-bind:key="star"
                                ></ion-icon>
                                <ion-icon
                                    name="star-outline"
                                    v-for="star in 3"
                                    v-bind:key="star"
                                ></ion-icon>
                            </div>
                            <!-- IF RATE === 3 -->
                            <div v-if="review.rate === 3">
                                <ion-icon
                                    name="star"
                                    v-for="star in 3"
                                    v-bind:key="star"
                                ></ion-icon>
                                <ion-icon
                                    name="star-outline"
                                    v-for="star in 2"
                                    v-bind:key="star"
                                ></ion-icon>
                            </div>
                            <!-- IF RATE === 4 -->
                            <div v-if="review.rate === 4">
                                <ion-icon
                                    name="star"
                                    v-for="star in 4"
                                    v-bind:key="star"
                                ></ion-icon>
                                <ion-icon
                                    name="star-outline"
                                    v-for="star in 1"
                                    v-bind:key="star"
                                ></ion-icon>
                            </div>
                            <!-- IF RATE === 4 -->
                            <div v-if="review.rate === 5">
                                <ion-icon
                                    name="star"
                                    v-for="star in 5"
                                    v-bind:key="star"
                                ></ion-icon>
                            </div>

                        </div>
                        <!-- Title -->
                        <div class="sec-activity-post__reviews__content__title mt-20 bold">
                            {{ review.title }}
                        </div>
                        <div class="d-flex justify-between flex-no-wrap">
                            <!-- User Name -->
                            <div class="sec-activity-post__reviews__content__author small mt-20">
                                By <span class="bold">{{ review.user.name }}</span>
                            </div>
                            <!-- Published at -->
                            <div class="sec-activity-post__reviews__content__published small mt-20">
                                {{ formatDate(review.posted_at) }}
                            </div>
                        </div>
                        <!-- Description -->
                        <div class="sec-activity-post__reviews__content__description mt-20">
                            {{ review.description }}
                        </div>
                    </div>
                    
                </div>
            </section>
            <!-- *** SEC - Add Reviews *** -->
            <section class="sec-activity-post__add-reviews mb-50">
                <div class="container">
                    <div class="sec-activity-post__add-reviews__form" v-if="showForm">
                        <ion-card>
                            <!-- Title -->
                            <ion-item>
                                <ion-label position="floating">Title</ion-label>
                                <ion-input type="text" v-model="title"></ion-input>
                            </ion-item>
                            <!-- Description -->
                            <ion-item>
                                <ion-label position="floating">Description</ion-label>
                                <ion-input type="text" v-model="description"></ion-input>
                            </ion-item>
                            <!-- Rate -->
                            <ion-item>
                                <ion-label position="floating">rate</ion-label>
                                <ion-input type="number" min="0" max="5" v-model="rate"></ion-input>
                            </ion-item>
                            <div class="button-signIn mt-20">
                                <button class="button-basic button-primary w-100" @click.prevent = "addReview()">
                                    add
                                </button>
                            </div>
                        </ion-card>
                    </div>
                    <div class="sec-activity-post__add-reviews__ty-msg center" v-if="!showForm">
                        Your Review has been added !
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
        IonIcon,
        IonCard,
        IonInput,
        IonLabel,
        IonItem,
    } from '@ionic/vue';

    import axios from 'axios';
    import {BackendMixin} from '../mixins/backend';
    import router from '../router';
    import store from '../store';

    // To format date
    import dayjs from 'dayjs';

    export default defineComponent({
    name: 'activity-post',
    mixins: [BackendMixin],
    props: {
        activityId: String,
        unit: []
    },
    components: {
        IonContent,
        IonPage,
        IonIcon,
        IonCard,
        IonInput,
        IonLabel,
        IonItem
    },
    data() {
        return {
            activity: {
                id: Number,
                name: String,
                description: String,
                duration: Number,
                address: String,
                city: String,
                phone_number: String,
                country: String,
                picture: String,
                price: Number,
                reviews: Array,
                favorites: [{
                    id: Number,
                    isFavorite: Boolean,
                    user: [{
                        id: 'Number'
                    }]
                }]
            },
            title: '',
            description: '',
            rate: '',
            average: Math.round(0) as number,
            showForm: true,
        }
    },
    computed: {
        userId() {
            return store.getters.userId
        },
        //create a computed property that checks if the current user has favorited the current activity
        //by comparing the user ID to the user IDs of the favorites associated with the current activity.
        isFavorited() {

            let isFavoriteValue = this.activity.favorites.map(favorite => favorite.isFavorite).find(Boolean);
            let favoriteUserId = this.activity.favorites.map(favorite => favorite.user[0].id);
            let userIdCo = this.userId;

            return Boolean(isFavoriteValue) && favoriteUserId == userIdCo;
            
        },
        isFavoritedAndIsTrue() {
            let isFavorited = this.isFavorited;
            let isTrue = this.activity.favorites.map(favorite => favorite.isFavorite).find(Boolean);
            return isFavorited && isTrue;
        }
    },
    // au moment ou la page est chargé on récup la function
    mounted() {
        this.loadActivity()
        this.averageRate()
    },
    updated(){
        if (this.$route.params.activityId) {
            this.loadActivity()
            this.averageRate()
        }
    },
    methods: {
        // ON CLICK PATCH or POST FAVORITE
        async toggleFavorite() {
           
            if (this.isFavorited) {
                // IF exist DELETE
                await this.deleteFromFavorite();
                await this.loadActivity();
            }
            // ELSE NO FAVORITE EXIST -> ADD IT
            else {
                // If they haven't, add a new favorite with isFavorite set to true
                await this.addToFavorite();
                await this.loadActivity();
            }
        },
        // Add to favorite ***** OK *****
        async addToFavorite(){
            const dataFavorite = {
                user:[{
                    "id": this.userId
                }],
                activity: [{
                    "id": this.$route.params.activityId
                }],
                isFavorite: true
            };
            try {
                await axios.post("http://127.0.0.1:8000/api/favorites", dataFavorite);
            }
            catch (err) {
                console.log("ERREUR", err)
                //this.addError(this.getErrorText(err))
            }
        },
        async deleteFromFavorite() {
            let favoriteId = this.activity.favorites.map(favorite => favorite.id);
            try {
                await axios.delete("http://127.0.0.1:8000/api/favorites/" + favoriteId);
            }
            catch (err) {
                console.log("ERREUR", err)
                //this.addError(this.getErrorText(err))
            }
        },
        // Load the activity by ID
        async loadActivity() {
            try {

                let resp = await axios.get("http://127.0.0.1:8000/api/activities/"+ this.$route.params.activityId)
                
                this.activity = resp.data
                
            }
            catch (err) {
                this.addError(this.getErrorText(err))
            }
        },
        averageRate() {
            axios.get("http://127.0.0.1:8000/api/activities/"+ this.$route.params.activityId + "/average" )
            .then(response => {
                if(response.data.error){
                    this.average = 0
                }else{
                    this.average = response.data;
                }
            })
        },
        // To format date
        formatDate(dateString) {
            const date = dayjs(dateString);
            // Then specify how you want your dates to be formatted
            return date.format('MMMM D, YYYY');
        },
        // Add review
        async addReview(){
            const dataReview = {
                title: this.title,
                description: this.description,
                rate: parseInt(this.rate),
                activity: {"id": this.$route.params.activityId},
                user: {"id": this.userId}
            };
            try {
                await axios.post("http://127.0.0.1:8000/api/reviews", dataReview);
                await this.loadActivity()
                await this.averageRate()
                this.showForm = false
            }
            // REGLER LE PB AVEC JEANDU
            catch (err) {
                console.log("ERREUR", err)
                //this.addError(this.getErrorText(err))
            }
        },
        // Go back
        onClickGoBackToList() {
            router.push({ name: 'explore' }
            )
        }
    }

});
</script>