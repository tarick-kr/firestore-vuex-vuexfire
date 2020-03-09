import Vue from 'vue'
import Vuex from 'vuex'

import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from '@/main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cars: []
  },
  mutations: {
    ...vuexfireMutations
  },
  actions: {
    loadCarsList: firestoreAction(context => {
      return context.bindFirestoreRef('cars', db.collection('cars'))
    })
  },
  getters: {
    getCarsSortByYear: (state) => state.cars.sort(function (a, b) {
      return a.year - b.year
    }),
    getCarsReversYear: (state) => state.cars.sort(function (a, b) {
      return b.year - a.year
    })
  }
})
