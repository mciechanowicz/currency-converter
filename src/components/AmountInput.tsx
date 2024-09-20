type Props = {
  value: number;
  label: string;
  onChange: (value: number) => void;
};

const AmountInput = ({ value, label, onChange }: Props) => {
  return (
    <div>
      <label htmlFor="amount">{label}</label>
      <input
        id="amount"
        type="number"
        min="0"
        step="0.1"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
    </div>
  );
};

export default AmountInput;
