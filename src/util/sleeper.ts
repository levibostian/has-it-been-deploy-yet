export class Sleeper {
  maxNumberSleeps: number 
  secondsForEachSleep: number

  constructor(args: { maxNumberSleeps: number, secondsForEachSleep: number  }) {
    this.maxNumberSleeps = args.maxNumberSleeps
    this.secondsForEachSleep = args.secondsForEachSleep
  }

  async sleep(): Promise<void> {
    if (this.maxNumberSleeps === 0) return Promise.reject()

    this.maxNumberSleeps = this.maxNumberSleeps - 1

    await new Promise(resolve => setTimeout(resolve, this.secondsForEachSleep * 1000)); // sleep 

    return
  }

}