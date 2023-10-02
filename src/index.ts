import { NpmPackageManager } from "./packageManagers/npm";
import { CocoapodsPackageManager } from "./packageManagers/cocoapods";

export const isItDeployed = (args: { packageManager: 'npm' | 'cocoapods', packageName: string, packageVersion: string }) => {  
  switch (args.packageManager) {
    case 'npm':
      return NpmPackageManager.doesItExist(args)
    case 'cocoapods':
      return CocoapodsPackageManager.doesItExist(args)
    default:      
      throw new Error('Package manager not supported');
  }  
}