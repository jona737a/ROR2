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
                <v-col class="basketList pa-0">
                    <v-row class="topBasket">
                        <h2 class="h2_one">Amount</h2>
                        <h2 class="h2_two">Product</h2>
                        <h2 class="h2_three">Price</h2>
                    </v-row>

                    <v-row class="basketItems" v-for="(item, index) in staticBasket" :key="index">
                        <div class="basketAmount">
                            <v-icon color="tertiary" @click="decreaseAmt(item)">remove</v-icon>
                            <p>{{ item.quantity }}</p>
                            <v-icon color="tertiary" @click="increaseAmt(item)">add</v-icon>
                        </div>
                        <p class="basketItemName">{{ item.name }}</p>
                        <v-spacer></v-spacer>
                        <p class="basketPrice"> {{ item.price }} </p>
                    </v-row>

                    <v-row class="basket_footer">
                        <h2>Total Price: {{ totalPrice }}$ </h2>
                        <v-btn color="secondary" @click="checkOut()">CHECKOUT</v-btn>
                    </v-row>

                </v-col>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            staticBasket: [
                {
                name: 'Lens-Makers Glasses',
                price: 25,
                quantity: 1,
            },
            {
                name: 'Lens-Makers Glasses',
                price: 25,
                quantity: 1,
            },
            ]
        }
    },
    methods:{
        decreaseAmt(item){
            item.quantity--
            if(item.quantity < 1){
                this.staticBasket.splice(this.staticBasket.indexOf(item), 1)
            }
        },
        increaseAmt(item){
            item.quantity++
        },
        checkOut(){
            this.staticBasket.splice(this.staticBasket.item)
        }
    },
    computed:{
        totalPrice(){
            var totalCost = 0;
            for (var items in this.staticBasket) {
                var individualItem = this.staticBasket[items];
                totalCost += individualItem.quantity * individualItem.price;
            }
            return totalCost
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

    .basketItems, .topBasket, .basket_footer{
        background-color: map-get(map-get($colorz, blue) , tertiary );
    }

    .topBasket{
        
        border-bottom: 0.1vw solid map-get(map-get($colorz, blue) , text );
        
        h2{
            font-size: 1.2vw;
            color: map-get(map-get($colorz, blue) , text );
        }

        .h2_one{
            width: 30%;
            padding-left: 1vw;
        }

        .h2_two{
            width: 50%;
        }
        
        .h2_three{
            width: 20;
         }
    }

    .basketItems{

        padding-top: 1vw;

        p{
            font-size: 1.2vw;
            color: map-get(map-get($colorz, blue) , text );
        }

        .basketAmount{
            display: flex;
            flex-direction: row;
            align-content: center;
            padding-left: 0.6vw;
            width: 30%;

            .v-icon{
                font-size: 1.2vw;
                background-color: map-get(map-get($colorz, blue) , text );
                height: 1.2vw;
                margin: 0.2vw 0.5vw;
            }
        }

        .basketItemName{
            width: 50%;
        }

        .basketPrice{
            width: 20%;
        }
    }

    .basket_footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        border-top: 0.1vw solid map-get(map-get($colorz, blue) , text );
        padding-bottom: 1vw;

        h2{
            font-size: 1.2vw;
            color: map-get(map-get($colorz, blue) , text );
            font-style: italic;
            margin: 0.5vw 0;
        }
    }

</style>