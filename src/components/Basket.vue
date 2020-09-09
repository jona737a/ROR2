<template>
    <v-container fluid>
        <v-row>
            <v-col cols="10" class="mx-auto">
                <v-row class="topBar" align="center">
                    <v-spacer></v-spacer>
                    <v-icon color="text">shopping_cart</v-icon>
                    <h1>BASKET</h1>
                    <v-spacer></v-spacer>
                </v-row>
                <v-row class="basketList">
                    <v-simple-table>
                        
                    </v-simple-table>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.topBar{
        background-color: map-get(map-get($colorz, blue) , secondary );
        padding: 0 1vw;
        border-bottom: 0.2vw solid map-get(map-get($colorz, blue) , text );
        height: 4vw;
    }

    .topBar h1{
        color: map-get(map-get($colorz, blue) , text );
        font-size: 2vw;
        font-weight: 400;
    }

    .v-icon{
        font-size: 2.5vw;
    }

</style>