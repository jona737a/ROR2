<template>
    <v-container fluid>
        <v-row>
            
            
            <v-col cols="10" class="mx-auto">
                <v-row class="topBar" align="center">
                    
                        <v-btn width="5vw" height="2.5vw" id="filterButton" color="accent"> Filter </v-btn>
                        <v-dialog>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                color="primary"
                                dark
                                v-bind="attrs"
                                v-on="on"
                                >
                                Open Dialog
                                </v-btn>
                                
                            </template>
                        </v-dialog>
                        <v-spacer></v-spacer>
                        <v-icon color="text">store</v-icon>
                        <h1>SHOP</h1>
                        <v-spacer></v-spacer>
                        <v-text-field
                        dense
                        background-color="text"
                        class="topBarSearch"
                        label="Solo"
                        placeholder="Search"
                        solo
                        append-icon="search"
                        v-model="searchString">
                        </v-text-field>
                    
                </v-row>
                <v-row class="productList">
                    
                        <v-card class="product" color="tertiary" flat rounded="0" v-for="product in filteredList" :key="product.id">
                            <v-img  max-height="6vw" min-height="6vw" width="6vw" cover v-bind:src="product.image"></v-img>
                            <h2>{{ product.name }}</h2>
                            <p>{{ product.price }}$</p>
                            <v-btn class="productButton" height="2vw" width="2vw" color="secondary" @click="addToBasket(product)" >Add</v-btn>
                        </v-card>

                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
/*eslint-disable*/
import { dbShopAdd } from '../../firebase'


export default {
    data(){
        return{
            staticBasketDump: [],
            searchString: '',
        }
    },

    beforeCreate(){
        this.$store.dispatch('setProducts')
    },

    /*created(){
        dbShopAdd.get().then((querySnapshot) => {
            querySnapshot.forEach((doc => {
                var shopItemData = doc.data();
                this.products.push({
                    id: doc.id,
                    name: shopItemData.name,
                    price: shopItemData.price,
                    rarity: shopItemData.rarity,
                    type: shopItemData.type,
                })
            }))
        })

    },*/

    computed:{
        filteredList() {
            return this.shopproducts.filter(product => {
                return product.name.toLowerCase().includes(this.searchString.toLowerCase())
            })
        },
        shopproducts(){
            return this.$store.getters.getProducts
        },
    },

    methods:{
        // VUEX Basket
        addToBasket(product){
            this.staticBasketDump.push({
                name: product.name,
                price: product.price,
                quantity: 1
            });
            this.$store.commit('addBasketItems', this.staticBasketDump);
            this.staticBasketDump = [];
        }
    }
}
</script>

<style>

.v-text-field.v-text-field--enclosed .v-text-field__details {
    display: none !important;
}

</style>

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

    .topBarSearch{
        width: 8vw;
    }

    .v-icon{
        font-size: 2.5vw;
    }

    .filterBox{
        background-color: map-get(map-get($colorz, blue) , primary );
        width: 10vw;
        height: 20vw;
        position: relative;
    }

    .productList{
        background-color: map-get(map-get($colorz, blue) , tertiary );
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .product{

        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 6vw;
        margin: 1vw 2vw;

        h2{
            color: map-get(map-get($colorz, blue) , text );
            font-size: 1vw;
            width: 6vw;
            height: 3vw;
            font-weight: 400;
            align-self: center;
            text-align: center;
        }
        p{
            color: map-get(map-get($colorz, blue) , text );
            font-size: 1.2vw;
            width: 6vw;
            font-style: italic;
            text-align: center;
        }
        .productButton{
            margin: 0 auto;
        }
    }

</style>