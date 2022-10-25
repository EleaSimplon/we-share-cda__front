import { loadUser, loadToken, storeToken, storeUser, cleanStorage } from '@/utils/auth'
import { User } from '@/types/auth'

export const authModule = {
  state: {
    currentUser: loadUser(),
    token: loadToken()
  },
  getters: {
    isAuthenticated: (state: any) => {
      return !!state.token
    },
    userProfile: (state: any) => {
      return state.currentUser
    },
    authToken: (state: any) => {
      return state.token
    },
    backendUrl: (state: any) => {
      return state.currentUser.backend ? state.currentUser.backend.url : ''
    },
    backendName: (state: any) => {
      return state.currentUser.backend ? state.currentUser.backend.name : ''
    },
    userId: (state: any) => {
      return state.currentUser.id
    },
  },
  mutations: {
    setUser(state: any, user: User) {
      state.currentUser = user
      storeUser(user)
    },
    setToken(state: any, token: string) {
      state.token = token
      storeToken(token)
    },
    logout(state:any, user: User) {
      state.currentUser = user
      state.token = ''
      cleanStorage()
    }
  },
  actions: {
    setUser(context: any, user: User) {
      console.log(context);
      
      context.commit('setUser', user)
    },
    resetUser(context: any) {
      context.commit('setUser', new User())
    },
    logout(context: any) {
      context.commit('logout')
    },
    setToken(context:any, token: string) {
      context.commit('setToken', token)
    }
  },
  modules: {
  },
}

export default authModule