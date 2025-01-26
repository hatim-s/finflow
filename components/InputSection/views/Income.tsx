import { Input } from "@/components/ui/input";
import { ChangeEventHandler } from "react";

export default function Income({
  income,
  handleIncomeChange,
}: {
  income: number | undefined;
  handleIncomeChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <Input
      id="income"
      placeholder="Enter your income"
      value={income}
      onChange={handleIncomeChange}
    />
  );
}
