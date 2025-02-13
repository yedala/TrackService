export default class CurrencyAPIAdapter {
  /**
   * @param {string} fromCurrency - The source currency (e.g., "USD", "EUR", "GBP").
   * @param {string} toCurrency - The target currency.
   * @returns {Promise<number>} - The exchange rate from fromCurrency to toCurrency.
   */
  async getExchangeRate(fromCurrency, toCurrency) {
    const rates = {
      USD: { USD: 1, EUR: 0.92, GBP: 0.81, INR: 82 },
      EUR: { USD: 1.09, EUR: 1, GBP: 0.88, INR: 89 },
      GBP: { USD: 1.23, EUR: 1.14, GBP: 1, INR: 101 },
      INR: { USD: 0.0122, EUR: 0.0112, GBP: 0.0099, INR: 1 },
    };

    await new Promise((resolve) => setTimeout(resolve, 100));

    if (!rates[fromCurrency] || !rates[fromCurrency][toCurrency]) {
      throw new Error(
        `Exchange rate not available for ${fromCurrency} to ${toCurrency}`
      );
    }

    return rates[fromCurrency][toCurrency];
  }
}
