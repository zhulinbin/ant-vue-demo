import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
Vue.use(Vuex)

const state = {
  shoppingCart: 1
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
