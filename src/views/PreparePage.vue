<template>
    <ion-page>
        <ion-content :fullscreen="true">
            
            <!-- *** SEC - HEADER *** -->
            <section class="sec-prepare-header p-sec">
                <h1 class="center bold">Prepare</h1>
            </section>
            <!-- *** SEC - IF ! AUTH MSG *** -->
            <section class="sec-prepare-not-auth" v-if="!isAuthenticated">
                <div class="center">
                    <h3>Hey there !</h3>
                    <div>It seems like you're not connected,</div>
                    <div>Please login to use this awesome features.</div>
                </div>
            </section>
            <!--***  SEC - IF AUTH MSG *** -->
            <section class="sec-prepare" v-if="isAuthenticated">
                <div class="sec-prepare__form">

                    <!-- multistep form -->
                    <form id="msform">
                        <!-- progressbar -->
                        <ul id="progressbar">
                            <li class="active"></li>
                            <li class="active"></li>
                            <li class="active"></li>
                            <li class="active"></li>
                            <li class="active"></li>
                            <li class="active"></li>
                            <li class="active"></li>
                        </ul>

                       FeaturesValue Id : {{ featuresValuesId }}

                        <!-- fieldsets -->
                        <fieldset
                            v-for="(featuresLabel, index) in featuresLabels"
                            :key="featuresLabel.id"
                        >
                            <h2 class="fs-subtitle">
                                {{ featuresLabel.label }}
                            </h2>
                                <!-- <ion-radio-group>
                                    v-on:click="getFeaturesValueId($event)"
                                    <ion-item
                                        v-for="featuresValue in featuresLabel.features"
                                        :key="featuresValue.id"
                                        
                                    >
                                    <input v-model="value" @change="getFeaturesValueId" type="hidden" />
                                        <ion-radio slot="end"></ion-radio>
                                        <ion-label :value="featuresValue.features_value.id">{{ featuresValue.features_value.value }}</ion-label>
                                    </ion-item>
                                 
                                </ion-radio-group> -->
                                <div
                                v-for="featuresValue in featuresLabel.features"
                                        :key="featuresValue.id"
                                >
                                        
                                       
                                        <input :value="featuresValue.features_value.id" type="radio" @click="getFeaturesValueId" />
                                        <label for="sizeSmall">{{ featuresValue.features_value.value }} </label>
                                </div>
                                
                                
                            
                            <!-- INDEX FIRST -->
                            <div class="mt-20" v-if="index == 0">
                                <input type="button" name="next" class="next action-button button-basic button-primary" value="Next" />
                            </div>
                            <!-- INDEX -->
                            <div class="sec-prepare__form__buttons d-flex align-center justify-between mt-20" v-if="index != last && index != 0 ">
                                <div class="sec-prepare__form__buttons__btn-prev">
                                    <input type="button" name="previous" class="previous action-button button-basic button-mustard" value="Previous" />
                                </div>
                                <div class="sec-prepare__form__buttons__btn-next">
                                    <input type="button" name="next" class="next action-button button-basic button-primary" value="Next" />
                                </div>
                            </div> 
                            <!-- INDEX LAST -->
                            <div class="sec-prepare__form__buttons d-flex align-center justify-between mt-20" v-if="index === last">
                                <div class="sec-prepare__form__buttons__btn-prev">
                                    <input type="button" name="previous" class="previous action-button button-basic button-mustard" value="Previous" />
                                </div>
                                <div class="sec-prepare__form__buttons__btn-next">
                                    <button class="submit action-button button-basic button-secondary" @click.prevent="submitFeaturesValueId()"></button>
                                </div>
                            </div>
                        </fieldset>

                    </form>

                    
                </div>
            </section>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { IonPage, IonContent } from '@ionic/vue';

    //import jquery
    //import $ from 'jquery';

    import store from '../store';
    import axios from 'axios';

    export default defineComponent({
        name: 'PreparePage',
        components: { IonContent, IonPage },
        data() {
            return {
                featuresLabels: [],
                featuresValuesId: [] as number[],
            }
        },
        // JQUERY FOR THE MULTI STEP FORM IN MOUNTED
        computed: {
            isAuthenticated() {
                return store.getters.isAuthenticated
            },
            // To get last of loop
            last(){
                return Object.keys(this.featuresLabels).length-1;
            }
        },
        mounted() {
            // this.loadFeatures();
            this.loadFeaturesLabel();
        },
        methods: {   
            async loadFeaturesLabel() {
                
                await axios.get("http://127.0.0.1:8000/api/features_labels/")
                .then((response) => {
                    
                    let all  = response.data.map((featuresLabel)=>{
                        let array:Array<string> = []
                        // Use the native method "filter" of an Array to get an Array w/ unique values
                        featuresLabel.features = featuresLabel.features.filter((features)=>{
                            if (!array.includes(features.features_value.value)) {
                                array.push(features.features_value.value)
                                return true;
                            }
                        })
                        return featuresLabel
                    })
                    console.log(all)
                    this.featuresLabels = all
                }).catch(e => {
                    console.log('Error', e);
                });
                
            },
            getFeaturesValueId(e) {

                this.featuresValuesId.push(e.target.value);

                console.log('event', this.featuresValuesId);
            },
            async submitFeaturesValueId() {

                const featuresValuesId = {
                    featuresValuesId : this.featuresValuesId
                }
                console.log('Before try', featuresValuesId);
                try {
                    // featuresValuesId = integer
                    await axios.post("http://127.0.0.1:8000/api/prepare", featuresValuesId)
                    .then(async(response) => {
                        console.log('response: ', response.data);
                        // create array dans data => = array = this.response.data
                    });

                    console.log('ppl',featuresValuesId);
                }
                catch (err) {
                    console.log("ERREUR", err)
                    //this.addError(this.getErrorText(err))
                }

            },
            // displaySuggestActivities() {

            //     axios.get("http://127.0.0.1:8000/api/activities/prepare")

            //     .then((response) => {

            //         this.featuresValuesId = response.data;
            //         console.log('data prepare', response.data);

            //     }).catch(e => {
            //         console.log('Error', e);
            //     });

            // }
        },
    });
</script>
