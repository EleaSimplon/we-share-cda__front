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
            <section class="sec-prepare-not-auth" v-if="isAuthenticated">
                User is auth
            </section>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';

import store from '../store';

export default defineComponent({
    name: 'Tab3Page',
    components: { IonContent, IonPage },
    computed: {
        isAuthenticated() {
        return store.getters.isAuthenticated
        }
    },
    methods: {   
    },
});
</script>
