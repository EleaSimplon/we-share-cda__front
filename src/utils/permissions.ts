/* eslint-disable */
// @ts-ignore

import { decrypt, encrypt } from './encrypt'

export function hasPerm(permName: string, allPermissions: string[]): boolean {
  // une permission est sur le format domaine.can_perm : Par exemple : activities.view_activity
  if (permName) {
    const sepPos = permName.indexOf('.')
    if (sepPos === -1) {
      // Le séparateur n'est pas trouvé : on ne prend en compte que la partie avant le séparateur
      return allPermissions.map(perm => perm.split('.')[0]).indexOf(permName) >= 0
    }

    const lastChar = permName[permName.length - 1]
    if (lastChar === '_') {
      let perms : string[] = []
      let access = permName
      if (sepPos === -1) {
        // Le séparateur n'est pas trouvé : on prend en compte tous les domaines
        perms = allPermissions
      } else {
        // Le séparateur est trouvé : on prend en compte que ce domaine
        const domain = permName.split('.')[0]
        access = permName.split('.')[1]
        perms = allPermissions.filter(perm => perm.split('.')[0] === domain)
      }
      return perms.filter(perm => perm.split('.')[1].indexOf(access) === 0).length > 0
    }

    return allPermissions.indexOf(permName) >= 0
  }
  return false
}

export function hasOnePerm(permissions: string[], allPermissions: string[]): boolean {
  for (const perm of permissions) {
    if (hasPerm(perm, allPermissions)) {
      return true
    }
  }
  return false
}

export function hasAllPerms(permissions: string[], allPermissions: string[]): boolean {
  for (const perm of permissions) {
    if (!hasPerm(perm, allPermissions)) {
      return false
    }
  }
  return true
}

export function storePermissions(permissions: string[]): void {
  const permissionsAsString: string = JSON.stringify(permissions)
  window.localStorage.setItem('permissions', encrypt(permissionsAsString))
}

export function loadPermissions(): string[] {
    const encryptedValue = window.localStorage.getItem('permissions')
    if (encryptedValue) {
      let value = ''
      try {
        value = decrypt(encryptedValue)
      } catch (exc1) {
        value = ''
      }
      if (value) {
        try {
          const permissions: string[] = JSON.parse(value)
          if (permissions.length > 0) {
            return permissions
          }
          // eslint-disable-next-line no-empty
        } catch (exc2){
        }
      }
    }
    return []
}