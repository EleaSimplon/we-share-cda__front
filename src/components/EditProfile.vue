<template  v-if="isAuthenticated">
    <!-- Form -->
    <ion-card>
        <div class="edit-profile__form p-20">
            <h3 class="center">Edit your profile :</h3>
            <!-- Name -->
            <ion-item>
                <ion-label position="floating">{{userProfile.name}}</ion-label>
                <ion-input v-model="name" type="text"></ion-input>
            </ion-item>
            <!-- <ion-item>
                <ion-label position="floating">Password</ion-label>
                <ion-input type="text"></ion-input>
            </ion-item> -->
            <!-- Description -->
            <ion-item>
                <ion-label position="floating">{{userProfile.description}}</ion-label>
                <ion-textarea v-model="description"></ion-textarea>
            </ion-item>
            <!-- <ion-item>
                <ion-input type="file"></ion-input>
            </ion-item> -->
            <!-- Button Submit-->
            <div class="edit-profile__button-submit mt-20">
                <button class="button-basic button-primary w-100" @click.prevent="onEditProfile()">
                    Edit
                </button>
            </div>
            <!-- Button Delete-->
            <div class="edit-profile__button-delete mt-20">
                <button class="button-basic  button-mustard w-100">
                    Delete
                </button>
            </div>
        </div>
    </ion-card>     
</template>


<script lang="ts">
    import { defineComponent } from 'vue';
    import { IonCard, IonInput, IonLabel, IonItem, IonTextarea } from '@ionic/vue';
    import store from '../store';
    import axios from 'axios';
    import { BackendMixin } from '../mixins/backend';
    import router from '../router';

    //recup le token
    export default defineComponent({
    name: 'edit-profile',
    mixins: [BackendMixin],
    components: { IonCard, IonInput, IonLabel, IonItem, IonTextarea },

    data() {
        return {
            name: "",
            description: ""
        }
   },
    computed: {
        username() {
        return store.getters.userName
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
        async onEditProfile(){
            const url = "http://127.0.0.1:8000/api/users/" + this.userId;
            console.log("URL :", url);
            
            const data = {
                name: this.name,
                description: this.description
            };
            try {
                await axios.put(url, data);
                router.push({ name: 'profile', }).then(
                    () => {
                        window.location.reload()
                    }
                )
                this.$emit("done")
            }
            catch (err) {
                this.addError(this.getErrorText(err))
            }
        },
    },

    });
</script>