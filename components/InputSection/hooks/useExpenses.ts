import { useCallback, useState } from "react";

export type Expense = Record<string, number | undefined>;
export type Expenses = Record<string, Expense | undefined>;

export function useExpenses() {
  const [income, setIncome] = useState<number | undefined>();
  const handleIncomeChange = useCallback((_income: number | undefined) => {
    setIncome(typeof _income === "number" ? Number(_income) : undefined);
  }, []);

  const [expenses, setExpenses] = useState<Expenses>({});
  const handleExpenseChange = useCallback(
    (category: string, subcategory: string, expense: number | undefined) =>
      setExpenses((prev) => ({
        ...prev,
        [category]: {
          ...prev[category],
          [subcategory]: expense,
        },
      })),
    [],
  );

  return {
    income,
    handleIncomeChange,
    expenses,
    handleExpenseChange,
  };
}
