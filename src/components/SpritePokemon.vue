  <template>
  <div id="SpritePokemon">
        <div class="contenu">
          <div v-if="pokemons_species == undefined">
            <img src="https://media.giphy.com/media/TDB0JwrUwHZUk/giphy.gif">
            <h1> Pokedex loading ...</h1>
          </div>
          <div v-else>
            <div class="card" v-for="pokemon in pokemons_species" :key="pokemon.id">
              <router-link :to="{path:'SpritePokemon/'+pokemon.id}">
                        <img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+pokemon.data.id+'.png'" alt="pokemon">
                        <div class="container">
                            <h4>N°{{pokemon.data.id}}</h4>
                            <p>{{pokemon.data.names[6].name}}</p> 
                        </div>
              </router-link>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Sprite_pokemon',
  components:{
  },
  data:function(){
    return {
      loading:true
    };
  },
  computed: {
    pokemons_species() {
      this.refresh();
      if(this.loading == true) return undefined;
        return this.$store.getters.getPokemons_species;
    },
    pokemon2() {
      console.log(this.$store.getters.getPokemons2);
      return this.$store.getters.getPokemons2[this.$route.params.id-1];
    },
  }, 
  methods: {
    refresh(){
      if(this.$store.getters.getPokemons_species.length < 806){
        setTimeout(this.refresh,1500);
      } else {
        this.loading = false;
      }
    }
  } 
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 18%;
  margin:1%;
  float:left;
  border-radius: 25% 10%;
  background-color: white;
}
.card:hover {
  box-shadow: 0 30px 40px 0 rgba(0, 0, 0, 0.575);
}
.container {
  padding: 2px 16px;
  background-color: #2468b1;
  color:white;
  border-radius: 25% 10%;
}

.contenu{
  width: 80%;
  margin-left: 10%;
  margin-right:10% ;
}
b{
  border-radius: 12px;
  text-align: left;
}

</style>