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

    //recup le token
    export default defineComponent({
    name: 'userActivities',
    mixins: [BackendMixin],
    components: { IonPage, IonContent, IonIcon },

    data() {
        return {
            name: '',
            description: ''
        }
   },
    computed: {
        username() {
            return store.getters.userName
        },
        // isAuthenticated() {
        //     return store.getters.isAuthenticated
        // },
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
        // Go back to profile
        onClickGoBack() {
            router.push({ name: 'profile' }
            )
        }
    },

    });
</script>