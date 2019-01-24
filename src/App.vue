<template>
    <div id="app">
        <app-preloader v-if="!loadedPersone"></app-preloader>
        <transition name="fade">
            <div class="wrapper" v-if="loadedPersone">
                <app-sidebar></app-sidebar>
                <app-header></app-header>
                <app-search-page></app-search-page>
            </div>
        </transition>
    </div>
</template>

<script>
import AppPreloader from './components/preloader.vue';
import AppSidebar from './components/sidebar.vue';
import AppHeader from './components/header.vue';
import AppSearchPage from './components/searchPage.vue';
import {mapGetters} from 'vuex';

export default {
    name: 'app',
    components: {
        AppPreloader,
        AppSidebar,
        AppHeader,
        AppSearchPage
    },
    computed: {
        ...mapGetters({
            loadedPersone: 'persons/loadedPersone'
        })
    },
};
</script>

