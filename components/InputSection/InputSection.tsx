"use client";
import * as React from "react";
import { useCallback, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Stack } from "../ui/stack";
import Income from "./views/Income";
import Categories from "./views/Categories";
import { Expenses } from "./views/Expenses";

enum CardState {
  Income = "income",
  Categories = "categories",
  Expenses = "expenses",
}

export default function InputSection() {
  const [cardState, setCardState] = useState(CardState.Income);
  const onNext = useCallback(() => {
    if (cardState === CardState.Income) {
      setCardState(CardState.Categories);
    }
    if (cardState === CardState.Categories) {
      setCardState(CardState.Expenses);
    }
  }, [cardState]);

  const onBack = useCallback(() => {
    if (cardState === CardState.Categories) {
      setCardState(CardState.Income);
    }
    if (cardState === CardState.Expenses) {
      setCardState(CardState.Categories);
    }
  }, [cardState]);

  const [income, setIncome] = useState<number | undefined>();
  const handleIncomeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIncome(Number(e.target.value));
    },
    [],
  );

  const [selectedCatogories, setSelectedCategories] = useState<string[]>([]);
  const onSelectCategory = useCallback(
    (id: string) => {
      if (selectedCatogories.includes(id)) {
        setSelectedCategories(selectedCatogories.filter((cat) => cat !== id));
      } else {
        setSelectedCategories([...selectedCatogories, id]);
      }
    },
    [selectedCatogories],
  );

  const [expenses, setExpenses] = useState<
    Record<string, Record<string, number | undefined> | undefined>
  >({});
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

  return (
    <Card className="h-[68%] w-1/2 flex flex-col">
      <CardHeader>
        <CardTitle>Input Section</CardTitle>
      </CardHeader>
      <CardContent className="h-full min-h-0 items-center justify-center flex flex-col w-full">
        <Stack direction="column" className="space-y-1.5 w-full max-h-full">
          {cardState === CardState.Income ? (
            <Income income={income} handleIncomeChange={handleIncomeChange} />
          ) : null}
          {cardState === CardState.Categories ? (
            <Categories
              selectedCategories={selectedCatogories}
              onSelectCategory={onSelectCategory}
            />
          ) : null}
          {cardState === CardState.Expenses ? (
            <Expenses
              expenses={expenses}
              onChangeExpense={handleExpenseChange}
              selectedCategories={selectedCatogories}
            />
          ) : null}
        </Stack>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          disabled={cardState === CardState.Income}
          onClick={onBack}
          variant="ghost"
        >
          Back
        </Button>
        <Button onClick={onNext} variant="ghost">
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
