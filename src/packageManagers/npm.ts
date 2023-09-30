import { PackageManager } from ".";
import * as http from "tiny-json-http"

export const NpmPackageManager: PackageManager = {
  doesItExist: async (args: { packageName: string, packageVersion: string }) => {    
    try {
      await http.get({url: `https://registry.npmjs.org/${args.packageName}/${args.packageVersion}`})
      return true 
    } catch (error) {
      return false
    }        
  }
}