export default class Utils {
  static generateRandomNumber(range: number) {
    return Math.floor(Math.random() * range) 
  }
  static dontRepeatImageIndex(currentNumber: number, amountImages: number): number {
    let newNumber: number = Utils.generateRandomNumber(amountImages)
    while (currentNumber === newNumber) {
      newNumber = Utils.generateRandomNumber(amountImages)
    }
    return newNumber
  }
}
