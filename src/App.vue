<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  created() {
    this.getApi();
  },
  components: {
    Navbar,
    Footer
  },
  methods: {
    getApi() {  
      const nb_pokemon = 807;
      var tabPokemons_species = [];   
      var tabPokemons2 = [];  
      for(var i =1; i <= nb_pokemon; i++){ 
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${i}/`)
        .then(response=>{
          tabPokemons_species[response.data.id-1]={
              id:response.data.id,
              data:response.data
          };
        })
        axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        .then(response=>{
          tabPokemons2[response.data.id-1]={
              id:response.data.id,
              data:response.data
          };
        })
        .catch(error => console.log(error) )
      }
      this.$store.commit('setPokemons_species',tabPokemons_species);
      this.$store.commit('setPokemons2',tabPokemons2);
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,body{
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-image:url('./assets/background.jpg');
}
</style>