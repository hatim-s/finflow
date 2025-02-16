import { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Stack } from "@/components/ui/stack";
import { Typography } from "@/components/ui/typography";
import { ExpenseChart } from "@/components/ExpenseChart";
import { Expenses } from "../hooks/useExpenses";
import DownloadButton from "./DownloadButton";

type ChartCardProps = {
  income: number | undefined;
  expenses: Expenses;

  onBack: () => void;

  chartContainerRef: React.RefObject<HTMLDivElement>;
};

function BackButton({ onBack }: { onBack: () => void }) {
  return (
    <Button
      className="self-start top-6 left-8 absolute"
      onClick={onBack}
      variant="link"
    >
      <ArrowLeft className="mr-1" />
      Edit your expense breakdown
    </Button>
  );
}

function Header() {
  return (
    <Stack direction="column" className="items-center">
      <Typography variant="h2" className="">
        Finances Sorted! 🎉
      </Typography>
      <Typography variant="p" className="text-gray-500">
        Look at Your Money in Motion
      </Typography>
    </Stack>
  );
}

export default function ChartCard(props: ChartCardProps) {
  const { income, expenses, onBack, chartContainerRef } = props;

  return (
    <Card className="size-[90%] flex flex-col z-10">
      <CardHeader className="relative">
        <BackButton onBack={onBack} />
        <Header />
        <DownloadButton chartRef={chartContainerRef} />
      </CardHeader>
      <CardContent className="flex-1">
        <Stack
          className="size-full items-center p-4"
          direction="column"
          ref={chartContainerRef}
        >
          <ExpenseChart
            containerRef={chartContainerRef}
            expenses={expenses}
            income={income ?? 0}
          />
        </Stack>
      </CardContent>
    </Card>
  );
}
