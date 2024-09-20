export const API_CURRENCY_BEACON_BASE_URL = 'https://api.currencybeacon.com/v1';

export const API_CURRENCY_BEACON_ENDPOINTS = {
  CURRENCIES: '/currencies',
  CONVERT: '/convert',
};

export const CURRENCY_BEACON_API_KEY = import.meta.env
  .VITE_CURRENCY_BEACON_API_KEY;
