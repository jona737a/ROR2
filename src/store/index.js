import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    currentUser: null,
    
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
    
  },
  actions: {
    setUser(context, user){
      context.commit('userStatus', user)
    },

    
  },

  modules: {

  },
  getters: {
    getBasketItems: state => state.products,
    currentUser: state => state.currentUser,
  }
})
