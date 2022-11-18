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
                    <ion-item counter="true">
                        <ion-label position="floating">Short Description</ion-label>
                        <ion-input type="text" maxlength="20" v-model="shortDescription"></ion-input>
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
                    <!-- Phone Number
                    <ion-item>
                        <ion-label position="floating">Phone Number</ion-label>
                        <ion-textarea v-model="phoneNumber"></ion-textarea>
                    </ion-item>  -->
                    <!-- Duration -->
                    <ion-item>
                        <ion-label position="floating">Duration</ion-label>
                        <ion-textarea v-model="duration"></ion-textarea>
                    </ion-item>
                    <!-- Unit -->
                    <ion-list>
                        <ion-item>
                            <ion-select interface="popover" placeholder="Unit">
                                <IonSelectOption v-for="unit in units['hydra:member']" :key="unit.id" value="{{ unit.id }}" v-model="unit.id">
                                    {{ unit.type }}
                                </IonSelectOption>
                            </ion-select>
                        </ion-item>
                    </ion-list>
                    <!-- Picture 
                    <ion-item>
                        <ion-label position="floating">Picture</ion-label>
                        <ion-textarea v-model="picture"></ion-textarea>
                    </ion-item>
                    -->
                    <!-- Labels value 
                    <ion-item>
                        <ion-select placeholder="Select all tag that matches" :multiple="true">
                            <ion-select-option value="sport">Sport</ion-select-option>
                            <ion-select-option value="art">Art</ion-select-option>
                            <ion-select-option value="indoor">Indoor</ion-select-option>
                            <ion-select-option value="outdoor">OutDoor</ion-select-option>
                        </ion-select>
                    </ion-item>
                    -->
                    <!-- Price
                    <ion-list>
                        <ion-item>
                            <ion-select interface="popover" placeholder="Price">
                                <IonSelectOption value="minutes">$</IonSelectOption>
                                <IonSelectOption value="hours">$$</IonSelectOption>
                                <IonSelectOption value="days">$$$</IonSelectOption>
                            </ion-select>
                        </ion-item>
                    </ion-list>
                     -->
                    <!-- Schedule 
                    <ion-item>
                        <ion-label position="floating">Schedule</ion-label>
                        <ion-textarea v-model="schedule"></ion-textarea>
                    </ion-item>
                    -->
                    <!-- Button Submit-->
                    <div class="button-signIn mt-20">
                        <button class="button-basic button-primary w-100" @click.prevent = "addActivity()">
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
import axios from 'axios';

//recup le token

export default defineComponent({
  name: 'add-activity',
  components: { IonContent, IonPage, IonCol, IonGrid, IonRow, IonCard, IonInput, IonLabel, IonItem, IonTextarea, IonSelect, IonSelectOption },
  data(){
    return {
        units: [],
        name: '',
        country: '',
        city: '',
        address: '',
        shortDescription: '',
        description: '',
        company: '',
        //phoneNumber: '',
        duration: '',
        //picture: '',
        //price: '',
        //schedule: ''
    }
  },
  computed: {
    isAuthenticated() {
      return store.getters.isAuthenticated
    },
    userId() {
        return store.getters.userId
    }
  },
    mounted() {
        this.loadUnits();
    },
    methods: {
         async addActivity(){
            const dataActivity = {
                name: this.name,
                country: this.country,
                city: this.city,
                address: this.address,
                shortDescription: this.shortDescription,
                description: this.description,
                company: this.company,
                //phoneNumber: this.phoneNumber,
                duration: this.duration,
                units: this.units,
            };
            try {
                await axios.post("http://127.0.0.1:8000/api/activities", dataActivity);
            }
            catch (err) {
                this.addError(this.getErrorText(err))
            }
        },
        async loadUnits() {
            await axios.get("http://127.0.0.1:8000/api/units/")
            .then((response) => {
                this.units = response.data;
                console.log(response.data);
            }).catch(e => {
                console.log('Error', e);
            });
        }
        
    },
});
</script>