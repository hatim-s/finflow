import { Header } from "@/components/Header";
import { InputSection } from "@/components/InputSection";
import { Stack } from "@/components/ui/stack";

export default function Home() {
  return (
    <Stack
      direction="column"
      className="h-screen w-screen overflow-hidden bg-blue-100"
    >
      <Header primaryLabel="Finflow" />
      <Stack
        className="h-full items-center justify-center flex-1 min-h-0"
        direction="row"
      >
        <InputSection />
      </Stack>
    </Stack>
  );
}
