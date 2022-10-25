<template  v-if="isAuthenticated">
    <ion-page>
        <ion-content :fullscreen="true">
            <!-- Header -->
            <ion-grid>
                <ion-row>
                    <ion-col class="mb-50" size-xs="12" size-sm="12" size-md="12" size-lg="12">
                        <h1 class="center bold">We Share</h1>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <!-- Form -->
            <ion-card>
                <div class="form-signIn p-20">
                    <h3 class="center">Add a new activity :</h3>
                    <!-- Name -->
                    <ion-item>
                        <ion-label position="floating">Name</ion-label>
                        <ion-input type="text" v-model="name"></ion-input>
                    </ion-item>
                    <!-- Company -->
                    <ion-item>
                        <ion-label position="floating">Company</ion-label>
                        <ion-input type="text" v-model="company"></ion-input>
                    </ion-item>
                    <!-- Country -->
                    <ion-item>
                        <ion-label position="floating">Country</ion-label>
                        <ion-input type="text" v-model="country"></ion-input>
                    </ion-item>
                    <!-- City -->
                    <ion-item>
                        <ion-label position="floating">City</ion-label>
                        <ion-input type="text" v-model="city"></ion-input>
                    </ion-item>
                    <!-- Address -->
                    <ion-item>
                        <ion-label position="floating">Address</ion-label>
                        <ion-input type="text" v-model="address"></ion-input>
                    </ion-item>
                    <!-- Short Description -->
                    <ion-item>
                        <ion-label position="floating">Short Description</ion-label>
                        <ion-input type="text" v-model="shortDescription"></ion-input>
                    </ion-item>
                    <!-- Description -->
                    <ion-item>
                        <ion-label position="floating">Description</ion-label>
                        <ion-textarea v-model="description"></ion-textarea>
                    </ion-item>
                    <!-- Company -->
                    <ion-item>
                        <ion-label position="floating">Company</ion-label>
                        <ion-textarea v-model="company"></ion-textarea>
                    </ion-item>
                    <!-- Phone Number -->
                    <ion-item>
                        <ion-label position="floating">Phone Number</ion-label>
                        <ion-textarea v-model="phoneNumber"></ion-textarea>
                    </ion-item>
                    <!-- Phone Number -->
                    <ion-item>
                        <ion-label position="floating">Picture</ion-label>
                        <ion-textarea v-model="picture"></ion-textarea>
                    </ion-item>
                    <ion-item>
                        <ion-select placeholder="Select all tag that matches" :multiple="true">
                            <ion-select-option value="apples">Sport</ion-select-option>
                            <ion-select-option value="oranges">Art</ion-select-option>
                            <ion-select-option value="bananas">Indoor</ion-select-option>
                            <ion-select-option value="bananas">OutDoor</ion-select-option>
                        </ion-select>
                    </ion-item>
                    <!-- Button Submit-->
                    <div class="button-signIn mt-20">
                        <button class="button-basic button-primary w-100">
                            Submit
                        </button>
                    </div>
                </div>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import CardPost from '../components/CardPost.vue';
import { IonPage, IonContent, IonCol, IonGrid, IonRow, IonCard, IonInput, IonLabel, IonItem, IonTextarea, IonSelect, IonSelectOption } from '@ionic/vue';
import store from '../store';

//recup le token

export default defineComponent({
  name: 'add-activity',
  components: { IonContent, IonPage, IonCol, IonGrid, IonRow, IonCard, IonInput, IonLabel, IonItem, IonTextarea, IonSelect, IonSelectOption },
  data(){
    return {
        name: '',
        country: '',
        city: '',
        address: '',
        shortDescription: '',
        description: '',
        commpany: '',
        phoneNumber: '',
        picture: '',
    }
  },
  computed: {
    isAuthenticated() {
      return store.getters.isAuthenticated
    }
  },
    methods: {
        
    },
});
</script>