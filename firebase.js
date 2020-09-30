import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCqkwqsNUNrBP3Iswj52TG9ppsYW8DHI10",
    authDomain: "ror2-eb349.firebaseapp.com",
    databaseURL: "https://ror2-eb349.firebaseio.com",
    projectId: "ror2-eb349",
    storageBucket: "ror2-eb349.appspot.com",
    messagingSenderId: "928088216643",
    appId: "1:928088216643:web:2c00799188c8b427a1f0f6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const dbShopAdd = db.collection('shopItems');

export const usersCollection = db.collection('users')