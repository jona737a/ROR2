<template>
  <v-app>
    <v-container fluid>
     <v-row class="header primary pr-10">
        <v-col class="login" cols="2" no-gutter>
          <router-link to="/admin" class="login">
            <v-icon v-if="currentUser" color="text" >lock_open</v-icon>
            <v-icon v-if="!currentUser" color="text" >lock</v-icon>
            <p class="text--text admin">Admin</p>
          </router-link>
        </v-col>

        <v-col class="colorButtons" cols="3">
          <v-btn class="colorButton" color="blue lighten-4" dense @click="changeBlue()">
            <v-icon color="grey darken-4">
              palette
            </v-icon>
            Blue
          </v-btn>
          <v-btn class="colorButton" color="orange lighten-4" dense @click="changeRed()">
            <v-icon color="grey darken-4">
              palette
            </v-icon>
            Red
          </v-btn>
          <v-btn class="colorButton" color="yellow lighten-3" dense @click="changeYellow()">
            <v-icon color="grey darken-4">
              palette
            </v-icon>
            Yellow
          </v-btn>
        </v-col>

        <v-col cols="2">
          <router-link to="/">
            <v-img src="https://www.riskofrain.com/wp-content/uploads/2019/04/ror2_logo_512-1.png" alt="logo"></v-img>
          </router-link>
        </v-col>
        <v-spacer></v-spacer>
        <p v-if="currentUser" class="text--text admin">{{ currentUser.email }}</p>
        <v-btn
        class="ml-3"
        v-if="currentUser" 
        color="text"
        @click="signOut()">
          Sign Out
        </v-btn>
      </v-row>
      <router-view style="position: relative; z-index:2;"></router-view>
       <v-img style="position:fixed" class="bg" height="100vh" fluid v-bind:src="currentBackground"></v-img>
      
    </v-container>
  </v-app>
</template>

<script>
/*eslint-disable*/
import { db } from '../firebase'

import firebase from 'firebase'
import 'firebase/firestore'
import store from '../src/store/index.js'

firebase.auth().onAuthStateChanged(function(user){
  if (user){
    store.dispatch('setUser', user)
  }
  else{
    store.dispatch('setUser', null)
  }
}); 

export default {
  data(){
    return{
      currentColor: 'blue',
      currentBackground: 'https://images.gamewatcherstatic.com/image/file/3/af/99013/ss_725d301ba2651921825d23f714a0c103877e03b3.1920x1080.jpg',
    }
  },
  methods:{
    signOut(){
      firebase.auth().signOut().then(() => {
        alert('Logged out')
        this.$router.replace('/')
      }).catch(function(error) {
        console.log(error)
      });
    },

    changeBlue(){
      if(this.currentColor == 'blue'){
        return console.log('Color is already blue, dumbnut!')
      }
      else{
        this.$vuetify.theme.themes.light.primary = '#0D1333',
        this.$vuetify.theme.themes.light.secondary = '#0E3A83',
        this.$vuetify.theme.themes.light.tertiary = '#2578BE',
        this.$vuetify.theme.themes.light.text = '#ADD0E4',
        this.$vuetify.theme.themes.light.accent = '#4B74AC',
        this.currentBackground = 'https://images.gamewatcherstatic.com/image/file/3/af/99013/ss_725d301ba2651921825d23f714a0c103877e03b3.1920x1080.jpg',
        
        this.currentColor = 'blue';
      }
    },
    changeRed(){
      if(this.currentColor == 'red'){
        return console.log('Color is already red, dumbnut!')
      }
      else{
        this.$vuetify.theme.themes.light.primary = '#400106',
        this.$vuetify.theme.themes.light.secondary = '#59022B',
        this.$vuetify.theme.themes.light.tertiary = '#A6032F',
        this.$vuetify.theme.themes.light.text = '#F2D479',
        this.$vuetify.theme.themes.light.accent = '#D93E30',
        this.currentBackground = 'https://vignette.wikia.nocookie.net/risk-of-rain/images/6/63/Risk_of_Rain_2_5.jpg/revision/latest?cb=20190402175058',

        this.currentColor = 'red';
      }
    },
    changeYellow(){
      if(this.currentColor == 'yellow'){
        return console.log('Color is already yellow, dumbnut!')
      }
      else{
        this.$vuetify.theme.themes.light.primary = '#2E2A38',
        this.$vuetify.theme.themes.light.secondary = '#59121F',
        this.$vuetify.theme.themes.light.tertiary = '#D9765F',
        this.$vuetify.theme.themes.light.text = '#F7D5AA',
        this.$vuetify.theme.themes.light.accent = '#F29E6D',
        this.currentBackground = 'https://www.riskofrain.com/wp-content/uploads/2019/06/dlc1_ss01.jpg',

        this.currentColor = 'yellow';
      }
    },

  },
  computed: {
    currentUser(){
      return this.$store.getters.currentUser
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./scss/variables.scss";


.bg{
  position: absolute;
  top: 0;
  z-index: 0;
}

.header{
  z-index: 1;
  position: relative;
  opacity: 80%;
  height: 8vw;
  display: flex;
  align-items: center;
}

.container{
  padding: 0;
}


.login{
  display: flex;
  align-items: center;
  justify-content: center;
  .v-icon{
    margin: 1vw;
    font-size: 2.5vw;
  }
}

.admin{
  margin: 0;
  font-size: 2vw;
  width: fit-content;
}

.colorButtons{
  display: flex;
  flex-direction: row;
}

.colorButton{
  margin: 0 0.5vw;
}

  
</style>
