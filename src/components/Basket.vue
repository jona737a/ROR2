<template>
    <v-container fluid>
        <v-snackbar top color="secondary" v-model="checkoutSuccess">
            {{ checkoutText }}
            <v-btn
            color="text"
            text
            @click="checkoutSuccess = false">
            Close
            </v-btn>
        </v-snackbar>
        <v-row>
            <v-col cols="10" class="mx-auto">
                <v-row class="topBar secondary" align="center">
                    <v-spacer></v-spacer>
                    <v-icon color="text">shopping_cart</v-icon>
                    <h1 class="text--text">BASKET</h1>
                    <v-spacer></v-spacer>
                </v-row>
                <v-col class="basketList pa-0">
                    <v-row class="topBasket tertiary">
                        <h2 class="h2_one text--text">Amount</h2>
                        <h2 class="h2_two text--text">Product</h2>
                        <h2 class="h2_three text--text">Price</h2>
                    </v-row>

                    <v-row class="basketItems tertiary" v-for="(item, index) in staticBasket" :key="index">
                        <div class="basketAmount">
                            <v-icon color="tertiary--text" @click="decreaseAmt(item)">remove</v-icon>
                            <p class="text--text">{{ item.quantity }}</p>
                            <v-icon color="tertiary--text" @click="increaseAmt(item)">add</v-icon>
                        </div>
                        <p class="basketItemName text--text">{{ item.name }}</p>
                        <v-spacer></v-spacer>
                        <p class="basketPrice text--text"> {{ item.price }} </p>
                    </v-row>

                    <v-row class="basket_footer tertiary">
                        <h2 class="text--text">Total Price: {{ totalPrice }}$ </h2>
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
            //VUEX Basket
            staticBasketDump: [],
            checkoutSuccess: false,
            checkoutText: "Checkout complete",
        }
    },

    beforeCreate(){
        this.$store.dispatch('setOrderItems')
        this.$store.dispatch('setOrderCounter')
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
            
            this.$store.dispatch('setCheckoutItems')
            this.staticBasket.splice(this.staticBasket)
            this.checkoutSuccess = true;
        },
    },
    computed:{
        
        staticBasket(){
           //return this.$store.state.basketItems
           return this.$store.getters.getBasketItems
        },
        counter(){
           return this.$store.getters.getOrderCounter
        },

        
        
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

.v-application .secondary {
    border-color: var(--v-text-base) !important;
    }

.v-application .tertiary {
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

    .v-icon{
        font-size: 2.5vw;
    }

    .topBasket{
        
        border-bottom: 0.1vw solid var(--v-text-base);
        border-color: var(--v-text-base) !important;
        
        h2{
            font-size: 1.2vw;
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
        }

        .basketAmount{
            display: flex;
            flex-direction: row;
            align-content: center;
            padding-left: 0.6vw;
            width: 30%;

            .v-icon{
                font-size: 1.2vw;
                background-color: var(--v-text-base) !important;
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
        border-top: 0.1vw solid var(--v-text-base);
        border-color: var(--v-text-base) !important;
        padding-bottom: 1vw;

        h2{
            font-size: 1.2vw;
            font-style: italic;
            margin: 0.5vw 0;
        }
    }

</style>