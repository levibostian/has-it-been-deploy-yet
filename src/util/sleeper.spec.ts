import { Sleeper } from './sleeper'

describe('sleep', () => {
  it('should sleep for expected amount of time', async() => {
    let sleeper = new Sleeper({ maxNumberSleeps: 3, secondsForEachSleep: 0.25 })

    const startTime = Date.now()
    await sleeper.sleep()
    await sleeper.sleep()
    await sleeper.sleep()
    const endTime = Date.now()
    const totalSecondsRun = (endTime - startTime) / 1000

    expect(totalSecondsRun).toBeGreaterThanOrEqual(0.5)
    expect(totalSecondsRun).toBeLessThan(1)
  })

  it('should reject when run out of sleeps', async() => {
    let sleeper = new Sleeper({ maxNumberSleeps: 1, secondsForEachSleep: 0.1 })

    await sleeper.sleep() // success    
    
    // this next try should reject 
    await expect(sleeper.sleep()).rejects.toBeUndefined()
  })
})