// $config 路径在 vue.fonfig.js 中配置
import {userTokenStorageKey, userInfoStorage} from '$config'
// 改进的离线存储
import localforage from 'localforage'
import * as TYPES from "./mutations-types";

// 登录
export const attemptLogin = ({ dispatch }, payload) => {
  dispatch('setToken', {token: payload.token}).then((token) => {
    return Promise.resolve(token)
  }).then((token) => {
    dispatch('setTokenLocal', token)
  })
  return Promise.resolve()
}

// 注册
export const attemptRegister = ({ dispatch }, payload) =>
    services
        .postRegister(payload)
        .then(({ token }) => {
          dispatch('setToken', token)

          return Promise.resolve()
        })
        .then(() => dispatch('loadUser'))

// 退出登陆
export const logout = ({ dispatch }) => {
  return localforage
      .removeItem(userTokenStorageKey)
      .then(dispatch('setToken', null))
      .then(dispatch('setUser', {}))
}

// 设置用户信息
export const setUser = ({ commit }, user) => {
  // Commit the mutations
  commit(TYPES.SET_USER, user)

  Promise.resolve(user) // keep promise chain
}

// 设置 token
export const setToken = ({ commit }, payload) => {
  // prevent if payload is a object
  const token = (!payload) ? null : payload.token || payload

  // Commit the mutations
  commit(TYPES.SET_TOKEN, token)

  return Promise.resolve(token) // keep promise chain
}

/**
 * 设置用户信息
 */
export const loadUser = ({ dispatch }) =>
    services
        .loadUserData()
        // store user's data
        .then(user => dispatch('setUser', user))
        .catch(logout)

// 验证用户Token
export const checkUserToken = ({dispatch, state}) => {
  // 令牌存在不进行其他验证
  if (state.token) {
    return Promise.resolve(state.token)
  }

  /**
   * 令牌不存在
   * 从本地存储中恢复
   * 同时恢复用户，同时验证令牌
   */
  return (
      localforage
          .getItem(userTokenStorageKey)
          .then(token => {
            if (!token) {
              // 令牌未保存在本地存储中
              return Promise.reject('NO_TOKEN') // Reject promise
            }
            // 设置 token 到 vuex store
            return dispatch('setToken', token) // keep promise chain
          })
          // With the token in hand, retrieves the user's data, validating the token
          // .then(() => dispatch('loadUser'))
  )
}

// token 保存到本地缓存
export const setTokenLocal = (token) => {
  localforage.setItem(userTokenStorageKey, token).then(function (token) {
    // 当值被存储后，可执行其他操作
    console.log('写入本地缓存'+ token);
  }).catch(function(err) {
    // 当出错时，此处代码运行
    console.log(err);
  });
}

// user 信息保存到本地缓存
export const setUserLocal = (userInfo) => {
  localforage.setItem(userInfoStorage, userInfo)
}
