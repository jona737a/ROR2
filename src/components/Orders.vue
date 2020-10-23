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
                <v-row class="topBar secondary" align="center">
                    <v-spacer></v-spacer>
                    <v-icon color="text">receipt_long</v-icon>
                    <h1 class="text--text">ORDERS</h1>
                    <v-spacer></v-spacer>
                </v-row>
                <v-row>
                    <v-col class="orderlist tertiary overflow-y-auto">
                        <v-row class="order" v-for="order in orderItems" :key="order.id" >
                            <v-col cols="4"  ><p class="text--text" style="text-align:right">Order Number:</p></v-col>
                            <v-col cols="4"><p class="text--text">{{order.orderNumber}}</p></v-col>
                            <v-col cols="4"><div class="progress secondary" @click="switchState(order.id)"><p class="text--text">{{order.progress}}</p></div></v-col>
                            <v-col cols="4"><p class="text--text" style="text-align:right">Order items:</p></v-col>
                            <v-col cols="4">
                                <p class="text--text" v-for="(item, index) in order.orderLines" :key="index">{{item.quantity}} x {{item.name}}</p>
                                
                            </v-col>
                            <v-col cols="4" class="pl-13">
                                <v-icon @click="deleteOrder(order.id)" color="primary">delete</v-icon>
                                
                            </v-col>
                            <v-col cols="8" offset="3"><h2 class="text--text">Total price: {{order.sum}} $</h2></v-col>
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
            totalCost:[],
        }
    },
    beforeCreate(){
        
    },
    computed:{
        orderItems(){
           return this.$store.getters.getOrderItems
        },
        
    },
    methods:{
        
        
        switchState(id){
            let selectedOrderItem = this.orderItems.filter(item => item.id === id)[0];

            if(selectedOrderItem.progress === "not started"){
                dbOrders.doc(id).update({progress:"in progress"}).then(()=>{})
            }
            else if(selectedOrderItem.progress === "in progress"){
                dbOrders.doc(id).update({progress:"complete"}).then(()=>{})
            }
            else if(selectedOrderItem.progress === "complete"){
                dbOrders.doc(id).update({progress:"in progress"}).then(()=>{})
            }
        },
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
    
    .v-application .secondary {
    border-color: var(--v-text-base) !important;
    }
    
    .topBar{
        padding: 0 1vw;
        border-bottom: 0.2vw solid map-get(map-get($colorz, blue) , text );
        height: 4vw;
        border-bottom: 0.2vw solid var(--v-text-base);
        border-color: var(--v-text-base) !important;
    }

    .topBar h1{
        font-size: 2vw;
        font-weight: 400;
    }

    .v-icon{
        font-size: 2.5vw;
    }
    
    .orderlist{
        max-height: 69vh;
        .order{
            border-bottom: 0.2vw solid var(--v-text-base);
            border-color: var(--v-text-base) !important;
            p{
                width: 100%;
            }
            .progress{
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