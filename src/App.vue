<template>
  <v-app>
    <v-container fluid>
     <v-row class="header primary">
        <v-col cols="1" no-gutter>
          <v-icon color="text">lock</v-icon>
          <p class="admin">Admin</p>
        </v-col>
        <v-col cols="2" offset="4">
          <v-img src="https://www.riskofrain.com/wp-content/uploads/2019/04/ror2_logo_512-1.png" alt="logo"></v-img>
        </v-col>
      </v-row>
       <v-img class="bg" height="100vh" fluid src="https://images.gamewatcherstatic.com/image/file/3/af/99013/ss_725d301ba2651921825d23f714a0c103877e03b3.1920x1080.jpg"></v-img>
      <router-view></router-view>
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
}

.container{
  padding: 0;
}



.admin{
  color: map-get(map-get($colorz, blue), text );
}

  
</style>
