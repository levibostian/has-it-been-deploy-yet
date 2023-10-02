import http from "tiny-json-http"
import { CocoapodsPackageManager } from "./cocoapods"

it('should create expected github api path given a package name', async() => {
  const givenPackageName = 'CustomerIO'
  const expectedPath = 'https://api.github.com/repos/CocoaPods/Specs/contents/Specs/b/d/3/CustomerIO'

  jest.spyOn(http, 'get').mockImplementation(() => Promise.resolve({body: []}))

  await CocoapodsPackageManager.doesItExist({ packageName: givenPackageName, packageVersion: '1.0.0' })

  const actual = (http.get as jest.Mock).mock.calls[0][0].url

  expect(actual).toBe(expectedPath)
})