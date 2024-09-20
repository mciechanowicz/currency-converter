type Props = {
  amount: number;
  fromCurrency: string;
  toCurrency: string;
  result: number;
};

const ConvertedValue = ({
  amount,
  fromCurrency,
  toCurrency,
  result,
}: Props) => {
  const showResult = result && fromCurrency && toCurrency && amount > 0;
  return showResult ? (
    <div>
      <p>{`${amount} ${fromCurrency} = ${result?.toFixed(2)} ${toCurrency}`}</p>
    </div>
  ) : null;
};

export default ConvertedValue;
