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
                        <!-- <div
                            v-for="feature in features['hydra:member']"
                            :key="feature.id"
                        >
                        {{ features }}
                        </div> -->
                        <!-- fieldsets -->
                        <fieldset
                            v-for="feature in features"
                            :key="feature.id"
                        >
                            <h2 class="fs-subtitle">
                                {{ feature.features_label.label }}
                            </h2>
                            <ion-radio-group value="">
                                <ion-item>
                                    <ion-label>{{ feature.value }}</ion-label>
                                    <ion-radio slot="end" value="$"></ion-radio>
                                </ion-item>
                            </ion-radio-group>
                            <div class="mt-20">
                                <input type="button" name="next" class="next action-button button-basic button-primary" value="Next" />
                            </div>
                        </fieldset>

                            <!-- Buttons -->
                            <!-- <div class="sec-prepare__form__buttons d-flex align-center justify-between mt-20">
                                <div class="sec-prepare__form__buttons__btn-prev">
                                    <input type="button" name="previous" class="previous action-button button-basic button-mustard" value="Previous" />
                                </div>
                                <div class="sec-prepare__form__buttons__btn-next">
                                    <input type="submit" name="submit" class="submit action-button button-basic button-secondary" value="Submit" />
                                </div>
                            </div>
                        <div class="sec-prepare__form__buttons d-flex align-center justify-between mt-20">
                            <div class="sec-prepare__form__buttons__btn-prev">
                                <input type="button" name="previous" class="previous action-button button-basic button-mustard" value="Previous" />
                            </div>
                            <div class="sec-prepare__form__buttons__btn-next">
                                <input type="button" name="next" class="next action-button button-basic button-primary" value="Next" />
                            </div>
                        </div> -->

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
                features: []
            }
        },
        // JQUERY FOR THE MULTI STEP FORM IN MOUNTED
        // mounted() {

        // },
        computed: {
            isAuthenticated() {
                return store.getters.isAuthenticated
            }
        },
        mounted() {
            this.loadFeatures();

        },
        methods: {   
            // Display List of Features
            async loadFeatures() {
                await axios.get("http://127.0.0.1:8000/api/features/")
                .then((response) => {
                    this.features = response.data;
                    console.log("ICI FEATURES", response.data);
                }).catch(e => {
                    console.log('Error', e);
                });
            },
        },
    });
</script>
