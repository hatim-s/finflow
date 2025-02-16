import { Stack } from "@/components/ui/stack";
import { Typography } from "@/components/ui/typography";

export default function Watermark() {
  return (
    <Stack
      direction="row"
      className="absolute bottom-[100px] left-10 gap-x-1 items-center"
    >
      <Typography className="text-gray-600 text-sm" variant="p">
        Made with ❤️ by Finflow
      </Typography>
    </Stack>
  );
}
