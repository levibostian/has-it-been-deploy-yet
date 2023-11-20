import { PackageManager } from "./packageManagers/index.js";
import { Sleeper } from "./util/sleeper";

export const runCheckIsItDeployed = async(args: { packageManager: PackageManager,  packageName: string, packageVersion: string }, retryOptions: { maxRetries: number | undefined, secondsBetweenRetries: number }): Promise<boolean> => {
  let maxRetries = 0
  if (retryOptions.maxRetries) maxRetries = retryOptions.maxRetries
  const sleeper = new Sleeper({ maxNumberSleeps: maxRetries, secondsForEachSleep: retryOptions.secondsBetweenRetries })

  const theLoop = async(): Promise<boolean> => {
    const doesItExist = await args.packageManager.doesItExist({ packageName: args.packageName, packageVersion: args.packageVersion })

    if (doesItExist) return true 

    try {
      await sleeper.sleep()

      return theLoop()
    } catch (error) {
      // out of retries
      return false 
    }
  }

  return theLoop()
}

