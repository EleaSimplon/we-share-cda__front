import {
    User, makeUser, BackendInstance, makeBackendInstance, FrontendInstance, makeFrontendInstance
  } from '@/types/auth'
  import axios from 'axios'
  import Vue from 'vue'
  import { mapActions, mapMutations } from 'vuex'
  import { loadPermissions } from '@/apis/permissions'
  import store from '@/store'
  import { makeConfig } from '@/types/config'
  import { BackendApi, gerRouterUrl, getErrorText } from '@/utils/http'
  
  export const BackendMixin = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    created: () => {},
    methods: {
      ...mapActions(['addError']),
      ...mapMutations(['startLoading', 'endLoading']),
  
      isLoading(loadingName: string): boolean {
        return store.getters.isLoading(loadingName)
      },
  
      hasPerm(permName: string): boolean {
        return store.getters.hasPerm(permName)
      },
  
      hasAllPerms(perms: string[]): boolean {
        return store.getters.hasAllPerms(perms)
      },
  
      hasOnePerm(perms: string[]): boolean {
        return store.getters.hasOnePerm(perms)
      },
  
      getFullBackendUrl(url: string): string {
        return store.getters.backendUrl + url
      },
  
      getFrontendSetting(setting: string): string {
        if (store.getters.frontendInstance) {
          return store.getters.frontendInstance.getFrontendSetting(setting)
        }
        return ''
      },
      async registerUser(data: any): Promise<User> {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        // const that = this
        return new Promise(
            // eslint-disable-next-line no-async-promise-executor
          async function(resolve, reject) {
            const user = data
            await store.dispatch('setUser', user)
            // await that.loadConfig()
            // await loadPermissions()
            if (user) {
              resolve(user)
            } else {
              reject(Error('Utilisateur inconnu'))
            }
          }
        )
      },
  
      login(email: string, password: string) {
        return new Promise(
          (resolve, reject) => {
            const fullUrl: string = 'http://127.0.0.1:8000' + '/api/login_check'
            axios({
              url: fullUrl,
              data: { email, password, },
              method: 'POST',
            }).then(async(resp: any) => {
              console.log( 'resp', resp.data);
              if (!resp.data.token) {
                reject(Error(resp.data.message))
              } else {
                await store.dispatch('setToken', resp.data.token)
                await this.getUserInfo()
                // const user = await this.registerUser(resp.data)
                // if (user) {
                //   resolve(user)
                // } else {
                //   reject(Error('Utilisateur inconnu'))
                // }
              }
            }).catch(err => {
              reject(err)
            })
          }
        )
      },
  
      getUserInfo(){
        return new Promise( (resolve, reject) => {

            new BackendApi('get', 'http://127.0.0.1:8000/api/me')
              .callApi(null, '', false)
              .then(async (response)=>{
                console.log(response, 'response getUserInfo ');
                const user = await this.registerUser(response.data)
                if (user) {
                  resolve(user)
                } else {
                  reject(Error('Utilisateur inconnu'))
                }
              })
          })
      },

      logout(): Promise<boolean> {
        return new Promise(
            // eslint-disable-next-line no-async-promise-executor
          async(resolve) => {
            await store.dispatch('logout')
            resolve(true)
          }
        )
      },
      getErrorText(err: any): string {
        return getErrorText(err)
      },
  
    },
  }
    