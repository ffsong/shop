import Vue from 'vue'
import Vuex from 'vuex'
import mutations  from './mutations'
import * as actions from './actions'
import getters from './getters'

Vue.use(Vuex)

let state = {
  token: null, // 登陆凭证
  user: null, // 用户信息

  isLoading: false, // 是否展示loading动画
  orderBy: 'sale', // 根据什么字段排序
  signUpStep: 0, // 登陆步骤
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
    }
})

