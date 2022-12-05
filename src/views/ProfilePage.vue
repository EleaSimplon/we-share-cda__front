<template>
    <ion-page>
        <!-- Header -->
        <ion-content :fullscreen="true">
            <!-- ***** IF NOT AUTH ***** -->
            <div v-if="!isAuthenticated">
                <!-- buttons forms -->
                <div class="d-flex justify-center">
                    <!-- Button Login -->
                    <div class="button-signIn mr-10 ml-10">
                        <button class="button-basic  button-primary" @click.prevent = "isRegistered = false">
                            Login
                        </button>
                    </div>
                    <!-- Button Sign In -->
                    <div class="button-signIn mr-10 ml-10">
                        <button class="button-basic button-secondary"  @click.prevent = "isRegistered = true">
                            Sign Up
                        </button>
                    </div>
                </div>
                <!-- Form -->
                <!-- Request POST ON ROUTE LOCALHOST  -->
                <ion-card>
                    <!-- register -->
                    <div class="form-signIn p-20" v-if="isRegistered === true">
                        <h3 class="center">Please, register here :</h3>
                        <!-- Name -->
                        <ion-item>
                            <ion-label position="floating">Enter your Name</ion-label>
                            <ion-input type="text" v-model="name"></ion-input>
                        </ion-item>
                        <!-- Email -->
                        <ion-item>
                            <ion-label position="floating">Enter your email</ion-label>
                            <ion-input type="email" v-model="email"></ion-input>
                        </ion-item>
                        <!-- Password -->
                        <ion-item>
                            <ion-label position="floating">Enter your password</ion-label>
                            <ion-input type="password" v-model="password"></ion-input>
                        </ion-item>
                        <!-- Description -->
                        <ion-item>
                            <ion-label position="floating">Enter your description</ion-label>
                            <ion-input type="text" v-model="description"></ion-input>
                        </ion-item>
                        <!-- Profile Picture -->
                        <!-- multi part form data -->
                        <!-- graphic art  -->
                        <!-- {{ email }}
                        {{ password }} -->

                        <!-- Button Submit-->
                        <div class="button-signIn mt-20">
                            <button class="button-basic button-primary w-100" @click.prevent = "signUp()" >
                                Sign Up
                            </button>
                        </div>
                    </div>
                    <!-- login -->
                    <div class="form-signIn p-20" v-else>
                        <h3 class="center">Please, login here :</h3>
                        <!-- Email -->
                        <ion-item>
                            <ion-label position="floating">Enter your email</ion-label>
                            <ion-input type="email" v-model="email"></ion-input>
                        </ion-item>
                        <!-- Password -->
                        <ion-item>
                            <ion-label position="floating">Enter your password</ion-label>
                            <ion-input type="password" v-model="password"></ion-input>
                        </ion-item>
                        <!-- Button Submit-->
                        <div class="button-signIn mt-20">
                            <button class="button-basic button-primary w-100" @click.prevent = "logIn()" >
                                Login
                            </button>
                        </div>
                    </div>
                </ion-card>
            </div>
            <!-- --- IF AUTH --- *** SEC - PROFILE USER HEADER ***-->
            <section class="sec-profile-header p-sec" v-if="isAuthenticated">
                <div class="container">
                    <div class="sec-profile-header__title">
                        <h5 class="center bold">Profile</h5>
                    </div>
                    <div class="sec-profile-header__content d-flex align-center mt-50">
                        <div class="sec-profile-header__content__picture overflow-hidden">
                            <!-- <img class="w-100 h-100" v-if="{{user.profile_picture}}" src="{{user.profile_picture}}">
                            <img v-else src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img> -->
                            <img src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                        </div>
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
            <!-- *** IF AUTH --- SEC - PROFILE USER ***-->
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
            <!-- *** SEC - TABS ***  -->
            <section class="sec-profile-tabs p-sec" v-if="isAuthenticated">
                <div class="container">
                    <div class="cp-tabs">
                        <!-- Tab title -->
                        <div class="d-flex justify-space-around mb-20">
                            <div class="tab-title h4 bold relative" data-target="tabs-1">Activity</div>
                            <div class="tab-title h4 bold relative" data-target="tabs-2">Review</div>
                            <div class="tab-title h4 bold relative" data-target="tabs-3">Favorites</div>
                        </div>
                        <!-- Tab content -->
                        <div class="tabs-content">
                            <!-- Activities List -->
                            <div class="tab-content d-flex flex-wrap" id="tabs-1">
                                <!-- CP- Card -->
                                <div class="cp-tab-content__tab-1 mb-20">
                                    <a class="cp-card-activity d-flex align-end" style="background-image: url('https://images.pexels.com/photos/5098033/pexels-photo-5098033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');">
                                        <!-- Content -->
                                        <div class="cp-card-activity__content">
                                            <!-- Name -->
                                            <div class="cp-card-activity__content__location">
                                                Sahara
                                            </div>
                                            <!-- Name -->
                                            <div class="cp-card-activity__content__name h6 bold mt-5">
                                                Quad in the desert
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
                                <!-- CP- Card -->
                                <div class="cp-tab-content__tab-1 mb-20">
                                    <a class="cp-card-activity d-flex align-end" style="background-image: url('https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');">
                                        <!-- Content -->
                                        <div class="cp-card-activity__content">
                                            <!-- Name -->
                                            <div class="cp-card-activity__content__location">
                                                France
                                            </div>
                                            <!-- Name -->
                                            <div class="cp-card-activity__content__name h6 bold mt-5">
                                                Hot air balloon
                                            </div>
                                            <!-- Rate -->
                                            <div class="cp-card-activity__content__rate d-flex align-center mt-10">
                                                <div class="cp-card-activity__content__rate__icon">
                                                    <ion-icon name="star"></ion-icon>
                                                </div>
                                                <div class="cp-card-activity__content__rate__number ml-10">
                                                    4.3
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="cp-tab-content__pagination">
                                    
                                </div>
                            </div>
                            <!-- Reviews List -->
                            <div class="tab-content" id="tabs-2">Review</div>
                            <!-- Favorites List -->
                            <div class="tab-content" id="tabs-3">
                                <!-- CP- Card -->
                                <div class="mb-20">
                                    <a class="cp-card-activity d-flex align-end" style="background-image: url('https://images.pexels.com/photos/11020216/pexels-photo-11020216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');">
                                        <!-- Content -->
                                        <div class="cp-card-activity__content">
                                            <!-- Name -->
                                            <div class="cp-card-activity__content__location">
                                                Canada
                                            </div>
                                            <!-- Name -->
                                            <div class="cp-card-activity__content__name h6 bold mt-5">
                                                Chien de tréneau
                                            </div>
                                            <!-- Rate -->
                                            <div class="cp-card-activity__content__rate d-flex align-center mt-10">
                                                <div class="cp-card-activity__content__rate__icon">
                                                    <ion-icon name="star"></ion-icon>
                                                </div>
                                                <div class="cp-card-activity__content__rate__number ml-10">
                                                    5
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <!-- CP- Card -->
                                <div class="mb-20">
                                    <a class="cp-card-activity d-flex align-end" style="background-image: url('https://images.pexels.com/photos/9814953/pexels-photo-9814953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');">
                                        <!-- Content -->
                                        <div class="cp-card-activity__content">
                                            <!-- Name -->
                                            <div class="cp-card-activity__content__location">
                                                Canada
                                            </div>
                                            <!-- Name -->
                                            <div class="cp-card-activity__content__name h6 bold mt-5">
                                                Motoneige
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                <!-- <div class="user-profile">
                </div> -->
                    <!-- Component Tab -->
                    <!-- <div class="cp-tabs d-flex justify-space-around">
                        <button class="tablinks" onclick="openTab(event, 'Activity')">Activity</button>
                        <button class="tablinks tab-active" onclick="openCity(event, 'Review')">Review</button>
                        <button class="tablinks" onclick="openTab(event, 'Favourite')">Favourite</button>
                    </div> -->
                       
                    <!-- Button Edit
                    <div class="button-logout center mt-50">
                        <button class="button-basic button-primary">
                            Edit my profile
                        </button>
                        <edit-profile v-if="isAuthenticated"></edit-profile>
                    </div>
                    -->

                    <!-- Button LogOut -->
            <section class="button-logout center p-sec mt-50">
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
import { IonPage, IonContent, IonCard, IonLabel, IonInput, IonItem, IonIcon } from '@ionic/vue';
import axios from 'axios';
import store from '../store';
import {BackendMixin} from '../mixins/backend';
import router from '../router';
//import UserInfos from '../components/UserInfos.vue';
//import EditProfile from '../components/EditProfile.vue';
// import jquery
import $ from 'jquery';
// import pagination
//import VueAwesomePaginate from "vue-awesome-paginate";
//import "vue-awesome-paginate/dist/style.css";
// Register the package
//createApp(App).use(VueAwesomePaginate).mount("#app");


