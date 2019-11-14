import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles.scss'
import 'reset.css'
import 'normalize.css'
import 'nprogress/nprogress.css'
import axios from '@/plugin/axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
// import ElementUI from 'element-ui'
// Vue.use(ElementUI)
Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
