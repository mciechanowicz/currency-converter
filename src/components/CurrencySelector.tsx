import { ShortCurrency } from '../types/currenciesTypes';

type CurrencySelectProps = {
  label: string;
  value: string;
  currencies: ShortCurrency[];
  onChange: (value: string) => void;
};

const CurrencySelector = ({
  label,
  value,
  currencies = [],
  onChange,
}: CurrencySelectProps) => {
  return (
    <div>
      <label htmlFor={`currency-${label}`}>{label}</label>
      <select
        id={`currency-${label}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {currencies?.map((currency) => (
          <option key={currency.short_code} value={currency.short_code}>
            {currency.short_code}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
