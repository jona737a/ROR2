<template>
    <div class="main">
        <v-col cols="4" class="pa-0" offset="4">
            <Login></Login>
        </v-col>s
    </div>
</template>

<script>

import Login from "@/components/Login.vue"


export default {
    components: {
        Login,
        
    }
}
</script>

<style lang="scss" scoped>
    .main{
        display: flex;
    }
</style>