import { FrontendInstance } from '@/types/auth'

export const settingsModule = {
  state: {
    frontendInstance: null,
  },
  getters: {
    frontendInstance: (state: any) => {
      return state.frontendInstance
    },
  },
  mutations: {
    setFrontendInstance(state: any, frontendInstance: FrontendInstance) {
      state.frontendInstance = frontendInstance
    },
  },
  actions: {
    setFrontendInstance(context: any, frontendInstance: FrontendInstance) {
      context.commit('setFrontendInstance', frontendInstance)
    },
  },
  modules: {
  },
}

export default settingsModule