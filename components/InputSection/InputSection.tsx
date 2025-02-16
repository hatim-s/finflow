"use client";
import * as React from "react";
import { useCallback, useState } from "react";
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
import { FooterActions } from "./components/FooterActions";
import { Box } from "../ui/box";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { Typography } from "../ui/typography";
import ChartBottomInfo from "../ExpenseChart/components/BottomInfo";

export enum CardState {
  Income = "income",
  Categories = "categories",
  Expenses = "expenses",
  Chart = "chart",
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

  const [income, setIncome] = useState<number | undefined>();
  const handleIncomeChange = useCallback((_income: number | undefined) => {
    setIncome(typeof _income === "number" ? Number(_income) : undefined);
  }, []);

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

  return cardState === CardState.Chart ? (
    <Card className="size-[90%] flex flex-col z-10">
      <CardHeader className="relative">
        <Button
          className="self-start top-6 left-8 absolute"
          onClick={onBack}
          variant="link"
        >
          <ArrowLeft className="mr-1" />
          Edit your expense breakdown
        </Button>
        <Stack direction="column" className="items-center">
          <Typography variant="h2" className="">
            Finances Sorted! 🎉
          </Typography>
          <Typography variant="p" className="text-gray-500">
            Look at Your Money in Motion
          </Typography>
        </Stack>
      </CardHeader>
      <CardContent className="flex-1">
        <Stack className="size-full items-center" direction="column">
          <ExpenseChart expenses={expenses} income={income ?? 0} />
        </Stack>
      </CardContent>
    </Card>
  ) : (
    <Card className="h-[68%] w-1/2 min-w-[620px] flex flex-col border-none rounded-[30px] z-10">
      <CardHeader className="py-4" />
      <CardContent className="h-full min-h-0 items-center justify-center flex flex-col w-full">
        <Stack direction="column" className="w-full max-h-full">
          {
            <>
              <ViewHeader cardState={cardState} />
              {cardState === CardState.Income ? (
                <Income income={income} onIncomeChange={handleIncomeChange} />
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
            </>
          }
        </Stack>
      </CardContent>
      <CardFooter className="flex justify-between flex-row-reverse gap-x-4">
        <FooterActions
          cardState={cardState}
          income={income}
          selectedCategories={selectedCatogories}
          expenses={expenses}
          onNext={onNext}
          onBack={onBack}
        />
      </CardFooter>
    </Card>
  );
}
