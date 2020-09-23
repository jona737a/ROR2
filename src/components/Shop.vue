<template>
    <v-container fluid>
        <v-row>
            <v-col cols="10" class="mx-auto">
                <v-row class="topBar" align="center">
                    
                        <v-btn width="5vw" height="2.5vw" id="filterButton" color="accent"> Filter </v-btn>
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
                        append-icon="search">
                        </v-text-field>
                    
                </v-row>
                <v-row class="productList">
                    
                        <v-card class="product" color="tertiary" flat rounded="0" v-for="product in products" :key="product.id">
                            <v-img  max-height="6vw" min-height="6vw" width="6vw" cover v-bind:src="product.image"></v-img>
                            <h2>{{ product.name }}</h2>
                            <p>{{ product.price }}$</p>
                            <v-btn class="productButton" height="2vw" width="2vw" color="secondary">Add</v-btn>
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
            products: [
            {
                name: 'Lens-Makers Glasses',
                price: 25,
                rarity: 'common',
                type: 'offense',
                image: 'https://static.wikia.nocookie.net/riskofrain2/images/2/23/Lens-Maker%27s_Glasses.png'
            },
            {
                name: 'Pauls Goat Hoof',
                price: 25,
                rarity: 'common',
                type: 'utility',
                image: 'https://static.wikia.nocookie.net/riskofrain2/images/4/4a/Paul%27s_Goat_Hoof.png'
            },
            {
                name: 'Hopoo Feather',
                price: 50,
                rarity: "uncommon",
                type: 'utility',
                image: 'https://static.wikia.nocookie.net/riskofrain2/images/3/3a/Hopoo_Feather.png'
            },
            {
                name: 'Ukulele',
                price: 50,
                rarity: "uncommon",
                type: 'offense',
                image: 'https://static.wikia.nocookie.net/riskofrain2/images/9/98/Ukulele.png'
            },
            {
                name: 'Shattering Justice',
                price: 75,
                rarity: 'legendary',
                type: 'offense',
                image: 'https://static.wikia.nocookie.net/riskofrain2/images/2/2d/Shattering_Justice.png'
            },
            {
                name: 'Ceremonial Dagger',
                price: 75,
                rarity: 'legendary',
                type: 'offense',
                image: 'https://static.wikia.nocookie.net/riskofrain2/images/7/76/Ceremonial_Dagger.png'
            },
            {
                name: 'Irradiant Pearl',
                price: 100,
                rarity: 'boss',
                type: 'all-round',
                image: 'https://static.wikia.nocookie.net/riskofrain2/images/e/ef/Irradiant_Pearl.png'
            },
            {
                name: 'Titanic Knurl',
                price: 100,
                rarity: 'boss',
                type: 'defense',
                image: 'https://static.wikia.nocookie.net/riskofrain2/images/9/9f/Titanic_Knurl.png'
            },
            {
                name: 'Corpsebloom',
                price: 40,
                rarity: 'lunar',
                type: 'defense',
                image: 'https://static.wikia.nocookie.net/riskofrain2/images/3/31/Corpsebloom.png'
            },
            {
                name: 'Bass',
                price: 69,
                rarity: 'fesh',
                type: 'wet',
                image: 'https://www.freeiconspng.com/uploads/bass-fish-png-stripped-bass-png-11.png'
            }

            ],
        }
    },
    methods:{
        // VUEX Basket
        addToBasket(item){
            this.staticBasketDump.push({
                name: item.name,
                price: item.price,
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