import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '',  component: () => import('views/home/index') },
    { path: '/home', name: 'home', component: () => import('views/home/index') },

]

export default new VueRouter({
    routes,
    mode: 'history'
})