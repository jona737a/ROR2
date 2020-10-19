<template>
     <v-container fluid>
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
                    <v-spacer></v-spacer>
                    <v-icon color="text">receipt_long</v-icon>
                    <h1>ORDERS</h1>
                    <v-spacer></v-spacer>
                </v-row>
                <v-row >
                    <v-col class="orderlist">
                        <v-row class="order" v-for="order in orderItems" :key="order.id">
                            <v-col cols="4"><p style="text-align:right">Order Number:</p></v-col>
                            <v-col cols="4"><p>{{order.orderNumber}}</p></v-col>
                            <v-col cols="4"><div class="progress"><p>{{order.progress}}</p></div></v-col>
                            <v-col cols="4"><p style="text-align:right">Order items:</p></v-col>
                            <v-col cols="4">
                                <p v-for="(item, index) in order.orderLines" :key="index">{{item.quantity}} x {{item.name}}</p>
                                
                            </v-col>
                            <v-col cols="4" @click="deleteOrder(order.id)">
                                <v-icon color="primary">delete</v-icon>
                            </v-col>
                        </v-row>
                        
                        
                    </v-col>
                </v-row>
                <v-row>

                </v-row>
            </v-col>
        </v-row>
     </v-container>
</template>

<script>
import {dbOrders} from '../../firebase'
export default {
    data(){
        return{
            deletedSuccess: false,
            deletedText: "Order has been deleted",
        }
    },
    computed:{
        orderItems(){
           return this.$store.getters.getOrderItems
        },
    },
    methods:{
        deleteOrder(id){
            dbOrders.doc(id).delete().then(()=>{
                //console.log("Document successfully deleted");
                this.deletedSuccess = true;
            }).catch(function(/*error*/) {
                //console.log("Error Removing Document: ", error);
            });
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
    
    .orderlist{
        background-color: map-get(map-get($colorz,blue), tertiary );
        
        .order{
            border-bottom: 0.2vw solid map-get(map-get($colorz,blue), text );
            p{
                width: 100%;
                color: map-get(map-get($colorz,blue), text );
            }
            .progress{
                background-color: map-get(map-get($colorz, blue), secondary);
                padding: 0.5vw;
                p{
                    text-align: center;
                    margin: 0;
                }
            }
        }
        :last-child{
            border: none;
        }
    }
</style>