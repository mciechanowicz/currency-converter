import { VITE_CURRENCIES_HISTORY_LENGTH } from '../constants';
import { CurrenciesHistoryType } from '../types/currenciesTypes';

type Props = {
  currenciesHistory: CurrenciesHistoryType[];
};

const CurrenciesHistory = ({ currenciesHistory = [] }: Props) => {
  return (
    <ul>
      {currenciesHistory
        .slice(0, VITE_CURRENCIES_HISTORY_LENGTH)
        .map((currency) => (
          <li
            key={
              currency.amount +
              currency.fromCurrency +
              currency.result +
              new Date().toISOString()
            }
          >{`${currency.amount} ${
            currency.fromCurrency
          } = ${currency.result.toFixed(2)} ${currency.toCurrency}`}</li>
        ))}
    </ul>
  );
};

export default CurrenciesHistory;
