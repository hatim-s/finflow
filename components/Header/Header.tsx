import { Button } from "../ui/button";
import { Stack } from "../ui/stack";
import Logo from "./Logo";

type HeaderAction = {
  label: string;
  onClick: () => void;
};

type HeaderProps = {
  primaryLabel: string;
  primaryActions?: HeaderAction[];
};

export default function Header(props: HeaderProps) {
  const { primaryActions } = props;
  return (
    <Stack
      className="px-8 justify-between py-3 flex-row-reverse"
      direction="row"
    >
      <Stack direction="row">
        <Logo className="text-blue-800 h-10 w-fit" />
        {primaryActions?.map((action, index) => {
          if (index === 0)
            return (
              <Button key={index} onClick={action.onClick} variant="default">
                {action.label}
              </Button>
            );
          return (
            <Button key={index} onClick={action.onClick} variant="secondary">
              {action.label}
            </Button>
          );
        })}
      </Stack>
    </Stack>
  );
}
