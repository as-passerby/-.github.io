import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
// import router from './router'
import './plugins/element.js'
// 引入全局样式
import './assets/css/global.css'
// 引入icon小图标
import './assets/fonts/iconfont.css'

import axios from 'axios'
// 配置请求的跟路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 请求拦截器 需要授权的 API ，必须在请求头中使用 'Authorization' 字段提供 'token' 令牌
axios.interceptors.request.use(config => {
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
