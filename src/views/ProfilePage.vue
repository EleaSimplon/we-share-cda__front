<template>
    <ion-page>
        <!-- Header -->
        <ion-content :fullscreen="true">
            <!-- ****** --- IF NOT AUTH ---  ****** -->
            <section class="sec-forms-redirect p-sec" v-if="!isAuthenticated">

                <div class="container">
                    <div class="sec-forms-redirect__header center mb-20">
                        <div class="h5 opacity-50">Welcome to</div>
                        <h1>We Share !</h1>
                        <div class="mt-20">Get Inspiration for your next trip !</div>
                        <div class="sec-forms-redirect__header__img mt-20">
                            <img src="https://cdn.dribbble.com/users/743832/screenshots/4291139/media/0c6b26dc77db06b1f374f1d96c043d9c.gif">
                        </div>
                    </div>
                    <!-- buttons forms -->
                    <div class="sec-forms-redirect__buttons">
                        <!-- Button Login -->
                        <div class="sec-forms-redirect__buttons__login mr-10 ml-10 mb-20">
                            <button class="button-basic  button-primary" @click.prevent="onClickLoginPage()">
                                Login
                            </button>
                        </div>
                        <!-- Button Sign In -->
                        <div class="sec-forms-redirect__buttons__register mr-10 ml-10">
                            <button class="button-basic button-secondary" @click.prevent="onClickRegisterPage()">
                                Get started
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ****** --- IF AUTH --- SECS - USER PROFILE ****** -->
            <!--  *** SEC - PROFILE USER HEADER ***-->
            <section class="sec-profile-header p-sec" v-if="isAuthenticated">
                <div class="container">
                    <div class="sec-profile-header__title">
                        <h5 class="bold">My profile</h5>
                    </div>
                    <div class="sec-profile-header__content relative d-flex align-center mt-50">
                        <!-- IMG -->
                        <div class="sec-profile-header__content__picture overflow-hidden">
                            <!-- <img class="w-100 h-100" v-if="{{user.profile_picture}}" src="{{user.profile_picture}}">
                            <img v-else src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img> -->
                            <img src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                        </div>
                        <!-- TAG ROLE -->
                        <!-- <div class="sec-profile-header__content__role-tag absolute" v-if="user.roles[0] === 'ROLE_ADMIN'">
                            Amdin
                        </div> -->
                        <div class="sec-profile-header__content__infos ml-20">
                            <div class="opacity-50">
                                Welcome back,
                            </div>
                            <div class="mt-10">
                                <div class="h3">{{user.name}} !</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- *** SEC - PROFILE USER ***-->
            <section class="sec-profile-infos p-sec" v-if="isAuthenticated">
                <div class="container">
                    <div class="opacity-50">
                        About,
                    </div>
                    <div class="mt-10">
                        {{user.description}}
                    </div>
                </div>
            </section> 
            <!-- *** SEC - LIST ***  -->
            <section class="sec-profile-list p-sec" v-if="isAuthenticated">
                <div class="container">
                    <div class="sec-profile-list__content">
                        <!-- Activities -->
                        <div class="sec-profile-list__content__activities d-flex align-center border-bottom pt-pb-20" @click.prevent="onClickMyActivities()">
                            <ion-icon name="airplane"></ion-icon>
                            <div class="h4 ml-20">My Activities</div>
                        </div>
                        <!-- Reviews -->
                        <div class="sec-profile-list__content__reviews d-flex align-center border-bottom pt-pb-20" @click.prevent="onClickMyReviews()">
                            <ion-icon name="create-outline"></ion-icon>
                            <div class="h4 ml-20">My Reviews</div>
                        </div>
                        <!-- Favorites -->
                        <div class="sec-profile-list__content__favorites d-flex align-center border-bottom pt-pb-20" @click.prevent="onClickMyFavorites()">
                            <ion-icon name="heart"></ion-icon>
                            <div class="h4 ml-20">My Favorites</div>
                        </div>
                        <!-- Edit -->
                        <div class="sec-profile-list__content__favorites d-flex align-center border-bottom pt-pb-20"  @click.prevent="onClickEditProfile()">
                            <ion-icon name="person"></ion-icon>
                            <div class="h4 ml-20">Edit my profile</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- *** SEC - Button LogOut *** -->
            <section class="button-logout center p-sec mt-50" v-if="isAuthenticated">
                <div class="container">
                    <button class="button-basic button-mustard w-100" @click.prevent="onLogout()">
                        LogOut
                    </button>
                </div>
            </section>
        
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { IonPage, IonContent, IonIcon } from '@ionic/vue';
    import axios from 'axios';
    import store from '../store';
    import {BackendMixin} from '../mixins/backend';
    import router from '../router';


    // import pagination
    //import VueAwesomePaginate from "vue-awesome-paginate";
    //import "vue-awesome-paginate/dist/style.css";
    // Register the package
    //createApp(App).use(VueAwesomePaginate).mount("#app");


    export default defineComponent({
        name: 'ProfilePage',
        mixins: [BackendMixin],
        components: { IonContent, IonPage, IonIcon },
        // Recup les data passées dans les inputs
        data(){
        // console.log(store.state.auth);
            return {
                name: '',
                email: '',
                password: '',
                description: '',
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
            isAuthenticated() {
                return store.getters.isAuthenticated
            },
            backendName() {
                return store.getters.backendName
            },
            // To get the infos of the connected user
            user() {
                return store.getters.userProfile
            },
            userId() {
                return store.getters.userId
            },
            userProfile() {
                return store.getters.userProfile
            }
        },
    
        // Create a method asyn to get the data and send it to the api using axios
        // axios va encrer une method qui va appeler l'api
        // axios facilite les appelles api
        methods: {
            onLogout() {
                this.logout().then(() => {
                    router.push({ name: 'profile', }).then(
                        () => {
                            window.location.reload()
                            //console.log('logout')
                        }
                    )
                })
            },
            // Display user infos
            async loadUser() {
                try {
                    let resp = await axios.get("http://127.0.0.1:8000/api/users/" + this.userId)
                    this.user = resp.data
                    this.$emit("done")
                }
                catch (err) {
                    this.addError(this.getErrorText(err))
                }
            },
            // **** REDIRECT ROUTE ****
            // Login Page
            onClickLoginPage() {
                router.push({ name: 'loginPage' })
            },
            // Register Page
            onClickRegisterPage() {
                router.push({ name: 'registerPage' })
            },
            // Edit Profile
            onClickEditProfile() {
                router.push({ name: 'editProfile' })
            },
            // User activities
            onClickMyActivities() {
                router.push({ name: 'userActivities' })
            },
            // User favorites
            onClickMyFavorites() {
                router.push({ name: 'userFavorites' })
            },
            // User reviews
            onClickMyReviews() {
                router.push({ name: 'userReviews' })
            }
        },
    });
</script>