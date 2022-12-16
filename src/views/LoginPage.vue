<template v-if="!isAuthenticated">

    <ion-page>
        <ion-content :fullscreen="true">
            <section class="sec-login">
                <div class="container">
                    <section class="sec-forms__login">
                        <div class="sec-forms__login__header p-sec center">
                            <h3 class="bold">Welcome back,</h3>
                            <div class="opacity-50">You've been missed !</div>
                            <div>
                                <img src="https://cdn.dribbble.com/users/743832/screenshots/3996183/media/2f69f00106d6c72eda4f4ff2ce0ffb3a.gif" alt="">
                            </div>
                        </div>
                        <div class="sec-forms__login__form p-20">
                            <!-- Email -->
                            <ion-item>
                                <ion-label position="floating">Email</ion-label>
                                <ion-input type="email" v-model="email"></ion-input>
                            </ion-item>
                            <!-- Password -->
                            <ion-item>
                                <ion-label position="floating">Password</ion-label>
                                <ion-input id="#password" type="password" v-model="password">
                                </ion-input>
                            </ion-item>
                            <!-- Button Submit-->
                            <div class="sec-forms__login__form__button mt-20">
                                <button class="button-basic button-primary w-100" @click.prevent = "logIn()">
                                    Login
                                </button>
                            </div>
                            <!-- IF ! ACCOUNT -->
                            <div class="sec-forms__login__form__btn-register mt-20">
                                <button class="button-basic button-mustard w-100" @click.prevent="onClickRegister()">
                                    Don't have an account yet ?
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </ion-content>
    </ion-page>

</template>




<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonInput, IonLabel, IonItem } from '@ionic/vue';

import store from '../store';
import {BackendMixin} from '../mixins/backend';
import router from '../router';


export default defineComponent({
    name: 'loginPage',
    mixins: [BackendMixin],
    components: { IonContent, IonPage, IonInput, IonLabel, IonItem },
    data(){
        return {
            email: '',
            password: '',
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
        // function in mixins => backends
        async logIn() {
            try {
                this.login(this.email, this.password)
                await router.replace({ name: 'profile'})
            }
            catch (err) {
                this.addError(this.getErrorText(err))
            }
        },
        onClickRegister() {
            router.push({ name: 'registerPage' })
        }
    },
});
</script>