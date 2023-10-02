import { NpmPackageManager } from "./packageManagers/npm";
import { CocoapodsPackageManager } from "./packageManagers/cocoapods";
import { MavenPackageManager } from "./packageManagers/maven";

export const isItDeployed = (args: { packageManager: 'npm' | 'cocoapods' | 'maven', packageName: string, packageVersion: string }) => {  
  switch (args.packageManager) {
    case 'npm':
      return NpmPackageManager.doesItExist(args)
    case 'cocoapods':
      return CocoapodsPackageManager.doesItExist(args)
    case 'maven':
      return MavenPackageManager.doesItExist(args)
    default:      
      throw new Error('Package manager not supported');
  }  
}