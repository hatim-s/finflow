import { Stack } from "@/components/ui/stack";
import { CardState } from "../hooks/useCardState";
import { type Expenses as ExpensesType } from "../hooks/useExpenses";
import Categories from "../views/Categories";
import { Expenses } from "../views/Expenses";
import Income from "../views/Income";
import { ViewHeader } from "./ViewHeader";

type InputCardContentProps = {
  cardState: CardState;
  income: number | undefined;
  handleIncomeChange: (income: number | undefined) => void;
  selectedCategories: string[];
  onSelectCategory: (category: string) => void;
  expenses: ExpensesType;
  handleExpenseChange: (
    category: string,
    subcategory: string,
    expense: number | undefined,
  ) => void;
};

export default function InputCardContent(props: InputCardContentProps) {
  const {
    cardState,
    income,
    handleIncomeChange,
    selectedCategories,
    onSelectCategory,
    expenses,
    handleExpenseChange,
  } = props;

  return (
    <Stack direction="column" className="w-full max-h-full">
      <ViewHeader cardState={cardState} />
      {cardState === CardState.Income ? (
        <Income income={income} onIncomeChange={handleIncomeChange} />
      ) : null}
      {cardState === CardState.Categories ? (
        <Categories
          selectedCategories={selectedCategories}
          onSelectCategory={onSelectCategory}
        />
      ) : null}
      {cardState === CardState.Expenses ? (
        <Expenses
          expenses={expenses}
          onChangeExpense={handleExpenseChange}
          selectedCategories={selectedCategories}
        />
      ) : null}
    </Stack>
  );
}
