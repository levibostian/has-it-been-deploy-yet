import { PackageManager } from './packageManagers';
import { runCheckIsItDeployed } from './runner';

describe('runCheckIsItDeployed', () => {
  let mockPackageManager: PackageManager
  beforeEach(() => {
    mockPackageManager = {
      doesItExist: jest.fn()
    }
  })

  it('should return true if the package exists', async() => {
    mockPackageManager.doesItExist = jest.fn().mockResolvedValue(true)

    const result = await runCheckIsItDeployed({ packageManager: mockPackageManager, packageName: 'test', packageVersion: '1.0.0' }, { maxRetries: 0, secondsBetweenRetries: 1 })

    expect(result).toBe(true)
  })

  describe('retries', () => {
    it('should retry if the first check fails. it should return true after retry', async() => {
      mockPackageManager.doesItExist = jest.fn().mockResolvedValueOnce(false).mockResolvedValueOnce(true)

      const result = await runCheckIsItDeployed({ packageManager: mockPackageManager, packageName: 'test', packageVersion: '1.0.0' }, { maxRetries: 2, secondsBetweenRetries: 0.1 })
  
      expect(result).toBe(true)
    })
  
    it('should return false if the package does not exist after retries', async() => {
      mockPackageManager.doesItExist = jest.fn().mockResolvedValueOnce(false).mockResolvedValueOnce(false)

      const result = await runCheckIsItDeployed({ packageManager: mockPackageManager, packageName: 'test', packageVersion: '1.0.0' }, { maxRetries: 2, secondsBetweenRetries: 0.1 })
  
      expect(result).toBe(false)
    })
  })
})