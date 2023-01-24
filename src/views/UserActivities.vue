<template v-if="isAuthenticated">
    <ion-page>
        <!-- Header -->
        <ion-content :fullscreen="true">
            <!--  *** SEC - EDIT PROFILE HEADER ***-->
            <section class="sec-profile-activities-header border-bottom p-sec">
                <div class="container">
                    <div class="d-flex align-center">
                        <div @click="onClickGoBack()">
                            <ion-icon name="arrow-back"></ion-icon>
                        </div>
                        <div class="h5 bold ml-20">My Activities</div>
                    </div>
                </div>
            </section>
             <!--  *** SEC -  ***-->
             <section class="sec-profile-activities-content p-sec">
                <div class="container">
                    <div class="center">
                        Here you can retrieve the list of activities you have added to the app !
                        Thanks for sharing your experience.
                    </div>
                </div>
            </section>
           <!--  *** SEC -  ***-->
            <section class="sec-profile-activities-cards p-sec">
                <div class="container">
                    <a v-for="activity in activities"
                        :key="activity.id"
                        class="cp-card-activity d-flex align-end"
                        v-bind:style="{ backgroundImage: activity.picture ? 'url(' + activity.picture + ')' : 'url(https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png)' }"
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
                            <!-- Price -->
                            <div class="cp-card-activity__content__price d-flex align-center mt-10">
                                <div class="cp-tag-category__text">
                                    {{ activity.price }} $
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </section>
            
        </ion-content>  
    </ion-page>

</template>


<script lang="ts">
    import { defineComponent } from 'vue';
    import { IonPage, IonContent, IonIcon } from '@ionic/vue';
    import store from '../store';
    import { BackendMixin } from '../mixins/backend';
    import router from '../router';
    import axios from 'axios';

    //recup le token
    export default defineComponent({
    name: 'userActivities',
    mixins: [BackendMixin],
    components: { IonPage, IonContent, IonIcon },

    data() {
        return {
            activities: [{
                id: Number,
                name: String,
                country: String,
                picture: String,
                price: Number
            }]
        }
    },
    mounted() {
        // Display user infos
        this.loadUser()
    },
    computed: {
        username() {
            return store.getters.userName
        },
        isAuthenticated() {
            return store.getters.isAuthenticated
        },
        // To get the infos of the connected user
        user() {
            return store.getters.userProfile
        },
        backendName() {
            return store.getters.backendName
        },
        userProfile() {
            return store.getters.userProfile
        },
        userId() {
            return store.getters.userId
        }
    },
    methods: {
        // Display user infos
        async loadUser() {
            try {
                let resp = await axios.get("http://127.0.0.1:8000/api/users/" + this.userId)
                const user = resp.data
                this.activities = user.activities
                console.log('activities', user);
                
                this.$emit("done")
            }
            catch (err) {
                this.addError(this.getErrorText(err))
            }
        },
        // Go back to profile
        onClickGoBack() {
            router.push({ name: 'profile' })
        }
    },

    });
</script>