import React, {
  ChangeEventHandler,
  ComponentProps,
  useCallback,
  useState,
} from "react";
import { Input } from "../ui/input";
import clsx from "clsx";

function formatNumber(num: string | undefined) {
  if (!num) return "";

  const cleanNum = num.replace(/[^\d.]/g, "");
  const [integerPart, decimalPart] = cleanNum.split(".");

  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
}

type NumberInputProps = ComponentProps<typeof Input> & {
  initialValue: number | undefined;
  onChangeValue: (value: number | undefined) => void;
};

function NumberInput(props: NumberInputProps) {
  const { initialValue, onChangeValue, ...restProps } = props;

  const [value, setValue] = useState(() =>
    initialValue ? formatNumber(String(initialValue)) : "",
  );

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      const inputValue = e.target.value;

      if (!inputValue) {
        setValue("");
        onChangeValue(undefined);
        return;
      }

      const formattedValue = formatNumber(inputValue);
      setValue(formattedValue);
      onChangeValue(Number(formattedValue.replace(/,/g, "")));
    },
    [onChangeValue],
  );

  return (
    <Input
      {...restProps}
      className={clsx("text-start", props.className)}
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
}

export default NumberInput;
