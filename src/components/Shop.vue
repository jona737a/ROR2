<template>
    <v-container fluid>
        <v-row>
            
            
            <v-col cols="10" class="mx-auto">
                <v-row class="topBar" align="center">
                    
                        
                        <v-dialog
                        v-model="dialog"
                        max-width="500">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn width="5vw" 
                                height="2.5vw" 
                                id="filterButton"
                                color="accent" 
                                v-bind="attrs"
                                v-on="on">
                                Filter
                                </v-btn>
                                
                            </template>
                            <v-card
                            color="tertiary">
                                <v-card-title class="headline">
                                Filter items
                                </v-card-title>
                                <div class="filters">
                                    <div class="checkfilter">
                                        <h3>Types</h3>
                                        <div class="check" v-for="(type, index) in types" :key="index">
                                            <v-checkbox 
                                                v-model="filterType"
                                                :label="type"
                                                :value="type"
                                                dense
                                                dark
                                                
                                                class="pl-4 py-0"
                                            ></v-checkbox>
                                        </div>
                                    </div>
                                    <div class="checkfilter">
                                        <h3>Rarities</h3>
                                        <div class="check" v-for="(rarity, index) in rarities" :key="index">
                                            <v-checkbox 
                                                v-model="filterRarity"
                                                :label="rarity"
                                                :value="rarity"
                                                dense
                                                dark
                                                
                                                class="pl-4 py-0"
                                            ></v-checkbox>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            color="primary"
                                            @click="filterOnType()"
                                        
                                        >
                                            Filter
                                        </v-btn>
                                        <v-btn
                                            color="secondary"
                                            dark
                                            @click="dialog = false, filterType = [], filterRarity = []"
                                        >
                                            Disable
                                        </v-btn>
                                    </v-card-actions>
                                
                            </v-card>
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
                    
                        <v-card class="product" color="tertiary" flat rounded="0" v-for="product in filteredRarity" :key="product.id">
                            <v-img  max-height="6vw" min-height="6vw" width="6vw" cover v-bind:src="product.image"></v-img>
                            <h2>{{ product.name }}</h2>
                            <p>{{ product.price }}$</p>
                            <v-btn class="productButton" height="2vw" width="2vw" color="secondary" @click="addToBasket(product)" >Add</v-btn>
                        </v-card>


                </v-row>

     <!--<v-row class="productList">
                    
                        <v-card class="product" color="tertiary" flat rounded="0" v-for="product in filteredType" :key="product.id">
                            <v-img  max-height="6vw" min-height="6vw" width="6vw" cover v-bind:src="product.image"></v-img>
                            <h2>{{ product.name }}</h2>
                            <p>{{ product.price }}$</p>
                            <v-btn class="productButton" height="2vw" width="2vw" color="secondary" @click="addToBasket(product)" >Add</v-btn>
                        </v-card>


                </v-row>-->

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
            filterType: [],
            filterRarity: [],
            staticBasketDump: [],
            searchString: '',
            dialog: false,
            
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
        types(){
            return this.$store.getters.getTypes
        },
        rarities(){
            return this.$store.getters.getRarities
        },

        shopproducts(){
            return this.$store.getters.getProducts
        },

        filteredList() {
            return this.shopproducts.filter(product => {
                
                return product.name.toLowerCase().includes(this.searchString.toLowerCase())
            })
        },
     
        filteredType() {
             return this.filteredList.filter(product => product.type.includes(this.filterType))
        },

        filteredRarity() {
             return this.filteredType.filter(product => product.rarity.includes(this.filterRarity))
        },
       
        
    },

    methods:{

        filterOnType() {
            
            console.log("test", this.filter)
            console.log("test", this.shopproducts.filter(product => product.type == this.filter ))
            this.dialog = false
        },
        
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

    .headline{
        color: map-get(map-get($colorz,blue), text);
    }

    .filters{
        display: flex;
        justify-content: space-evenly;
        padding-right: 50px;
    }

    .checkFilter{
        width: 250px;
        
    }

    h3{
            color: map-get(map-get($colorz, blue), text );
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