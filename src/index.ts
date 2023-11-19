import { NpmPackageManager } from "./packageManagers/npm.js";
import { CocoapodsPackageManager } from "./packageManagers/cocoapods.js";
import { MavenPackageManager } from "./packageManagers/maven.js";
import { PackageManager } from "./packageManagers";
import { runCheckIsItDeployed } from "./runner";

export const isItDeployed = (args: { packageManager: 'npm' | 'cocoapods' | 'maven', packageName: string, packageVersion: string }) => {  
  var packageManager: PackageManager | undefined = undefined

  switch (args.packageManager) {
    case 'npm':
      packageManager = NpmPackageManager
    case 'cocoapods':
      packageManager = CocoapodsPackageManager
    case 'maven':
      packageManager = MavenPackageManager    
  }  

  if (!packageManager) throw new Error('Package manager not supported');

  return runCheckIsItDeployed({ packageManager, packageName: args.packageName, packageVersion: args.packageVersion }, { maxRetries: 10, secondsBetweenRetries: 5 })
}