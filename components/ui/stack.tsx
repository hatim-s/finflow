import { cva } from "class-variance-authority";
import { ComponentProps } from "react";

export type StackProps = ComponentProps<"div"> & {
  direction?: "row" | "column";
};

const stackVariants = cva("flex ", {
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col",
    },
  },
});

export function Stack(props: StackProps) {
  const { direction, className, children, ...rest } = props;
  return (
    <div {...rest} className={stackVariants({ direction, className })}>
      {children}
    </div>
  );
}
