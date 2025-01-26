import { Typography } from "@/components/ui/typography";
import { CardState } from "../InputSection";
import { Stack } from "@/components/ui/stack";

export function ViewHeader({ cardState }: { cardState: CardState }) {
  if (cardState === CardState.Income) {
    return (
      <Typography variant="h1" className="text-left mb-6 bold text-blue-800">
        Monthly Income
      </Typography>
    );
  }

  if (cardState === CardState.Categories) {
    return (
      <Stack direction="column" className="mb-6">
        <Typography variant="h2" className="text-left text-blue-800">
          Expense Categories
        </Typography>
        <Typography
          variant="p"
          className="text-sm text-left m-0 leading-0 text-gray-500"
        >
          Select all the categories that apply to you
        </Typography>
      </Stack>
    );
  }

  if (cardState === CardState.Expenses) {
    return (
      <Stack direction="column" className="mb-6">
        <Typography variant="h2" className="text-left text-blue-800">
          Expense Categories
        </Typography>
        <Typography
          variant="p"
          className="text-sm text-left m-0 leading-0 text-gray-500"
        ></Typography>
      </Stack>
    );
  }

  return null;
}
