import axios from 'axios';

export default {
    namespaced: true,
    state: {
        items: [],
        loadedPersone: false
    },
    getters: {
        items(state) {
            return state.items;
        },
        loadedPersone(state) {
            return state.loadedPersone;
        }
    },
    mutations: {
        setPersons(state, persons) {
            state.items = persons;
            state.loadedPersone = true;
        }
    },
    actions: {
        loadingPersons(store) {
            axios
                .post('https://cors-anywhere.herokuapp.com/https://fierce-gorge-95655.herokuapp.com/api/heroes')
                .then(res => {
                    store.commit('setPersons', res.data)
                });
        }
    }
  
}
