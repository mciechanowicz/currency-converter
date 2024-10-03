export type Currency = {
  code: string;
  decimal_mark: string;
  id: number;
  name: string;
  precision: number;
  short_code: string;
  subunit: number;
  symbol: string;
  symbol_first: boolean;
  thousands_separator: string;
};

export type ShortCurrency = {
  short_code: string;
};

export type Currencies = Currency[];

export type ConversionResult = {
  amount: number;
  date: string;
  from: string;
  timestamp: number;
  to: string;
  value: number;
};

export type CurrenciesHistoryType = {
  fromCurrency: string;
  toCurrency: string;
  amount: number;
  result: number;
};
