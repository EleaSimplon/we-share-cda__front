<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <!-- Header -  -->
            <ion-grid class="search-header w-100">
                <ion-row>
                    <ion-col class="mb-35" size-xs="12" size-sm="12" size-md="12" size-lg="12">
                        <div class="search-header-content">
                            <h1 class="center bold ">We Share</h1>
                            <div class="d-flex align-center justify-center mt-50">
                                <div class="searchbar">
                                <ion-searchbar animated show-cancel-button="always"></ion-searchbar>
                                </div>
                                <div class="search-header-filters">
                                    <button @click="setOpenModal(true)">
                                        <ion-icon name="filter-outline"></ion-icon>
                                    </button>
                                </div>
                            </div>
                            <div class="search-header-filters__filter">
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
                    </ion-col>
                </ion-row>
            </ion-grid>
            <!-- Cards - Activity List -->
            <div class="cards-listing">
                <ion-grid>
                    <ion-row>
                        <!-- {{activities["hydra:member"][0].company}} -->
                        <div class="card-activity__col h-100" v-for="activity in activities['hydra:member']" :key="activity.id">
                            <ion-card class="card-activity w-100 h-100" @click.prevent="onClickActivityPost()">
                                <div class="card-activity__image">
                                    <img src="https://images.pexels.com/photos/5171018/pexels-photo-5171018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">                       
                                </div>
                                <ion-card-header>
                                    <ion-card-subtitle>{{ activity.country }}</ion-card-subtitle>
                                    <ion-card-title>{{ activity.name }}</ion-card-title>
                                </ion-card-header>
                                <ion-card-content>
                                    {{ activity.short_description }}...
                                </ion-card-content>
                                <div class="card-activity__rating center pb-20">
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star-half"></ion-icon>
                                    <ion-icon name="star-outline"></ion-icon>
                                </div>
                            </ion-card>
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
                        
                    </ion-row>
                </ion-grid>
            </div>
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
    IonCol,
    IonGrid,
    IonRow,
    IonSearchbar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
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
  name: 'SearchPage',
  components: {
    IonContent,
    IonPage,
    IonCol,
    IonGrid,
    IonRow,
    IonSearchbar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
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