import { hasPerm, hasOnePerm, hasAllPerms, loadPermissions } from '@/utils/permissions'

export const permissionsModule = {
  state: {
    userPermissions: loadPermissions(),
  },
  getters: {
    userPermissions: (state: any) => {
      return state.userPermissions
    },
    hasPerm: (state: any) => (permName: string) => {
      return hasPerm(permName, state.userPermissions)
    },
    hasOnePerm: (state: any) => (perms: string[]) => {
      return hasOnePerm(perms, state.userPermissions)
    },
    hasAllPerms: (state: any) => (perms: string[]) => {
      return hasAllPerms(perms, state.userPermissions)
    },
  },
  mutations: {
    setUserPermissions(state: any, userPermissions: []) {
      state.userPermissions = userPermissions
    },
  },
  actions: {
    setUserPermissions(context: any, userPermissions: []) {
      context.commit('setUserPermissions', userPermissions)
    },
  },
  modules: {
  },
}

export default permissionsModule