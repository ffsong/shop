import Vue from 'vue'
import VueRouter from 'vue-router'
import beforeEach from './beforeEach'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: () => import('views/home/index'), meta: { requiresAuth: true }},
  {path: '/home', name: 'home', component: () => import('views/home/index'), meta: { requiresAuth: true } },
  {path: '/login', name: 'login', component: () => import('views/login/login')},
  {
    path: '/signUp',
    component: () => import('views/login/signUp'),
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('views/login/signUp/checkPhone')
      },
      {
        path: 'checkPhone',
        component: () => import('views/login/signUp/checkPhone')
      },
      {
        path: 'inputInfo',
        name: 'inputInfo',
        component: () => import('views/login/signUp/inputInfo')
      },
      {
        path: 'signUpDone',
        name: 'signUpDone',
        component: () => import('views/login/signUp/signUpDone')
      }
    ]
  },
  // 产品分类
  {path: '/category/:id', name: 'category', component: () => import('views/goods/goodsList')},
  // 产品详情
  {path: '/product/:id', name: 'product', component: () => import('views/goods/goodsDetail')},

  //加入购物车
  {path: '/addToCart', name: 'addToCart', component: () => import('views/cart/addCart')},

  {path: '/cart', name: 'cart', component: () => import('views/cart/cart')},
  {path: '/cart.action', name: 'cart.action', component: () => import('views/cart/cartAction')},

  // 支付
  {
    path: '/pay',
    name: 'pay',
    component: () => import('views/pay/pay'),
    meta: {
      requiresAuth: true
    },
  },

  {path: '/payDone', name: 'pay.done', component: () => import('views/pay/payDone')},

  {
    path: '*', redirect: '/'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach(beforeEach)

export default router