"use client";
import * as React from "react";
import { useCallback, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Stack } from "../ui/stack";
import Income from "./views/Income";
import Categories from "./views/Categories";
import { Expenses } from "./views/Expenses";
import { ExpenseChart } from "../ExpenseChart";
import { ViewHeader } from "./components/ViewHeader";

export enum CardState {
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
    if (cardState === CardState.Expenses) {
      setScreen("output");
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

  const [screen, setScreen] = useState<"input" | "output">("input");

  return screen === "input" ? (
    <Card className="h-[68%] w-1/2 min-w-[600px] flex flex-col border-none rounded-[30px]">
      <CardHeader />
      <CardContent className="h-full min-h-0 items-center justify-center flex flex-col w-full">
        <Stack direction="column" className="w-full max-h-full">
          <ViewHeader cardState={cardState} />
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
      <CardFooter className="flex justify-between flex-row-reverse">
        <Button className="w-56" onClick={onNext} variant="default">
          Next
        </Button>
        {cardState !== CardState.Income ? (
          <Button className="w-56" onClick={onBack} variant="secondary">
            Back
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  ) : (
    <ExpenseChart expenses={expenses} />
  );
}
