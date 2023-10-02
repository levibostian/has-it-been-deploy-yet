import { isItDeployed } from "."

describe('npm', () => {
  it('should return true for package that does exist with a specific version', async () => {
    const result = await isItDeployed({ packageManager: 'npm', packageName: 'react', packageVersion: '16.13.1' })
    expect(result).toBe(true)
  })

  it('should return false for package that does exist', async () => {    
    const randomString100CharsLong = Array.from({ length: 100 }, () => String.fromCharCode(Math.floor(Math.random() * 62) + 48)).join('');    

    const result = await isItDeployed({ packageManager: 'npm', packageName: randomString100CharsLong, packageVersion: '1.0.0' })

    expect(result).toBe(false)
  })

  it('should return false for package version that has not been deployed', async () => {    
    const result = await isItDeployed({ packageManager: 'npm', packageName: 'react', packageVersion: '99.99.99' })

    expect(result).toBe(false)
  })
})

describe('cocoapods', () => {
  it('should return true for package that does exist with a specific version', async () => {
    const result = await isItDeployed({ packageManager: 'cocoapods', packageName: 'CustomerIO', packageVersion: '2.8.2' })
    expect(result).toBe(true)
  })

  it('should return false for package that does exist', async () => {    
    const randomString100CharsLong = Array.from({ length: 100 }, () => String.fromCharCode(Math.floor(Math.random() * 62) + 48)).join('');    

    const result = await isItDeployed({ packageManager: 'cocoapods', packageName: randomString100CharsLong, packageVersion: '1.0.0' })

    expect(result).toBe(false)
  })

  it('should return false for package version that has not been deployed', async () => {    
    const result = await isItDeployed({ packageManager: 'cocoapods', packageName: 'CustomerIO', packageVersion: '99.99.99' })

    expect(result).toBe(false)
  })
})