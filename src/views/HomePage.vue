<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <!-- SEC - HEADER -->
            <section class="sec-home-header p-sec">
                <div class="container">
                    <h1 class="center bold">Discover</h1>
                </div>
            </section>
            <!-- SEC - SEARCH BAR -->
            <section class="sec-home-search p-sec">
                <div class="container">
                    <div class="sec-home-search__bar">
                        <ion-searchbar class="custom" animated="true" placeholder="Animated"></ion-searchbar>
                    </div>
                </div>
            </section>
            <!-- SEC - TOP RATED -->
            <section class="sec-home-top-rated p-sec">
                <div class="container">
                    <!-- Title -->
                    <div class="sec-home-top-rated__title mb-25">
                        <h4 class="bold">Latest activities</h4>
                    </div>
                    <div class="sec-home-top-rated__cards d-flex">
                        <!-- CP- Card -->
                        <a
                            v-for="activity in activities"
                            :key="activity.id"
                            @click.prevent="onClickActivityPost(activity)"
                            class="cp-card-activity d-flex align-end"
                            v-bind:style="{ backgroundImage: 'url(' + activity.picture + ')' }"
                        >
                            <!-- Content -->
                            <div class="cp-card-activity__content">
                                <!-- Name -->
                                <div class="cp-card-activity__content__location">
                                    {{ activity.country }}
                                </div>
                                <!-- Name -->
                                <div class="cp-card-activity__content__name h6 bold mt-5">
                                    {{ activity.name }}
                                </div>
                                <!-- Price -->
                                <div class="cp-card-activity__content__price d-flex align-center mt-10">
                                    <div class="cp-tag-category__text">
                                        {{ activity.price }} $
                                    </div>
                                </div>
                             </div>
                        </a>
                        
                    </div>
                </div>
            </section>
            <!-- SEC - CATEGORIES -->
            <section class="sec-home-categories p-sec">
                <div class="container">
                    <!-- Title -->
                    <div class="sec-home-categories__title mb-25">
                        <h4 class="bold">Popular categories</h4>
                    </div>
                    <!-- Category list -->
                    <div class="sec-home-categories__list d-flex">
                        <!-- Mountains -->
                        <div class="cp-tag-category mr-10 d-flex align-center">
                            <div class="cp-tag-category__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 489.854 489.854" style="enable-background:new 0 0 489.854 489.854;" xml:space="preserve">
                                    <path d="M485.014,392.413c-36.617-51.589-148.913-211.11-148.913-211.11c-2.688-3.828-6.929-6.304-11.584-6.778  c-4.682-0.451-9.3,1.092-12.719,4.287l-29.426,27.545l-69.05-128.155c-2.8-5.172-8.161-8.433-14.046-8.512  c-5.778-0.26-11.345,3.03-14.272,8.125L2.151,395.902c-2.879,5.016-2.863,11.185,0.016,16.192c2.911,5,8.26,8.085,14.034,8.085  h457.138c0.111-0.016,0.222-0.008,0.313,0c8.959,0,16.202-7.253,16.202-16.2C489.854,399.446,487.439,395.83,485.014,392.413z   M289.175,244.384l31.169-29.197l61.973,87.856l-52.577-54.766c-0.854-0.879-2.025-1.386-3.26-1.401  c-1.199-0.008-2.387,0.474-3.256,1.338l-37.499,37.45c-1.299,1.304-3.261,1.694-4.968,0.981c-1.708-0.705-2.816-2.373-2.8-4.217  l0.143-34.056C282.15,248.372,286.137,247.21,289.175,244.384z M198.594,119.195l40.203,74.591l-30.189,26.628  c-0.933,0.832-2.184,1.235-3.415,1.124c-1.251-0.111-2.406-0.736-3.165-1.717l-19.351-24.556c-0.917-1.162-2.343-1.811-3.812-1.731  c-1.489,0.079-2.848,0.877-3.622,2.128l-29.255,46.65c-0.917,1.447-2.565,2.27-4.273,2.111c-1.708-0.157-3.197-1.265-3.828-2.855  l-3.923-9.936L198.594,119.195z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                </svg>
                            </div>
                            <div class="cp-tag-category__text small ml-20 mr-20">
                                Mountains
                            </div>
                        </div>
                        <!-- Cultural -->
                        <div class="cp-tag-category mr-10 d-flex align-center">
                            <div class="cp-tag-category__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 511.941 511.941" height="512" viewBox="0 0 511.941 511.941" width="512"><g><path d="m120.971 0c-33.091 0-60 26.909-60 60s26.909 61 60 61 60-27.909 60-61-26.909-60-60-60z"/><path d="m450.971 60c0-33.091-26.909-60-60-60s-60 26.909-60 60 26.909 61 60 61 60-27.909 60-61z"/><path d="m175.166 455.08c34.915 29.297 43.51 37.55 52.855 45.495 8.906 7.573 20.024 11.367 31.143 11.367 11.221 0 22.441-3.867 31.348-11.572 16.271-14.086 33.904-30.339 49.763-44.242-8.513-2.86-16.531-7.425-23.22-14.121-17.811-17.789-22.758-44.738-11.499-68.324-30.586-16.192-68.529-16.15-99.131.068 11.204 23.558 6.266 50.475-11.552 68.271-5.778 5.775-12.502 10.133-19.707 13.058z"/><circle cx="255.971" cy="271" r="30"/><path d="m255.971 192.25c-20.537-37.002-55.986-69.038-106.26-69.038-69.141 0-121.274 56.045-121.274 130.356 0 65.643 44.645 113.774 115.203 174.664 10.386 3.122 22.026.551 30.037-7.438 12.292-12.261 11.296-32.223-1.216-43.594-64.395-58.506-84.023-85.735-84.023-116.233h30c0 18.898 18.433 42.793 69.009 89.208 41.719-24.481 95.347-24.428 137.051.002 50.574-46.415 69.009-70.312 69.009-89.21h30c0 30.498-19.629 57.727-84.023 116.233-12.442 11.309-13.566 31.274-1.23 43.579 10.115 10.087 25.86 11.224 37.712 3.517 75.026-68.353 107.542-110.757 107.542-170.729 0-74.312-52.134-130.356-121.274-130.356-50.292.001-85.726 32.037-106.263 69.039zm60 78.75c0 33.091-26.909 60-60 60s-60-26.909-60-60 26.909-60 60-60 60 26.909 60 60z"/></g>
                                </svg>
                            </div>
                            <div class="cp-tag-category__text small ml-20 mr-20">
                                Familly
                            </div>
                        </div>
                        <!-- Pet Friendly -->
                        <div class="cp-tag-category mr-10 d-flex align-center">
                            <div class="cp-tag-category__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 446.065 446.065" style="enable-background:new 0 0 446.065 446.065;" xml:space="preserve" width="512" height="512"><g><g id="Pet_Allowed">
                                    <path d="M297.021,0.557c-26.628-4.79-52.103,21.905-58.418,57.711c-6.523,36.992,8.918,69.586,35.152,74.211    c26.635,4.769,52.1-21.871,58.418-57.711C338.696,37.775,323.255,5.182,297.021,0.557z"/>
                                    <path d="M381.036,109.205c-20.469-7.453-44.621,9.031-55,37.508c-10.363,28.484-2.449,56.633,18.023,64.086    c20.429,7.45,44.612-8.998,54.992-37.516C409.052,145.827,402.015,116.838,381.036,109.205z"/>
                                    <path d="M120.021,146.713c-10.012-27.512-34.072-45.148-54.988-37.508c-20.993,7.635-28.014,36.637-18.02,64.078    c10.384,28.527,34.568,44.966,54.996,37.516C122.981,203.169,130.023,174.175,120.021,146.713z"/>
                                    <path d="M210.431,58.268c-6.3-35.721-31.714-62.496-58.418-57.711c-26.234,4.625-41.676,37.219-35.152,74.211    c5.937,33.68,30.291,62.747,58.418,57.711C201.513,127.854,216.954,95.26,210.431,58.268z"/>
                                    <path d="M373.432,351.745c-13.879,15.715-33.834,24.717-54.8,24.72c5.824-52.796-32.254-100.317-85.05-106.141    c-52.796-5.824-100.317,32.254-106.141,85.05c-0.77,6.982-0.773,14.028-0.009,21.011c-20.443-0.319-39.798-9.269-53.28-24.64    c-18.975-24.177-16.771-58.748,5.12-80.32c17.48-15.672,38.954-21.649,50.08-38.88c10.511-16.276,12.72-38.179,25.28-56.64    c28.627-41.655,114.581-39.869,139.92,0.48c11.83,19.123,12.862,41.564,24.08,57.68c15.253,21.808,32.345,21.86,49.68,37.36    C390.204,292.998,392.407,327.568,373.432,351.745L373.432,351.745z"/>
                                    <path d="M223.032,285.745c-44.271-0.041-80.193,35.815-80.233,80.086s35.815,80.193,80.086,80.233    c40.371,0.037,74.47-29.954,79.587-70c5.579-43.951-25.527-84.102-69.478-89.682C229.69,285.964,226.363,285.751,223.032,285.745z     M256.792,349.025l-39.12,44.32c-2.887,3.314-7.914,3.659-11.228,0.772c-0.275-0.239-0.533-0.497-0.772-0.772l-16.4-18.56    c-2.88-3.346-2.502-8.392,0.844-11.272c3.294-2.835,8.249-2.519,11.156,0.712l10.4,11.76l33.12-37.6    c2.977-3.279,8.049-3.524,11.328-0.547C259.345,340.767,259.643,345.733,256.792,349.025L256.792,349.025z"/></g></g>
                                </svg>
                            </div>
                            <div class="cp-tag-category__text small ml-20 mr-20">
                                Pet friendly
                            </div>
                        </div>
                        <!-- Familly -->
                        <div class="cp-tag-category mr-10 d-flex align-center">
                            <div class="cp-tag-category__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" enable-background="new 0 0 480 480" height="512" viewBox="0 0 480 480" width="512"><g><path d="m445.526 127c5.512 0 9.382 5.444 7.555 10.645-2.524 7.181-8.394 15.355-22.081 15.355h-382c-13.686 0-19.556-8.173-22.08-15.355-1.828-5.2 2.042-10.645 7.554-10.645z"/><path d="m213.227 362h-53.785c-4.527 0-8.152-3.753-7.995-8.278l6.145-177c.15-4.308 3.685-7.722 7.995-7.722h41.496c4.31 0 7.846 3.415 7.995 7.722l6.145 177c.157 4.525-3.468 8.278-7.996 8.278z"/><path d="m103.894 362.002c-31.287.007-46.338-.005-53.794-.006-4.527 0-8.147-3.754-7.99-8.277l6.143-176.996c.149-4.308 3.685-7.723 7.995-7.723h41.506c4.31 0 7.846 3.415 7.995 7.722l6.145 177.002c.156 4.524-3.474 8.277-8 8.278z"/><path d="m320.558 362h-53.785c-4.527 0-8.152-3.753-7.995-8.278l6.145-177c.15-4.308 3.685-7.722 7.995-7.722h41.496c4.31 0 7.846 3.415 7.995 7.722l6.145 177c.156 4.525-3.469 8.278-7.996 8.278z"/><path d="m429.899 361.995c-7.449.001-22.49.013-53.792.007-4.526-.001-8.156-3.754-7.999-8.278l6.145-177.002c.15-4.308 3.685-7.722 7.995-7.722h41.506c4.31 0 7.846 3.415 7.995 7.723l6.142 176.995c.157 4.524-3.466 8.277-7.992 8.277z"/><path d="m451.175 406.127c-56.457-.227-365.846-.187-422.333.011-5.144.018-9.017-4.764-7.826-9.769 1.936-8.137 7.448-18.369 22.984-18.369h392c15.585 0 21.086 10.234 23.007 18.372 1.18 5.002-2.692 9.775-7.832 9.755z"/><path d="m480 81.71v5.29c0 13.23-10.77 24-24 24h-432c-13.23 0-24-10.77-24-24v-5.29c0-10.88 7.34-20.42 17.86-23.2l220.09-58.24c1.34-.36 2.76-.36 4.1 0l220.09 58.24c10.52 2.78 17.86 12.32 17.86 23.2z"/><path d="m480 446v26c0 4.42-3.58 8-8 8h-464c-4.42 0-8-3.58-8-8v-26c0-13.23 10.77-24 24-24h432c13.23 0 24 10.77 24 24z"/></g>
                                </svg>
                            </div>
                            <div class="cp-tag-category__text small ml-20 mr-20">
                                Cultural
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- SEC - NEAR BY -->
            <section class="sec-home-form p-sec">
                <div class="container">
                    <!-- Title -->
                    <div class="sec-home-near-by__title mb-25">
                        <h4 class="bold">What activity suits me best ?</h4>
                    </div>
                    <button class="button-basic button-mustard">
                        Click here to see the results !
                    </button>
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
    IonSearchbar
    } from '@ionic/vue';
    import axios from 'axios';
import router from '../router';

    export default  defineComponent({
        name: 'HomePage',
        components: {
            IonContent,
            IonPage,
            IonIcon,
            IonSearchbar
        },
        data() {
            return {
                activities: [{
                    id: Number,
                    name: String,
                    price: Number,
                    picture: String,
                    country: String
                }],
                activity: [],
                activityId: ''
            }
        },
        mounted() {
            this.displayLatestActivities();
        },
        methods: {
            // Display the 5 latest activities
            async displayLatestActivities() {
                await axios.get("http://127.0.0.1:8000/api/activities/latest")
                .then((response) => {
                    this.activities = response.data;
                    console.log(response.data);
                    
                }).catch(e => {
                    console.log('Error', e);
                });
            },
            // On click go to activity show
            onClickActivityPost(activity) {
                this.activityId = activity.id
                //console.log('ROUTER', this.activityId);
                router.push({ name: 'activityPost', params: { activityId: this.activityId }})
            }
        }
    });

</script>