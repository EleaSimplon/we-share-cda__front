<template  v-if="isAuthenticated">
    <ion-page>
        <ion-content :fullscreen="true">
            <!-- *** SEC - Header *** -->
            <section class="sec-add-activity__header p-sec">
                <div class="container">
                    <h3 class="center">Add a new activity :</h3>
                </div>
            </section>
            <!-- *** SEC - Form *** -->
            <section class="sec-add-activity__form p-sec">
                <div class="container">
                    <ion-card>
                        <div class="form-signIn p-20">
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
                                <ion-input type="text" v-model="description"></ion-input>
                            </ion-item>
                            <!-- Phone Number -->
                            <!-- Duration -->
                            <ion-item>
                                <ion-label position="floating">Duration</ion-label>
                                <ion-input type="number" v-model="duration"></ion-input>
                            </ion-item>
                            <!-- Unit -->
                            <ion-list>
                                <ion-item>
                                    <select interface="popover" placeholder="Unit" @change="onUnitChange($event)">
                                        <option v-for="unit in units['hydra:member']" :key="unit.id" :value="unit.id">
                                            {{ unit.type }}
                                        </option>
                                    </select>
                                </ion-item>
                            </ion-list>
                            <!-- Picture -->
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
                            <!-- Price -->
                                <ion-item>
                                    <ion-label position="floating">Price</ion-label>
                                    <ion-input type="number" v-model="price"></ion-input>
                                    <!-- <ion-select interface="popover" placeholder="Price">
                                        <IonSelectOption value="minutes">$</IonSelectOption>
                                        <IonSelectOption value="hours">$$</IonSelectOption>
                                        <IonSelectOption value="days">$$$</IonSelectOption>
                                    </ion-select> -->
                                </ion-item>
                            <!-- Schedule  -->
                            <!-- Button Submit-->
                            <div class="button-signIn mt-20">
                                <button class="button-basic button-primary w-100" @click.prevent = "addActivity()">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </ion-card>
                </div>
            </section>
        </ion-content>
    </ion-page>

</template>




<script lang="ts">
    import { defineComponent } from 'vue';
    // import CardPost from '../components/CardPost.vue';
    import { IonPage, IonContent, IonCard, IonInput, IonLabel, IonItem, IonList } from '@ionic/vue';
    import store from '../store';
    import axios from 'axios';
    import router from '../router';


    //recup le token

    export default defineComponent({
        name: 'add-activity',
        components: { IonContent, IonPage, IonCard, IonInput, IonLabel, IonItem, IonList },
        data(){
            return {
                units: [],
                unitId: '',
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
                price: '',
                //schedule: '',
                //user_id: this.userId
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
        // whatch: {
        //     unitId: function(unit) {
        //         return unit.id
        //     },      
        // },
        mounted() {
            this.loadUnits();
        },
        methods: {
            onUnitChange(e) {
               this.unitId = e.target.value
               console.log('target.value', e.target.value)
               //return this.unitId
            },
            async addActivity(){
                console.log(this.duration);
                
                const dataActivity = {
                    name: this.name,
                    country: this.country,
                    city: this.city,
                    address: this.address,
                    short_description: this.shortDescription,
                    description: this.description,
                    company: this.company,
                    //phoneNumber: this.phoneNumber,
                    //picture: this.picture,
                    price: parseInt(this.price),
                    //schedule: this.schedule,
                    duration: parseInt(this.duration),
                    unit: {"id": parseInt(this.unitId)},
                    user: {"id": this.userId}
                };
                console.log("DATA ACTIVITY :", dataActivity)
                console.log("DATA UNITS :", this.unitId)
                try {
                    await axios.post("http://127.0.0.1:8000/api/activities", dataActivity);
                    router.push({ name: 'explore', }).then(
                        () => {
                            window.location.reload()
                        }
                    )
                }
                // REGLER LE PB AVEC JEANDU
                catch (err) {
                    console.log("ERREUR", err)
                    //this.addError(this.getErrorText(err))
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