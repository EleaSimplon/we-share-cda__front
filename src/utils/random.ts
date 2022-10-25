export function getLocalId(): string {
    return '' + Math.round(Date.now()) + '-' + Math.random().toString(36)
}
  
export function getRandomId(): string {
    return '' + Math.random().toString(36).replace('.', '0')
}