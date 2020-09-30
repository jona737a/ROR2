/*eslint-disable*/

import Vue from 'vue'
import Vuex from 'vuex'
import { dbShopAdd } from '../../firebase'

import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    currentUser: null,
    shopproducts: []
  },
  mutations: {
    addBasketItems: (state, products) => {
      if(products instanceof Array) {
        products.forEach(product =>{
          if(state.products.find(itemInArray => product.name === itemInArray.name)){
            product = state.products.find(itemInArray => product.name === itemInArray.name);
            product.quantity++;
          }
          else {
            state.products.push({
              name: product.name,
              price: product.price,
              quantity: 1
            });
          }
        })
      }
    },
    userStatus(state, user) {
      if (user){
        state.currentUser = user
      }
      else {
        state.currentUser = null
      }
    },

    setProducts: state => {
      let shopproducts = []

      dbShopAdd.onSnapshot((snapshotProducts) =>{
        shopproducts = []
        snapshotProducts.forEach((doc) => {
          var shopItemData = doc.data();
          shopproducts.push({
            id: doc.id,
            name: shopItemData.name,
            price: shopItemData.price,
            rarity: shopItemData.rarity,
            type: shopItemData.type,
          })
        })
       
        state.shopproducts = shopproducts
      }
      )
    },
    
  },
  actions: {
    setUser(context, user){
      context.commit('userStatus', user)
    },
    setProducts: context => {
      context.commit('setProducts')
    }
  },

  modules: {

  },
  getters: {
    getBasketItems: state => state.products,
    currentUser: state => state.currentUser,
    getProducts: state => state.shopproducts,
  }
})
