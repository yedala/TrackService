export default class INRConversionStrategy {
  /**
   * @param {number} amount - The original amount.
   * @param {number} exchangeRate - The exchange rate.
   * @returns {number} - The converted amount.
   */
  convert(amount, exchangeRate) {
    return amount * exchangeRate;
  }
}
