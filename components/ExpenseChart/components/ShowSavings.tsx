import { Label } from "@/components/ui/label";
import { Stack } from "@/components/ui/stack";
import { Switch } from "@/components/ui/switch";
import { Dispatch, SetStateAction, useCallback } from "react";

type ShowIncomeProps = {
  show: boolean;
  setShowIncome: Dispatch<SetStateAction<boolean>>;
};

export default function ShowSavings(props: ShowIncomeProps) {
  const { show, setShowIncome } = props;

  const handleCheckedChange = useCallback(
    (checked: boolean) => {
      setShowIncome(checked);
    },
    [setShowIncome],
  );

  return (
    <Stack
      direction="row"
      className="absolute -bottom-3 left-0 gap-x-2 items-center"
    >
      <Switch checked={show} onCheckedChange={handleCheckedChange} />
      <Label className="text-md">Show Savings</Label>
    </Stack>
  );
}
