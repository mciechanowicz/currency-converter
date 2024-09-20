import axios from 'axios';

import {
  API_CURRENCY_BEACON_BASE_URL,
  CURRENCY_BEACON_API_KEY,
  API_CURRENCY_BEACON_ENDPOINTS,
} from '../constants';
import { ConversionResult, Currencies } from '../types/currenciesTypes';

const api = axios.create({
  baseURL: API_CURRENCY_BEACON_BASE_URL,
  params: {
    api_key: CURRENCY_BEACON_API_KEY,
  },
});

export const getCurrencies = async (): Promise<Currencies> => {
  const response = await api.get(API_CURRENCY_BEACON_ENDPOINTS.CURRENCIES);
  return response.data.response;
};

export const convertCurrency = async (
  from: string,
  to: string,
  amount: number
): Promise<ConversionResult> => {
  const response = await api.get(API_CURRENCY_BEACON_ENDPOINTS.CONVERT, {
    params: {
      from,
      to,
      amount,
    },
  });
  return response.data.response;
};
