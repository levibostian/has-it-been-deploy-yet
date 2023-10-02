import http from "tiny-json-http"
import { MavenPackageManager } from "./maven"

it('should create expected maven http path given a package name', async() => {
  const givenPackageName = 'io.customer.android:tracking'
  const givenVersion = '3.6.6'
  const expectedPath = 'https://repo.maven.apache.org/maven2/io/customer/android/tracking/3.6.6/'

  jest.spyOn(http, 'get').mockImplementation(() => Promise.resolve({body: []}))

  await MavenPackageManager.doesItExist({ packageName: givenPackageName, packageVersion: givenVersion })

  const actual = (http.get as jest.Mock).mock.calls[0][0].url

  expect(actual).toBe(expectedPath)
})