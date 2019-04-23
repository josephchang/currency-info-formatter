# Format currency to parts

## Why use this?

Having worked on a few projects for financial institutions, currency formatting is often required. Even though using `Intl.NumberFormat` or [currency.js](https://currency.js.org/) is adequate for many, I have found out that what usually happens is that the UI designs require the currency symbol/code and decimals to be visually different. Moreover, there are currencies that have 0, 2, or 3 decimal digits, instead of just 2. Until [Intl​.Number​Format​.prototype​.format​ToParts()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/formatToParts) becomes widely supported, this library should be able to cover most of the formatting needs (**note:** this is not a polyfill for it, nor does it support all the functionalities of it).

## Why not use this?

If you're developing an interface for non-Latin-based languages, this may not work for you. Where appropriate, some symbols for currencies use its commonly-used Latin form.

## Installation

```sh
$ npm install format-currency-to-parts
```

## Usage

```js
import { formatCurrencyToParts } from 'format-currency-to-parts';
const formatted = formatCurrencyToParts(options: IFormatCurrencyOptions)(locale: string, amount: number);
```

### Options

* **currency** (_required_): 3-letter ISO 4217 currency code (https://en.wikipedia.org/wiki/ISO_4217)
* **parts** (_required_): An array of parts you want to return, import `CurrencyParts` for possible values:
  * number: the whole number
  * integer: the integer portion of the number
  * decimals: the fraction portion of the number (including the decimal point), will return empty string if number of decimals for the currency is 0 (e.g. JPY).
  * code: the currency code
  * symbol: the currency symbol (Latin form when approriate)

## References

- https://www.thefinancials.com/Default.aspx?SubSectionID=curformat
- https://justforex.com/education/currencies
- https://en.wikipedia.org/wiki/Currency_symbol