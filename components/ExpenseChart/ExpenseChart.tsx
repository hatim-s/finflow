"use client";

import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Box } from "../ui/box";
import ChartBottomInfo from "./components/BottomInfo";
import convertExpensesToChartData from "./utils/convertExpensesToChartData";
import useChartContainerStyles from "./hooks/useChartContainerStyles";
import Chart from "./components/Chart";
import ShowSavings from "./components/ShowSavings";

export default function ExpenseChart({
  income,
  expenses,
  containerRef,
  chartRef,
}: {
  income: number;
  expenses: Record<string, Record<string, number | undefined> | undefined>;
  containerRef: React.RefObject<HTMLDivElement>;
  chartRef: React.RefObject<HTMLDivElement>;
}) {
  const [showIncome, setShowIncome] = useState(false);
  const chartData = convertExpensesToChartData(expenses, income, showIncome);
  const { chartContainerStyles } = useChartContainerStyles(containerRef);

  return (
    <Box className="relative size-full">
      <TransformWrapper
        initialScale={1}
        minScale={0.75}
        maxScale={100}
        smooth
        wheel={{
          step: 10,
          smoothStep: 0.01,
          // activationKeys: getScrollActivationKeys(),
          /**
           * Disable the wheel scroll since we want to pan on scroll
           */
          wheelDisabled: true,
          touchPadDisabled: false,
        }}
        panning={{
          /**
           * We want to pan on scroll
           */
          wheelPanning: true,
          allowLeftClickPan: true,
          velocityDisabled: false,
        }}
        pinch={{
          /**
           * Pinch on the canvas to zoom in and out, no keys necessary
           */
          step: 10,
        }}
        doubleClick={{ disabled: true }} // Disable double-click zoom
        centerZoomedOut={false}
      >
        <TransformComponent>
          <Box className="p-8 pt-4" ref={chartRef} style={chartContainerStyles}>
            <Chart chartData={chartData} />
          </Box>
        </TransformComponent>
      </TransformWrapper>
      <ShowSavings show={showIncome} setShowIncome={setShowIncome} />
      <ChartBottomInfo />
    </Box>
  );
}
