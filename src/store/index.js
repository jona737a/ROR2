/*eslint-disable*/

import Vue from 'vue'
import Vuex from 'vuex'
import { dbShopAdd,dbOrders } from '../../firebase'

import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    currentUser: null,
    shopproducts: [],
    orderItems:[],
    types: ['Offense', 'Utility', 'Healing',  'Wet'],
    rarities: ['Common', 'Uncommon', 'Legendary', 'Boss', 'Equipment', 'Lunar', 'Fesh'],
  },
  mutations: {
    addCheckoutItem:(state, products) => {
      dbOrders.add({
        orderNumber: 2,
        progress: "not started",
        orderLines: state.products
      })
    },
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
            image: shopItemData.image,
          })
        })
       
        state.shopproducts = shopproducts
      }
      )
    },
    setOrderItems: state => {
      let orderItems = []

      dbOrders.onSnapshot((snapshotProducts) =>{
        orderItems = []
        snapshotProducts.forEach((doc) => {
          var orderItemData = doc.data();
          orderItems.push({
            id: doc.id,
            orderNumber: orderItemData.orderNumber,
            progress: orderItemData.progress,
            orderLines: orderItemData.orderLines,
          })
        })
       
        state.orderItems = orderItems
      }
      )
    },
    
  },
  actions: {
    setCheckoutItems(context){
      context.commit('addCheckoutItem')
    },

    setUser(context, user){
      context.commit('userStatus', user)
    },
    setProducts: context => {
      context.commit('setProducts')
    },
    setOrderItems: context => {
      context.commit('setOrderItems')
    }
  },

  modules: {

  },
  getters: {
    getBasketItems: state => state.products,
    currentUser: state => state.currentUser,
    getProducts: state => state.shopproducts,
    getTypes: state => state.types,
    getRarities: state => state.rarities,
    getOrderItems: state => state.orderItems,
  }
})
