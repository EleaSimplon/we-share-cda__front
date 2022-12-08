<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
                <!-- HOME -->
                <ion-tab-button tab="home" href="/tabs/home">
                    <ion-icon name="home-outline"></ion-icon>
                </ion-tab-button>
                <!-- EXPLORE -->
                <ion-tab-button tab="search" href="/tabs/explore">
                    <ion-icon name="search-outline"></ion-icon>
                </ion-tab-button>
                <!-- PREPARE -->
                <ion-tab-button tab="prepare" href="/tabs/prepare">
                    <ion-icon name="heart-half-outline"></ion-icon>
                </ion-tab-button>
                <!-- PROFILE -->
                <ion-tab-button tab="profile" href="/tabs/profile">
                    <ion-icon name="person-outline"></ion-icon>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';

    export default defineComponent({
        name: 'TabsPage',
        components: { IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
        
    });
</script>