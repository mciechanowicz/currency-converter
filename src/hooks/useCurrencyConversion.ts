import { useCallback, useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import {
  CurrenciesHistoryType,
  Currency,
  ShortCurrency,
} from '../types/currenciesTypes';
import { convertCurrency, getCurrencies } from '../services/currencyService';

export const useCurrencyConversion = () => {
  const [currenciesHistory, setCurrenciesHistory] = useState<
    CurrenciesHistoryType[]
  >([]);
  const [currencies, setCurrencies] = useState<ShortCurrency[]>([]);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const fetchedCurrencies = await getCurrencies();
        const shortCodes = fetchedCurrencies.map((currency: Currency) => ({
          short_code: currency.short_code,
        }));
        setCurrencies(shortCodes);

        if (fetchedCurrencies.length > 1) {
          setFromCurrency(fetchedCurrencies[0].short_code);
          setToCurrency(fetchedCurrencies[1].short_code);
        }
      } catch (e) {
        setError('Failed to get currencies! Try again later!');
        console.error(e);
      }
    };

    fetchCurrencies();
  }, []);

  const convert = useCallback(async () => {
    if (amount <= 0) {
      setError('Amount must be greater than 0');
      return;
    }

    if (fromCurrency && toCurrency && amount) {
      setLoading(true);
      setError(null);
      try {
        const conversionResult = await convertCurrency(
          fromCurrency,
          toCurrency,
          amount
        );
        const { value } = conversionResult;

        setCurrenciesHistory([
          { fromCurrency, toCurrency, amount, result: value },
          ...currenciesHistory,
        ]);
        setResult(value);
      } catch (e) {
        setError('Failed to convert currency. Try again later!');
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
  }, [fromCurrency, toCurrency, amount]);

  const debouncedConvert = useDebouncedCallback(() => {
    convert();
  }, 250);

  useEffect(() => {
    debouncedConvert();
  }, [convert, debouncedConvert]);

  return {
    currenciesHistory,
    currencies,
    fromCurrency,
    toCurrency,
    amount,
    result,
    loading,
    error,
    setAmount,
    setToCurrency,
    setFromCurrency,
  };
};
