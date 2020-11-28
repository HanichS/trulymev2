import '@babel/polyfill'
import "firebaseui/dist/firebaseui.css" 
import 'mutationobserver-shim'
import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(firestorePlugin)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
