export default class Utils {
  static generateRandomNumber(range: number) {
    const random = Math.floor(Math.random() * range)
    return (random === 0 ? 1 : random)
  }
  static dontRepeatImageId(currentNumber: number, amountImages: number): number {
    let newNumber: number = Utils.generateRandomNumber(amountImages)
    while (currentNumber === newNumber && newNumber > 0) {
      newNumber = Utils.generateRandomNumber(amountImages)
    }
    return newNumber
  }
}
