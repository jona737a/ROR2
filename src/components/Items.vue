<template>
    <v-container fluid>
        <v-snackbar top color="secondary" v-model="updatedSuccess">
            {{ updatedText }}
            <v-btn
            color="text"
            text
            @click="updatedSuccess = false">
            Close
            </v-btn>
        </v-snackbar>
        <v-snackbar top color="secondary" v-model="deletedSuccess">
            {{ deletedText }}
            <v-btn
            color="text"
            text
            @click="deletedSuccess = false">
            Close
            </v-btn>
        </v-snackbar>
        <v-row>
            <v-col cols="10" class="mx-auto">
                <v-row class="topBar" align="center">
                    
                        <v-btn width="5vw" height="2.5vw" id="filterButton" color="accent"> Filter </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn width="5vw" height="2.5vw" id="filterButton" color="accent" to="/AddItem"> Add </v-btn>
                        <v-spacer></v-spacer>
                        <v-icon color="text">assignment</v-icon>
                        <h1>PRODUCTS</h1>
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
                    
                        <v-card class="product" color="tertiary" border-color="text" flat rounded="0" v-for="product in filteredList" :key="product.id">
                            <v-img class="image" height="3vw" max-width="3vw" v-bind:src="product.image"></v-img>
                            <h2>{{ product.name }}</h2>
                            <p>{{ product.price }}$</p>
                            <v-btn class="productButton"  color="secondary" @click.stop="dialog = true" @click="editItem(product)">Edit</v-btn>
                            <v-icon color="primary" @click="deleteItem(product.id)" >delete</v-icon>
                        </v-card>

                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-dialog v-model="dialog" max-width="500">
                <v-card>
                    <v-row class="editItemForm">
                        <v-col cols="10" >
                            <v-text-field
                            v-model="product.name"
                            background-color="text"
                            class="formField"
                            solo
                            ></v-text-field>
                            <v-text-field
                            v-model="product.price"
                            background-color="text"
                            class="formField"
                            solo
                            ></v-text-field>
                            <v-overflow-btn  
                                background-color="text"
                                v-model="product.type"
                                class="dropdown"
                                :items="types"
                            >
                            </v-overflow-btn>
                            <v-overflow-btn  
                                background-color="text"
                                v-model="product.rarity"
                                class="dropdown"
                                :items="rarities"
                            ></v-overflow-btn>
                            <v-btn color="secondary" @click="updateItem()" @click.stop="dialog = false">Edit Item</v-btn>
                            <v-btn color="secondary" @click.stop="dialog = false">Cancel</v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-dialog>
        </v-row>
    </v-container>
</template>

<script>
import { dbShopAdd } from '../../firebase'
import 'firebase/firestore'


export default {
    data(){
        return{
            searchString: '',
            dialog: false,
            product: [],
            types: ['Offense', 'Utility', 'Healing', 'Equipment', 'Wet'],
            rarities: ['Common', 'Uncommon', 'Legendary', 'Boss', 'Lunar', 'Fesh'],
            activeEditItem: null,
            updatedSuccess: false,
            updatedText: "Product has been updated",
            deletedSuccess: false,
            deletedText: "Product has been deleted",
        }
    },

    beforeCreate(){
        this.$store.dispatch('setProducts')
    },
    
    methods: {
        editItem(product){
            this.product = product
            this.activeEditItem = product.id
        },
        updateItem(){
            dbShopAdd.doc(this.activeEditItem).update(this.product).then(() => {
                //console.log("Success");
                this.updatedSuccess = true;
            })
            .catch(function(/*error*/){
                //console.log("Error", error)
            });
        },
        deleteItem(id){

            dbShopAdd.doc(id).delete().then(()=>{
                //console.log("Document successfully deleted");
                this.deletedSuccess = true;
            }).catch(function(/*error*/) {
                //console.log("Error Removing Document: ", error);
            });
        },
    },
    computed: {
        filteredList() {
            return this.shopproducts.filter(product => {
                return product.name.toLowerCase().includes(this.searchString.toLowerCase())
            })
        },
        shopproducts(){
            return this.$store.getters.getProducts
        },
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

    .productList{
        background-color: map-get(map-get($colorz, blue) , tertiary );
        display: flex;
        flex-flow: column;
        align-items: center;
        :last-child{
            border: none;
        }
    }

    .v-application .tertiary{
        border-color:map-get(map-get($colorz, blue), text) !important;
    }
    .product{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 95%;
        height: 5vw;
        margin: 0;
        border-bottom: solid 0.2vw ;
        
        h2{
            color: map-get(map-get($colorz, blue) , text );
            font-size: 1vw;
            width: 12vw;
            font-weight: 400;
            align-self: center;
            text-align: left;
        }
        .image{
            margin: auto 0;
        }
        p{
            color: map-get(map-get($colorz, blue) , text );
            font-size: 1.2vw;
            width: 7vw;
            font-style: italic;
            text-align: left;
            height: fit-content;
            margin: 0;
        }
        .productButton{
            margin: auto 0;
        }
    }
    .editItemForm{
        background-color: map-get(map-get($colorz, blue) , tertiary );
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .dropdown{
        border-radius: 5px;
    }

</style>