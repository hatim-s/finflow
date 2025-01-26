import { Button } from "../ui/button";
import { Stack } from "../ui/stack";
import { Typography } from "../ui/typography";

type HeaderAction = {
  label: string;
  onClick: () => void;
};

type HeaderProps = {
  primaryLabel: string;
  secondaryLabel?: string;
  primaryActions?: HeaderAction[];
  secondaryActions?: HeaderAction[];
};

export default function Header(props: HeaderProps) {
  const { primaryLabel, primaryActions, secondaryLabel, secondaryActions } =
    props;
  return (
    <Stack
      className="px-8 justify-between py-3 flex-row-reverse"
      direction="row"
    >
      {secondaryLabel || secondaryActions ? (
        <Stack direction="row">
          <Typography variant="h3" className="">
            {props.secondaryLabel}
          </Typography>
          {secondaryActions?.map((action, index) => {
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
          <Stack direction="row"></Stack>
        </Stack>
      ) : null}
      <Stack direction="row">
        <Typography variant="h3" className="text-primary">
          {primaryLabel}
        </Typography>
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
