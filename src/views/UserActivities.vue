<template >
    <ion-page>
        <!-- Header -->
        <ion-content :fullscreen="true">
            <!--  *** SEC - EDIT PROFILE HEADER ***-->
            <section class="sec-edit-profile-header border-bottom p-sec">
                <div class="container">
                    <div class="d-flex align-center">
                        <div @click="onClickGoBack()">
                            <ion-icon name="arrow-back"></ion-icon>
                        </div>
                        <div class="h5 bold ml-20">My Activities</div>
                    </div>
                </div>
            </section>
           <!--  *** SEC - EDIT PROFILE FORM ***-->
            <section class="p-sec">
                <div class="container">
                    <a v-for="activity in activities"
                        :key="activity.id"
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
                                    4.8
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
    //import axios from 'axios';
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
            name: '',
            description: '',
            activities: []
        }
    },
    mounted() {
        // Display user infos
        this.loadUser()
        console.log("ppl mounted user infos", this.user);
    },
    computed: {
        username() {
            return store.getters.userName
        },
        // isAuthenticated() {
        //     return store.getters.isAuthenticated
        // },
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