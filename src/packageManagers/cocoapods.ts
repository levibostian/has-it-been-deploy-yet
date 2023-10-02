import { PackageManager } from ".";
import http from "tiny-json-http"
import {createHash} from "crypto"

interface GitHubGetContentsResponseBody {
  name: string // "2.8.2"
  type: "dir" | "file"
}

export const CocoapodsPackageManager: PackageManager = {
  doesItExist: async (args: { packageName: string, packageVersion: string }) => {
    // CocoaPods has a CDN that hosts all pods and their versions. However, the CDN only updates every 10 minutes. The single source of truth for the CDN is a github repository that has commits pushed to it for every pod and version deployed. Therefore, we use the github api on this repo to check if a version exists.
    // cocoapods uses a hash technique to separate each pod into a directory. We use this first to find the path where all versions for the pod will exist. 
    // https://github.com/CocoaPods/cdn.cocoapods.org?tab=readme-ov-file#how-the-cdn-works
    const packageNameHash = createHash('md5').update(args.packageName).digest('hex');
    const firstDirectoryName = packageNameHash[0]
    const secondDirectoryName = packageNameHash[1]
    const thirdDirectoryName = packageNameHash[2]

    // GitHub API reference for getting contents of directory: https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#get-repository-content
    try {
      const response = await http.get({url: `https://api.github.com/repos/CocoaPods/Specs/contents/Specs/${firstDirectoryName}/${secondDirectoryName}/${thirdDirectoryName}/${args.packageName}`})
      let versions = response.body as GitHubGetContentsResponseBody[]
      versions = versions.filter(version => version.type === "dir") // directories are the versions deployed 

      const versionExists = versions.some(version => version.name === args.packageVersion)

      return versionExists
    } catch (error) {
      return false
    }        
  }
}