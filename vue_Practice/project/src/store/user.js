import VueCookies from 'vue-cookies'

export const user = {
  namespaced: true,
  state() {
    return {
      userInfo: {
        // name: '',
        // email: '',
        // phone: '',
        // lang: ''
      }
    }
  },
  getters: {
    isLogin(state) {
      if (VueCookies.get('userInfo')) {
        return true
      } else {
        return false
      }
    }
  },
  mutations: {
    setUserInfo(state, userInfo) {
      console.log(userInfo)
      state.userInfo = userInfo
      VueCookies.set('userInfo', userInfo, '10s') // 첫번째: key, 두번째: value, 세번째: 시간
    },
    clearUserInfo(state) {
      state.userInfo = {}
      VueCookies.remove('userInfo')
    },
    getUserInfo(state) {
      if (VueCookies.get('userInfo')) {
        return state.userInfo
      } else {
        return {}
      }
    }
  },
  actions: {}
}
