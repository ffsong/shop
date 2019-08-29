import vuex from '../store'

// 判断路由是需要登陆
const needAuth = route => route.meta.requiresAuth === true

const beforeEach = (to, from, next) => {
  /**
   * Otherwise  if authentication is required login.
   */
  vuex
      .dispatch('checkUserToken')
      .then(() => {
        if (vuex.getters.isLogged && to.path.indexOf('auth') > 0) {
          return next({name: 'home'})
        }
        return next()
      })
      .catch(() => {
        if (needAuth(to)) {
          // No token, or it is invalid
          return next({name: 'login'}) // redirect to login
        }
        next()
      })
}

export default beforeEach
