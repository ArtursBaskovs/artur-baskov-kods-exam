<script>
import auth from "../router/auth";
export default {
    data() {
        return {
            email: '',
            password: '' 
        }
    },
    methods: {
        myMeth() {
            auth.authenticate(this.email, this.password)
        }
    }
    
}
    //alert(auth.is_authenticated);

    
</script>
<template>
    <div id="login-view">
        <form class="login-form">
            <div class="wrapper-logo">
                <img src="@/assets/logo.svg" />
                <div>KRAKEN.FM</div>
            </div>
            <input id="input-email" placeholder="E-mail" v-model="email"/>
            <input id="input-password" placeholder="Password" v-model="password"/>
           
            <!-- jocīgi -->
            <button id="btn-submit" @click="myMeth" :disabled="email == '' || password.length < 6? true : false">LOGIN</button>
        </form>
    </div>
</template>