import currencyData from './data';

export enum CurrencyParts {
  NUMBER = 'number',
  INTEGER = 'integer',
  DECIMALS = 'decimals',
  CODE = 'code',
  SYMBOL = 'symbol',
}

export interface IFormatCurrencyOptions {
  currency: string;
  parts: CurrencyParts[];
}

export type Formatter = (locale: string, amount: number) => string[];

const formatNumber = (
  locale: string,
  currency: string,
  value: number,
  forceDecimals?: number
): string => {
  const { decimals } = currencyData[currency];
  const fractionDigits = forceDecimals !== undefined ? forceDecimals : decimals;
  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: fractionDigits,
    minimumFractionDigits: fractionDigits,
  }).format(value);
};

export const formatCurrencyToParts = (
  options: IFormatCurrencyOptions
): Formatter => {
  if (!(options.currency in currencyData)) {
    throw new Error('Currency code invalid or not supported');
  }

  return (locale: string, amount: number) => {
    const { currency, parts } = options;
    const { code, decimals, symbol } = currencyData[currency];
    const format = (amt: number, dec?: number) =>
      formatNumber(locale, code, amt, dec);

    return parts.map((part: CurrencyParts) => {
      switch (part) {
        case CurrencyParts.NUMBER:
          return format(amount);
        case CurrencyParts.INTEGER:
          if (!decimals) {
            return format(amount);
          }

          const strung = amount.toString().match(/\d*/g);
          return strung && strung.length
            ? format(parseInt(strung[0], 10), 0)
            : '';
        case CurrencyParts.DECIMALS:
          return !decimals ? '' : format(amount % 1).replace(/^[0]{1}/, '');
        case CurrencyParts.CODE:
          return currency;
        case CurrencyParts.SYMBOL:
          return symbol;
      }
    });
  };
};
