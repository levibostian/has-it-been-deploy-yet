import { NpmPackageManager } from "./packageManagers/npm";

export const isItDeployed = (args: { packageManager: 'npm', packageName: string, packageVersion: string }) => {  
  switch (args.packageManager) {
    case 'npm':
      return NpmPackageManager.doesItExist(args)
    default:      
      throw new Error('Package manager not supported');
  }  
}