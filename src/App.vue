<template>
  <v-app>
    <v-row color="primary" height="6">
      <v-col cols="2" offset="5">
        <v-img src="https://www.riskofrain.com/wp-content/uploads/2019/04/ror2_logo_512-1.png" alt="logo"></v-img>
      </v-col>
      <v-col cols="1" offset="3" class="primary">
        <p>admin</p>
      </v-col>
    </v-row>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  
};
</script>
