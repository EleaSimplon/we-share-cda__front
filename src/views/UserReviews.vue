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
                        <div class="h5 bold ml-20">My reviews</div>
                    </div>
                </div>
            </section>
           <!--  *** SEC - EDIT PROFILE FORM ***-->
            <section class="p-sec">
                <div class="container">
                    <div
                        v-for="review in reviews"
                        :key="review.id"
                    >
                        {{ review }}
                    </div>
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
    name: 'userReviews',
    mixins: [BackendMixin],
    components: { IonPage, IonContent, IonIcon },
    data() {
        return {
            reviews: []
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
                this.reviews = user.reviews
                
                this.$emit("done")
            }
            catch (err) {
                this.addError(this.getErrorText(err))
            }
        },
        // Go back to profile
        onClickGoBack() {
            router.push({ name: 'profile' }
            )
        }
    },

    });
</script>