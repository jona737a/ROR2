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
                <v-row class="topBar secondary" align="center">
                    
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
                                <v-card-title class="headline text--text">
                                Filter items
                                </v-card-title>
                                <div class="filters">
                                    <div class="checkfilter">
                                        <h3 class="text--text">Types</h3>
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
                                        <h3 class="text--text">Rarities</h3>
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
                        <v-btn width="5vw" height="2.5vw" id="filterButton" color="accent" to="/AddItem"> Add </v-btn>
                        <v-spacer></v-spacer>
                        <v-icon color="text">assignment</v-icon>
                        <h1 class="text--text">PRODUCTS</h1>
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
                <v-row class="productList overflow-y-auto tertiary">
                    
                        <v-card class="product" color="tertiary" border-color="text" flat rounded="0" v-for="product in filteredRarity" :key="product.id">
                            <v-img class="image" height="3vw" max-width="3vw" v-bind:src="product.image"></v-img>
                            <h2 class="text--text">{{ product.name }}</h2>
                            <p class="text--text">{{ product.price }}$</p>
                            <v-btn class="productButton"  color="secondary" @click.stop="dialogEdit = true" @click="editItem(product)">Edit</v-btn>
                            <v-icon color="primary" @click="deleteItem(product.id)" >delete</v-icon>
                        </v-card>

                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-dialog v-model="dialogEdit" max-width="500">
                <v-card>
                    <v-row class="editItemForm tertiary">
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
                            <v-row>
                            <v-btn color="secondary" @click="updateItem()" @click.stop="dialogEdit = false">Edit Item</v-btn>
                            <v-spacer />
                            <v-btn color="secondary" @click.stop="dialogEdit = false">Cancel</v-btn>
                            </v-row>
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
            dialogEdit: false,
            product: [],
            filterType: [],
            filterRarity: [],
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
        filterOnType() {
            
            console.log("test", this.filter)
            console.log("test", this.shopproducts.filter(product => product.type == this.filter ))
            this.dialog = false
        },
    },
    computed: {
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
    }
}
</script>

<style>

.v-text-field.v-text-field--enclosed .v-text-field__details {
    display: none !important;
}

</style>

<style lang="scss" scoped>

    .v-application .secondary {
    border-color: var(--v-text-base) !important;
    }

    .topBar{
        padding: 0 1vw;
        border-bottom: 0.2vw solid var(--v-text-base);
        border-color: var(--v-text-base) !important;
        height: 4vw;
    }

    .topBar h1{
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
        display: flex;
        flex-flow: column;
        align-items: center;
        max-height: 69vh;
        :last-child{
            border: none;
        }
    }

    .filters{
        display: flex;
        justify-content: space-evenly;
        padding-right: 50px;
    }

    .checkFilter{
        width: 250px;
        
    }

    .v-application .tertiary{
        border-bottom: 0.2vw solid var(--v-text-base);
        border-color: var(--v-text-base) !important;
    }
    .product{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 95%;
        height: 5vw;
        margin: 0;
        border-bottom: solid 0.2vw ;
        padding: 1vw 0;
        
        h2{
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
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .dropdown{
        border-radius: 5px;
    }

</style>