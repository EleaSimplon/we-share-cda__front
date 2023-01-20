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
            <section class="sec-prepare__form" v-if="isAuthenticated">

                    <!-- multistep form -->
                    <form id="multiStepForm">
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
                            class="steps"
                            v-for="(featuresLabel, index) in currentFieldsets"
                            :key="featuresLabel.id"
                            
                        >
                            <h2 class="fs-subtitle">
                                {{ featuresLabel.label }}
                            </h2>

                            <div class="d-flex align-items-center radios-list"
                                v-for="featuresValue in featuresLabel.features"
                                :key="featuresValue.id"
                            >
                                <button
                                    class="sec-prepare__form__button-value button-basic button-secondary mt-10 "
                                    :value="featuresValue.features_value.id"
                                    @click.prevent="getFeaturesValueId"
                                    :class="{ active: featuresValue.features_value.id === activeValueId }"
                                >
                                    {{ featuresValue.features_value.value }}
                                </button>
                            </div>
                            
                            <!-- INDEX 0 == Button NEXT -->
                            <div class="mt-20" v-if="currentStep == 0 || currentStep < last">
                                <button name="next" class="next action-button button-basic button-primary" value="Next" @click="nextStep">
                                    Next
                                </button>
                            </div>
                            <!-- INDEX + == Button PREVIOUS -->
                            <div v-if="currentStep > 0" class="sec-prepare__form__buttons__btn-prev">
                                <button class="previous action-button button-basic bck-transparent" value="Previous" @click="previousStep">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 76 76">
                                        <g id="Groupe_2461" data-name="Groupe 2461" transform="translate(-507 -4557)">
                                            <g id="Ellipse_16" data-name="Ellipse 16" transform="translate(507 4557)" fill="none" stroke="#d8ad5c" stroke-width="1">
                                            <circle cx="38" cy="38" r="38" stroke="none"/>
                                            <circle cx="38" cy="38" r="37.5" fill="none"/>
                                            </g>
                                            <path id="next" d="M1.439,14.938l10.5-10.5A1.5,1.5,0,1,1,14.059,6.56L6.12,14.5H32.5a1.5,1.5,0,1,1,0,3H6.12l7.939,7.939a1.5,1.5,0,1,1-2.121,2.121l-10.5-10.5a1.5,1.5,0,0,1,0-2.121Z" transform="translate(528 4579.001)" fill="#08080a"/>
                                        </g>
                                    </svg>
                                </button>
                            </div>

                            <div v-if="currentStep === last" class="sec-prepare__form__buttons__btn-submit">
                                <button class="submit action-button button-basic button-primary" value="Submit"  @click.prevent="submitFeaturesValueId()">
                                    Submit
                                </button> 
                            </div>

                        </fieldset>

                    </form>
                    <!-- SEC - RESULTS -->
                    <section class="mt-20" id="thankYouMessage" style="display:none;">
                            <div class="container">
                                <div class="center">
                                    Results !
                                </div>
                            <!-- @click.prevent="onClickActivityPost(activity)" -->
                            <a v-for="activity in displayActivities"
                                :key="activity.id"
                                
                                class="cp-card-activity d-flex align-end"
                                style="background-image: url('https://images.pexels.com/photos/5098033/pexels-photo-5098033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');"
                            >
                                <!-- Content -->
                                <div class="cp-card-activity__content">
                                    <!-- Country -->
                                    <div class="cp-card-activity__content__location">
                                        {{ activity.country }}
                                    </div>
                                    <!-- Name -->
                                    <div class="cp-card-activity__content__name bold mt-5">
                                        {{ activity.name }}
                                    </div>
                                </div>
                            </a>
                        </div>
                    </section>
                    
            </section>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { IonPage, IonContent } from '@ionic/vue';

    import store from '../store';
    import axios from 'axios';

    export default defineComponent({
        name: 'PreparePage',
        components: { IonContent, IonPage },
        data() {
            return {
                featuresLabels: [],
                featuresValuesId: [] as number[],
                displayActivities: [{id: Number, name: String}],
                // isActive: false
                currentStep: 0,
                activeValueId: null,
            }
        },
        // JQUERY FOR THE MULTI STEP FORM IN MOUNTED
        computed: {
            isAuthenticated() {
                return store.getters.isAuthenticated
            },
            // To get last of loop
            last(){
                // return Object.keys(this.featuresLabels).length-1;
                return this.featuresLabels.length - 1
            },
            currentFieldsets() {
                return this.featuresLabels.filter((fieldset, index) => index === this.currentStep);
            },
            
        },
        mounted() {
            this.loadFeaturesLabel();
        },
        methods: {   
            nextStep() {
                this.currentStep++;
            },
            previousStep() {
                this.currentStep--;
            },
            getFeaturesValueId(event) {
                this.activeValueId = event.target.value
            },
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
                // this.isActive = true;

                console.log('event', this.featuresValuesId);
            },
            async submitFeaturesValueId() {

                const featuresValuesId = this.featuresValuesId
            
                console.log('Before try', featuresValuesId);
                try {
                    // featuresValuesId = integer
                    await axios.post("http://127.0.0.1:8000/api/prepare", featuresValuesId)
                    .then(async(response) => {
                        console.log('response: ', response.data);
                        
                        this.displayActivities = response.data
                        console.log('activities', this.displayActivities);
                        
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
