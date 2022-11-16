<script>
import auth from "../src/router/auth";
import NavigationComponent from "./NavigationComponent.vue";
 export default {
    components: {
        NavigationComponent
    },

    data() {
        return {
            is: auth.is_authenticated
        };
    }
    
}
//alert(auth.is_authenticated);
</script>
<template>
    <Header v-if="is">
        
    </Header>
    <div id="section-body">
        <NavigationComponent v-if="is"/>
        <router-view class="section-router"></router-view>
    </div>
    <div id="section-player" >
        <AudioPlayer  v-if="is"/>
    </div>
</template>
