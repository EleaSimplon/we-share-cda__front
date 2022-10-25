/* eslint-disable */
export class BackendInstance {
    constructor(
      public name: string,
      public url: string
    ) {
    }
  }
  
  export function makeBackendInstance(jsonData: any): BackendInstance {
    if (!jsonData) {
      jsonData = {}
    }
    return new BackendInstance(
      jsonData.name || '',
      jsonData.url || ''
    )
  }
  
  export class FrontendSetting {
    constructor(
      public field: string,
      public value: string
    ) {
    }
  }
  
  export function makeFrontendSetting(jsonData: any): FrontendSetting {
    return new FrontendSetting(
      jsonData.field || '',
      jsonData.value || ''
    )
  }
  
  export class FrontendInstance {
    constructor(
      public id: number,
      public url: string,
      public backend: BackendInstance,
      public settings: FrontendSetting[]
    ) {
    }
  
    public getFrontendSetting(name: string): string {
      for (const setting of this.settings) {
        if (setting.field === name) {
          return setting.value
        }
      }
      return ''
    }
  }
  
  export function makeFrontendInstance(jsonData: any): FrontendInstance {
    if (!jsonData) {
      jsonData = {}
    }
    const settings: any[] = jsonData.settings || []
    return new FrontendInstance(
      jsonData.id || 0,
      jsonData.url,
      makeBackendInstance(jsonData.backend || null),
      settings.map((subElt: any) => makeFrontendSetting(subElt))
    )
  }
  
  export class User {
    constructor(
      public name: string = '',
      public email: string = '',
      public description: string = '',
      public id: number|null = null ,
      public profile_picture: string = '',
      public roles:Array<string> = []
    ) {
    }
  }
  
  export function makeUser(jsonData: any): User|null {
    if (jsonData.user) {
      return new User(
        jsonData.user.id,
        jsonData.user.name,
        jsonData.user.email,
        jsonData.user.description,
        jsonData.user.profile_picture,
        jsonData.user.roles
      )
    }
    return null
  }
  