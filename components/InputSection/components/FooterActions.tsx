import { Button } from "@/components/ui/button";
import { CardState } from "../InputSection";
import { Typography } from "@/components/ui/typography";
import { useMemo } from "react";

type FooterActionsProps = {
  onNext: () => void;
  onBack: () => void;
  cardState: CardState;
  income: number | undefined;
  selectedCategories: string[];
  expenses: Record<string, Record<string, number | undefined> | undefined>;
};

function isExpensesEmptyFn(
  expenses: Record<string, Record<string, number | undefined> | undefined>,
) {
  if (!expenses) return true;

  // empty object
  if (Object.keys(expenses).length === 0) return true;

  let isEmpty = true;
  Object.values(expenses).forEach((expenseObj) => {
    if (expenseObj && Object.keys(expenseObj).length) {
      isEmpty = !Object.values(expenseObj).some((val) => val !== undefined);
    }
  });

  return isEmpty;
}

export function FooterActions(props: FooterActionsProps) {
  const { cardState, income, selectedCategories, expenses, onNext, onBack } =
    props;

  const isExpensesEmpty = useMemo(
    () => isExpensesEmptyFn(expenses),
    [expenses],
  );

  if (cardState === CardState.Income) {
    return (
      <>
        <Button
          className="flex-grow"
          disabled={!income}
          onClick={onNext}
          variant="default"
          size="lg"
        >
          <Typography
            variant="p"
            className="text-center text-md text-semibold "
          >
            {income ? "Pick Your Categories" : "Show Me the Money!"}
          </Typography>
        </Button>
        <Button
          className="flex-grow invisible"
          disabled={!income}
          onClick={onNext}
          variant="default"
          size="lg"
        >
          <Typography
            variant="p"
            className="text-center text-md text-semibold "
          >
            {income ? "Pick Your Categories" : "Show Me the Money!"}
          </Typography>
        </Button>
      </>
    );
  }

  if (cardState === CardState.Categories) {
    return (
      <>
        <Button
          className="flex-grow"
          disabled={!selectedCategories.length}
          onClick={onNext}
          variant="default"
          size="lg"
        >
          <Typography
            variant="p"
            className="text-center text-md text-semibold "
          >
            {selectedCategories.length
              ? "Break It Down"
              : "Pick One, Atleast One"}
          </Typography>
        </Button>
        <Button
          className="flex-grow"
          onClick={onBack}
          variant="secondary"
          size="lg"
        >
          <Typography
            variant="p"
            className="text-center text-md text-semibold "
          >
            Edit Income
          </Typography>
        </Button>
      </>
    );
  }

  if (cardState === CardState.Expenses)
    return (
      <>
        <Button
          className="flex-grow"
          disabled={isExpensesEmpty}
          onClick={onNext}
          variant="default"
          size="lg"
        >
          <Typography
            variant="p"
            className="text-center text-md text-semibold "
          >
            Hang Tight, Almost Done!
          </Typography>
        </Button>
        <Button
          className="flex-grow"
          onClick={onBack}
          variant="secondary"
          size="lg"
        >
          <Typography
            variant="p"
            className="text-center text-md text-semibold "
          >
            Edit category-wise expenses
          </Typography>
        </Button>
      </>
    );

  return (
    <>
      <Button
        className="flex-grow invisible"
        disabled={!income}
        onClick={onNext}
        variant="default"
        size="lg"
      >
        <Typography variant="p" className="text-center text-md text-semibold ">
          {income ? "Pick Your Categories" : "Show Me the Money!"}
        </Typography>
      </Button>
      <Button
        className="flex-grow"
        onClick={onBack}
        variant="default"
        size="lg"
      >
        <Typography variant="p" className="text-center text-md text-semibold ">
          Edit Category-wise expenses
        </Typography>
      </Button>
    </>
  );
}
