"use client";

import React, { useEffect, useState } from "react";
import { ResponsiveSankey } from "@nivo/sankey";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Box } from "../ui/box";
import ChartBottomInfo from "./components/BottomInfo";
// import { getScrollActivationKeys } from "./utils/getScrollActivationKeys";

function convertExpenseIntoChartData(
  expenses: Record<string, Record<string, number | undefined> | undefined>,
  income: number,
) {
  const nodes = [] as { id: string }[];
  const links = [] as { source: string; target: string; value: number }[];

  nodes.push({ id: "Income" });

  let totalExpenses = 0;

  Object.entries(expenses).forEach(([category, categoryObj]) => {
    nodes.push({ id: category });

    const subcategoryTotal =
      Object.values(categoryObj ?? {}).reduce(
        (acc, val) => (acc ?? 0) + (val ?? 0),
        0,
      ) ?? 0;

    if (!subcategoryTotal) return;

    totalExpenses += subcategoryTotal;

    links.push({
      source: "Income",
      target: category,
      value: subcategoryTotal,
    });

    if (categoryObj) {
      Object.entries(categoryObj).forEach(([subcategory, expense]) => {
        if (!expense) return;

        nodes.push({ id: subcategory });
        links.push({
          source: category,
          target: subcategory,
          value: expense || 0,
        });
      });
    }
  });

  // nodes.push({ id: "Savings" });
  // links.push({
  //   source: "Income",
  //   target: "Savings",
  //   value: income - totalExpenses,
  // });

  return { nodes, links };
}

export default function ExpenseChart({
  income,
  expenses,
  containerRef,
}: {
  income: number;
  expenses: Record<string, Record<string, number | undefined> | undefined>;
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const chartData = convertExpenseIntoChartData(expenses, income);

  const [chartContainerStyles, setChartContainerStyles] = useState<{
    height: string | number;
    width: string | number;
  }>({
    height: "100%",
    width: "100%",
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const { height, width } = containerRef.current.getBoundingClientRect();

    console.log("🚀 ~ height, width", { height, width });

    setChartContainerStyles({
      height: `${height - 16}px`,
      width: `${width}px`,
    });
  }, [containerRef]);

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
        {() => (
          <TransformComponent>
            <Box style={chartContainerStyles}>
              <ResponsiveSankey
                data={chartData}
                motionConfig="gentle"
                align="justify"
                colors={{ scheme: "category10" }}
                nodeOpacity={1}
                nodeHoverOthersOpacity={0.35}
                nodeThickness={18}
                nodeSpacing={18}
                nodeBorderWidth={0}
                nodeBorderColor={{
                  from: "color",
                  modifiers: [["darker", 0.8]],
                }}
                nodeBorderRadius={3}
                linkOpacity={0.5}
                linkHoverOthersOpacity={0.1}
                linkContract={3}
                enableLinkGradient={true}
                labelPosition="outside"
                labelOrientation="vertical"
                labelPadding={16}
                labelTextColor={{
                  from: "color",
                  modifiers: [["darker", 1]],
                }}
                legends={[
                  {
                    anchor: "bottom-right",
                    direction: "column",
                    translateX: 130,
                    itemWidth: 100,
                    itemHeight: 14,
                    itemDirection: "right-to-left",
                    itemsSpacing: 2,
                    itemTextColor: "#999",
                    symbolSize: 14,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemTextColor: "#000",
                        },
                      },
                    ],
                  },
                ]}
              />
            </Box>
          </TransformComponent>
        )}
      </TransformWrapper>
      <ChartBottomInfo />
    </Box>
  );
}
