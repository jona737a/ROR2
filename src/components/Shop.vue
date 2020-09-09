<template>
    <v-container fluid>
        <v-row>
            <v-col cols="7">
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
                    
                        <div class="product">
                            <v-img height="6vw" width="6vw" cover src="https://i.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg"></v-img>
                            <h2>Lens-Makers Glasses</h2>
                            <p>25$</p>
                            <v-btn class="productButton" height="2vw" width="2vw" color="secondary">Add</v-btn>
                        </div>
                        <div class="product">
                            <v-img height="6vw" width="6vw" cover src="https://i.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg"></v-img>
                            <h2>Lens-Makers Glasses</h2>
                            <p>25$</p>
                            <v-btn class="productButton" height="2vw" width="2vw" color="secondary">Add</v-btn>
                        </div>
                        <div class="product">
                            <v-img height="6vw" width="6vw" cover src="https://i.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg"></v-img>
                            <h2>Lens-Makers Glasses</h2>
                            <p>25$</p>
                            <v-btn class="productButton" height="2vw" width="2vw" color="secondary">Add</v-btn>
                        </div>
                        <div class="product">
                            <v-img height="6vw" width="6vw" cover src="https://i.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg"></v-img>
                            <h2>Lens-Makers Glasses</h2>
                            <p>25$</p>
                            <v-btn class="productButton" height="2vw" width="2vw" color="secondary">Add</v-btn>
                        </div>
                        <div class="product">
                            <v-img height="6vw" width="6vw" cover src="https://i.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg"></v-img>
                            <h2>Lens-Makers Glasses</h2>
                            <p>25$</p>
                            <v-btn class="productButton" height="2vw" width="2vw" color="secondary">Add</v-btn>
                        </div>
                        <div class="product">
                            <v-img height="6vw" width="6vw" cover src="https://i.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg"></v-img>
                            <h2>Lens-Makers Glasses</h2>
                            <p>25$</p>
                            <v-btn class="productButton" height="2vw" width="2vw" color="secondary">Add</v-btn>
                        </div>
                        <div class="product">
                            <v-img height="6vw" width="6vw" cover src="https://i.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg"></v-img>
                            <h2>Lens-Makers Glasses</h2>
                            <p>25$</p>
                            <v-btn class="productButton" height="2vw" width="2vw" color="secondary">Add</v-btn>
                        </div>
                        <div class="product">
                            <v-img height="6vw" width="6vw" cover src="https://i.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg"></v-img>
                            <h2>Lens-Makers Glasses</h2>
                            <p>25$</p>
                            <v-btn class="productButton" height="2vw" width="2vw" color="secondary">Add</v-btn>
                        </div>
                        <div class="product">
                            <v-img height="6vw" width="6vw" cover src="https://i.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg"></v-img>
                            <h2>Lens-Makers Glasses</h2>
                            <p>25$</p>
                            <v-btn class="productButton" height="2vw" width="2vw" color="secondary">Add</v-btn>
                        </div>
                        <div class="product">
                            <v-img height="6vw" width="6vw" cover src="https://i.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg"></v-img>
                            <h2>Lens-Makers Glasses</h2>
                            <p>25$</p>
                            <v-btn class="productButton" height="2vw" width="2vw" color="secondary">Add</v-btn>
                        </div>

                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    
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