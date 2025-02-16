import { useCallback, useState } from "react";

export enum CardState {
  Income = "income",
  Categories = "categories",
  Expenses = "expenses",
  Chart = "chart",
}

export function useCardState() {
  const [cardState, setCardState] = useState(CardState.Income);

  const onNext = useCallback(() => {
    if (cardState === CardState.Income) {
      setCardState(CardState.Categories);
    }
    if (cardState === CardState.Categories) {
      setCardState(CardState.Expenses);
    }
    if (cardState === CardState.Expenses) {
      setCardState(CardState.Chart);
    }
  }, [cardState]);

  const onBack = useCallback(() => {
    if (cardState === CardState.Categories) {
      setCardState(CardState.Income);
    }
    if (cardState === CardState.Expenses) {
      setCardState(CardState.Categories);
    }
    if (cardState === CardState.Chart) {
      setCardState(CardState.Expenses);
    }
  }, [cardState]);

  return {
    cardState,
    onNext,
    onBack,
  };
}
