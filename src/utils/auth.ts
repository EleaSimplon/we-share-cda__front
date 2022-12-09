/* eslint-disable */
import { encrypt, decrypt } from '@/utils/encrypt'
import { User } from '@/types/auth'

export function storeUser(user: User): void {
  const userAsString: string = JSON.stringify(user)
  window.localStorage.setItem('user', encrypt(userAsString))
}
export function storeToken(token: string): void {
  window.localStorage.setItem('token', encrypt(token))
}

export function cleanStorage(): void {
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('user')
}


export function loadToken() : string|void {
  //console.log('ici');
  const encryptedValue = window.localStorage.getItem('token')
  if (encryptedValue) {
    let value = ''
    try {
      value = decrypt(encryptedValue)
    } catch (exc1) {
      value = ''
    }
    if (value) {
      return value;
    } else {
    }
  }
}

export function loadUser(): User {
  //console.log('ici loadUser function');
  const encryptedValue = window.localStorage.getItem('user')
  if (encryptedValue) {
    let value = ''
    try {
      value = decrypt(encryptedValue)
    } catch (exc1) {
      value = ''
    }
    if (value) {
      try {
        //console.log('array user value :', JSON.parse(value));
        
        const user: User = JSON.parse(value)
        return user
        // eslint-disable-next-line no-empty
      } catch (exc2){
        //console.error('error recupe user')
      }
    }
  }
  // anonymous User
  return new User()
}