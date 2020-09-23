import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    basketItems: [
      {
        name: 'Lens-Makers Glasses Test',
        price: 25,
        rarity: 'common',
        type: 'offense',
        quantity: 1,
        //image: 'https://static.wikia.nocookie.net/riskofrain2/images/2/23/Lens-Maker%27s_Glasses.png'
      },
    ]
  },
  mutations: {
    addBasketItems: (state, basketItems) => {
      if(basketItems instanceof Array) {
        basketItems.forEach(item =>{
          if(state.basketItems.find(itemInArray => item.name === itemInArray.name)){
            item = state.basketItems.find(itemInArray => item.name === itemInArray.name);
            item.quantity++;
          }
          else {
            state.basketItems.push({
              name: item.name,
              price: item.price,
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
    getBasketItems: state => state.basketItems
  }
})
