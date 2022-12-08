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
                            <li class="active">Step 1</li>
                            <li class="active">Step 2</li>
                        <li class="active">Step 3</li>
                        </ul>
                        <!-- fieldsets -->
                        <fieldset>
                            <h2 class="fs-title">Step 1</h2>
                            <h3 class="fs-subtitle">What budget do you have ?</h3>
                            <ion-radio-group value="strawberries">
                                <ion-item>
                                    <ion-label>$</ion-label>
                                    <ion-radio slot="end" value="$"></ion-radio>
                                </ion-item>

                                <ion-item>
                                    <ion-label>$$</ion-label>
                                    <ion-radio slot="end" value="$$"></ion-radio>
                                </ion-item>

                                <ion-item>
                                    <ion-label>$$$</ion-label>
                                    <ion-radio slot="end" value="$$$"></ion-radio>
                                </ion-item>
                            </ion-radio-group>
                        </fieldset>
                        <!-- <fieldset>
                            <h2 class="fs-title">Step 2</h2>
                            <h3 class="fs-subtitle">This is step  2</h3>
                            <input type="text" name="" placeholder="Twitter" />
                            <input type="text" name="facebook" placeholder=">Facebook</a>" />
                            <input type="text" name="gplus" placeholder="Google Plus" />
                            <input type="button" name="previous" class="previous action-button" value="Previous" />
                            <input type="button" name="next" class="next action-button" value="Next" />
                        </fieldset>
                        <fieldset>
                            <h2 class="fs-title">Step 3</h2>
                            <h3 class="fs-subtitle">This is step 3</h3>
                            <input type="text" name="fname" placeholder="First Name" />
                            <input type="text" name="lname" placeholder="Last Name" />
                            <input type="text" name="phone" placeholder="Phone" />
                            <textarea name="address" placeholder="Address"></textarea>
                            <input type="button" name="previous" class="previous action-button" value="Previous" />
                            <input type="submit" name="submit" class="submit action-button" value="Submit" />
                        </fieldset> -->
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

    export default defineComponent({
        name: 'PreparePage',
        components: { IonContent, IonPage, IonItem, IonLabel, IonRadio, IonRadioGroup },
        // JQUERY FOR THE MULTI STEP FORM IN MOUNTED
        // mounted() {

        // },
        computed: {
            isAuthenticated() {
            return store.getters.isAuthenticated
            }
        },
        methods: {   
        },
    });
</script>
