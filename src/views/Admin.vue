<template>
    <div class="main">
        <v-col md="8" class="pa-0">
            <Items></Items>
        </v-col>
        <v-col md="4" class="pa-0">
            <Orders></Orders>
        </v-col>
    </div>
</template>

<script>

import Items from "@/components/Items.vue"
import Orders from "@/components/Orders.vue"

export default {
    components: {
        Items,
        Orders,
    }
}
</script>

<style lang="scss" scoped>
    .main{
        display: flex;
    }
    
    
</style>