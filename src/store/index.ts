// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import Vuex from 'vuex'
import auth from './auth'
import config from './config'
import messages from './messages'
import permissions from './permissions'
import settings from './settings'


export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    config,
    messages,
    permissions,
    settings,
  },
})
