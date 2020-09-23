import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
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
    }
  },
  actions: {

  },
  modules: {

  },
  getters: {
    getBasketItems: state => state.products
  }
})
