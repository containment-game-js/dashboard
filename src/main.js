import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import _ from './config/firebase'
import router from './router'
import store from './store'
import VueApexCharts from 'vue-apexcharts'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faUser,
  faUsers,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons'

library.add(faHome)
library.add(faUser)
library.add(faUsers)
library.add(faTimesCircle)

Vue.use(VueApexCharts)

Vue.component('apex-chart', VueApexCharts)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
