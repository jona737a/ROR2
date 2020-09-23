<template>
    <v-container fluid>
        <v-row>
            <v-col>
                 <v-row class="topBar" align="center">
                    
                        
                        <v-spacer></v-spacer>
                        <v-icon color="text">note_add</v-icon>
                        <h1>Add New Item</h1>
                        <v-spacer></v-spacer>
                        
                    
                </v-row>
                <v-row class="addItemForm">
                    <v-col cols="10" >
                        <v-text-field
                        required
                        label="Name"
                        v-model="nameOfItem"
                        
                        background-color="text"
                        class="formField"
                        placeholder="Name"
                        solo
                        ></v-text-field>
                        <v-text-field
                        required
                        label="Price"
                        v-model="priceOfItem"
                        
                        background-color="text"
                        class="formField"
                        placeholder="Price"
                        solo
                        ></v-text-field>
                        <v-overflow-btn  
                            background-color="text"
                            :items="types"
                            label="Type"
                            v-model="typeOfItem"
                            class="dropdown"
                            
                            
                        ></v-overflow-btn>
                        <v-overflow-btn  
                            background-color="text"
                            :items="rarities"
                            label="Rarity"
                            v-model="rarityOfItem"
                            class="dropdown"
                        ></v-overflow-btn>
                        <v-btn color="secondary" @click="addShopItem">Create Item</v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { dbShopAdd } from '../../firebase'
export default {
    
    data(){
        return{
            types: ['Offense', 'Utility', 'Healing', 'Equipment', 'Wet'],
            rarities: ['Common', 'Uncommon', 'Legendary', 'Boss', 'Lunar', 'Fesh'],
            nameOfItem: '',
            priceOfItem: '',
            typeOfItem: '',
            rarityOfItem: '',

        }
    },
    methods:{
        addShopItem(){
            dbShopAdd.add({
                name: this.nameOfItem,
                price: this.priceOfItem,
                type: this.typeOfItem,
                rarity: this.rarityOfItem,

            })
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

    .addItemForm{
        background-color: map-get(map-get($colorz, blue) , tertiary );
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .dropdown{
        border-radius: 5px;
    }
</style>