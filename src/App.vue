<template>
  <v-app>
    <v-container fluid>
     <v-row class="header primary pr-10">
        <v-col class="login" cols="2" no-gutter>
          <router-link to="/admin" class="login">
            <v-icon color="text" >lock</v-icon>
            <p class="admin">Admin</p>
          </router-link>
        </v-col>
        <v-col cols="2" offset="3">
          <router-link to="/">
            <v-img src="https://www.riskofrain.com/wp-content/uploads/2019/04/ror2_logo_512-1.png" alt="logo"></v-img>
          </router-link>
        </v-col>
        <v-spacer></v-spacer>
        <v-btn 
        color="text"
        @click="signOut()">
          Sign Out
        </v-btn>
      </v-row>
      <router-view style="position: relative; z-index:2;"></router-view>
       <v-img style="position:fixed" class="bg" height="100vh" fluid src="https://images.gamewatcherstatic.com/image/file/3/af/99013/ss_725d301ba2651921825d23f714a0c103877e03b3.1920x1080.jpg"></v-img>
      
    </v-container>
  </v-app>
</template>

<script>
import firebase from 'firebase'
import 'firebase/firestore'

export default {
  methods:{
    signOut(){
      firebase.auth().signOut().then(() => {
        alert('Logged out')
        this.$router.replace('/')
      }).catch(function(error) {
        console.log(error)
      });
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
  color: map-get(map-get($colorz, blue), text );
  margin: 0;
  font-size: 2vw;
  width: fit-content;
}

  
</style>
