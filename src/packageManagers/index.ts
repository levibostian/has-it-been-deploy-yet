

export interface PackageManager {  
  doesItExist: (args: { packageName: string, packageVersion: string }) => Promise<boolean>
}