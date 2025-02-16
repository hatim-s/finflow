import { Header } from "@/components/Header";
import { InputSection } from "@/components/InputSection";
import { Stack } from "@/components/ui/stack";
import WaveBottom from "@/components/shared/WaveBottom";

export default function Home() {
  return (
    <Stack
      direction="column"
      className="h-screen w-screen overflow-hidden bg-blue-50"
    >
      <Header />
      <Stack
        className="h-full items-center justify-center flex-1 min-h-0"
        direction="column"
      >
        <InputSection />
        <WaveBottom className="absolute bottom-0 left-0 right-0" />
      </Stack>
    </Stack>
  );
}
