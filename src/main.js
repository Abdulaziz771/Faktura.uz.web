import Vue from 'vue'
import App from './App.vue'

import router from './routes/router'
import store from './components/store'

import '@/assets/global.css'
import '@/assets/media.css'

require("@/translation/translate");

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
