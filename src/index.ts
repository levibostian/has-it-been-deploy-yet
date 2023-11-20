import { PackageManager, getPackageManager } from "./packageManagers";
import { runCheckIsItDeployed } from "./runner";

export const isItDeployed = (args: { packageManager: 'npm' | 'cocoapods' | 'maven', packageName: string, packageVersion: string }, maxRetries: number | undefined = undefined) => {  
  const packageManager: PackageManager | undefined = getPackageManager(args.packageManager)

  if (!packageManager) throw new Error('Package manager not supported');

  // run retries for 1 minute 
  return runCheckIsItDeployed({ packageManager, packageName: args.packageName, packageVersion: args.packageVersion }, { maxRetries, secondsBetweenRetries: 5 })
}