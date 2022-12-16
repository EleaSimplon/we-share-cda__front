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
                        <!-- fieldsets -->
                        <fieldset
                            v-for="(featuresLabel, index) in featuresLabels"
                            :key="featuresLabel.id"
                        >
                            <h2 class="fs-subtitle">
                                
                                {{ featuresLabel.label }}
                            </h2>
                            <ion-radio-group>
                                <ion-item
                                v-for="featuresValue in featuresLabel.features"
                                :key="featuresValue.id"
                                >
                                    <ion-radio slot="end" value="{{ featuresValue.features_value.value }}"></ion-radio>
                                    <ion-label>{{ featuresValue.features_value.value }}</ion-label>
                                </ion-item>
                            </ion-radio-group>
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
                                    <input type="submit" name="submit" class="submit action-button button-basic button-secondary" value="Submit" />
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
    import { IonPage, IonContent, IonItem, IonLabel, IonRadio, IonRadioGroup } from '@ionic/vue';

    // import jquery
    //import $ from 'jquery';

    import store from '../store';
    import axios from 'axios';

    export default defineComponent({
        name: 'PreparePage',
        components: { IonContent, IonPage, IonItem, IonLabel, IonRadio, IonRadioGroup },
        data() {
            return {
                // features: [],
                featuresLabels: [],
                // featuresValues: []

            }
        },
        // JQUERY FOR THE MULTI STEP FORM IN MOUNTED
        // mounted() {

        // },
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
            // this.loadFeaturesValue();
        },
        methods: {   
            // Display List of Features
            // async loadFeatures() {
            //     await axios.get("http://127.0.0.1:8000/api/features/")
            //     .then((response) => {
            //         this.features = response.data;
            //         console.log("ICI FEATURES", response.data);
            //     }).catch(e => {
            //         console.log('Error', e);
            //     });
            // },
            async loadFeaturesLabel() {
                
                await axios.get("http://127.0.0.1:8000/api/features_labels/")
                .then((response) => {
                    this.featuresLabels = response.data;
                    console.log("ICI FEATURES LABELS", response.data);
                }).catch(e => {
                    console.log('Error', e);
                });
                
            }
        },
    });
</script>
