<template>
    <div>
        <!-- {{ userProfile }} -->
        <h3 class="center">{{user.name}}</h3>
        <p class="center">
            {{user.description}}
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {

} from '@ionic/vue';
import axios from 'axios';
import store from '../store';

export default  defineComponent({
name: 'UserInfos',
components: {
},
data(){
    // console.log(store.state.auth);
    return {
        name: '',
        email: '',
        password: '',
        description: '',
        isRegistered: false,
        user: []
    }
},
mounted() {
    this.loadUser()
    console.log("ppl");
},
computed: {
    username() {
      return store.getters.userName
    },
    isAuthenticated() {
      return store.getters.isAuthenticated
    },
    backendName() {
      return store.getters.backendName
    },
    // To get the infos of the connected user
    // userProfile() {
    //     return store.getters.userProfile
    // },
    userId() {
        return store.getters.userId
    }
  },
methods: {
    async loadUser() {
        try {
            let resp = await axios.get("http://127.0.0.1:8000/api/users/" + this.userId)
            this.user = resp.data
            this.$emit("done")
        }
        catch (err) {
            this.addError(this.getErrorText(err))
        }
    }
}

});
</script>