export default defineComponent({
  name: 'ProfilePage',
  mixins: [BackendMixin],
  components: { IonContent, IonPage, IonLabel, IonInput, IonItem, IonCard, IonIcon },
  // components: { IonContent, IonPage, IonLabel, IonInput, IonItem, IonCard, UserInfos, EditProfile, UserInfos },
  // Recup les data passées dans les inputs
    data(){
    // console.log(store.state.auth);
        return {
            name: '',
            email: '',
            password: '',
            description: '',
            isRegistered: false,
            user: []
        }
    },
    // Display user infos
    mounted() {
        this.loadUser()
        console.log("ppl mounted user infos");
        // Jquery display div for tabs
        $(".tabs-content .tab-content:not(:first)").hide()
        $(".tab-title:first").addClass('active')

        $('.tab-title').click(function() {
        let btn = $(this)
        let target = btn.attr('data-target')
            
        // Ajouter la classe active sur le bon bouton et la retirer des autres
        btn.addClass('active').siblings().removeClass('active')
        
        // Afficher le bon contenu
        $('.tabs-content div[id="' + target + '"]').show().siblings().hide()
        });

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
    // userProfile() {
    //     return store.getters.userProfile
    // },
    userId() {
        return store.getters.userId
    }
  },
  
  // Create a method asyn to get the data and send it to the api using axios
  // axios va encrer une method qui va appeler l'api
  // axios facilite les appelles api
    methods: {
        async signUp(){
            const dataRegister = {
                name: this.name,
                email: this.email,
                plainPassword: this.password,
                description: this.description
            };
            try {
                await axios.post("http://127.0.0.1:8000/api/users", dataRegister);
                await this.login(this.email, this.password)
            }
            catch (err) {
                this.addError(this.getErrorText(err))
            }
        },
        // function in mixins => backends
        logIn() {
        try {
            this.login(this.email, this.password)
        }
        catch (err) {
            this.addError(this.getErrorText(err))
        }
        },
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
        onClickEditProfile() {
            router.push({ name: 'editProfile' })
        },
        // Display user infos
        async loadUser() {
        try {
            let resp = await axios.get("http://127.0.0.1:8000/api/users/" + this.userId)
            this.user = resp.data
            this.$emit("done")
        }
        // REGLER LE PB AVEC JEANDU
        catch (err) {
            this.addError(this.getErrorText(err))
        }
    }
        
    },
});
</script>