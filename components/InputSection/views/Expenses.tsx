import { Input } from "@/components/ui/input";
import { useCallback, useMemo } from "react";
import { ALL_CATEGORIES } from "./Categories";
// import { Stack } from "@/components/ui/stack";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Typography } from "@/components/ui/typography";
import { Stack } from "@/components/ui/stack";
import { Label } from "@/components/ui/label";
import { Box } from "@/components/ui/box";
import { Divider } from "@/components/ui/divider";

function ExpenseItem({
  expense,
  onChangeExpense,
  subcategory,
}: {
  expense: number | undefined;
  onChangeExpense?: (newExpense: number) => void;
  subcategory: string;
}) {
  const handleExpense = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChangeExpense?.(Number(e.target.value));
    },
    [onChangeExpense],
  );

  return (
    <Stack
      direction="column"
      className="items-start gap-y-1 mx-1 w-[250px] self-end"
    >
      <Label className="font-medium text-sm text-wrap">{subcategory}</Label>
      <Input className="mr-1" value={expense} onChange={handleExpense} />
    </Stack>
  );
}

function ExpenseForm({
  category,
  expenses,
  onChangeExpense,
}: {
  category: string;
  expenses: Record<string, number | undefined>;
  onChangeExpense: (subcategory: string, expense: number) => void;
}) {
  const categoryObj = useMemo(
    () => ALL_CATEGORIES.find((cat) => cat.id === category),
    [category],
  );

  if (!categoryObj) return null;

  return (
    <Box>
      <Typography variant="h4" className="mb-2">
        {categoryObj.title}
      </Typography>
      <form>
        <Stack direction="row" className="gap-y-3 gap-x-4 flex-wrap">
          {categoryObj.subcategories.map(({ id: subcategory, title }) => (
            <ExpenseItem
              expense={expenses[subcategory]}
              key={subcategory}
              onChangeExpense={(newExpense) =>
                onChangeExpense(subcategory, newExpense)
              }
              subcategory={title}
            />
          ))}
        </Stack>
      </form>
    </Box>
  );
}

export function Expenses({
  expenses,
  onChangeExpense,
  selectedCategories,
}: {
  expenses: Record<string, Record<string, number | undefined> | undefined>;
  onChangeExpense: (
    category: string,
    subcategory: string,
    expense: number,
  ) => void;
  selectedCategories: string[];
}) {
  return (
    <ScrollArea className="h-full -mx-6 px-6">
      <Stack direction="column" className="gap-y-5">
        {selectedCategories.map((category, index) => (
          <>
            <ExpenseForm
              category={category}
              expenses={expenses[category] ?? {}}
              key={category}
              onChangeExpense={(subcategory, expense) =>
                onChangeExpense(category, subcategory, expense)
              }
            />
            {index !== selectedCategories.length - 1 && <Divider />}
          </>
        ))}
      </Stack>
    </ScrollArea>
  );
}
