import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '',  component: () => import('views/home/index') },
    { path: '/home', name: 'home', component: () => import('views/home/index') },
    { path: '/login', name: 'login', component: () => import('views/login/login') },
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
    { path: '/product/:id', name: 'product', component: () => import('views/goods/goodsDetail') },
    { path: '/addToCart', name: 'addToCart', component: () => import('views/cart/addCart') },
    { path: '/cart', name: 'cart', component: () => import('views/cart/cart') },
    { path: '/cart.action', name: 'cart.action', component: () => import('views/cart/cartAction')},

    {
        path: '*', redirect: '/'
    }
]

export default new VueRouter({
    routes,
    mode: 'history'
})