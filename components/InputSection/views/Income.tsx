import NumberInput from "@/components/shared/NumberInput";

export default function Income({
  income,
  onIncomeChange,
}: {
  income: number | undefined;
  onIncomeChange: (value: number | undefined) => void;
}) {
  return (
    <NumberInput
      initialValue={income}
      placeholder="Enter your income"
      value={income}
      onChangeValue={onIncomeChange}
    />
  );
}
