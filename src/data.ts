export interface ICurrencyItemData {
  code: string;
  decimals: number;
  symbol: string;
}

export interface ICurrencyData {
  [code: string]: ICurrencyItemData;
}

const currencyData: ICurrencyData = {
  AED: {
    code: 'AED',
    decimals: 2,
    symbol: 'DH',
  },
  AFN: {
    code: 'AFN',
    decimals: 2,
    symbol: 'Af',
  },
  ALL: {
    code: 'ALL',
    decimals: 2,
    symbol: 'L',
  },
  AMD: {
    code: 'AMD',
    decimals: 2,
    symbol: 'Դ',
  },
  AOA: {
    code: 'AOA',
    decimals: 2,
    symbol: 'Kz',
  },
  ARS: {
    code: 'ARS',
    decimals: 2,
    symbol: '$',
  },
  AUD: {
    code: 'AUD',
    decimals: 2,
    symbol: '$',
  },
  AWG: {
    code: 'AWG',
    decimals: 2,
    symbol: 'ƒ',
  },
  AZN: {
    code: 'AZN',
    decimals: 2,
    symbol: '₼',
  },
  BAM: {
    code: 'BAM',
    decimals: 2,
    symbol: 'КМ',
  },
  BBD: {
    code: 'BBD',
    decimals: 2,
    symbol: '$',
  },
  BDT: {
    code: 'BDT',
    decimals: 2,
    symbol: '৳',
  },
  BGN: {
    code: 'BGN',
    decimals: 2,
    symbol: 'лв',
  },
  BHD: {
    code: 'BHD',
    decimals: 3,
    symbol: 'BD',
  },
  BIF: {
    code: 'BIF',
    decimals: 0,
    symbol: '₣',
  },
  BMD: {
    code: 'BMD',
    decimals: 2,
    symbol: '$',
  },
  BND: {
    code: 'BND',
    decimals: 2,
    symbol: '$',
  },
  BOB: {
    code: 'BOB',
    decimals: 2,
    symbol: 'Bs.',
  },
  BRL: {
    code: 'BRL',
    decimals: 2,
    symbol: 'R$',
  },
  BSD: {
    code: 'BSD',
    decimals: 2,
    symbol: '$',
  },
  BTN: {
    code: 'BTN',
    decimals: 2,
    symbol: '',
  },
  BWP: {
    code: 'BWP',
    decimals: 2,
    symbol: 'P',
  },
  BYR: {
    code: 'BYR',
    decimals: 0,
    symbol: 'Br',
  },
  BZD: {
    code: 'BZD',
    decimals: 2,
    symbol: '$',
  },
  CAD: {
    code: 'CAD',
    decimals: 2,
    symbol: '$',
  },
  CDF: {
    code: 'CDF',
    decimals: 2,
    symbol: '₣',
  },
  CHF: {
    code: 'CHF',
    decimals: 2,
    symbol: '₣',
  },
  CLP: {
    code: 'CLP',
    decimals: 0,
    symbol: '$',
  },
  CNY: {
    code: 'CNY',
    decimals: 2,
    symbol: '¥',
  },
  COP: {
    code: 'COP',
    decimals: 2,
    symbol: '$',
  },
  CRC: {
    code: 'CRC',
    decimals: 2,
    symbol: '₡',
  },
  CUP: {
    code: 'CUP',
    decimals: 2,
    symbol: '$',
  },
  CVE: {
    code: 'CVE',
    decimals: 2,
    symbol: '$',
  },
  CZK: {
    code: 'CZK',
    decimals: 2,
    symbol: 'Kč',
  },
  DJF: {
    code: 'DJF',
    decimals: 0,
    symbol: '₣',
  },
  DKK: {
    code: 'DKK',
    decimals: 2,
    symbol: 'kr',
  },
  DOP: {
    code: 'DOP',
    decimals: 2,
    symbol: '$',
  },
  DZD: {
    code: 'DZD',
    decimals: 2,
    symbol: 'DA',
  },
  EGP: {
    code: 'EGP',
    decimals: 2,
    symbol: '£',
  },
  ERN: {
    code: 'ERN',
    decimals: 2,
    symbol: 'Nfk',
  },
  ETB: {
    code: 'ETB',
    decimals: 2,
    symbol: '',
  },
  EUR: {
    code: 'EUR',
    decimals: 2,
    symbol: '€',
  },
  FJD: {
    code: 'FJD',
    decimals: 2,
    symbol: '$',
  },
  FKP: {
    code: 'FKP',
    decimals: 2,
    symbol: '£',
  },
  GBP: {
    code: 'GBP',
    decimals: 2,
    symbol: '£',
  },
  GEL: {
    code: 'GEL',
    decimals: 2,
    symbol: 'ლ',
  },
  GHS: {
    code: 'GHS',
    decimals: 2,
    symbol: '₵',
  },
  GIP: {
    code: 'GIP',
    decimals: 2,
    symbol: '£',
  },
  GMD: {
    code: 'GMD',
    decimals: 2,
    symbol: 'D',
  },
  GNF: {
    code: 'GNF',
    decimals: 2,
    symbol: '₣',
  },
  GTQ: {
    code: 'GTQ',
    decimals: 2,
    symbol: 'Q',
  },
  GYD: {
    code: 'GYD',
    decimals: 2,
    symbol: '$',
  },
  HKD: {
    code: 'HKD',
    decimals: 2,
    symbol: '$',
  },
  HNL: {
    code: 'HNL',
    decimals: 2,
    symbol: 'L',
  },
  HRK: {
    code: 'HRK',
    decimals: 2,
    symbol: 'Kn',
  },
  HTG: {
    code: 'HTG',
    decimals: 2,
    symbol: 'G',
  },
  HUF: {
    code: 'HUF',
    decimals: 0,
    symbol: 'Ft',
  },
  IDR: {
    code: 'IDR',
    decimals: 2,
    symbol: 'Rp',
  },
  ILS: {
    code: 'ILS',
    decimals: 2,
    symbol: '₪',
  },
  INR: {
    code: 'INR',
    decimals: 2,
    symbol: '₹',
  },
  IQD: {
    code: 'IQD',
    decimals: 3,
    symbol: 'ع.د',
  },
  IRR: {
    code: 'IRR',
    decimals: 2,
    symbol: '﷼',
  },
  ISK: {
    code: 'ISK',
    decimals: 0,
    symbol: 'Kr',
  },
  JMD: {
    code: 'JMD',
    decimals: 2,
    symbol: '$',
  },
  JOD: {
    code: 'JOD',
    decimals: 3,
    symbol: 'JD',
  },
  JPY: {
    code: 'JPY',
    decimals: 0,
    symbol: '¥',
  },
  KES: {
    code: 'KES',
    decimals: 2,
    symbol: 'Sh',
  },
  KGS: {
    code: 'KGS',
    decimals: 2,
    symbol: '$',
  },
  KHR: {
    code: 'KHR',
    decimals: 2,
    symbol: '៛',
  },
  KPW: {
    code: 'KPW',
    decimals: 2,
    symbol: '₩',
  },
  KRW: {
    code: 'KRW',
    decimals: 0,
    symbol: '₩',
  },
  KWD: {
    code: 'KWD',
    decimals: 3,
    symbol: 'K.D.',
  },
  KYD: {
    code: 'KYD',
    decimals: 2,
    symbol: '$',
  },
  KZT: {
    code: 'KZT',
    decimals: 2,
    symbol: '〒',
  },
  LAK: {
    code: 'LAK',
    decimals: 2,
    symbol: '₭',
  },
  LBP: {
    code: 'LBP',
    decimals: 2,
    symbol: 'LL',
  },
  LKR: {
    code: 'LKR',
    decimals: 2,
    symbol: 'Rs',
  },
  LRD: {
    code: 'LRD',
    decimals: 2,
    symbol: '$',
  },
  LSL: {
    code: 'LSL',
    decimals: 2,
    symbol: 'L',
  },
  LYD: {
    code: 'LYD',
    decimals: 3,
    symbol: 'LD',
  },
  MAD: {
    code: 'MAD',
    decimals: 2,
    symbol: 'DH',
  },
  MDL: {
    code: 'MDL',
    decimals: 2,
    symbol: 'L',
  },
  MGA: {
    code: 'MGA',
    decimals: 0,
    symbol: '$',
  },
  MKD: {
    code: 'MKD',
    decimals: 2,
    symbol: 'den',
  },
  MMK: {
    code: 'MMK',
    decimals: 2,
    symbol: 'K',
  },
  MNT: {
    code: 'MNT',
    decimals: 2,
    symbol: '₮',
  },
  MOP: {
    code: 'MOP',
    decimals: 2,
    symbol: 'P',
  },
  MRO: {
    code: 'MRO',
    decimals: 2,
    symbol: 'UM',
  },
  MUR: {
    code: 'MUR',
    decimals: 2,
    symbol: 'Rs',
  },
  MVR: {
    code: 'MVR',
    decimals: 2,
    symbol: 'Rf',
  },
  MWK: {
    code: 'MWK',
    decimals: 2,
    symbol: 'MK',
  },
  MXN: {
    code: 'MXN',
    decimals: 2,
    symbol: '$',
  },
  MYR: {
    code: 'MYR',
    decimals: 2,
    symbol: 'RM',
  },
  MZN: {
    code: 'MZN',
    decimals: 0,
    symbol: 'MTn',
  },
  NAD: {
    code: 'NAD',
    decimals: 2,
    symbol: '$',
  },
  NGN: {
    code: 'NGN',
    decimals: 2,
    symbol: '₦',
  },
  NIO: {
    code: 'NIO',
    decimals: 2,
    symbol: 'C$',
  },
  NOK: {
    code: 'NOK',
    decimals: 2,
    symbol: 'kr',
  },
  NPR: {
    code: 'NPR',
    decimals: 2,
    symbol: 'Rs',
  },
  NZD: {
    code: 'NZD',
    decimals: 2,
    symbol: '$',
  },
  OMR: {
    code: 'OMR',
    decimals: 3,
    symbol: 'ر.ع.',
  },
  PAB: {
    code: 'PAB',
    decimals: 2,
    symbol: 'B/.',
  },
  PEN: {
    code: 'PEN',
    decimals: 2,
    symbol: 'S/.',
  },
  PGK: {
    code: 'PGK',
    decimals: 2,
    symbol: 'K',
  },
  PHP: {
    code: 'PHP',
    decimals: 2,
    symbol: '₱',
  },
  PKR: {
    code: 'PKR',
    decimals: 2,
    symbol: 'Rs',
  },
  PLN: {
    code: 'PLN',
    decimals: 2,
    symbol: 'zł',
  },
  PYG: {
    code: 'PYG',
    decimals: 0,
    symbol: '₲',
  },
  QAR: {
    code: 'QAR',
    decimals: 2,
    symbol: 'QR',
  },
  RON: {
    code: 'RON',
    decimals: 2,
    symbol: 'L',
  },
  RSD: {
    code: 'RSD',
    decimals: 2,
    symbol: 'din',
  },
  RUB: {
    code: 'RUB',
    decimals: 2,
    symbol: 'р.',
  },
  RWF: {
    code: 'RWF',
    decimals: 0,
    symbol: '₣',
  },
  SAR: {
    code: 'SAR',
    decimals: 2,
    symbol: 'SR',
  },
  SBD: {
    code: 'SBD',
    decimals: 2,
    symbol: '$',
  },
  SCR: {
    code: 'SCR',
    decimals: 2,
    symbol: 'Rs',
  },
  SDG: {
    code: 'SDG',
    decimals: 2,
    symbol: '£',
  },
  SEK: {
    code: 'SEK',
    decimals: 2,
    symbol: 'kr',
  },
  SGD: {
    code: 'SGD',
    decimals: 2,
    symbol: '$',
  },
  SHP: {
    code: 'SHP',
    decimals: 2,
    symbol: '£',
  },
  SLL: {
    code: 'SLL',
    decimals: 2,
    symbol: 'Le',
  },
  SOS: {
    code: 'SOS',
    decimals: 2,
    symbol: 'Sh',
  },
  SRD: {
    code: 'SRD',
    decimals: 2,
    symbol: '$',
  },
  STD: {
    code: 'STD',
    decimals: 2,
    symbol: 'Db',
  },
  SYP: {
    code: 'SYP',
    decimals: 2,
    symbol: 'LS',
  },
  SZL: {
    code: 'SZL',
    decimals: 2,
    symbol: 'L',
  },
  THB: {
    code: 'THB',
    decimals: 2,
    symbol: '฿',
  },
  TJS: {
    code: 'TJS',
    decimals: 2,
    symbol: 'SM',
  },
  TMT: {
    code: 'TMT',
    decimals: 2,
    symbol: 'm',
  },
  TND: {
    code: 'TND',
    decimals: 3,
    symbol: 'DT',
  },
  TOP: {
    code: 'TOP',
    decimals: 2,
    symbol: 'T$',
  },
  TRY: {
    code: 'TRY',
    decimals: 2,
    symbol: '£',
  },
  TTD: {
    code: 'TTD',
    decimals: 2,
    symbol: '$',
  },
  TWD: {
    code: 'TWD',
    decimals: 2,
    symbol: '$',
  },
  TZS: {
    code: 'TZS',
    decimals: 2,
    symbol: 'Sh',
  },
  UAH: {
    code: 'UAH',
    decimals: 2,
    symbol: '₴',
  },
  UGX: {
    code: 'UGX',
    decimals: 2,
    symbol: 'Sh',
  },
  USD: {
    code: 'USD',
    decimals: 2,
    symbol: '$',
  },
  UYU: {
    code: 'UYU',
    decimals: 2,
    symbol: '$',
  },
  UZS: {
    code: 'UZS',
    decimals: 2,
    symbol: '',
  },
  VEF: {
    code: 'VEF',
    decimals: 2,
    symbol: 'Bs.',
  },
  VND: {
    code: 'VND',
    decimals: 2,
    symbol: '₫',
  },
  VUV: {
    code: 'VUV',
    decimals: 0,
    symbol: 'Vt',
  },
  WST: {
    code: 'WST',
    decimals: 2,
    symbol: 'T',
  },
  XAF: {
    code: 'XAF',
    decimals: 2,
    symbol: '₣',
  },
  XCD: {
    code: 'XCD',
    decimals: 2,
    symbol: '$',
  },
  XPF: {
    code: 'XPF',
    decimals: 0,
    symbol: '₣',
  },
  YER: {
    code: 'YER',
    decimals: 2,
    symbol: '﷼',
  },
  ZAR: {
    code: 'ZAR',
    decimals: 2,
    symbol: 'R',
  },
  ZMW: {
    code: 'ZMW',
    decimals: 2,
    symbol: 'ZK',
  },
  ZWL: {
    code: 'ZWL',
    decimals: 2,
    symbol: '$',
  },
};

export default currencyData;
