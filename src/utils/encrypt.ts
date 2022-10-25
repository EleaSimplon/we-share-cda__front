// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import CryptoJS from 'crypto-js'

const SECRET = 'mb&982-Pg@xcR3e/M1l71BoZ3-aV3k+@xC35s'

export function encrypt(value: string): string {
  return CryptoJS.AES.encrypt(value, SECRET).toString()
}

export function decrypt(value: string): string {
  const bytes = CryptoJS.AES.decrypt(value, SECRET)
  return bytes.toString(CryptoJS.enc.Utf8)
}