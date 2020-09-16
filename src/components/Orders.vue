<template>
     <v-container fluid>
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
                        <v-row class="order">
                            <v-col cols="4"><p style="text-align:right">Order id:</p></v-col>
                            <v-col cols="4"><p>#1</p></v-col>
                            <v-col cols="4"><div class="progress"><p> Progress</p></div></v-col>
                            <v-col cols="4"><p style="text-align:right">Order items:</p></v-col>
                            <v-col cols="4">
                                <p>1x Item 1</p>
                                <p>3x Item 2</p>
                            </v-col>
                            <v-col cols="4">
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
export default {
    
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