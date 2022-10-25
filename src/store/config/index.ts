import { Config, makeConfig } from '@/types/config'

export function storeConfig(config: Config): void {
  const configAsString: string = config.serialize()
  window.localStorage.setItem('config', configAsString)
}

export function loadConfig(): Config {
  const configAsString = window.localStorage.getItem('config')
  const config = makeConfig()
  if (configAsString) {
    config.deserialize(configAsString)
  }
  return config
}

export const configModule = {
  state: {
    config: loadConfig(),
  },
  getters: {
    familyLevelsCount: (state: any) => {
      return state.config.familyLevelsCount
    },
  },
  mutations: {
    setConfig(state: any, config: Config) {
      state.config = config
    },
  },
  actions: {
    setConfig(context: any, config: Config) {
      context.commit('setConfig', config)
      storeConfig(config)
    },
  },
  modules: {
  },
}

export default configModule
