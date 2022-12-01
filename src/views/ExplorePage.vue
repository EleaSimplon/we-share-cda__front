<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <!-- Header -->
            <section class="sec-search-header w-100">
                <div class="sec-search-header__content">
                    <h1 class="center bold ">Explore</h1>
                    <div class="d-flex align-center justify-center mt-50">
                        <div class="searchbar">
                        <ion-searchbar animated show-cancel-button="always"></ion-searchbar>
                        </div>
                        <div class="sec-search-header__content__modal">
                            <button @click="setOpenModal(true)">
                                <ion-icon name="filter-outline"></ion-icon>
                            </button>
                        </div>
                    </div>
                    <div class="sec-search-header__modal__filters">
                        <ion-modal :is-open="isModalOpen">
                            <ion-content>
                                <ion-toolbar>
                                    <ion-title>Filters</ion-title>
                                    <ion-buttons slot="end">
                                        <ion-button color="light" @click="setOpenModal(false)">
                                            <ion-icon name="close-outline">X</ion-icon>
                                        </ion-button>
                                    </ion-buttons>
                                </ion-toolbar>
                                <ion-list>
                                    <ion-item>
                                        <ion-label>Pet Friendly</ion-label>
                                        <ion-toggle>
                                        </ion-toggle>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label>Kids</ion-label>
                                        <ion-toggle>
                                        </ion-toggle>
                                    </ion-item>
                                    <ion-accordion-group>
                                        <ion-accordion value="first">
                                            <ion-item slot="header">
                                                <ion-label>Budget</ion-label>
                                            </ion-item>
                                            <div class="ion-padding" slot="content">
                                                First Content
                                            </div>
                                        </ion-accordion>
                                    </ion-accordion-group>
                                </ion-list>
                            </ion-content>
                        </ion-modal>
                    </div>
                </div>
            </section>
            <!-- Cards - Activity List -->
            <section class="sec-cards-listing">
                <div class="d-flex justify-center flex-wrap">
                    <!-- CP- Card -->
                    <!-- {{activities["hydra:member"][0].company}} -->
                    <a v-for="activity in activities['hydra:member']" :key="activity.id" class="cp-card-activity-home d-flex align-end" style="background-image: url('https://images.pexels.com/photos/5098033/pexels-photo-5098033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');" @click.prevent="onClickActivityPost()">
                        <!-- Content -->
                        <div class="cp-card-activity-home__content">
                            <!-- Country -->
                            <div class="cp-card-activity-home__content__location">
                                {{ activity.country }}
                            </div>
                            <!-- Name -->
                            <div class="cp-card-activity-home__content__name bold mt-5">
                                {{ activity.name }}
                            </div>
                            <!-- Rate -->
                            <div class="cp-card-activity-home__content__rate d-flex align-center mt-10">
                                <div class="cp-card-activity-home__content__rate__icon">
                                    <ion-icon name="star"></ion-icon>
                                </div>
                                <div class="cp-card-activity-home__content__rate__number ml-10">
                                    4.8
                                </div>
                            </div>
                        </div>
                    </a>
                </div> 
                <!-- <div v-for="card in cards" :key="card.id">
                            <card-post
                                :image="card.image"
                                :shortDescription="card.short_description"
                                :country="card.country"
                                :name="card.name"
                                >
                            </card-post>
                        </div> -->
            </section>
        </ion-content>
        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
            <ion-fab-button color="dark" class="sec-card-activity__btn-add" @click.prevent="onClickAddActivity()">
                <ion-icon name="add-outline"></ion-icon>
            </ion-fab-button>
        </ion-fab>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
// import CardPost from '../components/CardPost.vue';
import {
    IonPage,
    IonContent,
    IonSearchbar,
    /*
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    */
    IonFab,
    IonFabButton,
    IonIcon,
    IonToolbar,
    IonTitle,
    IonItem,
    IonList,
    IonButtons,
    IonButton,
    IonModal,
    IonLabel,
    IonToggle,
    IonAccordion, 
    IonAccordionGroup } from '@ionic/vue';
import router from '../router'
//CardPost
export default defineComponent({
  name: 'ExplorePage',
  components: {
    IonContent,
    IonPage,
    IonSearchbar,
    /*
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    */
    IonFab,
    IonFabButton,
    IonIcon,
    IonToolbar,
    IonTitle,
    IonItem,
    IonList,
    IonButtons,
    IonButton,
    IonModal,
    IonLabel,
    IonToggle,
    IonAccordion, 
    IonAccordionGroup },
    data() {
        return {
            filter: false,
            isModalOpen: false,
            activities: []
        }
    },
    mounted() {
        this.loadActivities();
    },
    methods: {
        onClickAddActivity() {
            router.push({ name: 'addActivity' })
        },
        onClickActivityPost() {
            router.push({ name: 'activityPost' })
        },
        setOpenModal(isModalOpen: boolean) {
            this.isModalOpen = isModalOpen;
        },
        async loadActivities() {
            await axios.get("http://127.0.0.1:8000/api/activities/")
            .then((response) => {
                this.activities = response.data;
                console.log(response.data);
            }).catch(e => {
                console.log('Error', e);
            });
        }
    },
});
</script>