import { ResponsiveSankey } from "@nivo/sankey";
import { ChartData } from "../utils/convertExpensesToChartData";

type ChartProps = {
  chartData: ChartData;
};

export default function Chart(props: ChartProps) {
  const { chartData } = props;

  return (
    <ResponsiveSankey
      data={chartData}
      motionConfig="gentle"
      align="justify"
      colors={{ scheme: "category10" }}
      nodeOpacity={1}
      nodeTooltip={() => null}
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
      // linkTooltip={() => null}
      labelPosition="inside"
      labelOrientation="horizontal"
      labelPadding={16}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1]],
      }}
    />
  );
}
