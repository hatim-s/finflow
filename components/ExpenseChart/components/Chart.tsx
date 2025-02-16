import { ResponsiveSankey, SankeyLinkDatum } from "@nivo/sankey";
import { Node, Link, ChartData } from "../utils/convertExpensesToChartData";
import { Stack } from "@/components/ui/stack";
import { Typography } from "@/components/ui/typography";
import { Box } from "@/components/ui/box";

type ChartProps = {
  chartData: ChartData;
};

const LinkTooltip = (props: { link: SankeyLinkDatum<Node, Link> }) => {
  const { link } = props;
  return (
    <Box className="relative isolate">
      <Stack
        className="bg-white rounded-[4px] h-6 px-2 py-1 items-center gap-x-1 shadow-md"
        direction="row"
      >
        <Typography className="text-xs font-normal" variant="h4">
          {link.target.title}
        </Typography>
        💰
        <Typography className="text-xs font-semibold" variant="h4">
          {link.value}
        </Typography>
      </Stack>
    </Box>
  );
};

export default function Chart(props: ChartProps) {
  const { chartData } = props;

  return (
    <ResponsiveSankey
      data={chartData}
      colors={{ scheme: "category10" }}
      motionConfig="gentle"
      align="justify"
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
      enableLinkGradient={true}
      linkOpacity={0.5}
      linkHoverOthersOpacity={0.1}
      linkContract={3}
      linkTooltip={LinkTooltip}
      labelPosition="inside"
      labelOrientation="horizontal"
      labelPadding={10}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1]],
      }}
      label={(...args) => args[0].title}
    />
  );
}
