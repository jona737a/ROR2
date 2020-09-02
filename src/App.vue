<template>
  <v-app>
    <v-container fluid>
     <v-row class="header primary">
        <v-col class="login" cols="2" no-gutter>
          <v-icon color="text">lock</v-icon>
          <p class="admin">Admin</p>
        </v-col>
        <v-col cols="2" offset="3">
          <v-img src="https://www.riskofrain.com/wp-content/uploads/2019/04/ror2_logo_512-1.png" alt="logo"></v-img>
        </v-col>
      </v-row>
      <router-view style="position: relative; z-index:2;"></router-view>
       <v-img class="bg" height="100vh" fluid src="https://images.gamewatcherstatic.com/image/file/3/af/99013/ss_725d301ba2651921825d23f714a0c103877e03b3.1920x1080.jpg"></v-img>
      
    </v-container>
  </v-app>
</template>

<script>
export default {
  
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
}

  
</style>
