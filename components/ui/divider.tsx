import clsx from "clsx";

export function Divider(props: React.HTMLAttributes<HTMLHRElement>) {
  return <hr className={clsx("", props.className)} />;
}
