import { useEffect, useState } from "react";

export default function useChartContainerStyles(
  containerRef: React.RefObject<HTMLDivElement>,
) {
  const [chartContainerStyles, setChartContainerStyles] = useState<{
    height: string | number;
    width: string | number;
  }>({
    height: "100%",
    width: "100%",
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.offsetWidth;
    const height = containerRef.current.offsetHeight;

    setChartContainerStyles({
      height: `${height - 16}px`,
      width: `${width}px`,
    });
  }, [containerRef]);

  return { chartContainerStyles };
}
