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
                        <!-- Col 6 Card -->
                        <ion-col class="mb-20 h-100" size-xs="6" size-sm="6" size-md="4" size-lg="3">
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
                                </ion-card-content>
                            </ion-card>
                        </ion-col>
                        <!-- Col 6 Card -->
                        <ion-col class="mb-20 h-100" size-xs="6" size-sm="6" size-md="4" size-lg="3">
                            <ion-card class="h-100" href="#" >
                                <div class="card-activity__image">
                                    <img src="https://images.pexels.com/photos/5171018/pexels-photo-5171018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">                            
                                </div>
                                <ion-card-header>
                                    <ion-card-subtitle>Country</ion-card-subtitle>
                                    <ion-card-title>Activity Name</ion-card-title>
                                </ion-card-header>
                                <ion-card-content>
                                Short description short description short description
                                </ion-card-content>
                            </ion-card>
                        </ion-col>
                        <!-- Col 6 Card -->
                        <ion-col class="mb-20 h-100" size-xs="6" size-sm="6" size-md="4" size-lg="3">
                            <ion-card class="h-100" href="#" >
                                <div class="card-activity__image">
                                    <img src="https://images.pexels.com/photos/5171018/pexels-photo-5171018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">                            
                                </div>
                                <ion-card-header>
                                    <ion-card-subtitle>Country</ion-card-subtitle>
                                    <ion-card-title>Activity Name</ion-card-title>
                                </ion-card-header>
                                <ion-card-content>
                                Short description short description short description
                                </ion-card-content>
                            </ion-card>
                        </ion-col>
                        <!-- Col 6 Card -->
                        <ion-col class="mb-20 h-100" size-xs="6" size-sm="6" size-md="4" size-lg="3">
                            <ion-card class="h-100" href="#" >
                                <div class="card-activity__image">
                                    <img src="https://images.pexels.com/photos/5171018/pexels-photo-5171018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">                            
                                </div>
                                <ion-card-header>
                                    <ion-card-subtitle>Country</ion-card-subtitle>
                                    <ion-card-title>Activity Name</ion-card-title>
                                </ion-card-header>
                                <ion-card-content>
                                Short description short description short description
                                </ion-card-content>
                            </ion-card>
                        </ion-col>
                        <!-- Col 6 Card -->
                        <ion-col class="mb-20 h-100" size-xs="6" size-sm="6" size-md="4" size-lg="3">
                            <ion-card class="h-100" href="#" >
                                <div class="card-activity__image">
                                    <img src="https://images.pexels.com/photos/5171018/pexels-photo-5171018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">                            
                                </div>
                                <ion-card-header>
                                    <ion-card-subtitle>Country</ion-card-subtitle>
                                    <ion-card-title>Activity Name</ion-card-title>
                                </ion-card-header>
                                <ion-card-content>
                                Short description short description short description
                                </ion-card-content>
                            </ion-card>
                        </ion-col>
                        <!-- Col 6 Card -->
                        <ion-col class="mb-20 h-100" size-xs="6" size-sm="6" size-md="4" size-lg="3">
                            <ion-card class="h-100" href="#" >
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
                        </ion-col>
                        <!-- 
                            <div v-for="card in cards" :key="card.id">
                                <card-post
                                    :image="card.image"
                                    :shortDescription="card.short_description"
                                    :country="card.country"
                                    :name="card.name"
                                    >
                                </card-post>
                            </div>
                        -->
                    </ion-row>
                </ion-grid>
            </div>
        </ion-content>
        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
            <ion-fab-button @click.prevent="onClickAddActivity()">
                <ion-icon name="add-outline"></ion-icon>
            </ion-fab-button>
        </ion-fab>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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
        }
    },
    methods: {
        onClickAddActivity() {
            router.push({ name: 'addActivity' })
        },
        setOpenModal(isModalOpen: boolean) {
            this.isModalOpen = isModalOpen;
        },
    },
});
</script>