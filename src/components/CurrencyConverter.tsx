import { useCurrencyConversion } from '../hooks/useCurrencyConversion';
import CurrencySelector from './CurrencySelector';
import AmountInput from './AmountInput';
import Loading from './Loading';
import Error from './Error';
import ConvertedValue from './ConvertedValue';
import CurrenciesHistory from './CurrenciesHistory';

const CurrencyConverter = () => {
  const {
    currenciesHistory,
    currencies,
    fromCurrency,
    toCurrency,
    amount,
    result,
    loading,
    error,
    setFromCurrency,
    setAmount,
    setToCurrency,
  } = useCurrencyConversion();

  return (
    <div>
      <h1>Currency Converter</h1>
      <CurrencySelector
        label="From"
        value={fromCurrency}
        onChange={setFromCurrency}
        currencies={currencies}
      />
      <CurrencySelector
        label="To"
        value={toCurrency}
        onChange={setToCurrency}
        currencies={currencies}
      />
      <AmountInput label="Amount" value={amount} onChange={setAmount} />
      {loading ? (
        <Loading />
      ) : (
        <ConvertedValue
          result={result}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          amount={amount}
        />
      )}
      {error && <Error errorMessage={error} />}
      <p>History:</p>
      <CurrenciesHistory currenciesHistory={currenciesHistory} />
    </div>
  );
};

export default CurrencyConverter;
