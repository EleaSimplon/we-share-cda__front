<template>
    <ion-page>
        <!-- Header -->
        <ion-content :fullscreen="true">
            <ion-grid>
                <ion-row>
                    <ion-col class="mb-50" size-xs="12" size-sm="12" size-md="12" size-lg="12">
                        <h1 class="center bold">We Share</h1>
                    </ion-col>
                </ion-row>
            </ion-grid>
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
            <!-- ***** IF AUTH ***** -->
            <ion-grid v-if="isAuthenticated">
                <div class="user-profile">
                    <user-infos v-if="isAuthenticated" @done="loadUser()"></user-infos>
                    <!-- Component Tab -->
                    <div class="cp-tabs d-flex space-around">
                        <!-- Tab links  -->
                        <button class="tablinks tab-active" onclick="openCity(event, 'Review')">Review</button>
                        <button class="tablinks" onclick="openTab(event, 'Post')">Post</button>
                        <button class="tablinks" onclick="openTab(event, 'Favorite')">Favorite</button>
                    </div>
                    <!-- Tab content
                    <div id="Review" class="tabcontent">
                        <h3>Review</h3>
                        <p>London is the capital city of England.</p>
                    </div>

                    <div id="Post" class="tabcontent">
                        <h3>Post</h3>
                        <p>Paris is the capital of France.</p>
                    </div>

                    <div id="Favorite" class="tabcontent">
                        <h3>Favorite</h3>
                        <p>Tokyo is the capital of Japan.</p>
                    </div> -->
                       
                    <!-- Button Edit -->
                    <div class="button-logout center mt-50">
                        <button class="button-basic button-primary">
                            Edit your profile
                        </button>
                        <edit-profile v-if="isAuthenticated"></edit-profile>
                    </div>

                    <!-- Button LogOut -->
                    <div class="button-logout center mt-50">
                        <button class="button-basic button-mustard w-100" @click.prevent="onLogout()">
                            LogOut
                        </button>
                    </div>
                </div>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonCard, IonLabel, IonInput, IonItem, IonCol, IonGrid, IonRow } from '@ionic/vue';
import axios from 'axios';
import store from '../store';
import {BackendMixin} from '../mixins/backend';
import router from '../router';
import UserInfos from '../components/UserInfos.vue';
import EditProfile from '../components/EditProfile.vue';


export default defineComponent({
  name: 'ProfilePage',
  mixins: [BackendMixin],
  components: { IonContent, IonPage, IonLabel, IonInput, IonItem, IonCol, IonGrid, IonRow, IonCard, UserInfos, EditProfile },
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
        
        
    },
});
</script>