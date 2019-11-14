import Vue from 'vue'
import VueRouter from 'vue-router'
import nprogress from 'nprogress'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import(/* webpackChunkName: "main" */ '../views/main.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */'@/views/home.vue')
      }
    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
/* 引入其他模块路由 */
/* arg[0] 目录路径 arg[1] 是否递归 arg[2] 匹配文件的额正则 /\.js$/ */
let ctx = require.context('./', true, /\.js$/)
console.log(ctx.keys())
ctx.keys().forEach(name => {
  if (name === './index.js') return
  let module = ctx(name)
  router.addRoutes(module.default || module)
})

router.beforeEach((to, form, next) => {
  nprogress.start()
  next()
})
router.afterEach((to, from) => {
  nprogress.done()
})

export default router
