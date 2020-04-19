<template>
  <div id="NavBar">
    <ul>
      <li><b>PokeNigaud</b></li>
      <li><router-link to="/">Accueil</router-link></li>
      <li><router-link to="/SpritePokemon">Pokedex</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #FCCF00;
  border: 1px solid black; 
}

li a {
  display: block;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  border: 1px solid black; 
}

li a:hover {
  background-color: white;
  color: #FCCF00;
}
b{
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  background-color: #2468b1;
  border: 1px solid black; 
}
</style>