<template v-if="isAuthenticated">
    <ion-page>
        <!-- Header -->
        <ion-content :fullscreen="true">
            <!--  *** SEC - EDIT PROFILE HEADER ***-->
            <section class="sec-profile-favorites-header border-bottom p-sec">
                <div class="container">
                    <div class="d-flex align-center">
                        <div @click="onClickGoBack()">
                            <ion-icon name="arrow-back"></ion-icon>
                        </div>
                        <div class="h5 bold ml-20">My favorites</div>
                    </div>
                </div>
            </section>
             <!--  *** SEC -  ***-->
             <section class="sec-profile-favorites-content p-sec">
                <div class="container">
                    <div class="center">
                        Here you can retrieve the list of activities you have added to your Favorite !
                    </div>
                </div>
            </section>
           <!--  *** SEC - EDIT PROFILE FORM ***-->
            <section class="sec-profile-favorites-cards p-sec">
                <div class="container">
                    <div
                        v-for="favorite in favorites"
                        :key="favorite.id"
                        class="mb-30"
                    >
                        <a
                            v-for="fav in favorite.activity"
                            :key="fav.id"
                            class="cp-card-activity d-flex align-end"
                            v-bind:style="{ backgroundImage: fav.picture ? 'url(' + fav.picture + ')' : 'url(https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png)' }"
                        >
                            <div class="cp-card-activity__content">
                                <div class="cp-card-activity__content__location">
                                    {{ fav.country }}
                                </div>
                                <div class="cp-card-activity__content__name bold mt-5">
                                    {{ fav.name }}
                                </div>
                                <div class="cp-card-activity__content__price d-flex align-center mt-10">
                                    <div class="cp-tag-category__text">
                                        {{ fav.price }} $
                                    </div>
                                </div>
                            </div>
                        </a>
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
    import axios from 'axios';
    import { BackendMixin } from '../mixins/backend';
    import router from '../router';

    //recup le token
    export default defineComponent({
    name: 'userFavorites',
    mixins: [BackendMixin],
    components: { IonPage, IonContent, IonIcon },
    data(){
        return {
            favorites: [{
                actvity: [{
                    id: Number
                }]
            }],
        }
    },
    mounted() {
        // Display user infos
        this.loadUser()
    },
    updated(){
        this.loadUser()
    },
    computed: {
        username() {
            return store.getters.userName
        },
        isAuthenticated() {
            return store.getters.isAuthenticated
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
                this.favorites = user.favorites
                console.log(user.favorites[0].activity[0].id);

                this.$emit("done")
            }
            catch (err) {
                this.addError(this.getErrorText(err))
            }
        },
        // On click go to activity post

        // Go back to profile
        onClickGoBack() {
            router.push({ name: 'profile' }
            )
        }
    },

    });
</script>