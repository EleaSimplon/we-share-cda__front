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
                        <form enctype="multipart/form-data">
                            <div class="form-signIn p-20">
                            <!-- Name -->
                            <ion-item>
                                <ion-label position="floating">Name</ion-label>
                                <ion-input type="text" v-model="name"></ion-input>
                            </ion-item>
                            <!-- Description -->
                            <ion-item>
                                <ion-label position="floating">Description</ion-label>
                                <ion-input type="text" v-model="description"></ion-input>
                            </ion-item>
                            <!-- Address -->
                            <ion-item>
                                <ion-label position="floating">Address</ion-label>
                                <ion-input type="text" v-model="address"></ion-input>
                            </ion-item>
                            <!-- City -->
                            <ion-item>
                                <ion-label position="floating">City</ion-label>
                                <ion-input type="text" v-model="city"></ion-input>
                            </ion-item>
                            <!-- Country -->
                            <ion-item>
                                <ion-label position="floating">Country</ion-label>
                                <ion-input type="text" v-model="country"></ion-input>
                            </ion-item>
                            <!-- Company -->
                            <ion-item>
                                <ion-label position="floating">Company</ion-label>
                                <ion-input type="text" v-model="company"></ion-input>
                            </ion-item>
                            <!-- Phone Number -->
                            <ion-item>
                                <ion-label position="floating">Phone Number</ion-label>
                                <ion-input type="text" v-model="phoneNumber"></ion-input>
                            </ion-item>
                            <!-- Duration -->
                            <ion-item>
                                <ion-label position="floating">Duration</ion-label>
                                <ion-input type="number" v-model="duration"></ion-input>
                            </ion-item>
                            <!-- Unit -->
                            <ion-item>
                                <select @change="onUnitChange($event)">
                                    <option value="" selected disabled>Select a Unit...</option>
                                    <option v-for="unit in units" :key="unit.id" :value="unit.id">
                                        {{ unit.type }}
                                    </option>
                                </select>
                            </ion-item>
                            <!-- Picture -->
                            <!-- <ion-item>
                                <div>
                                    <input type="file" @change="onChangeFile">
                                    <label>Upload your image</label>
                                </div>
                            </ion-item> -->
                            <div>
                                <!-- <ion-input type="file" v-model="picture"></ion-input> -->
                                <input type="file" @change="onChangeFile" ref="pictureInput"/>
                            </div> 
                            <!-- Price -->
                                <ion-item>
                                    <ion-label position="floating">Price</ion-label>
                                    <ion-input type="number" v-model="price"></ion-input>
                                </ion-item>
                            <!-- Button Submit-->
                            <div class="button-signIn mt-20">
                                <button class="button-basic button-primary w-100" @click.prevent = "addActivity()">
                                    Submit
                                </button>
                            </div>
                            </div>
                        </form>
                        
                    </ion-card>
                </div>
            </section>
        </ion-content>
    </ion-page>
</template>




<script lang="ts">
    import { defineComponent } from 'vue';
    import { IonPage, IonContent, IonCard, IonInput, IonLabel, IonItem } from '@ionic/vue';
    import store from '../store';
    import axios from 'axios';
import router from '../router';
import { BackendApi } from '@/utils/http';

    export default defineComponent({
        name: 'add-activity',
        components: { IonContent, IonPage, IonCard, IonInput, IonLabel, IonItem },
        data(){
            return {
                units: [{
                    id: Number,
                    type: String
                }],
                unitId: '',
                name: '',
                country: '',
                city: '',
                address: '',
                description: '',
                company: '',
                duration: '',
                picture: {} as any,
                price: '',
                phoneNumber: '',
                activityId: ''

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
            // On click option in select Unit->getUnit value
            onUnitChange(e) {
               this.unitId = e.target.value
            },


            onChangeFile(event:any) {

                console.log(event.target.files[0]);

                this.picture = event.target.files[0]
            },
            // Add an activity
            async addActivity(){
                
                const dataActivity :any = {
                    name: this.name,
                    country: this.country,
                    city: this.city,
                    address: this.address,
                    description: this.description,
                    company: this.company,
                    phoneNumber: this.phoneNumber,
                    price: parseInt(this.price),
                    duration: parseInt(this.duration),
                    unit: parseInt(this.unitId),
                    user: this.userId,
                    picture: this.picture,
                }
                console.log(dataActivity)

                // const dataPicture:any = [
                //     this.pictureformData
                // ]
                
                
                try {

                    let formData = new FormData();
                    Object.keys(dataActivity).map((key)=>{
                       
                        formData.append(key, dataActivity[key])
                    })
                    // formData.append('picture', dataPicture[0]);
                    

                    await axios.post("http://127.0.0.1:8000/api/activities", formData)
                    .then((response) => {
                        this.activityId = response.data.id
                        console.log(response.data);

                        router.push({ name: 'explore', }).then(
                            () => {
                                window.location.reload()
                            }
                        )
                    }).catch(e => {
                        console.log('Error', e);
                    });

                }
                // REGLER LE PB AVEC JEANDU
                catch (err) {
                    console.log("ERREUR", err)
                    //this.addError(this.getErrorText(err))
                }
                
            },
            // Load Units infos
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