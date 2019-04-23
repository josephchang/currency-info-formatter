import {
  formatCurrencyToParts,
  Formatter,
  IFormatCurrencyOptions,
  CurrencyParts,
} from '..';

describe('formatCurrencyToParts', () => {
  let formatter: Formatter;

  const getOptions = (
    parts: CurrencyParts[],
    currency: string
  ): IFormatCurrencyOptions => ({
    parts,
    currency,
  });

  describe('GIVEN the amount is 12345.6789', () => {
    const amount = 1234567.8912;

    describe('AND parts = [CODE, INTEGER, DECIMALS]', () => {
      const parts: CurrencyParts[] = [
        CurrencyParts.CODE,
        CurrencyParts.INTEGER,
        CurrencyParts.DECIMALS,
      ];

      describe('AND the currency is JPY (0 decimals)', () => {
        const currency = 'JPY';

        beforeEach(() => {
          formatter = formatCurrencyToParts(getOptions(parts, currency));
        });

        it('should format to parts for `en-gb`', () => {
          expect(formatter('en-gb', amount)).toEqual(['JPY', '1,234,568', '']);
        });

        it('should format to parts for `de-de`', () => {
          expect(formatter('de-de', amount)).toEqual(['JPY', '1.234.568', '']);
        });

        it('should format to parts for `hi-in`', () => {
          expect(formatter('hi-in', amount)).toEqual(['JPY', '12,34,568', '']);
        });
      });

      describe('AND the currency is USD (2 decimals)', () => {
        const currency = 'USD';

        beforeEach(() => {
          formatter = formatCurrencyToParts(getOptions(parts, currency));
        });

        it('should format to parts for `en-gb`', () => {
          expect(formatter('en-gb', amount)).toEqual([
            'USD',
            '1,234,567',
            '.89',
          ]);
        });

        it('should format to parts for `de-de`', () => {
          expect(formatter('de-de', amount)).toEqual([
            'USD',
            '1.234.567',
            ',89',
          ]);
        });

        it('should format to parts for `hi-in`', () => {
          expect(formatter('hi-in', amount)).toEqual([
            'USD',
            '12,34,567',
            '.89',
          ]);
        });
      });

      describe('AND the currency is BHD (3 decimals)', () => {
        const currency = 'BHD';

        beforeEach(() => {
          formatter = formatCurrencyToParts(getOptions(parts, currency));
        });

        it('should format to parts for `en-gb`', () => {
          expect(formatter('en-gb', amount)).toEqual([
            'BHD',
            '1,234,567',
            '.891',
          ]);
        });

        it('should format to parts for `de-de`', () => {
          expect(formatter('de-de', amount)).toEqual([
            'BHD',
            '1.234.567',
            ',891',
          ]);
        });

        it('should format to parts for `hi-in`', () => {
          expect(formatter('hi-in', amount)).toEqual([
            'BHD',
            '12,34,567',
            '.891',
          ]);
        });
      });

      describe('AND the currency is not invalid', () => {
        const currency = '**INVALID**';
        let wrappedFormatter: () => Formatter;

        beforeEach(() => {
          wrappedFormatter = () =>
            formatCurrencyToParts(getOptions(parts, currency));
        });

        it('should throw an error', () => {
          expect(wrappedFormatter).toThrow(Error);
        });
      });
    });

    describe('AND parts = [SYMBOL, NUMBER]', () => {
      const parts: CurrencyParts[] = [
        CurrencyParts.SYMBOL,
        CurrencyParts.NUMBER,
      ];

      describe('AND the currency is GBP', () => {
        const currency = 'GBP';

        beforeEach(() => {
          formatter = formatCurrencyToParts(getOptions(parts, currency));
        });

        it('should format to parts for `en-gb`', () => {
          expect(formatter('en-gb', amount)).toEqual(['£', '1,234,567.89']);
        });

        it('should format to parts for `de-de`', () => {
          expect(formatter('de-de', amount)).toEqual(['£', '1.234.567,89']);
        });

        it('should format to parts for `hi-in`', () => {
          expect(formatter('hi-in', amount)).toEqual(['£', '12,34,567.89']);
        });
      });
    });
  });
});
