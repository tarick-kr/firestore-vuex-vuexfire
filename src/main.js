import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: 'AIzaSyB0BTr9Bj2H2wNs8oqaC281jbEMQxtHCD4',
  authDomain: 'firestore-vuex.firebaseapp.com',
  databaseURL: 'https://firestore-vuex.firebaseio.com',
  projectId: 'firestore-vuex',
  storageBucket: 'firestore-vuex.appspot.com',
  messagingSenderId: '163606749092',
  appId: '1:163606749092:web:e6b4695fc17c507376eb31'
})

export const db = firebase.firestore()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
