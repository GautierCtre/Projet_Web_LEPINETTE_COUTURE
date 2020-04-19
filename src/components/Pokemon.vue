<template>
  <div id="Pokemon">
      <button v-on:click="goBack">Retour</button>
      <h1 class="name">{{pokemons_species.data.names[6].name}}</h1>
      <img class="sprite" v-bind:src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+pokemons_species.data.id+'.png'" alt="pokemon">
      <h3 class="numero">Pokemon n° {{pokemons_species.id}}</h3>
      <div class="infos">
        <h4 class="categorie">Catégorie : {{pokemons_species.data.genera[6].genus}} | Type : <div v-if="pokemon2.data.types[0].slot == 1">
                                                                                                <img v-bind:src="'../assets/'+pokemon2.data.types[0].type.name+'.png'" :alt="pokemon2.data.types[0].type.name">
                                                                                              </div>
                                                                                              <div v-else>
                                                                                                <img v-bind:src="'../assets/'+pokemon2.data.types[0].type.name+'.png'" :alt="pokemon2.data.types[0].type.name">
                                                                                                <img v-bind:src="'../assets/'+pokemon2.data.types[1].type.name+'.png'" :alt="pokemon2.data.types[1].type.name">
                                                                                              </div></h4>
        <h4 class="description">Description : {{pokemons_species.data.flavor_text_entries[5].flavor_text}}</h4>
        <div class="stats">
          <h5>Talent : {{pokemon2.data.abilities[0].ability.name}}</h5>
          <h5>Points de vie : {{pokemon2.data.stats[5].base_stat}} / 255 | Vitesse : {{pokemon2.data.stats[0].base_stat}} / 180</h5>
          <h5>Défense : {{pokemon2.data.stats[3].base_stat}} / 250 | Défense spéciale : {{pokemon2.data.stats[1].base_stat}} / 250</h5>
          <h5>Attaque : {{pokemon2.data.stats[4].base_stat}} / 190 | Attaque spéciale : {{pokemon2.data.stats[2].base_stat}} / 194</h5>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Pokemon',
  components: {
  },
  computed: {
        pokemons_species() {
            console.log(this.$store.getters.getPokemons_species);
            return this.$store.getters.getPokemons_species[this.$route.params.id-1];
        },
        pokemon2() {
            console.log(this.$store.getters.getPokemons2);
            return this.$store.getters.getPokemons2[this.$route.params.id-1];
        }
    },
    methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  
    }
}
</script>

<style>
.name{
  margin-top: 20px;
}
.sprite{
   margin-top: 10px;
   width: 5%;
   padding: 30px 150px;
}
.numero {
  background-color: #2468b1;
  color: #FCCF00;
  margin-left: 44%;
  width: 10%;
  padding: 5px 15px;
  border-radius: 30px;
}

.description{
  width: 50%;
  align-content: left;
  padding: 10px 10px;
  width: 40%;
  margin-right : 50%;
  border: 5px solid #2468b1;
  border-radius: 30px;
}

.infos{
  width: 70%;
  height: 400px;
  margin-left: 15%;
  padding: 5px;
  background-color: white;
  border-radius: 30px;
}

button{
  margin-top : 10px;
  background-color: #2468b1;
  border: none;
  color: #FCCF00;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 30px;
}

.stats{
    position : block;
    border: 5px solid #FCCF00;
    border-radius: 30px;
    width: 41.5%;
}

.categorie{
}
</style>