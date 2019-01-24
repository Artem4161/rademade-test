import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import persons from './modules/persons';
import menu from './modules/menu';

export default new Vuex.Store({
  modules: {
    persons,
    menu
  }
});
