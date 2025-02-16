import { useCallback } from "react";
import html2canvas from "html2canvas";
import { Button } from "@/components/ui/button";
import { CloudDownloadIcon } from "lucide-react";

type DownloadButtonProps = {
  chartRef: React.RefObject<HTMLElement>;
};

export default function DownloadButton(props: DownloadButtonProps) {
  // Download handler
  const handleDownload = useCallback(async () => {
    const chartElement = props.chartRef.current;

    if (!chartElement) return;

    try {
      const canvas = await html2canvas(chartElement, {
        useCORS: true, // For cross-origin images
        scale: 5, // Higher resolution
      });

      // Create a temporary link and trigger download
      const link = document.createElement("a");
      link.download = "chart.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Error exporting chart:", error);
    }
  }, [props.chartRef]);

  return (
    <Button
      className="self-start top-6 right-8 absolute"
      onClick={handleDownload}
    >
      <CloudDownloadIcon className="" />
      Get your FinFlow!
    </Button>
  );
}
