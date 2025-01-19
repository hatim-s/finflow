import { ComponentProps } from "react";

export type BoxProps = ComponentProps<"div">;

export function Box(props: BoxProps) {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
}
