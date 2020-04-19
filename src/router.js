import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import SpritePokemon from './components/SpritePokemon.vue'
import Pokemon from './components/Pokemon.vue'

Vue.use(Router)

export default new Router({
  routes:[{
    path:'/',
    component: Home,
  },
  {
    path:'/SpritePokemon',
    component: SpritePokemon,
  },
    {
    path:'/SpritePokemon/:id',
    component: Pokemon,
  }
    ]
})