"use client";

import { useRef } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { FooterActions } from "./components/FooterActions";
import { CardState, useCardState } from "./hooks/useCardState";
import { useExpenses } from "./hooks/useExpenses";
import { useSelectedCategories } from "./hooks/useSelectedCategories";
import ChartCard from "./components/ChartCard";
import InputCardContent from "./components/InputCardContent";

export default function InputSection() {
  const { cardState, onBack, onNext } = useCardState();

  const { income, expenses, handleIncomeChange, handleExpenseChange } =
    useExpenses();

  const { selectedCategories, onSelectCategory } = useSelectedCategories();

  const chartContainerRef = useRef<HTMLDivElement>(null);

  if (cardState === CardState.Chart) {
    return (
      <ChartCard
        chartContainerRef={chartContainerRef}
        expenses={expenses}
        income={income}
        onBack={onBack}
      />
    );
  }

  return (
    <Card className="h-[68%] w-1/2 min-w-[620px] flex flex-col border-none rounded-[30px] z-10">
      <CardHeader className="py-4" />
      <CardContent className="h-full min-h-0 items-center justify-center flex flex-col w-full">
        <InputCardContent
          cardState={cardState}
          income={income}
          expenses={expenses}
          handleIncomeChange={handleIncomeChange}
          handleExpenseChange={handleExpenseChange}
          selectedCategories={selectedCategories}
          onSelectCategory={onSelectCategory}
        />
      </CardContent>
      <CardFooter className="flex justify-between flex-row-reverse gap-x-4">
        <FooterActions
          cardState={cardState}
          income={income}
          selectedCategories={selectedCategories}
          expenses={expenses}
          onNext={onNext}
          onBack={onBack}
        />
      </CardFooter>
    </Card>
  );
}
