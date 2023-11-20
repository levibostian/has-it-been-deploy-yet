import { CocoapodsPackageManager } from "./cocoapods"
import { MavenPackageManager } from "./maven"
import { NpmPackageManager } from "./npm"

export const getPackageManager = (packageManager: string): PackageManager | undefined => {
  switch (packageManager) {
    case 'npm':
      return NpmPackageManager
    case 'cocoapods':
      return CocoapodsPackageManager
    case 'maven':
      return MavenPackageManager
  }  

  return undefined
}

export interface PackageManager {  
  doesItExist: (args: { packageName: string, packageVersion: string }) => Promise<boolean>
}