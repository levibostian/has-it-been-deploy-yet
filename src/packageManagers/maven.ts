import { PackageManager } from ".";
import http from "tiny-json-http"

export const MavenPackageManager: PackageManager = {
  doesItExist: async (args: { packageName: string, packageVersion: string }) => {
    // given packageName: 'io.customer.android:tracking', we want to generate the path 'io/customer/android/tracking/'    
    const packageNameSplit = args.packageName.split(/[.:]/); // splits by . or :
    const packagePath = packageNameSplit.join('/');

    try {
      await http.get({url: `https://repo.maven.apache.org/maven2/${packagePath}/${args.packageVersion}/`})
      return true 
    } catch (error) {
      return false
    }       
  }
}