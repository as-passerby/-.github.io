import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/home', component: Home }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // 如果用户访问的登录页 直接放行
  if (to.path === '/login') {
    next()
  } else {
    // 表示想要访问网站后台  判断有没有token
    const token = window.sessionStorage.getItem('token')
    // 没有登录 让其跳转回 login
    if (!token) {
      next('/login')
    } else {
      next()
    }
  }
})
export default router
