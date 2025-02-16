import { Stack } from "@/components/ui/stack";
import { Typography } from "@/components/ui/typography";
import { ZoomInIcon } from "lucide-react";

export default function ChartBottomInfo() {
  return (
    <Stack
      direction="row"
      className="absolute -bottom-2 right-0 gap-x-1 items-center"
    >
      <ZoomInIcon className="text-xs size-3 text-gray-600" />
      <Typography className="text-gray-600 text-xs" variant="p">
        Pinch to zoom, Scroll to pan
      </Typography>
    </Stack>
  );
}
