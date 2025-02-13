// facade/CurrencyConversionService.js
import CurrencyAPIAdapter from "../adapter/currencyApiAdapter.js";
import INRConversionStrategy from "../strategies/conversions/INRConversionStrategy.js";
import USDConversionStrategy from "../strategies/conversions/USDConversionStrategy.js";

export default class CurrencyConversionService {
  constructor() {
    this.adapter = new CurrencyAPIAdapter();
    this.strategies = {
      USD: new USDConversionStrategy(),
      INR: new INRConversionStrategy(),
    };
  }

  /**
   * @param {number} amount - The amount to convert.
   * @param {string} fromCurrency - The source currency.
   * @param {string} toCurrency - The target (base) currency.
   * @returns {Promise<number>} - The converted amount.
   */
  async convert(amount, fromCurrency, toCurrency) {
    if (fromCurrency === toCurrency) {
      return amount;
    }

    const exchangeRate = await this.adapter.getExchangeRate(
      fromCurrency,
      toCurrency
    );

    const strategy = this.strategies[fromCurrency];
    if (!strategy) {
      throw new Error(`No conversion strategy for currency: ${fromCurrency}`);
    }

    return strategy.convert(amount, exchangeRate);
  }
}
