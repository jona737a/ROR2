<template>
    <div class="main">
        <v-col cols="8" class="pa-0">
            <Shop></Shop>
        </v-col>
        <v-col cols="4" class="pa-0">
            <Basket></Basket>
        </v-col>
    </div>
</template>

<script>

import Shop from "@/components/Shop.vue"
import Basket from "@/components/Basket.vue"

export default {
    components:{
      Shop,
      Basket,
    },
}
</script>

<style lang="scss" scoped>

    .main{
        display: flex;
    }

</style>