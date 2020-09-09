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
                        <template v-slot:default>
                            <thead>
                                <tr>
                                <th class="text-left">Product</th>
                                <th class="text-left">Amount</th>
                                <th class="text-left">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="product in products" :key="product">
                                <td>asd</td>
                                <td>dsa</td>
                                <td>fass</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            products: [0,1],
        }
    }
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