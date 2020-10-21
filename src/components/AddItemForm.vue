<template>
    <v-container fluid>
        <v-snackbar top color="secondary" v-model="addedSuccess">
            {{ addedText }}
            <v-btn
            color="text"
            text
            @click="addedSuccess = false">
            Close
            </v-btn>
        </v-snackbar>
        <v-row>
            <v-col>
                 <v-row class="topBar secondary" align="center">
                    
                        
                        <v-spacer></v-spacer>
                        <v-icon color="text">note_add</v-icon>
                        <h1 class="text--text">Add New Item</h1>
                        <v-spacer></v-spacer>
                        
                    
                </v-row>
                <v-row class="addItemForm tertiary">
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

                        <v-file-input label="File Input" @change="uploadImage"></v-file-input>

                        <v-btn :disabled="btnDisable" color="secondary" @click="addShopItem">Create Item</v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
/*eslint-disable*/
import { dbShopAdd, fb } from '../../firebase'
export default {
    
    data(){
        return{
            nameOfItem: '',
            priceOfItem: '',
            typeOfItem: '',
            rarityOfItem: '',
            addedSuccess: false,
            addedText: "Product has been created",
            image: null,
            btnDisable: true,
        }
    },
    methods:{

        uploadImage(e){
            let file = e
            //console.log(e);
            var storageRef = fb.storage().ref('products/' + file.name);

            let uploadTask = storageRef.put(file)

            uploadTask.on('state_changed', (snapshot) => {
            }, (error) => {

            }, () => {
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    this.image = downloadURL;
                    this.btnDisable = false;
                    console.log('File available at', downloadURL)
                });
            });
        },

        addShopItem(){
            dbShopAdd.add({
                name: this.nameOfItem,
                price: this.priceOfItem,
                type: this.typeOfItem,
                rarity: this.rarityOfItem,
                image: this.image,

            }),
            this.addedSuccess = true;
        }
    },

    computed:{
        types(){
            return this.$store.getters.getTypes
        },
        rarities(){
            return this.$store.getters.getRarities
        },
    }
}

</script>
<style lang="scss" scoped>

    .topBar{
        padding: 0 1vw;
        border-bottom: 0.2vw solid map-get(map-get($colorz, blue) , text );
        height: 4vw;
    }

    .topBar h1{
        font-size: 2vw;
        font-weight: 400;
    }
    .v-icon{
        font-size: 2.5vw;
    }

    .addItemForm{
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .dropdown{
        border-radius: 5px;
    }
</style>