/* eslint-disable */
import store from '@/store'
import axios from 'axios'
import router from '@/router'
import { loadToken, loadUser } from '@/utils/auth'

export function getFullBackendUrl(url: string): string {
  return store.getters.backendUrl + url
}

export function gerRouterUrl(url: string): string {
  return process.env.VUE_APP_BACKEND + url
}

export function isAuthenticated(): boolean {
  return !!loadUser()
}

export class BackendApi {
  constructor(
    public method: string,
    public url: string
  ) {}

  public callApi(data: any = null, contentType = '', redirectToLogin = true): Promise<any> {
    const headers = {
        'Content-Type': contentType || 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + loadToken(),
        'Accept-Language': 'fr',
    }
    const config: any = {
      url: getFullBackendUrl(this.url),
      method: this.method,
      headers: headers,
      data: data,
    }
    return new Promise(
      (resolve, reject) => {
        axios(config).then((resp: any) => {
          resolve(resp)
        }).catch(err => {
          if (isAnonymous(err) && redirectToLogin) {
            store.dispatch('resetUser').then(
              () => {
                router.push({ name: 'login', })
              }
            )
          } else {
            reject(err)
          }
        })
      }
    )
  }

  public async callRouterApi(data: any = null): Promise<any> {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Accept-Language': 'fr',
    }
    const config: any = {
      url: gerRouterUrl(this.url),
      method: this.method,
      headers: headers,
      data: data,
    }
    return new Promise(
      (resolve, reject) => {
        axios(config).then((resp: any) => {
          resolve(resp)
        }).catch(err => {
          reject(err)
        })
      }
    )
  }
}

export async function openDocument(docUrl: string, slug: string, doc = '') {
    const backendApi = new BackendApi('post', '/users/api/access-key/')
    const resp = await backendApi.callApi({ slug: slug, document: doc, })
    const key = resp.data.key
    docUrl = docUrl.replace('<key>', key)
    const fullUrl = getFullBackendUrl(docUrl)
    window.open(fullUrl, '_blank')
  }
  
  function getLineText(errors: any): string {
    let text = ''
    for (const elt in errors) {
      text += (errors[elt] + '\n')
    }
    return text
  }
  
  export function getErrorText(err: any): string {
    if (err.response && err.response.status === 400) {
      let text = ''
      const data = err.response.data
      if (Array.isArray(data)) {
        for (const line of data) {
          text += getLineText(line)
        }
      } else {
        text += getLineText(data)
      }
      return text
    }
    return err.message
  }
  
  export function isAnonymous(err: any): boolean {
    return err.response && err.response.status === 401;
  
  }