import Vue from 'vue';
import App from './App.vue';

import store from './store';
import './scss/main.scss'

new Vue({
    el: '#app',
    store,
    render: h => h(App),
    beforeCreate() {
        this.$store.dispatch('persons/loadingPersons')
    }
})
