import store from '@/store'
import { BackendApi, getErrorText, isAuthenticated } from '@/utils/http'
import { storePermissions } from '@/utils/permissions'

export async function loadPermissions() {
  if (isAuthenticated()) {
    const url = '/users/api/user-permissions/'
    const backendApi = new BackendApi('get', url)
    try {
      const resp = await backendApi.callApi()
      const permissions: string[] = resp.data
      await store.dispatch('setUserPermissions', permissions)
      storePermissions(permissions)
    } catch (err) {
      await store.dispatch('addError', getErrorText(err))
    }
  }
}