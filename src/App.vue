<template>
  <v-app>
    <v-container fluid>
      <v-row class="primary">
        <v-col cols="1" class="secondary" no-gutter>
          <p>admin</p>
        </v-col>
        <v-col cols="2" offset="4">
          <v-img src="https://www.riskofrain.com/wp-content/uploads/2019/04/ror2_logo_512-1.png" alt="logo"></v-img>
        </v-col>
        
      </v-row>
      <router-view></router-view>
      
    </v-container>
  </v-app>
</template>

<script>
export default {
  
};
</script>

<style lang="scss" scoped>
.container{
  padding-top: 0;
}




  
</style>
