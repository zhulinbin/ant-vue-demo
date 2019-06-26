import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './assets/js/utils'
import './assets/css/normalize.scss'
import AntDesignVue from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(AntDesignVue)

import i18n from './i18n/index'

import VCharts from 'v-charts'
Vue.use(VCharts)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
