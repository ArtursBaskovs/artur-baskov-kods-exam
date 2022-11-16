<script>
import { def } from '@vue/shared';
import auth from '../router/auth';
export default {
    data() {
        return {
            name: auth.user.name,
            surname: auth.user.surname
        }
    },
    methods: {
        logOut() {
            auth.logout();
        }
    }
}
</script>
<template>
    <div id="main-header" class="active">
        <div class="wrapper-logo">
            <img src="@/assets/logo.svg"/>
            <h2>KRAKEN.FM</h2>
        </div>
        <div class="wrapper-profile">
            <div class="section-user">
                <span class="avatar"></span>
                <h3 id="txt-full-name">{{name}} {{surname}}</h3>
            </div>
            <button id="btn-logout" @click="logOut">LOGOUT</button>
        </div>
    </div>
</template>
