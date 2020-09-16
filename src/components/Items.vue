<template>
    <v-container fluid>
        <v-row>
            <v-col cols="10" class="mx-auto">
                <v-row class="topBar" align="center">
                    
                        <v-btn width="5vw" height="2.5vw" id="filterButton" color="accent"> Filter </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn width="5vw" height="2.5vw" id="filterButton" color="accent"> Add </v-btn>
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
                        append-icon="search">
                        </v-text-field>
                    
                </v-row>
                <v-row class="productList">
                    
                        <v-card class="product" color="tertiary" border-color="text" flat rounded="0" v-for="product in products" :key="product.id">
                            <v-img class="image" height="3vw" max-width="3vw" src="https://i.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg"></v-img>
                            <h2>Lens-Makers Glasses</h2>
                            <p>25$</p>
                            <v-btn class="productButton"  color="secondary">Edit</v-btn>
                            <!-- height="2vw" width="4vw" -->
                            <v-icon color="primary">delete</v-icon>
                        </v-card>

                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            products: [0,1,2,3,4,5,6,7,8,9,],
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
            text-align: center;
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

</style>