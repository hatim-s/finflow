import { ResponsiveSankey } from "@nivo/sankey";

function convertExpenseIntoChartData(
  expenses: Record<string, Record<string, number | undefined> | undefined>,
) {
  const nodes = [] as { id: string }[];
  const links = [] as { source: string; target: string; value: number }[];

  nodes.push({ id: "Income" });

  Object.entries(expenses).forEach(([category, categoryObj]) => {
    nodes.push({ id: category });
    links.push({
      source: "Income",
      target: category,
      value:
        Object.values(categoryObj ?? {}).reduce(
          (acc, val) => (acc ?? 0) + (val ?? 0),
          0,
        ) ?? 0,
    });

    if (categoryObj) {
      Object.entries(categoryObj).forEach(([subcategory, expense]) => {
        nodes.push({ id: subcategory });
        links.push({
          source: category,
          target: subcategory,
          value: expense || 0,
        });
      });
    }
  });

  return { nodes, links };
}

export default function ExpenseChart({
  expenses,
}: {
  expenses: Record<string, Record<string, number | undefined> | undefined>;
}) {
  const chartData = convertExpenseIntoChartData(expenses);

  return (
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
  );
}
