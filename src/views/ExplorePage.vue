<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <!-- *** SEC - Header *** -->
            <section class="sec-search-header p-sec w-100">
                <div class="container">
                    <div class="sec-search-header__content">
                        <h1 class="center bold ">Explore</h1>
                        <div class="d-flex align-center justify-center mt-50">
                            <div class="searchbar">
                                <ion-searchbar animated show-cancel-button="always" v-model="search"></ion-searchbar>
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
                </div>
            </section>
            <!-- *** SEC - Cards Activity List ***-->
            <section class="sec-cards-listing">
                <div class="d-flex justify-center flex-wrap">
                    <!-- CP- Card -->
                    <!-- {{activities["hydra:member"][0].company}} -->
                    <a v-for="activity in activities"
                        :key="activity.id"
                        @click.prevent="onClickActivityPost(activity)"
                        class="cp-card-activity d-flex align-end"
                        style="background-image: url('https://images.pexels.com/photos/5098033/pexels-photo-5098033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');"
                    >
                        <!-- Content -->
                        <div class="cp-card-activity__content">
                            <!-- Country -->
                            <div class="cp-card-activity__content__location">
                                {{ activity.country }}
                            </div>
                            <!-- Name -->
                            <div class="cp-card-activity__content__name bold mt-5">
                                {{ activity.name }}
                            </div>
                            <!-- Rate -->
                            <div class="cp-card-activity__content__rate d-flex align-center mt-10">
                                <div class="cp-card-activity__content__rate__icon">
                                    <ion-icon name="star"></ion-icon>
                                </div>
                                <div class="cp-card-activity__content__rate__number ml-10">
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
    import {BackendMixin} from '../mixins/backend';
    // import CardPost from '../components/CardPost.vue';
    import {
        IonPage,
        IonContent,
        IonSearchbar,
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
        IonAccordionGroup
    } from '@ionic/vue';
    import router from '../router';
    import { mapActions } from 'vuex';
    //CardPost
    export default defineComponent({
    name: 'ExplorePage',
    mixins: [BackendMixin],
    components: {
        IonContent,
        IonPage,
        IonSearchbar,
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
                activities: [],
                activity: [],
                activityId: '',
                search: '',
                averageRates: {}
            }
        },
        created() {
            axios.get('/api/activities')
            .then(response => {
                this.activities = response.data;
            });
        },
        mounted() {
            this.loadActivities();
        },
        methods: {
            ...mapActions(["addError", "addSuccess"]),
            // Open filters modal
            setOpenModal(isModalOpen: boolean) {
                this.isModalOpen = isModalOpen;
            },
            // Display List of activities
            async loadActivities() {
                await axios.get("http://127.0.0.1:8000/api/activities/")
                .then((response) => {
                    this.activities = response.data;
                }).catch(e => {
                    console.log('Error', e);
                });
            },
            // averageRate(activity) {
            //     this.activityId = activity.id
            //     axios.get("http://127.0.0.1:8000/api/activities/"+ this.activityId + "/average" )
            //     .then(response => {
            //         this.average = response.data;
            //     })
            // },
            // Function for the serach bar
            // filteredList() {
            //     return this.activities.filter(activity => {
            //         return activity.name.toLowerCase().includes(this.search.toLowerCase());
            //     });
            // },
            // Push to page add activity
            onClickAddActivity() {
                router.push({ name: 'addActivity' })
            },

            // On click go to activity show
            onClickActivityPost(activity) {
                this.activityId = activity.id
                //console.log('ROUTER', this.activityId);
                router.push({ name: 'activityPost', params: { activityId: this.activityId }})
            }
        },
    });
</script>