<template v-if="!isAuthenticated">
    <ion-page>
        <ion-content :fullscreen="true">
            <section class="sec-register p-sec">
                <div class="container">
                    <!-- Header -->
                    <div class="sec-registe__header center">
                        <h3 class="bold">Welcome,</h3>
                        <div class="opacity-50">You're finaly here !</div>
                        <div>
                            <img src="https://cdn.dribbble.com/users/743832/screenshots/3969009/media/01e144130c475078dec9ccafc8026f65.gif" alt="">
                        </div>
                    </div>
                    <!-- Request POST ON ROUTE LOCALHOST  -->
                    <div class="sec-register__form p-20">
                        <!-- Name -->
                        <ion-item>
                            <ion-label position="floating">Name</ion-label>
                            <ion-input type="text" v-model="name"></ion-input>
                        </ion-item>
                        <!-- Email -->
                        <ion-item>
                            <ion-label position="floating">Email</ion-label>
                            <ion-input type="email" v-model="email"></ion-input>
                        </ion-item>
                        <!-- Password -->
                        <ion-item>
                            <ion-label position="floating">Password</ion-label>
                            <ion-input type="password" v-model="password"></ion-input>
                        </ion-item>
                        <!-- Description -->
                        <ion-item>
                            <ion-label position="floating">Description</ion-label>
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
                        <!-- IF ACCOUNT -->
                        <div class="sec-forms__login__form__btn-register mt-20">
                            <button class="button-basic button-mustard w-100" @click.prevent="onClickLogin()">
                                Already have an account ?
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </ion-content>
    </ion-page>
</template>


<script lang="ts">
    import { defineComponent } from 'vue';
    import { IonPage, IonContent, IonInput, IonLabel, IonItem } from '@ionic/vue';
    import router from '../router';
    import axios from 'axios';
    import store from '../store';
    import {BackendMixin} from '../mixins/backend';


    export default defineComponent({
        name: 'registerPage',
        mixins: [BackendMixin],
        components: { IonContent, IonPage, IonInput, IonLabel, IonItem },
        data(){
            return {
                name: '',
                email: '',
                password: '',
                description: '',
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
            userId() {
                return store.getters.userId
            }
        },
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
            onClickLogin() {
                router.push({ name: 'loginPage' })
            }
        },
    });
</script>