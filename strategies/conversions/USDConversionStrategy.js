export default class USDConversionStrategy {
  /**
   * Converts an amount using the provided exchange rate.
   * @param {number} amount - The original amount.
   * @param {number} exchangeRate - The exchange rate.
   * @returns {number} - The converted amount.
   */
  convert(amount, exchangeRate) {
    return amount * exchangeRate;
  }
}
