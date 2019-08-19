import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'css/common.css'

Vue.config.productionTip = false

Vue.use(iView);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
