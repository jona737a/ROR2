<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-row class="topBar secondary" align="center">
                    
                        
                        <v-spacer></v-spacer>
                        <v-icon color="text">lock</v-icon>
                        <h1 class="text--text">Login</h1>
                        <v-spacer></v-spacer>
                        
                    
                </v-row>
                <v-row class="pa-10 login tertiary">
                    <v-col>
                        <v-text-field
                        required
                            label="Email"
                            v-model="email"
                            background-color="text"
                            class="formField"
                            placeholder="Email"
                            solo
                        > </v-text-field>
                        <v-text-field
                        required
                            label="Password"
                            v-model="password"
                            background-color="text"
                            class="formField"
                            placeholder="Password"
                            solo
                        > </v-text-field>
                        <v-btn
                        color="secondary"
                        @click.prevent="signIn()"
                        >Log In</v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import firebase from 'firebase'
import 'firebase/firestore'

export default {
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods:{

        signIn(){
            
            
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(()=>{
                this.$router.replace('/Admin')
            })
            .catch(function(error){
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password'){
                    alert ("Wrong password")
                }else{
                    alert (errorMessage)
                }
                console.log(error)
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
    .login{
        background-color: map-get(map-get($colorz, blue), tertiary );
    }
</style>