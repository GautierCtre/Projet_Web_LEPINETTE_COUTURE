import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pokemons_species: [],
        pokemons2: [],
    },
    getters: {
        getPokemons_species: state => state.pokemons_species,
        getPokemons2: state => state.pokemons2
    },
    mutations: {
        setPokemons_species(state, payload) {
            if(payload) {
                state.pokemons_species = payload;
            }
        },
        setPokemons2(state, payload) {
            if(payload) {
                state.pokemons2 = payload;
            }
        }
    }
})